# React Cheatsheet

### Installation - Syed's way
- Make new directory
- Make a `backend` directory and:
  - Touch `app.js`
  - Touch `.gitignore` >> `node_modules`
  - `npm init`
  - Install as dependencies: express, body-parser, cors, mongodb, etc.
- For the `frontend` directory, copy the `webpack bootstrap` folder
  - Rename it `frontend`
  - Touch `.gitignore` >> `node_modules`
  - Run `npm install`
  - Start your server with `npm start`
  - Create a dir called `app`
    - `index.html`
    - `index.js`
    - `mkdir` components, containers, stateless, utils 






### Installation - Liza's way
- Make new directory & npm init
- Then:

Install globally (-g):
- `babel`
- `webpack`
- `webpack-dev-server`

Install as local dependencies: (--save)
- `react`
- `react-dom`
- `babel-loader`
- `babel-core`
- `babel-preset-react`

### File Setup
- touch .gitignore (You know what to do --> `node_modules`)
- Touch `main.js` (this will be your `entry` point)
- Touch `bundle.js` (this will be your `output` file)
- Touch `index.html`. This file needs two things:
  - Create a single HTML element with an id that will serve as your React entry point, for example:
  ``` html
    <div id="react-app"></div>
  ```
  - Include a script tag at the bottom (before the closing body tag) that includes your `output file`
  ``` html
    <script type="text/javascript" src="bundle.js"></script>
  ```
- Touch `webpack.config.js`
  - Put your config code in here. This is where you specify your entry & output files from above.

### Run
- From root directory of project run `webpack-dev-server` & navigate to `localhost:8080`
- `webpack-dev-server` for `webpack` is like `nodemon` for `node`

### Write code
- You will write your React code in `main.js`
- Babel will translate it, then Webpack will compile it all together in `bundle.js`.

### React Dev Tools
- https://fb.me/react-devtools
- Find the `Chrome Web Store` link at the bottom.
