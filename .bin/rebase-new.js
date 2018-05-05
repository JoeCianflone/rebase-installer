#! /usr/bin/env node
const shell   = require("shelljs");
const download = require('download-git-repo');

let path = '';
let builder = 'npm';

if (process.argv[2] !== undefined) {
   if (process.argv[2].startsWith('--')) {
      builder = process.argv[2].replace('--', '');
   } else {
      path = process.argv[2];
   }
}

if (process.argv[3] !== undefined) {
   if (process.argv[3].startsWith('--')) {
      builder = process.argv[3].replace('--', '');
   } else {
      path = process.argv[3];
   }
}

if (shell.ls().length > 0) {
   console.log (`folder ${path} isn't empty...aborting`);
   process.exit()
}

console.info('Downloading some shit...');
download('github:joecianflone/rebase', `${process.cwd()}/${path}`, (err) => {
   if (err) {
      console.log(`Aww shit...`);
      console.error(err);
      process.exit();
   }
   console.info(`...Done with that shit`);
   console.info(`Installing some shit...`)
   if (path !== '') {
      shell.cd(`${path}`);
   }
   shell.cd('.bin');
   let files = shell.ls();
   files.forEach((file) => {
      shell.chmod('+x', file);
   });
   shell.cd('../');
   shell.exec(`${builder} install`);
   console.info(`...Done`);
   console.log(`Now go get some shit done.`);
});
