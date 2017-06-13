import QS from 'query-string'
import R from 'ramda'
const QueryParams = () => {
  const asParams = (paramsObj) => {
    if (R.isEmpty(paramsObj)) {
      return ''
    }
    return `?${QS.stringify(paramsObj)}`
  }
  return {
    asParams,
  }
}
export default QueryParams()
