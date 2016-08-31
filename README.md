# Rest-Emailing-API
Node Js API  to send email Verification Code 



Step1 : Register your Application at Google APIs Console
XOAuth2 is similar with OAuth2, so you need to register your application to Google.
Jump to Google APIs Console, then create a project if you don't have, and open "API Access" page.

In this here, when you create a client ID, put "https://developers.google.com/oauthplayground" into the text box for Redirect URIs.


Then you must be obtained your client ID & client secret.



Step2 : Open Google OAuth2.0 Playground.
You will obtain refreshToken & accessToken on this step at Google OAuth2.0 Playground.
Open the page from https://developers.google.com/oauthplayground, then click the gear button on the right-top.



Set your client ID & client secret that obtained on step2, and select "Access token location:" as "Authorization header w/ Bearer prefix". Then close it.

And set up the scopes. Put "https://mail.google.com/" into the textbox below the service scope list.



Then click [Authorize APIs] button.

Step3 : Obtain the "refresh token".
After OAuth2.0 authorization, click [Exchange authorization code for tokens] button.
You can get your refresh token.


Step4 : Replace the  details
Now change the line number 28, 19, 20 with the corresponding data that you obtained from the above steps.

