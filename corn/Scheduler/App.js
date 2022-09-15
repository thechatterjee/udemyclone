const App = require('./system/coreSystem'); // import custom core system || required for all

const Router = require('./Router/Routes');

App.use(Router);

App.use('*', (req, res, next)=>{
    res.json({
        msg : "hello"
    })
})

try{

    App.listen(3000)

} catch(err){
    console.log("Unable to Connect app");
}