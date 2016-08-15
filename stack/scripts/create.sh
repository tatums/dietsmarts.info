#!/bin/bash
stack=www-dietsmarts-info
body=$(ruby -ryaml -rjson -e "puts YAML.load_file('stack/cloud.yaml').to_json")


aws cloudformation create-stack \
  --stack-name $stack \
  --template-body "${body}" \
  --capabilities CAPABILITY_IAM && \

  aws cloudformation wait stack-create-complete \
    --stack-name $stack
