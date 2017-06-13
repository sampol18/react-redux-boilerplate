import Storage from './storage'
// For managing user sessions in sessionstorage;
// does NOT handle redux state for currentReader
const Auth = () => {
  const TOKEN_FIELD = 'authToken'
  const setToken = (token) => {
    return Storage.set(TOKEN_FIELD, token)
  }
  const token = () => {
    return Storage.get(TOKEN_FIELD)
  }
  const deleteToken = () => {
    Storage.remove(TOKEN_FIELD)
  }
  const currentUserExists = () => !!token()
  return {
    currentUserExists,
    token,
    setToken,
    deleteToken,
  }
}
export default Auth()
