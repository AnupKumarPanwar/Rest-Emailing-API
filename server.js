var express=require('express');
var nodemailer = require("nodemailer");
var bodyParser = require('body-parser');
var app=express();

app.use(bodyParser.json())
/*

    Here we are configuring our SMTP Server details.
    STMP is mail server which is responsible for sending and recieving email.
*/
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        XOAuth2: {
	      user: "username@gmail.com", // Your gmail address.
	       pass: "XXXXXXXXXXXXXXXX",                                     // Not @developer.gserviceaccount.com
	      clientId: "XXXXXX-XXXXXXX-XXXXX.apps.googleusercontent.com",
	      clientSecret: "XXXXXXXXXXXXXXXX",
	      refreshToken: "XXXXXXXXXXXXXXXX"
	    }
    }
});
/*------------------SMTP Over-----------------------------*/

/*------------------Routing Started ------------------------*/

// app.get('/',function(req,res){
//     res.sendfile('index.html');
// });
app.get('/:to/:text',function(req,res){
    var mailOptions={
        to : req.params.to,
        subject : 'Subject',
        html : 'Hi '+req.params.to+',<br>&nbsp; &nbsp; &nbsp; Welcome to Nodemailer . Message <b>'+req.params.text + ' </b>. <br><br>Thank You<br>Have a Good Day'
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        res.end("error");
     }else{
            console.log("Message sent: " + response.message);
        res.end("sent");
         }
});
});

/*--------------------Routing Over----------------------------*/
app.listen(Number(process.env.PORT || 80));













	




