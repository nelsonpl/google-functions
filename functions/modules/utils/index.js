module.exports = function utils(firestore) {
  return {
    incrementIdGenerator: async function(collectionName) {
      const collectionRef = firestore.collection("incrementId")
      const document = await collectionRef.doc(collectionName).get()

      if (!document.exists) {
        await collectionRef.doc(collectionName).set({value: 1})
        return 1
      }

      const incrementId = document.data().value + 1
      await collectionRef.doc(collectionName).update({value: incrementId})

      return incrementId
    }}
}
