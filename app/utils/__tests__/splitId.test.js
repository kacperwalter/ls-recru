const splitId = require('../splitId')

describe('splitId', () => {
  it('should extract the ID from a URL', () => {
    const input = 'https://swapi.dev/api/people/1/'
    const expectedOutput = '1'
    const output = splitId(input)
    expect(output).toEqual(expectedOutput)
  })

  it('should handle URLs without trailing slashes', () => {
    const input = 'https://swapi.dev/api/people/3'
    const expectedOutput = '3'
    const output = splitId(input)
    expect(output).toEqual(expectedOutput)
  })
})