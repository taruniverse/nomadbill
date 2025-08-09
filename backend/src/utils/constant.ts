export const emailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
export const mobileValidation = /^\+[1-9]{1}[0-9]{3,14}$/;

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NOT_MODIFIED: 304,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_ERROR: 500,
};

export const MESSAGES = {
  USER_CREATED: "User registered successfully",
  USER_NOT_FOUND: "User not found",
  SERVER_ERROR: "Something went wrong. Please try again later.",
};
