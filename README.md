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

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Deployment
This application can be deployed via a docker image. I.e. a docker image can be built by running:\
`docker build -t connect-four .`

**Note:** The Dockerfile is not built for production, for an optimized production build you need to update the Dockerfile.

Tag and push your docker image to a remote docker registry.

Before deploying the image please make sure you've configured your kubernetes cluster and that your `~/kube/config` is correct, also updated the host, and image fields in `connect-four.yaml` with your values:
```
...
  - host: "connect4.{{team-name}}.hgopteam.com"
  ...
  - image: docker.io/username/repository:day2
...
```
To deploy your image to kubernetes run:
```
cat "k8s.yaml.template" | sed "s/{{IMAGE_TAG}}/day2/g" > k8s.yaml
kubectl apply -f k8s.yaml
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
