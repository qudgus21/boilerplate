export const commonError = {
  badRequest: {
    statusCode: 400,
    message: "Bad Request",
  },
  unexpectedField: {
    statusCode: 400,
    message: "Unexpected field",
  },
  invalidQuery: {
    statusCode: 400,
    message: "Invalid query parameters",
  },
  invalidPathParams: {
    statusCode: 400,
    message: "Invalid path parameters",
  },
  unauthorized: {
    statusCode: 401,
    message: "Unauthorized",
  },
  forbidden: {
    statusCode: 403,
    message: "Forbidden",
  },
  notFound: {
    statusCode: 404,
    message: "Not Found",
  },
  conflict: {
    statusCode: 409,
    message: "already exist",
  },
  tooLarge: {
    statusCode: 413,
    message: "Payload too large",
  },
  invalidState: {
    statusCode: 422,
    message: "Invalid state",
  },
  wrong: {
    statusCode: 500,
    message: "Something went very wrong!!!",
  },
};

export const unable = (message: string) => {
  return {
    statusCode: 500,
    message: `unable to ${message}`,
  };
};
