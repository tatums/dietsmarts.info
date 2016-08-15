ruby -ryaml -rjson -e 'puts YAML.load(ARGF)' < cl.yaml

stack=www-dietsmarts-info; aws cloudformation create-stack --stack-name $stack --template-body file://foo.json --capabilities CAPABILITY_IAM && aws cloudformation wait stack-create-complete --stack-name $stack
