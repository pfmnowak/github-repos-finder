# github-repos-app

## Running the application

To test the application you can run it in Visual Studio Code using Live Server. Open a new terminal in VSC, go to "src" folder and run command live-server (if you have it installed).

## Limitations

- This app will display only last 100 updated repos of the user.
  To get all of the user repos it would be required to follow several next URLs in the HTTP Link header send with the response.
- Unauthorized user can make up to 60 API calls per hour.

## Possible improvements

- Npm and a web application bundler like Parcel or Webpack could be used.
- CSS code can be transformed to SCSS and splited to different .scss files.
- Besides the list of repos, some basic user info can be retrieved from API and displayed.
