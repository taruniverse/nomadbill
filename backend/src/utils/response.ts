type SuccessResponse<T> = {
  status: "success";
  message: string;
  data: T;
};

type ErrorResponse = {
  status: "error";
  message: string;
  error?: any;
};

export const sendSuccess = <T>(
  message: string,
  data: T
): SuccessResponse<T> => ({
  status: "success",
  message,
  data,
});

export const sendError = (message: string, error?: any): ErrorResponse => ({
  status: "error",
  message,
  error,
});
