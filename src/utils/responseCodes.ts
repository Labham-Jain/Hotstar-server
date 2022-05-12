interface ResponseCodesType {
  [x: string]: {
    status: number,
    message: string,
  } | ResponseCodesType
}

const ResponseCodes: ResponseCodesType = {
  admin: {
    'access-denied': {
      status: 403,
      message: `You are not an admin!`
    }
  },
  auth: {
    'no-token': {
      status: 403,
      message: `No authorization token was found!`
    }
  },
  media: {
    'playback-not-found': {
      status: 404,
      message: `Unable to find media source.`
    }
  },
  payload: {
    'insufficient-payload': {
      status: 422,
      message: `Insufficient payload was provided!`
    }
  },
  ok: {
    'success': {
      status: 200,
      message: `Success!`
    }
  },
  error: {
    'internal-error': {
      status: 500,
      message: `Internal server error occurred!`
    },
    'not-found': {
      status: 404,
      message: ``
    }
  }
}
export default ResponseCodes