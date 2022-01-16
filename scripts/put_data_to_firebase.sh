#!/bin/bash
curl --request DELETE \
'https://firestore.googleapis.com/v1/projects/comprehensiveaccounting/databases/(default)/documents/itemized_transactions/sample_itemized_transaction?key=[API_KEY]' \
--header 'Authorization: Bearer [ACCESS_TOKEN]' \
-w "{status_code: %{http_code}} \n"

curl --request POST \
'https://firestore.googleapis.com/v1/projects/comprehensiveaccounting/databases/(default)/documents/itemized_transactions?documentId=sample_itemized_transaction&key=[API_KEY]' \
--header 'Authorization: Bearer [ACCESS_TOKEN]' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--data '{
  "fields": {
    "id": {
      "stringValue": "itemized_01"
    },
    "amount": {
      "doubleValue": 3.33
    },
    "conduct": {
      "stringValue": "loan"
    },
    "account": {
      "stringValue": "sample_account"
    },
    "transaction": {
      "stringValue": "sample_transaction"
    }
  }
}' \
--compressed