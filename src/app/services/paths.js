/*
  How this works:
  * apiUrl() = /api/landing/
  * apiUrl('genres') = /api/landing/genres
  * apiUrl('genres', { landing: true })) = /api/landing/genres?landing=true
  * apiUrl(null/undefined, { landing: true })) = /api/landing?landing=true
*/
import QueryParams from './queryParams'
import Env from '../constants/env'
const { asParams } = QueryParams

const Paths = () => {
  const apiUrl = (path, query) => {
    const apiUrl = `${Env.API_URL}/api`
    const fullPath = `${apiUrl}/${path}`
    // NOTE: API endpoints require an explicit '/' before query params
    return query ? `${fullPath}/${asParams(query)}` : `${fullPath}/`
  }
  return {
    apiUrl,
  }
}
export default Paths()
