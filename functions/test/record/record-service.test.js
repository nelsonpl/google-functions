const MockFirebase = require("mock-cloud-firestore")

const fixtureData = {

}

const firebase = new MockFirebase(fixtureData)

const recordService =
    require("../../modules/record/record-service")(firebase.firestore())

describe("#add", () => {
  it("adds a record", async () => {
    const recordAdded = await recordService.add({name: "test"})

    expect(recordAdded.name).toBe("test")
  })
})
