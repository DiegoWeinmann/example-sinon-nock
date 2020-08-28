import { RequestHandler } from 'express';
import axios from 'axios';

const getUser: RequestHandler = async (req, res, next) => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users/1'
    );
    return res.status(200).json({
      success: true,
      data: response.data,
    });
  } catch (err) {
    next(err);
  }
};

export { getUser };
