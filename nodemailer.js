var mailer = require('nodemailer');

/*var transporter = mailer.createTransport({
	service: "gmail",
	auth: {
		user: "ajay.verma@offshoresolutions.nl",
		pass: "ajay@123"
	}
});

var mailOptions = {
	from: "ajay.verma@offshoresolutions.nl",
	to: "ajay.verma1953@gmail.com",
	subject: "Node testing",
	text: "Hello Message!"
}

transporter.sendMail(mailOptions, function(err, info){

	if(err) {
		console.log(err);
	} else {
		console.log("Email Sent:" + info.response);
	}
});
*/



mailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = mailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: account.user, // generated ethereal user
            pass: account.pass // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: 'ajay.verma@offshoresolutions.nl', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', mailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});
