const {initializeApp} = require("firebase-admin/app")
const {getFirestore} = require("firebase-admin/firestore")

initializeApp()

const recordController =
    require("./modules/record/record-controller")(getFirestore())

exports.recordPost = recordController.post

exports.onRecordCreated = recordController.onCreated
