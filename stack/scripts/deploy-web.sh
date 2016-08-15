#!/bin/bash
stack=www-dietsmarts-info
aws s3 sync www.dietsmarts.info "s3://www.dietsmarts.info" --delete
#aws s3 sync admin-dietsmarts-info s3://admin-dietsmarts-info --delete
