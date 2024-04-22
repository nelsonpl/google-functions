const MockFirebase = require("mock-cloud-firestore")

const fixtureData = {
  testCollection: {
    incrementId: {value: 1},
  },
}

const firebase = new MockFirebase(fixtureData)

const utils = require("../../modules/utils")(firebase.firestore())

describe("#incrementIdGenerator", () => {
  it("increments and returns the id generator value", async () => {
    const collectionRefMock = firebase.firestore().collection("testCollection")
    const docRefMock = collectionRefMock.doc("incrementId")
    docRefMock.set({value: 1})

    const result =
        await utils.incrementIdGenerator("testCollection")

    expect(result).toBe(1)
  })
})
