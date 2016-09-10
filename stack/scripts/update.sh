#!/bin/bash
stack=www-dietsmarts-info
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"


aws cloudformation update-stack \
  --stack-name $stack \
  --template-body file://$DIR/../cloud.json \
  --capabilities CAPABILITY_IAM && \

  aws cloudformation wait stack-update-complete \
    --stack-name $stack
