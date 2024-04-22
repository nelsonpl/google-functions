const {initializeApp} = require("firebase-admin/app")
const recordController = require("./modules/record/record-controller")

initializeApp()

exports.recordPost = recordController.post

exports.onRecordCreated = recordController.onCreated
