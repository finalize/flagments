import { region, logger } from "firebase-functions"
import * as admin from "firebase-admin"
admin.initializeApp()

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", { structuredData: true })
//   response.send("Hello from Firebase!")
// })
const functions = region("asia-northeast1")
export const addMessage = functions.https.onRequest(async (req, res) => {
  // Grab the text parameter.
  const original = req.query.text
  // Push the new message into Firestore using the Firebase Admin SDK.
  const writeResult = await admin
    .firestore()
    .collection("messages")
    .add({ original })
  // Send back a message that we've successfully written the message
  res.json({ result: `Message with ID: ${writeResult.id} added.` })
})

exports.makeUppercase = functions.firestore
  .document("/messages/{documentId}")
  .onCreate((snap, context) => {
    // Grab the current value of what was written to Firestore.
    const original = snap.data().original

    // Access the parameter `{documentId}` with `context.params`
    logger.log("Uppercasing", context.params.documentId, original)

    const uppercase = original.toUpperCase()

    return snap.ref.set({ uppercase }, { merge: true })
  })
