// const user = require("../models/userRegistration");
const nodemailer = require("nodemailer");
require("dotenv").config();

exports.user = async (req,res) =>{
    const {name,email,number,date} = req.body;
    // const dataEntry = await user.create({name,email,number,date});

    const transporter = nodemailer.createTransport({
        service : "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
      
      // async..await is not allowed in global scope, must use a wrapper
      async function main() {
        // send mail with defined transport object
        const info = await transporter.sendMail({
          from: process.env.EMAIL_USER, // sender address
          to: ["gopala2846@gmail.com","bt22cse159@iiitn.ac.in"], // list of receivers
          subject: "Client", // Subject line
          text: `A client named ${name} appointed you for the checkup on ${date}.
          His email : ${email},
          His contact no. : ${number}`, // plain text body
        //   html: "<b>Hello world?</b>", // html body
        });
      
        console.log("Message sent: %s", info.messageId);
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
      }
      
      main().catch(console.error);



    return res.status(200).json({
        message: "successfull",
    })
}
