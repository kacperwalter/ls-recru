const splitId = (url: string): string => {
  const parts = url.split('/')
  const id = parts[parts.length - (parts[parts.length - 1] === '' ? 2 : 1)]
  return id
}

module.exports = splitId
export default splitId