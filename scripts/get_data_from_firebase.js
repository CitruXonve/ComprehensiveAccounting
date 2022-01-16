const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('./path/to/serviceAccountKey.json');

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();

db.listCollections().then(collections => {
    for (const collection of collections) {
      console.log(`Found collection with id: ${collection.id}`);

      db.collection(collection.id).get().then(data => {
        data.forEach((doc) => {
            console.log(`Found document under collection "${collection.id}": \n${doc.id}:`, doc.data());
        })
    });
    }
});

