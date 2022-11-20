# [Full explanation of the Git/Github workflow](https://www.freecodecamp.org/news/how-to-use-git-and-github-in-a-team-like-a-pro/)

Please note the 'master' branch is our production branch, we will be working on the 'development' branch. You can create your own branch off of the 'development'. When cloning please make sure your branch is set to development.
Use:
```
git checkout -t origin/development
```

# [Cloning a React App](https://javascript.plainenglish.io/how-to-clone-an-app-from-github-446541a0302d)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running backend server
To run the backend server, first you must move to the backend directory

```cd api```

Then install flask (optionally use a [venv](https://www.tutorialspoint.com/how-to-create-a-virtual-environment-in-python) to contain packages to this project)

 ```pip install flask```
 
 Then we need to [install the driver](https://learn.microsoft.com/en-us/sql/connect/python/pyodbc/step-1-configure-development-environment-for-pyodbc-python-development?source=recommendations&view=sql-server-ver16) for the database connector
 
 Then once you have installed the db connector make sure you are in the right directory and run
 
 ```FLASK_DEBUG=1 flask run```

Now you can use postman or your application to test the api endpoints.

### Current endpoints

[https://www.educba.com/flask-post-request/#:~:text=Syntax%20of%20Flask%20POST%20request%201%201.%20Configure,key%3A%20...%204%204.%20Retrieve%20parameter%20from%20JSON.](Making Api Requests with Postman)

```api/json_schemas.py``` to see json formats, but you must put your json similar to this. -> ex: {"data" : {"username": "<username>", "password": "<password>"}}
```api/json_responses.py``` to see json responses.

-- sign in auth: app.route("/sign_in", methods=["GET"])

-- customer sign up: @app.route("/sign_up", methods=["POST"])

-- employee sign up: @app.route("/emp_sign_up", methods=["POST"])


## Available Scripts

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
