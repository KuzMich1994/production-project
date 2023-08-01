const { join: joinPath } = require('path');
const fs = require('fs');

fs.rmSync(joinPath(__dirname, '..', 'node_modules', '.cache'), { recursive: true, force: true });
