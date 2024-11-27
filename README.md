[![Coverage Status](https://coveralls.io/repos/github/jannepeltola/COMP.SE.200-2024-2025-1/badge.svg?branch=no-extras)](https://coveralls.io/github/jannepeltola/COMP.SE.200-2024-2025-1?branch=no-extras)
[![Coverage Status](https://coveralls.io/repos/github/jannepeltola/COMP.SE.200-2024-2025-1/badge.svg?branch=main)](https://coveralls.io/github/jannepeltola/COMP.SE.200-2024-2025-1?branch=main)

# Student template

## Purpose of this repository

This is a project template for students participating in Software Testing course
at Tampere University.

The repository only contains the source code that is under testing, `package.json` skeleton
and LICENSE file.

Source code folder contains a separate license file that must **NOT** be removed under any circumstances!
Removing this license file directly violates terms and conditions of the software under testing.
Individuals who remove or modify the license file will also carry the consequences.


## How to run tests locally

To run locally, clone this repo

```git clone -b no-extras https://github.com/jannepeltola/COMP.SE.200-2024-2025-1.git```

NOTE: ```main``` branch can also be used, difference between ```main``` and ```no-extras``` is:
```main``` - contains all given library functions -> Test coverage is 35%
```no-extras``` - contains only tested library functions and their dependency functions -> Test coverage is near 100%

then ```cd``` in there and run ```npm install``` to install dependencies

then run ```npm test``` to test

test results can be seen from ctrf/ctrf-report.json, and this result is detailed in the test report documentation