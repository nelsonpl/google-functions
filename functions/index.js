const {initializeApp} = require("firebase-admin/app")

initializeApp()

const recordController =
    require("./modules/record/record-controller")()

exports.recordPost = recordController.post

exports.onRecordCreated = recordController.onCreated
