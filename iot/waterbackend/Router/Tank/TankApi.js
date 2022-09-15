const router = require('../../Helper/RouteHelper');

/*!
 * Example import all module
 * const Public = require('./Public/Public');
 * 
 */

const TankRegisterApi= require('../../App/Api/v1/tankRegistrationApi')

/*!
** Example
** Register your import module into routing
    router.use(Public)
*/
router.use('/api/v1/tank-register',TankRegisterApi)


module.exports = router