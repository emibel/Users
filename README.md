## Running the app
Steps to run the app.

1 Clone the repo

2 run 'npm install'

3 install 'json server'  ->  https://www.npmjs.com/package/json-server

4 got to the users folder and run 'json-server --watch  data.json'. this will lunch a fake api runnin on localhost:3000

5 go to another terminal and in the users folder run 'npm start'


## Users 

The app bar allow the user to return to the landing page, logout/login or access the administrative interface if logged in.

## The landing page
The landing page is basic and allow the user to either access the form or connect to the administrative interface. If the user is already connected, change the login button to a link to the administrative interface.

## The form page
The form page contains a simple form stored in redux. When the submit button is clicked, the form is sent to the server to be stored inside the database.

The form should contain these fields :

-Firstname (Required)
-Lastname (Required)
-Email address (Required, is a valid email address)
-Phone number (Optional, is a valid phone number)
-Address (Required)
-City (Required)
-Postal Code (Requried, is a valid postal code)
-Country (Required, select with all UN recognized country)
-Comments (Optional, textarea)
         
## Login page
The customer is able to login using preconfigured user accounts inside the database.
It is a simple page that automatically redirects to the administrative page if the user is already logged in.

## Administrative Page
An administrator logged in is able to see a list of all the forms saved through the form page in a list. When clicking on a list item, a modal window with the content of the form is displayed.
there is need to be able to edit elements in the list, but it should reactively update whenever a new form is added without needing to refresh the page.
Furthermore, this page is locked to unconnected user, if a user is on this page and not logged in, he is immediately be redirected to the login page.

## Trigger system
In addition to that application, there is a system to be able to monitor the various actions that happen in the application. For this project, we simply cause a console.log that writes the action’s data in the console as well as save the action to your database. We would like to log these actions :

- A user access the application, should only trigger once until the user leaves the application (closes the tab or window)
- A user logs in
- A user logs out
- A user access the administrative interface
- A user create a new form (Access the form page, but only trigger once until he has submitted the form, has left the application or an hour has passed)
- A user submits a form
- A user leaves a form unfilled (An hour has passed since he accessed the form page and he did not edit the form or he left the application after accessing the form page).

