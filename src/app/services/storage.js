import Basil from 'basil.js'
const Storage = () => {
  const config = {
    namespace: 'or',
    storages: ['session', 'local', 'cookie'],
  }
  return new Basil(config)
}
export default Storage()
