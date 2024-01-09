# Web Angular Template

Project based on [AngularCLI](https://angular.io/cli) + [webpack-must-have repo](https://github.com/Yegorich555/webpack-must-have)

- **Webpack** version: 5+
- **Angular** version: 17+
- **NodeJS** version: 18+

## How to run project

1. Open project in VSCode (for example)
2. Run command `npm i` in terminal (console) for installing all required packages (Node.js is required: <https://nodejs.org/en/>)
3. For building project you can use the following commands:
   - `npm run build` - building production version (minimized and optimized). The project will be builded into `dist` folder. You can change destination in `angular.json`
   - `npm start` - for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
4. For testing
   - `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io)
   - `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## How to install packages for CI/CD

- Before build without lint use `npm ci --ignore-scripts --omit=optional --omit=peer`
- Before lint with auto-fix use `npm i --ignore-scripts`

- ### Explanation for package.json

  - **devDependencies** - packages for `dev & prod build` (so for prod need dependencies + devDependencies)
  - **dependencies** - UI (client-side) packages
  - **optionalDependencies** - packages for `linters` & `development` (webpack-dev-server, ESLint, StyleLint etc.)

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Features

- **Optimization (default)**. Code minification + [cssnano](https://cssnano.co/)
- **Optimization (default)**. Integrated with `.browserslistrc` so code optimized & compiled according to Can I Use
- **Optimization CI/CD**. Packages split to different groups so with `npm ci --ignore-scripts --omit=optional` only minimal part is installed (required only for build)
- **Code**. Extended TS config with path-alias `@/...`
- **Code**. Extended & optimized Linters: [ESLint](https://www.npmjs.com/package/eslint), [StyleLint](https://www.npmjs.com/package/stylelint), [MarkdownLint](https://www.npmjs.com/package/markdownlint)
- **Code**. Integrated [prettier](https://www.npmjs.com/package/prettier) for strict code formatting (all except `*.html`)
- **Code**. Integrated [lint-staged](https://www.npmjs.com/package/lint-staged) + [husky](https://www.npmjs.com/package/husky) with pre-commit git hook
- **Styles**. Integrated [postcss-hover-media-feature](https://www.npmjs.com/package/postcss-hover-media-feature) to fix [twice-tap issue](https://css-tricks.com/annoying-mobile-double-tap-link-issue) on elements with hover effect in Safari
- **Styles**. Integrated [postcss-autoprefixer](https://www.npmjs.com/package/autoprefixer) to auto-add missed vendor prefixes like `-moz...` when it's required according to `.browserslistrc`
- **Styles**. Integrated [postcss-normalize](https://github.com/csstools/postcss-normalize) as modern alternative of css-reset based and based on `.browserslistrc`
- **Webpack**. Integrated [webpack-obsolete-plugin](https://www.npmjs.com/package/webpack-obsolete-plugin) that shows _Please update your browser_ if it doesn't match with `.browserslistrc`

## Recommended npm-packages

- [web-ui-pack](https://www.npmjs.com/package/web-ui-pack) - nice package with form-controls, smart-popup, spinner etc. & useful helpers
- [ytech-js-extensions](https://www.npmjs.com/package/ytech-js-extensions) - generic extensions for Arrays, Dates (that lacks in web-ui-pack)

## Recommended VSCode extensions

- Angular Language Service: <https://marketplace.visualstudio.com/items?itemName=Angular.ng-template>
- Angular Snippets: <https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2>
- ESlint: <https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint>
- StyleLint: <https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint>
- SCSS intellisense: <https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-scss>
- Path autocomplete: <https://marketplace.visualstudio.com/items?itemName=ionutvmi.path-autocomplete>
- Prettier - Code formatter: <https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode>
- Import Cost: <https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost>
- Markdownlint: <https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint>
- EditConfig for VS Code: <https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig>
- Spell Checker: <https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker>
- TodoTree: <https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree>

## Knowledge

- [Worst Practices in Angular](https://medium.com/@Hasan.Kakeh/worst-practices-in-angular-aac6e8cc1a69)
- [10 Common Mistakes in Angular Development](https://blog.bitsrc.io/essential-tips-for-successful-angular-development-f92a9ea1d20f)
- [60 questions for Angular](https://www.simplilearn.com/tutorials/angular-tutorial/angular-interview-questions)

## Troubleshooting

- Impossible to install anything with `npm i`
  > check if your NodeJS version matches with pointed in **package.json: engines.node** section (use [NVM](https://github.com/coreybutler/nvm-windows/releases) to easy manage NodeJS versions)
- Impossible to run scripts from package.json
  > try to change backslashes (npm-cli issue that flows between versions time to time)
  > from `.\\node_modules\\.bin\\webpack serve --open --config webpack.devServer.js"`
  > to `./node_modules/.bin/webpack serve --open --config webpack.devServer.js"`
