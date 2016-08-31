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
	      user: "youremail@gmail.com", // Your gmail address.
	       pass: "yourpassword",                                     // Not @developer.gserviceaccount.com
	      clientId: "496112663784-227c9tum8bjdtdp74duu0p4195h8bdng.apps.googleusercontent.com",
	      clientSecret: "qHHApUumnhM9Aqir7OZTVNTC",
	      refreshToken: "1/bGiuPq1orYXhmWSSvRI-w6miHy6G3YNAOrGVsemMC3c"
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
        subject : 'Youth Canvas Verification Email',
        html : 'Hi '+req.params.to+',<br>&nbsp; &nbsp; &nbsp; Welcome to Youth Canvas Family. Your Verification Code is <b>'+req.params.text + ' </b>. <br><br>Thank You<br>Have a Good Day'
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













	




