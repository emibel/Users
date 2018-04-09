## Users 

The app bar should allow the user to return to the landing page, logout/login or access the administrative interface if logged in.

## The landing page
The landing page should be basic and allow the user to either access the form or connect to the administrative interface. If the user is already connected, change the login button to a link to the administrative interface.
The form page
The form page should contain a simple form stored in redux. When the submit button is clicked, the form should be sent to the server to be stored inside the database.
The form should contain these fields :
Firstname (Required)
Lastname (Required)
Email address (Required, must be a valid email address) Phone number (Optional, must be a valid phone number) Address (Required)
City (Required)
Postal Code (Requried, must be a valid postal code) Country (Required, select with all UN recognized country) Comments (Optional, textarea)
         
## Login page
The customer should be able to login using preconfigured user accounts inside the database. It should be a simple page that automatically redirects to the administrative page if the user is already logged in.

## Administrative Page
An administrator logged in should be able to see a list of all the forms saved through the form page in a list. When clicking on a list item, a modal window with the content of the form should be displayed. We do not need to be able to edit elements in the list, but it should reactively update whenever a new form is added without needing to refresh the page.
Furthermore, this page should be locked to unconnected user, if a user is on this page and not logged in, he should immediately be redirected to the login page.

## Trigger system
In addition to that application, we need a system to be able to monitor the various actions that happen in the application. For this project, you should simply cause a console.log that writes the action’s data in the console as well as save the action to your database. We would like to log these actions :
 A user access the application, should only trigger once until the user leaves the application (closes the tab or window)
- A user logs in
- A user logs out
- A user access the administrative interface
- A user create a new form (Access the form page, but should only trigger once until he has submitted the form, has left the application or an hour has passed)
- A user submits a form
- A user leaves a form unfilled (An hour has passed since he accessed the form page and he did not edit the form or he left the application after accessing the form page).

