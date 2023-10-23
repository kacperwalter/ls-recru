import parseStringToSlug from "../parseStringToSlug"

describe("parseStringToSlug", () => {
  it('should convert a string to a slug', () => {
    const input = 'Anakin Skywalker'
    const expectedOutput = 'anakin-skywalker'
    const output = parseStringToSlug(input)
    expect(output).toEqual(expectedOutput)
  })
})