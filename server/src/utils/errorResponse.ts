interface ErrorResponseProps {
  statusCode: number;
  message: string;
}

class ErrorResponse extends Error {
  statusCode: number;

  message: string;

  constructor({ message, statusCode }: ErrorResponseProps) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default ErrorResponse;
