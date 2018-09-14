### In this assignment you will focus on creating an app that is used to deliver a survey tool. The app has two main roles, the patient role and admin role. The app should provide the following requirements: 

* You are not allowed to use frameworks such as Firebase, or Parse.com. 
* You should use an online provisioning provider, such as Amazon AWS, or Microsoft Azure, or others.
* Your api should provide sign in, login, and logout features.
* Your api should provide a mechanism to allow the user to access protected resources after a successful login. For example, the protected api could return the user's profile information (name, age, weight, address). This api should only work for logged-in users.
* Your api should pirovide an error reporting mechanism.
* The API can be implemented using any language of your choice. 
* The API should be deployed on a remote server, which means local host is not acceptable for your submission.

### Mobile App

* The mobile app should provide authentication, using a username and password mechanism. This app is only used by the patient role.
* The mobile app should present the survey questions in the survey provided [Link (Links to an external site.)Links to an external site.]. The survey questions should be presented in a usable way to the user and should not be presented as a long list of questions. The user should be able to move from one screen to the other only when they answer the questions on the current app view. Your survey should provide validation to the user input and should alert the user when incorrect input is provided.
* The user responses should be stored on the server and all communication with the server should be enabled through APIs.
* In addition to the username/password authentication method, assuming the patient is at the clinic when they are logging into the app, and the admin is also in the clinic when they create the new user credentials.
	* Create an approach to pass on the user credentials or authentication information to the app other than giving the username and password to the patient. Your approach should not simply provide the user with the username and password on a piece of paper. You are allowed to use other communication channels that are available in on the phone.
	* The created approach should enable the admin role to pass on the user credentials to the a specific tablet for a specific user. The security of the approach is essential.
	* The app should also allow username and password in addition to your new approach.

### Server Side

* The server app should include a web site portal and web apis.
* The web portal is only accessible by the admin role.
	* This portal should enable the admin to create and register new patients. The username and passwords of the new patients will be provided to the patients on check in.
	* List the patients in the system, you should consider using the DataTables (Links to an external site.)Links to an external site.Links to an external site. library.
	* Review patient survey responses and score the survey based on the survey scoring scale.
	* Create a printable report of the patient responses to the survey.
* The web apis
	* Create all the apis needed for the mobile app authentication, and survey management. 
	* After authentication a JWT token should be used to track and verify the authenticated user.
	* The api responses should be in JSON format.

### Submission should include:

* Create a Github or Bitbucket repo for the assignment.
	* Push your code to the created repo. Should contain both the mobile and web code. 
	* On the same repo create a wiki page describing your api design and implementation. The wiki page should describe the API routes, DB Schema and all the assumptions required to provide authentication. In addition describe any data that is stored on the device or on the server.
	* Include the Postman file in the repo.

* Demo your API using the Postman Chrome Plugin. The API should be demonstrated using Postman, you should create an api component in Postman for each of your created APIs.
* Demo your API using a mobile app that uses your implemented api.
* A 5 minute (max) screencast to demo your mobile and web application.
