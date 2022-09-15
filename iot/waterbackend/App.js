const App = require('./System/coreSystem'); // import custom core system || required for all

const Router = require('./Router/Routes');

App.use(Router);

App.use('*', (req, res, next)=>{
    res.json({
        msg : "404 page"
    })
})

try{

    App.listen(3020)

} catch(err){
    console.log("Unable to Connect app");
}