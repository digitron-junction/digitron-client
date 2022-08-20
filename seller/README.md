### Texh in React

- axios
- react typescript
- contextApi
- redux
- redux-thunk

### Technology Features

- i18n
- dark mode
- react error boundary
- axios interceptor
- cancel request
- authentication guards
- @casl/ability role
- role & permission based route.
- wavesurfer

### CI/CD

- docker
- bitbucket pipeline

### Testing

- Jest
- Enzyme
- E2E

### UI Component

- material UI

### Pattern design

- atomic design

### Tools

- eslint
- prettier
- husky
- lint-staged

## Git replacing LF with CRLF

```
$ git config --global core.autocrlf false
$ git rm --cached -r .
$ git reset --hard
```
### Install extensions

- eslint
- tslint
- prettier
- editorConfig for VSCode

### Edit settings.json file

Windows: Go to File -> Preferences -> Settings or `Ctrl + ,`

Adding in the settings.json file & create .vscode/settings.json in root project

```
{
  "files.associations": {
    "*.jsx": "javascriptreact"
  },
  "editor.insertSpaces": true,
  "editor.detectIndentation": false,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Installation

```bash
# install node version
Please install at least v15.2.0 version node

# install npm version
Please install at least v7.0.10 version node
```

```bash
# install app's depndencie
$ npm install
```

## Scripts

```bash
# install typescript
$ npm install -g typescript
```

```bash
# dev server with PORT 3002 at http://localhost:3002/
$ npm start

# build for production with minify
$ npm run build

# run `lint` to tell you what is wrong code.
$ npm run lint

# run `format` to format all code based on your prettier and linting configuration.
$ npm run format
```

## Directory sturcture code

````
├── public/          #static files
│   ├── assets/      #assets
|   |    |── images  #images
|   |    |── fonts   #fonts
│   └── index.html   #html template
│
├── src/             #project root
|   |── actions/     #actions redux
|   |── apis/        #apis of feature
|   |── assets/      #assets file
|   |── components/  #common components reuse
│   ├── configs/     #configs project
│   ├── containers/  #containers source
|   |── context/     #contextApi
|   |── features/    #features of app
|   |── guards/      #guard permissions
│   ├── hooks/       #hooks source
|   |── layouts/     #common layouts
|   |── locales/     #multi languages
│   ├── models/      #define interface
|   |── reducers/    #reducers redux
|   |── routes/      #common routes
|   |── selectors/   #selectors redux
│   ├── services/    #services source
|   |── stores/      #stores redux
|   |── themes/      #themes app
│   ├── App.js
│   ├── App.test.js
│   ├── index.js

└── package.json```
````
