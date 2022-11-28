# Prerequisites
## Cloning the App
To Clone this repository run
```
git clone https://github.com/MohaKh1/Post_Office_Front_End.git
```

## Frontend
Make sure you have [node.js and npm](https://docs.npmjs.com/cli/v7/configuring-npm/install) installed

Run 
```
npm install
``` 
to install all dependencies and a *package.json* file should appear.


## Backend Server

Make sure you have [Pip](https://www.makeuseof.com/tag/install-pip-for-python/) and [Python](https://www.bing.com/search?q=install+python&cvid=73a40ac4a61a49f789dd6b244d5752f7&aqs=edge.0.0l9.1955j0j9&FORM=ANAB01&PC=EDGEDSE) installed on your machine.

Then move into the backend directory

```cd api```

Then install all dependencies using pip.

```
pip install -r requirements.txt
```

Next place the secrets provided in the google drive **(secrets.txt)** into a **.env file** and place the file INSIDE the api folder.
 
 Then we need to install the driver [Windows/Linux](https://learn.microsoft.com/en-us/sql/connect/python/pyodbc/step-1-configure-development-environment-for-pyodbc-python-development?source=recommendations&view=sql-server-ver16) | [Mac](https://going.bg/posts/pyodbc_mac/) for the database connector (pyodbc).
 


# Running the application

## Backend
Make sure you are in the /api directory.

Then run
 
 ```FLASK_DEBUG=1 flask run```

to start the server

## Frontend

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

if you face any issues, try deleting your node_modules folder and package-lock.json

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
