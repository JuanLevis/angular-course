export const baseUrl: string =
  'https://ruso-angular-course-default-rtdb.firebaseio.com';

export const authUrl: string = 'https://identitytoolkit.googleapis.com/v1';

export enum authErrorCodes {
  emailExists = 'EMAIL_EXISTS',
  emailNotFound = 'EMAIL_NOT_FOUND',
  invalidPassword = 'INVALID_PASSWORD',
  userDisabled = 'USER_DISABLED',
  operationNotAllowed = 'OPERATION_NOT_ALLOWED',
  tooManyAttempts = 'TOO_MANY_ATTEMPTS_TRY_LATER',
}
