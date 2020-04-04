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

    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, 
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass // generated ethereal password
      },
      tls:{
        rejectUnauthorized:false
      }
    });
  
    let info = await transporter.sendMail({
      from: '"Fred Foo 👻" <recipebook@gmail.com>', 
      to: `${email}`, 
      subject: "Recipe Book Service", 
      text: "Recipe", 
      html: "output" 
    });
  
    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    
});

app.get('/', (req , res) => {
    res.render('contact');
});


app.listen(2000, () => console.log('Server is running on port 2000.....'));