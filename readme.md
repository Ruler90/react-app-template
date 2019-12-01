# React App Template

1. Copy this folder to your local repo.

2. Install dependencies (first read pt. 3):
```
npm init
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties babel-loader css-loader style-loader webpack webpack-cli webpack-dev-server
npm install react react-dom react-hot-loader
```

3. If you use VS Code Live Server, you don't need to install webpack-dev-server and react-hot-loader.
* You can just run webpack script to watch for changes and automatically bundle the code after each save.
* If you want to see your app on other devices in your network, change ip address in Live Server settings to your computer local address (not 127.0.0.1 and no localhost), then open the browser in other device and type the same address, port, folder as you see when using Live Server.
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

4. Add scripts to package.json file:
```
"start": "webpack-dev-server --mode development",
"dev": "webpack --mode development --output ./dist/devBundle.js --watch",
"build": "webpack --mode production --watch"
```

5. ESLint:
```
npm install --save-dev eslint babel-eslint
```
Then create ESLint config file and add parser in .eslintrc:
```
"parser": "babel-eslint"
```
More info about [babel-eslint](https://github.com/babel/babel-eslint)
