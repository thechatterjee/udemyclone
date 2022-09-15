const {MailSendController} = require('../Controllers/MailSendController')
const MailSending = (req, res)=>{
    if(req.method === "GET"){
        
        MailSendController(res)
        // return res.json({
        //     "responseCode" : 200,
        //     "responseMessage" : "Success mail calling"
        // })
    }
}

module.exports = MailSending