const {getFirestore} = require("firebase-admin/firestore")

const incrementIdGenerator = require("../../utils/increment-id-generator")

exports.add = async ({name}) => {
  const writeResult = await getFirestore()
      .collection("records")
      .add({name})

  const recordAdded = {id: writeResult.id, name: name}

  return recordAdded
}

exports.onCreated = async (event) => {
  const incrementId = await incrementIdGenerator("records")
  return event.data.ref.set({incrementId}, {merge: true})
}
