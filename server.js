const express = require("express")
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const nodemailer = require("nodemailer");
require('dotenv').config()
const port = process.env.PORT || 3000;
const compression = require('compression');

app.use(compression());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')));


app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.post('/redheads/api/contact',(req,res) =>{
    console.log("posting")
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.ADDRESS,
          pass: process.env.PASSWORD
        }
      })

    const mailOptions = {
        from: req.body.email,
        to: process.env.ADDRESS,
        subject: 'HighTide Contact Us Message',
        text: `
        This is a Automatic Message from Hightide's Contact Page.

        Name: ${req.body.name}

        Email: ${req.body.email}

        Message: ${req.body.msg}`
    };
    
    transport.sendMail(mailOptions, (error,info) =>{
        if(error){
            // console.log(error)
            res.status(400).send({sttatus:false})
        } else {
            // console.log("Email Sent: " +info.response)
            res.status(200).send({status: true})
        }
    })
})

app.get('*',function (req, res) {
    res.redirect('/');
});

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))