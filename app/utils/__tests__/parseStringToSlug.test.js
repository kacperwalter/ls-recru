const parseStringToSlug = require('../parseStringToSlug')

describe("parseStringToSlug", () => {
  const expectedOutput = 'anakin-skywalker'

  it('should convert a string to a slug', () => {
    const input = 'Anakin Skywalker'
    const output = parseStringToSlug(input)
    expect(output).toEqual(expectedOutput)
  })

  it('should handle special characters', () => {
    const input = 'Anakin, Skywalker'
    const output = parseStringToSlug(input)
    expect(output).toEqual(expectedOutput)
  })
})