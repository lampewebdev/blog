---
title: 'Gatsby v2 part 1'
description: The first part of our gatsby journey
date: '2018-12-05'
image: 'gatsby.jpeg'
---

### Introduction

Gatsby is a static PWA generator with no hustle.
It's powered by some tools you may know:
* React
* GraphQL
* Webpack

### Requirments

* Node.js
* npm or yarn (we will use yarn)
* Git

### Installing Gatsby

Check if yarn is installed:

```bash
$ yarn --version
```

This should output something like this:

```bash
1.12.3
```

Lets install gatsby we are doing this by typing:

```bash
$ yarn global add gatsby-cli
```

This installs the `gatsby` command.
We can check this als by typing:
```bash
$ gatsby --version
```
This should output also a version number like this:
```
2.4.6
```

we should now be able to create or first project yeahy.
Gatsby needs a starter template, basically you can think of it like a boilerplate. If you want to take a look
at all the posible starter you can have a look [here](https://www.gatsbyjs.org/starters/?v=2)
If you dont provide a starter gatsby will use [starter-default](https://github.com/gatsbyjs/gatsby-starter-default).

Lets create it then and change the directory!
```bash
$ gatsby new gatsbyTutorial
$ cd gatsbyTutorial
```
Now is the perfect time to initialize git.
```bash
$ git init
$ git add .
$ git commit -am "init commit"
```

Okay lets run gatsby in development mode:
```bash
$ yarn run develop
```
No you should see a lot of stuff happening in your terminal.
At the end of that you should see something like this:
```bash
You can now view gatsby-starter-default in the browser.

  http://localhost:8000/

View GraphiQL, an in-browser IDE, to explore your site's data and schema

  http://localhost:8000/___graphql

Note that the development build is not optimized.
To create a production build, use gatsby build

ℹ: 
ℹ: Compiled successfully.
```

Now go open a Browser like Firefox (💓 what I use 💓) or Chrome.
and go to the url `http://localhost:8000/`.

you should see something like this
![alt text](https://www.gatsbyjs.org/static/b6fdc1bc602bab53066ea1707e89185d/97318/772fab2b236293440e972b32f40a3702.png "Logo Title Text 1")

Congrats you have gatsby running and created your first PWA! 💪🤓