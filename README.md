This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify



//-------------------------------------------------------------------------

NOTA:
    -> na criação de um novo ficheiro .js, escreve 'rcc' e ele faz automaticamente um class component



installed dependencies

npm i --save materialize-css
npm i --save react-router-dom
        (https://codesandbox.io/s/vvoqvk78)
npm i --save node-sass
npm i --save dependency-cruiser
        depcruise --exclude "^node_modules" --output-type dot src | dot -T svg > dependencygraph.svg


npm i --save react-parallax
        (https://reactjsexample.com/a-react-component-for-parallax-effect/
        https://codesandbox.io/embed/r0yEkozrw?view=preview
        https://www.npmjs.com/package/react-parallax)
npm i --save font-awesome





//-------- deploy and build
npm run build

pm2 ecosystem
    (edit: name, script, args)
pm2 start ecosystem.config.js



//-------- install module node-sass
sudo npm install --save --unsafe-perm node-sass

//-------- install github pages (to be able to serve it online) https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f
npm install gh-pages --save-dev



https://create-react-app.dev/docs/deployment/#building-for-relative-paths
npm install --save gh-pages
npm run deploy
