const { execSync } = require('child_process');

execSync('npm run build');
console.log('Finished building');
