const router = require('../../Helper/RouteHelper');

//Middleware
const IsAuth = require('../../Middleware/Auth')

/*!
 * Example import all module
 * const Public = require('./Public/Public');
 * 
 */

const DataReceiveApi = require('../../App/Api/v1/datareceiveApi')
const UserRegister = require('../../App/Api/v1/userRegistrationApi')
const CreateLogin = require('../../App/Api/v1/createLoginApi')
const DoLogin = require('../../App/Api/v1/loginApi')
const TankRegisterApi= require('../../App/Api/v1/tankRegistrationApi')
const TankType = require('../../App/Api/v1/typeOfTankApi')
const FetchTankDetails = require('../../App/Api/v1/fetchUserTankApi')
const DeviceRegister = require('../../App/Api/v1/deviceRegisterApi')
const TankView = require('../../App/Api/v1/tankViewApi');

/*!
** Example
** Register your import module into routing
    router.use(Public)
*/
router.use('/api/v1/datasend',DataReceiveApi)
router.use('/api/v1/user-registration',UserRegister)
router.use('/api/v1/login-register', CreateLogin)
router.use('/api/v1/login',DoLogin)

router.use('/api/v1/tank-register', IsAuth , TankRegisterApi)
router.use('/api/v1/typeoftank', IsAuth ,TankType)
router.use('/api/v1/fetch-user-tank', IsAuth ,FetchTankDetails)
router.use('/api/v1/tank-view', IsAuth, TankView)
router.use('/api/v1/device-register', IsAuth, DeviceRegister)


module.exports = router