const nodemailer = require('nodemailer');

const SubscriberModel = require('../Models/subscriberModels')
const SubscriberEmailMappingModel = require('../Models/subscriberEmailMappingModel')
const SubscriberEmailModel = require('../Models/subscriberEmailsModel')
const EmailSendindModel = require('../Models/emailSendingModel')

/**=========================================================== */
//Configuration of mail
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAILUSER,
//       pass: process.env.PASSWORD
//     }
// });

/**=========================================================== */
//CONFIGURE OF SMTP PROTOCOL
const transporter = nodemailer.createTransport({
    host: process.env.MAILHOST,
    port: process.env.MAILPORT,
    secure: false, // upgrade later with STARTTLS
    auth: {
        user: process.env.EMAILUSER,
        pass: process.env.PASSWORD,
    },
});

//EMAIL DATA MERGE FUNCTION FOR GENERATE MAIL SCHEDULAR
const MailSendController = (res)=>{

    SubscriberModel.findAll({
        attributes:['id', 'email']
    })
    .then(response=>{
        //console.log(response);
        const responseData = response.length
        for(let i = 0 ; i<responseData; i++){
            //console.log("i ----",response[i].email);
            SubscriberEmailMappingModel.findAll({
                attributes: ['subscriber_email_id', 'subscriber_emails_template_id'],
                where:{
                    subscriber_email_id: response[i].id
                }
            })
            .then(resp =>{
                if(resp){
                    const mappingModelDataCount = resp.length

                    for(let j = 0; j<mappingModelDataCount ; j++){

                        //console.log(resp[j].subscriber_emails_template_id);
                        SubscriberEmailModel.findOne({
                            attributes: ['template_name', 'subject', 'body', 'is_active'],
                            where:{
                                id: resp[j].subscriber_emails_template_id,
                                is_active : 1
                            }
                        })
                        .then(res =>{
                            //console.log("log--"+j, res);
                            // const subscribeEmailCount = res.length
                            // console.log("subscribeEmailCount", res.subject);
                            EmailSendindModel.create({
                                to_email: response[i].email,
                                email_subject: res.subject,
                                email_body : res.body
                            })
                            .then(data=>{
                                return data
                            })
                                                      
                        })
                    }
                    
                }
                //console.log("mapping", resp);
            })
            
        }
        return res.json({
            "data": "Email Generated"
        })
    })
    .catch(err=>{
        console.log(err)
    })


}

//EMAIL SEND FUNCTION =========================================
const EmailSend = (res, next)=>{
    
    EmailSendindModel.findAll({
        where: {
            is_email_send : 0
        }
    })
    .then(resp=>{
        //console.log(resp);
        const mailDataCount = resp.length
        if(mailDataCount > 0){
            
            //console.log(mailDataCount);
            for(let i = 0; i<mailDataCount; i++){
                var mailOptions = {
                    from: 'sumitchatterjee502@gmail.com',
                    to: resp[i].to_email,
                    subject: resp[i].email_subject,
                    //text: resp[i].email_body,
                    html : resp[i].email_body
                }; 

                //EMAIL SENDING FUNCTION
                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                        //console.log(error.toString());
                        EmailSendindModel.update({
                            email_error_response: "EMAIL FAILED",
                            is_email_send: 1
                        },{
                            where: {
                                id : resp[i].id
                            }
                        })
                        .then(dataResponse=>{
                            console.log("EMAIL SEND FAILED");
                            // return res.json({
                            //     "error" : error.toString()
                            // })
                            
                        })
                        next()
                      
                    } else {
                        // console.log('Email sent: ' + info.response);
                        EmailSendindModel.update({
                            is_email_send: 1
                        },{
                            where: {
                                id : resp[i].id
                            }
                        })
                        .then(data=>{
                            console.log('Email sent: ' + info.response);
                            
                        })
                        
                    }
                })
                
            }

            return res.json({
                "responseMessage" : "Email sent"
            }) 

        }else{
            return res.json({
                "responseMessage" : "ALL EMAIL ARE SEND THERE ARE NO PENDING EMAILS"
            })
        }
    }) 
}

module.exports = {
    MailSendController,
    EmailSend
}