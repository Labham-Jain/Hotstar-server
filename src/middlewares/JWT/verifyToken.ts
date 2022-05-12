import jwt from 'jsonwebtoken'
const verifyToken = (token: string) => {
  const secret = process.env.JWT_SECRET || '';
  const validToken = jwt.verify(token, secret)
  if(validToken) {
    const decodedData = jwt.decode(token)
    return decodedData ? decodedData as UserTokenPayload : undefined
  }
}

export default verifyToken