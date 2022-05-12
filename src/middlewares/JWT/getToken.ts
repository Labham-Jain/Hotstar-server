import jwt from 'jsonwebtoken';

const getToken = (payload: UserTokenPayload) => {
  const secret = process.env.JWT_SECRET || '';
  return jwt.sign(payload, secret)
}


export default getToken