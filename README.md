Any changes made to the markdown files in
`site/src/` will automatically be converted
to HTML files and uploaded to the s3 bucket
in the cloudformation template.

## create the stack

```
$ ./stack/scripts/create.sh
```

Get the AWS keys from the cloudformation output

* Update the SNS github hook
* update `lambda/config.json` with keys


## TODO
- [ ] Most of the dirs are hardcoded. Make it more flexible
