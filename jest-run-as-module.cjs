// can change type in package json to module
// thus making jest run with imports

// but change back otherwise backend and wdio won't work!

// also don't run the backend with nodemon
// if it needs to be up during jest run!

const fs = require('fs');
const path = require('path');
const ppath = path.join(__dirname, 'package.json');
const package = require(ppath);
package.type = type = process.argv.slice(2)[0] || 'commonjs';
fs.writeFileSync(ppath, JSON.stringify(package, null, '  '));