import Bluebird from 'bluebird'
const Promises = () => {
  const of = Bluebird.resolve
  return {
    ...Bluebird,
    Promise: Bluebird, // for if you _really_ need the actual constructor
    of,
  }
}
export default Promises()
