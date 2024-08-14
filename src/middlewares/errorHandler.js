
import { HttpError } from 'http-errors';

const errorHandler = (err, _, res) => {
  if (err instanceof HttpError)
    return res.status(err.status).json({
      status: err.status,
      message: err.message,
      data: err,
    });

  res.status(500).json({
    status: 500,
    message: 'Something went wrong',
    data: err,
  });
};

export default errorHandler;
