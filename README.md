This is a sample app to reproduce/investigate https://github.com/firebase/firebase-js-sdk/issues/5871

> FAILED_PRECONDITION error when committing transaction to clean Firestore Emulator

### Prerequisites
1. `npm install -g typescript ts-node`

### Steps
1. `npm install`
2. Edit `index.ts` with your API credentials.
3. `firebase emulators:start --only firestore --project YOUR_FIREBASE_PROJECT_ID`
4. `ts-node index.ts`
5. CLick "Clear all data" in the Firestore Emulator Web UI (e.g. http://localhost:4000/firestore/data/).
6. `ts-node index.ts` again

### Expected Results

Both times that the `index.ts` script is run complete successfully.

### Actual Results:

The first time that the `index.ts` script is run completes successfully (as expected);
however, the second time that it is run fails with this error:

```
@firebase/firestore: Firestore (9.6.1): Connection RPC 'Commit' failed with error: Error: 9 FAILED_PRECONDITION: the stored version (1641841011407934) does not match the required base version (0)
```
