const MockFirebase = require("mock-cloud-firestore")

const fixtureData = {
  incrementId: {
    testCollection: {value: 0},
  },
}

const firebase = new MockFirebase(fixtureData)

const utils = require("../../modules/utils")(firebase.firestore())

describe("#incrementIdGenerator", () => {
  it("increments and returns the id generator value", async () => {
    const result = await utils.incrementIdGenerator("testCollection")
    expect(result).toBe(1)
  })
})
