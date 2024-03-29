# github-repos-finder

This TypeScript React app allows to search & view GitHub users and their public repositories.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Used technologies

- React
- TypeScript
- SASS (SCSS)
- Modern JavaScript features
- Flexbox
- SVG

## Running the application

To test the application you can run it in the development mode by running `npm start` in the console.

You can also test it live here: https://pfmnowak.github.io/github-repos-finder/

## Limitations

- This app will display only last 100 updated repos of the user.
  To get all of the user repos it would be required to follow several next URLs in the HTTP Link header send with the response.
- Unauthorized user can make up to 60 API calls per hour.

## Possible improvements ToDo

- Add Unit Tests

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

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
