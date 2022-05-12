import ResponseCodes from "./responseCodes";

const parseResponseCode = (code: string) => {
  const splittedCode = code.split('.');
  let response = null;

  const traverse = (obj: any, index: number = 0): any => {
    const val = obj[splittedCode[index]]
    if(index === splittedCode.length - 1){
      response = val
    } else {
      traverse(val, index + 1)
    }
  }

  traverse(ResponseCodes)
  return response as {status: number, message: string} | null
}

export default parseResponseCode