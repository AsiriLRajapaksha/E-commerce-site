const express = require("express");
const nodemailer = require("nodemailer");
const exphbs = require("express-handlebars");
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.engine('handlebars' , exphbs());
app.set('view engine' , 'handlebars');

app.use('/public', express.static(path.join(__dirname, 'public'))); 

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/send' ,async (req , res) => {
    console.log(req.body);
    const output = `
    <p>You have a new contact request</p>
    <p>Details of your order</p>
    <ul>
        <li>Mr.${req.body.name}</li>
        <li>You have order a Chicken Fride Rice</li>
        <li>Rs.350.00</li>
    </ul>
    <p>Thank you</p>
    <p>))+94234384930</p>
    `;

    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass // generated ethereal password
      },
      tls:{
        rejectUnauthorized:false
      }
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Fred Foo 👻" <recipebook@gmail.com>', // sender address
      to: `${email}`, // list of receivers
      subject: "Recipe Book Service", // Subject line
      text: "Recipe", // plain text body
      html: "output" // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    
});

app.get('/', (req , res) => {
    res.render('contact');
});


app.listen(3000, () => console.log('Server is running on port 3000.....'));