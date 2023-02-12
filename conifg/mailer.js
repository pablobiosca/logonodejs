const nodemailer = require("nodemailer")

async function conexion(){

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "emilio.fulano99@gmail.com", // generated ethereal user
        pass: "ntaxqfvjywaeqqon", // generated ethereal password
      },
    });

    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <emilio.fulano99@gmail.com>', // sender address
        to: "emilio.fulano99@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}


conexion()



// miconex.verify().then( () =>{
//     console.log("conexion establecida")
// })
