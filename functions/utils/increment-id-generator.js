const {getFirestore} = require("firebase-admin/firestore")

module.exports = async function incrementIdGenerator(collectionName) {
  const firestore = getFirestore()
  const collectionRef = firestore.collection(collectionName)
  const document = await collectionRef.doc("incrementId").get()

  if (!document.exists) {
    await collectionRef.doc("incrementId").set({value: 1})
    return 1
  }

  const incrementId = document.data().value
  await collectionRef.doc("incrementId").update({value: incrementId + 1})

  return incrementId
}
