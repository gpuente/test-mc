# Description
Test for MercadoLibre

# Features
- ES6
- Server Side Rendering (SSR)
- Hot Module Replacement (HMR)
- Async Components (with react universal components)
- Async CSS (with react universal components)
- i18n (with i18next)
- Javascript bundle splitting
- CSS splitting
- Environment Config
- Multiple Layouts Support (useful when you need render versions for AMP, desktop, mobile, etc.)
- Alias for common paths

# Folder Structure

```
ssr-react
├───__tests__           (contains all files related to tests)
│   ├───config          (config required for Jest before starts testing)
│   ├───e2e             (end to end tests)
│   ├───integration     (integration tests)
│   ├───unit            (unit tests)
│   └───utils           (tools or functions to reuse in tests)
├───assets              (contains all assets files)
│   ├───css             (contains css files)
│   ├───fonts           (contains fonts files)
│   └───img             (contains image files)
├───config              (contains config files related to the application/environment)
├───dist                (contains the bundled application for production)
├───src                 (contains application logic)
│   ├───client          (files related for client rendering and reydratation)
│   ├───i18n            (translation files)
│   ├───layouts         (contains layouts files)
│   ├───presenters      (presenters for requests)
│   ├───requests        (Promises requests to fetch data from API)
│   ├───redux           (reducers and actions for redux)
│   ├───server          (server setup files)
│   ├───utils           (setup files for Apollo, I18n, etc.)
│   └───views           (contains all View Logic and React components)
│       ├───hocs        (High Order Components)
│       ├───modules     (App modules)
│       └───ui          (UI components - check with stroybook)
└───webpack             (contains all webpack config for server and client)
    ├───client          (config related to client)
    ├───parts           (cross webpack configs)
    └───server          (config related to server)
```

# Installation
Follow the next steps to install the project on your machine:

```bash
  # clone the repo
  git clone https://github.com/gpuente/test-mc.git

  # install dependencies
  cd test-mc
  npm install

  # run application
  npm run start:dev
```

# Setup
You can customize application config inside `config` directory. `default.json` contains cross config for all environments. PORT application and others could be changed here.

# Available Commands
- `start:dev` : build client and server for development env and starts server
- `start:prod` : build client and server for production env and starts server
- `storybook`: run storybook on project
- `build`: build project
- `start`: start project from build

# Notes
- test-mc uses `rim-raf` for cross env delete files
- test-mc uses `cross-env` to define env variables
