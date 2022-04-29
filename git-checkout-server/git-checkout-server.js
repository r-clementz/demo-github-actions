//use the build in mini web server in node -http
const http = require ('http');
//Use the built in execSync command that can run command line/ bash comamand
const {execSync} = require('child_process');
//path helps build file path
const path = require('path');
const dbTemplatePath = path.join(__dirname, ('../backend','database','bookshop-temolate.db'));
const dbPath = path.join(__dirname,('../backend','database','bookshp.db'));
//For github secret 
const secret = process.env.DEPLOYMENY_KEY
if(!secret) {
    //if secret key is not provided, it will be shut down 
    console.log('You need to provide the DEPOLOYMENT_KEY as an environmental variable');
    Process.exit(1);
    } 

//A function that does all necessary git checkout clean up etc
function checkout(){
    execSync('git pull');
    execSync('npm install');
    execSync('rm' + dbPath);
    execSync('cp'+dbTemplatePath+''+dbpath);
    execSync('npm run build');
    execSync('pm2 resatrt main-app');

    console.log('pulled, copied db and restarted server ')
}

//Set up a small server that only check out things if know the secret hash
const server = http.createServer(function (req,res){
    res.end('Ok');
    if (req.url === '/' + secret)
    checkout();
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