#!/bin/bash
curl --request GET \
'https://firestore.googleapis.com/v1/projects/comprehensiveaccounting/databases/(default)/documents/transactions?key=[API_KEY]' \
--header 'Authorization: Bearer [ACCESS_TOKEN]' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--compressed