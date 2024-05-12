class ApiError extends Error {
  statusCode: number;
  data: null;
  message: string;
  success: boolean;
  error: any[];

  constructor(
    statusCode: number,
    message = "Something went wrong",
    errors: any[] = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.error = errors;

    if(stack) {
      this.stack = stack;
    }else {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}

export { ApiError }