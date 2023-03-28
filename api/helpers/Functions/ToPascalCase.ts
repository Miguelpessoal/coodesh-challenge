export function toPascalCase(string) {
  return (' ' + string).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (char) => {
    return char.toUpperCase()
  })
}
