const {onRequest} = require("firebase-functions/v2/https")
const {onDocumentCreated} = require("firebase-functions/v2/firestore")
const recordService = require("./record-service")

const incrementIdGenerator = require("../../utils/increment-id-generator")

exports.post = onRequest(async (req, res) => {
  const {name} = req.body

  if (!name || !name.trim()) {
    res.status(400).json({message: "Name is required"})
    return
  }

  const recordAdded = await recordService.add({name})

  res.json({data: recordAdded, message: "Record created"})
})

exports.onCreated =
  onDocumentCreated("records/{recordId}", async (event) => {
    const incrementId = await incrementIdGenerator("records")
    return event.data.ref.set({incrementId}, {merge: true})
  })
