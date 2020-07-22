# React App Template

If you want to create ready-to-deploy React app, just use [create-react-app](https://github.com/facebook/create-react-app).

This template can help you write your app using React and then bundle it with Webpack to make it work completely offline (but is it still React after bundling:question:). It can be helpful if you work on some offline tool/extension etc.

**Update 2020-07-22**  
Removed all dependencies so ```npm install``` won't work. If you install everything as described below, you'll get most recent version of every dependency. Especially with React old dependencies sometimes don't work as expected.

### Start guide:

**1. Download this folder and make it your local repo.**

**2. Create package.json file and install dependencies:**
```
npm init
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties babel-loader css-loader style-loader webpack webpack-cli webpack-dev-server
npm install --save @types/react
npm install react react-dom react-hot-loader
```

**3. For multi-page apps:**
```
npm install react-router-dom
```

**4. Add scripts to package.json file:**
```
"start": "webpack-dev-server --mode development",
"dev": "webpack --mode development --output ./dist/devBundle.js --watch",
"build": "webpack --mode production --watch"
```
To start webpack-dev-server, use ```npm run start```  
To bundle, minify and uglify all js/jsx and css code, use ```npm run build```

**5. ESLint:**
```
npm install --save-dev eslint babel-eslint eslint-plugin-react eslint-plugin-react-hooks
```
To use my ESLint configuration file:
```
npm install --save-dev eslint-config-airbnb
```
or you can delete it, create new ESLint config file and add parser in .eslintrc:
```
"parser": "babel-eslint"
```
More info about [babel-eslint](https://github.com/babel/babel-eslint)  

Add rules:
```
"react-hooks/rules-of-hooks": "error",
"react-hooks/exhaustive-deps": "warn"
```

**6. Install React Developer Tools from Chrome Webstore.**

**7. VS Code extensions:**
- ES7 React/Redux/GraphQL/React-Native snippets
- Simple React Snippets
- Live Sass Compiler

**8. If you want to see your app on other devices in your network:**
* In webpack.config.js in ```devServer``` change ```host: 'localhost'``` to your local IP number, e.g. ```host: '192.168.0.66'```.
* Open the browser in other device and type the same address, port, folder/file as you see when you start webpack-dev-server.
* If you use Windows 10, make sure your home network is set to private. If it's set to public you won't connect from other devices.

