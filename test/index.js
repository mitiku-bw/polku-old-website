var express=require('express');
var nodemailer = require("nodemailer");
var app=express();
var path = require('path');
/*
    Here we are configuring our SMTP Server details.
    STMP is mail server which is responsible for sending and recieving email.
*/
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "boxcus.order@gmail.com",
        pass: "Polku000"
    }
});
/*------------------SMTP Over-----------------------------*/

/*------------------Routing Started ------------------------*/

app.get('/',function(req,res){
//    res.sendfile('index.html');
    res.sendFile(path.join(__dirname + '/index.html'));
    res.sendFile('index.html', { root: (__dirname) });
});
app.get('/send',function(req,res){
    var mailOptions={
        from: req.query.from,
        to : "boxcus.order@gmail.com",
        subject : req.query.subject,
        text : req.query.text
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

app.listen(3000,function(){
    console.log("Express Started on Port 3000");
});