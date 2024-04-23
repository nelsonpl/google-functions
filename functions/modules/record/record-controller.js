const {onRequest} = require("firebase-functions/v2/https")
const {onDocumentCreated} = require("firebase-functions/v2/firestore")
const recordValidators = require("./record-validators")
const {getFirestore} = require("firebase-admin/firestore")

module.exports = function() {
  const recordService = require("./record-service")(getFirestore())

  return {
    post: onRequest(async ({body}, res) => {
      const validationError = recordValidators.post(body)

      if (validationError) {
        res.status(400).json(validationError)
        return
      }

      const recordAdded = await recordService.add(body)
      res.json({data: recordAdded, message: "Record created"})
    }),

    onCreated: onDocumentCreated("records/{recordId}", async (event) => {
      await recordService.onCreated(event)
    }),
  }
}
