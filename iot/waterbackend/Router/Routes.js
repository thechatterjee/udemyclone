const Router = require('../Helper/RouteHelper');

/*!
 * Example import all module
 * const Public = require('./Public/Public');
 * 
 */

const Datasend = require('./Common/Datasend')
//const Tank = require('./Tank/TankApi')

/*!
** Example
** Register your import module into routing
    Router.use(Public)
*/

//Router.use(Datasend)
//Router.use(Tank)


module.exports = Datasend