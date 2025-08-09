import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import Joi, { string } from "joi";
import {
  createUser,
  existingUser,
  updateCurrentUser,
} from "../services/user.service";
import { sendError, sendSuccess } from "../utils/response";
import { HTTP_STATUS, mobileValidation } from "../utils/constant";
import { comparePassword, hashPassword } from "../utils/hash";

const JWT_SECRET = process.env.JWT_SECRET_KEY || "";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { email, name, mobile, password } = req.body;

    const validateSchema = Joi.object({
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
      mobile: Joi.string().pattern(mobileValidation).required(),
    });

    if (await validateSchema.validateAsync({ email, mobile })) {
      const isUserExist = await existingUser({ email, mobile });

      if (isUserExist) {
        return res
          .status(HTTP_STATUS.OK)
          .json(sendError("User Already Exist", ""));
      }

      const hashedPassword = await hashPassword(password);
      const user = await createUser({
        email,
        name,
        mobile,
        password: hashedPassword,
      });

      return res
        .status(HTTP_STATUS.CREATED)
        .json(sendSuccess("User registered successfully", user));
    }
  } catch (err) {
    return res
      .status(HTTP_STATUS.INTERNAL_ERROR)
      .json(sendError("Registration failed", err));
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const isUserExist = await existingUser({ email });

    const checkPassword = await comparePassword(
      password,
      isUserExist?.password || ""
    );

    if (isUserExist && checkPassword) {
      const signedUser = jwt.sign(isUserExist, JWT_SECRET, {
        expiresIn: 1,
      });

      return res
        .status(HTTP_STATUS.OK)
        .json(sendSuccess("User registered successfully", signedUser));
    } else {
      return res
        .status(HTTP_STATUS.OK)
        .json(sendError("Pleaes check your password!", ""));
    }
  } catch (err) {
    return res
      .status(HTTP_STATUS.INTERNAL_ERROR)
      .json(sendError("Login failed", err));
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const { email, name, mobile, country, currency, language } = req.body;
    const validateInput = Joi.object({
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
      mobile: Joi.string().pattern(mobileValidation).required(),
      name: Joi.string().required(),
      country: Joi.string(),
      currency: Joi.string(),
      language: Joi.string(),
    });

    if (await validateInput.validateAsync({ email, mobile })) {
      const updated = await updateCurrentUser(userId, {
        email,
        name,
        mobile,
        country,
        currency,
        language,
      });

      return res
        .status(HTTP_STATUS.OK)
        .json(sendSuccess("User registered successfully", updated));
    }
  } catch (err) {
    return res
      .status(HTTP_STATUS.INTERNAL_ERROR)
      .json(sendError("Registration failed", err));
  }
};
