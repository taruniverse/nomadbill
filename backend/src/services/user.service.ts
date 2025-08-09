import prisma from "../config/db";

type CreateUserInput = {
  email: string;
  name: string;
  mobile: string;
  password: string;
};

type CheckExistUserInput = {
  email: string;
  mobile?: string;
  password?: string;
};

type UserUpdateInput = {
  email: string;
  name: string;
  mobile: string;
  password: string;
  country: string;
  currency: string;
  language: string;
};

export const createUser = async (input: CreateUserInput) => {
  const data = await prisma.user.create({
    data: {
      name: input.name,
      email: input.email,
      mobile: input.mobile,
      password: input.password,
    },
  });
  return data;
};

export const existingUser = async (input: CheckExistUserInput) => {
  const existingUser = await prisma.user.findFirst({
    where: {
      OR: [{ email: input.email }, { mobile: input.mobile }],
    },
  });
  return existingUser;
};

export const updateCurrentUser = async (
  userId: string,
  updates: Partial<UserUpdateInput>
) => {
  const updateUser = await prisma.user.update({
    where: { id: userId },
    data: updates,
  });

  return updateUser;
};
