---
title: 'Amazon kinesis Firehose simple setup'
description: A tutorial for a simple setup
date: '2018-12-06'
image: 'firehose.png'
---

### Requirments

* nodejs
* yarn or npm (We will use yarn)
* git
* AWS Account

### Initial Setup

First lets create a working directory
```bash
$ mkdir amazonFirehoseTest
$ cd amazonFirehoseTest
```

Now lets initailze a new npm package
```bash
$ yarn init -y
```

Lets add babel into the mix because we want to write es6
```bash
$ yarn add @babel/core @babel/node @babel/preset-env --dev
```

we also need to create a `.bashrc` file with the following content:
```json
{
  "presets": ["@babel/preset-env"]
}
```
lets a develop script to the `package.json`
```json
{
  ...
  "scripts": {
    "develop": "babel-node index.js"
  },
  ...
}
```
This will let use the latest and greates javascript.

### Getting Amazon Firehose up and running
Now lets install Amazon AWS and firehose.
We will also install the `dotenv` package because we dont want to hard code our aws key.
```bash
yarn add aws-sdk dotenv firehoser
```

First we need to set our aws key. We don't want to hard code the key because we never want to push it to github or some other public repo. To handle env variables we instaled `dotenv`. This package will load all env variables from the `.env` file in your main working directory. so lets create it and add our aws key.
```bash
touch .env
```
Now open the file and add the following:
```env
accessKeyId=YOURAWSKEY
secretAccessKey=YOURACCESSKEY
```

Now lets create our index file
```bash
touch index.js
```
Lets now load the env variables and set the AWS config.
```javascript
// Import the aws sdk
import AWS from 'aws-sdk';

// This loads the .env file
require('dotenv').config();

// This sets the aws config
AWS.config.update({
  accessKeyId: process.env.accessKeyId,
  secretAccessKey: process.env.secretAccessKey
});
```
Now you should be able to connect to AWS.
Let's now add firehose and save something in it
```javascript
// import firehoser in the top of your file
import firehoser from 'firehoser';

// Add this code after the aws config
// create a new delivery stream
let firehose = new firehoser.DeliveryStream('my_delivery_stream_name');

// Send a single record to Kinesis Firehose...
firehose.putRecord('value1|value2|value3');
```