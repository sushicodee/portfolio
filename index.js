const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
//download cv

app.get('/api/cv', (req, res) => 
res.sendFile(`${__dirname}/Curriculum vitae.pdf`)
);
//send mail
app.post('/api/form', (req, res) => {
    console.log(req.body)
    nodemailer.createTestAccount((err,account) => {
        const htmlEmail = `<h3> Contact Details </h3>
        <ul>
            <li>Email: ${req.body.email}</li>
            <li>Subject: ${req.body.subject}</li>
            <p>Message: ${req.body.body}</p>          
        </ul>`

        const transporter = nodemailer.createTransport({
            port: 587,
            host: 'smtp.ethereal.email',
            auth: {
                user: 'flo50@ethereal.email',
                pass: 'UDCQEv6zmjKjMK943d'
            }
        });

        let mailOptions = {
            from : req.body.email,
            to:'flo50@ethereal.email',
            replyTo:req.body.email,
            subject:req.body.subject,
            text: req.body.body,
            html:htmlEmail,

        }

        transporter.sendMail(mailOptions, (err , info) => {
            if(err) {
                res.send(404,'Sorry there seems to be some problem sending the Message')
                return (console.log(err));
            }
            res.send('Message Sent');
        })
    })
})

if(process.env.NODE_ENV === 'production'){
    app.use('/', express.static(path.join(__dirname,'portfolio-final','build')));
    app.get('*', (req,res) =>{
        res.sendFile(path.resolve(__dirname,'portfolio-final','build','index.html'));
    });
  
}
else{
    app.get('*', (req,res) =>{
        res.sendFile(path.resolve(__dirname,'portfolio-final','public','index.html'));
    });
}

const PORT = process.env.PORT || 3001;
app.listen(PORT , () => {
    console.log(`server runnng on port ${PORT}`);
})