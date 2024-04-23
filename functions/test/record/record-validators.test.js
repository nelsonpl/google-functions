const recordValidators = require("../../modules/record/record-validators")

describe("#validateRecord", () => {
  it("returns true for a valid record", () => {
    const record = {name: "test"}
    const data = recordValidators.post(record)

    expect(data).toBe(null)
  })

  it("returns false for a record without a name", () => {
    const record = {}
    const data = recordValidators.post(record)

    expect(data).toStrictEqual({message: "Name is required"})
  })
},
)
