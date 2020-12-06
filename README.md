# Connect Four - React Web Client - Solution Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`
Installs all dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run lint`

Runs eslint for code analysis.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## E2E
This project uses Cypress for E2E testing. The tests are stored in `/e2e` folder. You can run the tests in a browser in your local environment, like so:
```
cd e2e
npm install
npm run open
```
You can also run the tests in a terminal from inside the e2e folder (that's what the CI will do), like so:
```
npm test
```
This will run the tests on the url you added to the `cypress.json` file. If you want to run your client locally and run the tests on your local instance your can change the `baseUrl` in `cypress.json` to `http://localhost:3000`. 

## Deployment
This application can be deployed via a docker image. I.e. a docker image can be built by running:\
`docker build -t connect-four .`

**Note:** The Dockerfile is not built for production, for an optimized production build you need to update the Dockerfile.

Tag and push your docker image to a remote docker registry.

Before deploying the image please make sure you've configured your kubernetes cluster and that your `~/kube/config` is correct, also updated the host, and image fields in `k8s.yaml.template` with your values:
```
bash scripts/deploy.sh "default" "production" "${IMAGE_TAG}"
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
