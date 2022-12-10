const fs = require('fs');

const readStream = fs.createReadStream('./README.md');
const writeStream = fs.createWriteStream('./README_COPY.md');
readStream.pipe(writeStream);   // readStream 과 writeStream 을 pipe 를 통해 연결