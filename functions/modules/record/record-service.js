module.exports = function(firestore) {
  const utils = require("../utils")(firestore)

  return {
    add: async ({name}) => {
      const writeResult = await firestore
          .collection("records")
          .add({name})

      const recordAdded = {id: writeResult.id, name: name}

      return recordAdded
    },

    onCreated: async (event) => {
      const incrementId = await utils.incrementIdGenerator("records")
      return event.data.ref.set({incrementId}, {merge: true})
    },
  }
}


