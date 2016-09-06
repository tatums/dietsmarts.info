#!/bin/bash

echo "λ installing deps"
pushd lambda
npm i --production
popd

echo "λ zipping"
zip -q -r lambda.zip lambda/

echo "λ uploading" && \
aws lambda update-function-code \
  --function-name www-dietsmarts-info-publishLambda \
  --zip-file fileb://lambda.zip

