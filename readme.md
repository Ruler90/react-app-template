# React App Template

1. Copy this folder to your local repo.

2. Install dependencies (first read pt. 3 & 4):
```
npm init
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties babel-loader css-loader style-loader webpack webpack-cli webpack-dev-server
npm install react react-dom react-hot-loader
```

3. For multi-page apps:
```
npm install react-router-dom
```

4. Webpack-dev-server and react-hot-loader:
* They are not necessary - you can just use VS Code Live Server, run webpack script to watch for changes and automatically bundle the code after each save. But remember - if you want to debug your app or/and use Chrome React Dev Tools, it's easier to do this with webpack-dev-server because you will see the same names of functions, components etc. that you have in your code editor. With bundled code it's sometimes hard to find what element generates errors.
* If you want to see your app on other devices in your network, change ip address in Live Server settings to your computer local address (not 127.0.0.1 and no localhost), then open the browser in other device and type the same address, port, folder as you see when using Live Server. If you use Webpack-dev-server, add your local ip adress in the code below (e.g. host: 192.168.0.1).
* If you use Windows 10, make sure your home network is set to private. If it's set to public you won't connect from other devices.
* If you won't use webpack-dev-server, remove from the webpack.config.js the lines below or at least the last one or you will get new file in dist folder on each save.
```
devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/"
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
  ```

5. Add scripts to package.json file:
```
"start": "webpack-dev-server --mode development",
"dev": "webpack --mode development --output ./dist/devBundle.js --watch",
"build": "webpack --mode production --watch"
```

6. ESLint:
```
npm install --save-dev eslint babel-eslint eslint-plugin-react
```
Then create ESLint config file and add parser in .eslintrc:
```
"parser": "babel-eslint"
```
More info about [babel-eslint](https://github.com/babel/babel-eslint)
