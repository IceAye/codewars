// ❓ DESCRIPTION:
// Node applications require a file named package.json on the root of the project.
//
// You can create this file manually or have the command npm init to assist you in this process.
//
// The fields name and version are mandatory. But there a lot of other fields that you can include:
//
// for a documentation on all fields see https://docs.npmjs.com/files/package.json
//
// name: must be lowercase and url friendly
// version: must include major, minor and patch version
// description: can contain a description of your project
// main: the entry point of your application (when running node without args)
// scripts: a set of commands that can be executed with npm run <cmd>
// keywords: an array of strings containing keywords that describe your application
// bugs: an object with the url and/or email to contact about bugs
// license: a valid SPDX license or UNLICENSED (proprietary) or SEE LICENSE IN <filename>
// author: the name, email and url in a single string or an object with these three properties
// contributors: an array of items that follow the same rules as author
// repository: an object with type (e.g. git) and url (e.g. git url)
// private: true|false; if true the repository field can be omitted without any warnings
// preferGlobal: true|false; if your application is preferred to be installed globally
// engines: object listing engines and versions used by your application
// os: array of strings with supported OS
// cpu: array of strings with supported CPU
// dependencies: run-time dependencies of your application, things that will run in production
// devDependencies: compile-time dependencies of your application, things that should not be in production
//
// ✅ SOLUTION:
const configuration = {
    "name": "great-pack",
    "version": "5.3.2",
    "author": "Kata Master email@example.com",
    "description": "",
    "main": "index.js",
    "scripts": {
        "precompress": "before.js",
        "compress": "init.js",
        "postcompress": "after.js"
    },
    "keywords": ["program", "best", "world"],
};