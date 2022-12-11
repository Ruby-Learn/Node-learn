import * as http from "http";

/**
 * req - 요청에 대한 정보가 담겨 있는 객체
 * res - 응답에 대한 정보가 담겨 있는 객체
 */
const server = http.createServer((req, res) => {
    res.write('Hello');
    res.end();
});

server.listen(8080);
server.on('listening', () => {
    console.log('8080 포트에서 서버 대기중');
});
server.on('error', err => {
    console.log(err);
})