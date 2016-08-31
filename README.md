# Rest-Emailing-API
Node Js API  to send email Verification Code 



Step1 : Register your Application at Google APIs Console
XOAuth2 is similar with OAuth2, so you need to register your application to Google.
Jump to Google APIs Console, then create a project if you don't have, and open "API Access" page.

In this here, when you create a client ID, put "https://developers.google.com/oauthplayground" into the text box for Redirect URIs.


![alt text](http://2.bp.blogspot.com/-G_ASnkKaEHE/UbjH6PiG1RI/AAAAAAAALNs/CsMiKc25fvk/s1600/Screen+Shot+2013-06-12+at+12.04.32+PM.png)
Then you must be obtained your client ID & client secret.



Step2 : Open Google OAuth2.0 Playground.
You will obtain refreshToken & accessToken on this step at Google OAuth2.0 Playground.
Open the page from https://developers.google.com/oauthplayground, then click the gear button on the right-top.

![alt text](http://3.bp.blogspot.com/-lbkEDg5dzOc/UbjKl8SDu8I/AAAAAAAALOM/lasRQpIxM6s/s1600/Screen+Shot+2013-06-12+at+12.21.43+PM.png)

Set your client ID & client secret that obtained on step2, and select "Access token location:" as "Authorization header w/ Bearer prefix". Then close it.

And set up the scopes. Put "https://mail.google.com/" into the textbox below the service scope list.



![alt text](http://4.bp.blogspot.com/-YQUxwQGhnB0/UbjMt7u22pI/AAAAAAAALOc/FhCm8ORKlVQ/s1600/Screen+Shot+2013-06-12+at+12.27.51+PM.png)
Then click [Authorize APIs] button.




Step3 : Obtain the "refresh token".
After OAuth2.0 authorization, click [Exchange authorization code for tokens] button.
You can get your refresh token.

![alt text](http://1.bp.blogspot.com/-r9a7dqft9VI/UbjOLZ9RlbI/AAAAAAAALO0/ObqI4CGgpAA/s1600/Screen+Shot+2013-06-12+at+12.36.34+PM.png)


Step4 : Replace the  details
Now change the line number 28, 19, 20 with the corresponding data that you obtained from the above steps.






Now run the server with :
			Node server.js

Acces the API in the following format :
			Host/email/verificationCode
Eg:
			Localhost/1anuppanwar@gmail.com/1234
			

 

