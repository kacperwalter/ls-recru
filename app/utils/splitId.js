const splitId = (url) => {
  // splits ID from URL
  const parts = url.split('/')
  const id = parts[parts.length - 2]
  return id
}

export default splitId