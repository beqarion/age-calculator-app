export default (query) => {
  const el = document.querySelector(query)
  if (!el) {
    throw new Error(`Cannot get element with query string: ${query}`)
  }
  return el
}
