const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('./path/to/serviceAccountKey.json');

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();

let sampleDoc = db.collection('transactions').doc('sample_transaction');

sampleDoc.set({
    /* unique identifier */
    'id': 'transaction_0',
    /* timestamp */
    'ts': new Timestamp( /*_seconds=*/ 1642233600, /*_nanoseconds=*/ 0),
    /* what kind of transaction it is */
    'label': 'purchase',
    /* where the transaction is from */
    'source': 'bank_account_0',
    /* where the transaction goes to */
    'target': 'random.com website',
    /* a brief comment of its purpose */
    'description': 'housing utilities',
    /* fund or goods transaction */
    'is_for_goods': false,
    /* for fund transaction only */
    'currency': 'USD',
    /* for fund transaction only */
    'amount_of_currency': 33.0,
    /* for goods transaction only */
    'quantity_of_goods': 0.0,
    /* for goods transaction only */
    'value_of_goods': 0.0,
    /* who initiates the transfer */
    'sender': 'user_0',
    /* who is the beneficiary of the transfer */
    'recipient': null
});

sampleDoc = db.collection('itemized_transactions').doc('sample_itemized');
sampleDoc.set({
    /* unique identifier */
    id: 'itemized_0',
    /* itemized amount */
    amount: 3.0,
    /* what kind of action is taken */
    conduct: 'loan',
    /* what account it corresponds to */
    account: 'sample_account',
    /* what transaction it belongs to */
    transaction: 'sample_transaction'
});

sampleDoc = db.collection('users').doc('default_user');
sampleDoc.set({
    /* unique identifier */
    id: 'user_0',
    /* what kind of user it is */
    role: 'default_role',
    /* name of the user */
    name: 'noname'
});

sampleDoc = db.collection('roles').doc('default_role');
sampleDoc.set({
    /* unique identifier */
    id: 'role_0',
    /* name of the role */
    label: 'standard',
});