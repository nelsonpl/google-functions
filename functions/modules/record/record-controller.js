const {onRequest} = require("firebase-functions/v2/https")
const {onDocumentCreated} = require("firebase-functions/v2/firestore")
const recordValidators = require("./record-validators")

module.exports = function(firestore) {
  const recordService = require("./record-service")(firestore)

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

    onCreated: onDocumentCreated(async (event) => {
      await recordService.onCreated(event)
    }),
  }
}
