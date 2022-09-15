const{EmailSend} = require('../Controllers/MailSendController')

const EmailSendApi = (req, res, next)=>{
    if(req.method === "GET"){

        EmailSend(res, next)
        // return res.json({
        //     "responseCode" : 200,
        //     "responseMessage" : "Success mail calling"
        // })
    }
}

module.exports = EmailSendApi