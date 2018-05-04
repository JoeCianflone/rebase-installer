#! /usr/bin/env node
const shell   = require("shelljs");
const download = require('download-git-repo');

const path = process.argv[2];

console.info('Downloading some shit...');
download('github:joecianflone/rebase', `${process.cwd()}/${path}`, (err) => {
   if (err) {
      console.log(`Aww shit...`);
      console.error(err);
      return;
   }
   console.info(`...Done with that shit`);
   console.info(`Installing some shit...`)
   shell.cd(`${path}`);
   shell.cd('.bin');
   let files = shell.ls();
   files.forEach((file) => {
      shell.chmod('+x', file);
   });
   shell.cd('../');
   shell.exec('npm install');
   console.info(`...Done`);
   console.log(`Now go get some shit done.`);
});
