# sqlbro

> An electron-vue project

A bare bones SQL client.
This was built to satisfy my own desire for an SQL client that would make those things I need to do frequently as a mid-tier developer easy - without preventing doing anything else - with a minimal interface. It was also built to learn more about the Electron platform, practice using Vue.js, and try out a new styling framework.
Built on electron-boilerplate-vue.
https://github.com/noffle/art-of-readme
Prior Art: Sqlectron https://github.com/sqlectron - a similar project, better executed. ;-) Sequel Pro - much of the UI inspiration. MySql Workbench. - "The Bench."


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron app for production
npm run build

# lint all JS/Vue component files in `app/src`
npm run lint

# run webpack in production
npm run pack
```
More information can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/docs/npm_scripts.html).

---


TODOS
• WOOPS. We're using some pretty out-of-date packages. But updating them all will be a pill (webpack, etc!)
• Work on ReadMe. Follow guide below; change what's needed.
• connection dialog  - make sure the connection *happens* before closing and moving on.
• Add "edit" to connections, and beef them up visually.
• Move the passwords out of localstorage into https://github.com/atom/node-keytar.
• Add the ability to destroy connection
• Make the schema list an accordian, default to closed.
• make a *table* "choosable" - issue a "select * from table" command and show results.
• Flesh out grid component: (Export as SQL insert; export as json; inline editing issuing an "update")
• Show other "objects" under schemas: functions, procs, view, triggers, with good icons.
• Maybe add icon options next to the object in the schemas section (ex. get create statement, select all)
• Make a query savable.
• Show active schema in list somehow.
• put icons on functions/procs/triggers using font-awesome
• enable multi-commands (in driver)
• add multiple DB types (sql server, at least. mongO?)
• Styling for days.
• Add Tests for days.
• Add flyway integration?! Show what migration you're on, and if there are others to do: clean/migrate
• Add "error" response object.
• Query log
• Easter eggs?
• Adapt grid output (dates, bools) to better representation.
• In grid editing.
• Put a spinner on "RUN" until it finishes.

---
This project was generated from [electron-vue](https://github.com/SimulatedGREG/electron-vue) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about this project can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
