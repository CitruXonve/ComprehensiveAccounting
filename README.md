# Comprehensive Accounting

A comprehensive solution of double-entry accounting implementations with customized features:

- Quick notes
- Auto AA
- Foreign currencies
- Cashback tracking
- Subscription tracking
- ...

## Depencencies

- Node.js
- Typescript
- C++
- Google Cloud Platform (GCP)

## Essentials of GCP

### GCP Project Overview

|Project name|Project ID|
|---|---|
|ComprehensiveAccounting|comprehensiveaccounting|

### Databases

This project is based on Google Firebase as NoSQL database system, which is helpful for building light-weighted, data-intensive serverless apps.

There is a corresponding Firebase project `ComprehensiveAccounting` created on `Cloud Firestone`, which is a more up-to-date powerful solution than Firebase's original `Realtime Database`. See also [Firebase docs](https://firebase.google.com/docs/database).

### Credentials

**CAUTION: DO NOT EVER COMMIT GCP CREDENTIALS INTO THE PROJECT REPO!**

#### Obtaining GCP API key

Enter GCP project main page, select Menu -> IAM & Admin -> Service Accounts and the key ID can be found after the email `comprehensiveaccounting@appspot.gserviceaccount.com`.

#### Obtaining GCP OAuth 2 access token

Activate cloud shell at the top right corner of the GCP project main page, and run command:

> gcloud auth application-default print-access-token

## Data Modeling

Primitive data modeling schema, sample data and usage can be found under `scripts/` directory.

There are two ways to interact with Firebase API, either by Firebase Admin SDK or RESTful API calls.

See also [Firebase data management docs](https://firebase.google.com/docs/firestore/manage-data/transactions) and [Cloud Firestore API](https://firebase.google.com/docs/firestore/reference/rest/).

## License

GNU GPL v3.