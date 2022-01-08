import { initializeApp } from "firebase/app";
import { connectFirestoreEmulator, collection, doc, getFirestore, runTransaction, setLogLevel } from "firebase/firestore";

const firebaseConfig = {
  // INSERT CONFIG HERE
};

const app = initializeApp(firebaseConfig);
setLogLevel('debug');
const firestore = getFirestore();
connectFirestoreEmulator(firestore, 'localhost', 8080);

const docRef = doc(collection(firestore, 'foo'));

runTransaction(firestore, (transaction): Promise<any> => {
  return transaction.get(docRef)
    .then((snapshot) => {
      transaction.update(docRef, {'foo': 42});
    });
});
