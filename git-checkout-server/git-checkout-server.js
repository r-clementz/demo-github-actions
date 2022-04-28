//use the build in mini web server in node -http
const http = require ('http');
//Use the built in execSync command that can run command line/ bash comamand
const {exeSync, execSync} = require('child_process');


//Set up a small server that only check out things if know the secret hash
const server = http.createServer(function (req,res){
    res.end('Ok');
    if (req.url === '/URL1234567890LALALLA')
    //do a git pull
    execSync('git pull');
    console.log('has run git pull')

});
//start up the server 
server.listen(9876,()=>console.log('Listening on http://localhost:9876'));


/* rputing.js on server 
{
    "yogadev.se": 4000,
    "www.yogadev.se":{
        "redirect":"yogadev.se"
    },
    "cheeky.yogadev.se":9876

}*/
/* index.js 


 */