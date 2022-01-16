const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('./path/to/serviceAccountKey.json');

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();

let sampleDoc = db.collection('transactions').doc('sample_transaction');

sampleDoc.set({
    'id': 'transaction_0',
    'ts': new Timestamp( /*_seconds=*/ 1642233600, /*_nanoseconds=*/ 0),
    'label': 'purchase',
    'source': 'bank_account_0',
    'target': 'random.com website',
    'description': 'housing utilities',
    'is_for_goods': false,
    'currency': 'USD',
    'amount_of_currency': 33,
    'quantity_of_goods': -1,
    'value_of_goods': -1
});

sampleDoc = db.collection('itemized').doc('sample_itemized');
sampleDoc.set({
    id: 'itemized_0',
    amount: 3,
    conduct: 'loan',
    account: 'sample_account',
    transaction: 'sample_transaction'
});

sampleDoc = db.collection('user').doc('default_user');
sampleDoc.set({
    id: 'user_0',
    role: 'default_role',
    name: 'noname'
});

sampleDoc = db.collection('role').doc('default_role');
sampleDoc.set({
    id: 'role_0',
    label: 'standard'
});