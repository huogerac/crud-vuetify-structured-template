# crud-vuetify-structured-template boilerplate

[![GitHub issues](https://img.shields.io/github/issues/huogerac/crud-vuetify-structured-template?style=for-the-badge)](https://github.com/huogerac/crud-vuetify-structured-template/issues) [![GitHub stars](https://img.shields.io/github/stars/huogerac/crud-vuetify-structured-template?style=for-the-badge)](https://github.com/huogerac/crud-vuetify-structured-template/stargazers) [![GitHub license](https://img.shields.io/github/license/huogerac/crud-vuetify-structured-template?style=for-the-badge)](https://github.com/huogerac/crud-vuetify-structured-template/blob/master/LICENSE) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

> 💻 A full-featured Vuejs + Vuetify + Great structure project template + API Ready

> 👉 It's using latest VueJS 2 and Vuetify 2

> VueJS 3 + Vuetify 3 + Vite is coming soon 😎

## Requirements

It's exactly the same as the VueJS projects, basicly you'll need a NodeJS installation.
Check the links below out for more details:

- [Node with NVM - Script for any ubuntu based distribution](https://github.com/huogerac/dev-tools/blob/master/elementaryos5/03_install_node.sh)
- [Install Node.js with NVM](https://heynode.com/tutorial/install-nodejs-locally-nvm)

## Quick start

```bash
$ npm i -g @vue/cli-init
$ vue init huogerac/crud-vuetify-structured-template my-project
$ cd my-project
$ npm install   # Or yarn
$ npm run dev   # See the package.json / scripts

```

**Note**: The `npm run dev` will run the api mock and vuejs server,
check the `package.json` out for running separeted which one.

## Why using this boilerplate ❓

- Focus on the business and creating value
- Faster project setup
- Standard project structure organization (easy to scale)
- Easy to remove / rename features
- DRY (I was doing those setup steps over and over again)
- I don't want to be backend API dependent (Faster development using API Mocking)

## What's Included 🎉

- VueJS (2) + Vuetify configured
- Page inheritance (Layout)
  - Home Task's list
  - Create, Update and Delete Task
  - Error pages (404, 500)
- Vue Router to be scalable
- API Ready (using Axios)
- API Mock (using json-server)
- Pure components
- Linter + Code style (Prettier)

## Structure

```
├── apiMock                👉 The sub-project for the API mock
│   └── server
│       db.json            👉 The API data (mock)
├── public
│     favicon.ico
└── src
    ├── router             👉 #1 App routes
    │   ├── index.js
    │   └── tasks.api.js       👉 Routers by context
    ├── pages              👉 #2 App pages (App pages/views)
    │   ├── layouts            👉 Pages bases
    │   │   └── Public.vue
    │   └── public             👉 Pages by context
    │       ├── 500.vue
    │       └── Home.vue
    ├── components         👉 #3 VueJS components files
    │   └── visual             👉 Pure components**
    ├── api                👉 #4 API folder
    │   ├── index.js
    │   └── tasks.api.js       👉 API endpoints by context
    ├── assets
    │   └── some-image.jpg
    ├── plugins
    │   └── vuetify.js
    ├── package.json
    ├── .prettierrc.js
    .
    .
```

## Screenshots

<img src="https://github.com/huogerac/crud-vuetify-structured-template/raw/master/screenshots/page1.png" width="112"> <img src="https://github.com/huogerac/crud-vuetify-structured-template/raw/master/screenshots/page2.png" width="112"> <img src="https://github.com/huogerac/crud-vuetify-structured-template/raw/master/screenshots/page3.png" width="112"> <img src="https://github.com/huogerac/crud-vuetify-structured-template/raw/master/screenshots/page4.png" width="112">

## Contribute 🚀

Any help is more than welcome...

- 👉 It could be an [Issue](https://github.com/huogerac/crud-vuetify-structured-template/issues)
- 💻 It could be using it and give a feedback
- 🌟 It could be a github star
- 🤔 It could be a question ( Use the [Issues](https://github.com/huogerac/crud-vuetify-structured-template/issues) )
- 🤔 If you hate this project, feel free to tell us what is wrong with it

## Alternatives ⚙️

- If you know great vuejs project templates, please, add it here
