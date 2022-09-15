const router = require('../Helper/RouteHelper');

const MailSendMergeData = require('../App/Api/MailSend');
const EmailSend = require('../App/Api/EmailSendApi')

router.use('/mail-send-merge-data', MailSendMergeData)
router.use('/email-send', EmailSend)

module.exports = router