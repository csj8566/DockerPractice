const express = require('express'); // express 모듈을 가져옴. express 모듈이란 웹 서버를 쉽게 만들 수 있게 해주는 모듈이다.
const app = express(); // express 함수를 실행하여 app 객체를 초기화한다.

// 8080 포트에서 서버를 실행. 정상적으로 실행되면 callback 함수를 실행한다.
app.listen(8080, () => {
    console.log("서버 실행 중 http://localhost:8080"); // 서버가 정상적으로 실행되었을 때에만 이 메시지가 출력됨됨
}); 

// HTTP GET 요청을 처리하는 라우팅 코드
// get(path, handler
// handler : (요청 객체 -> 클라이언트의 요청 정보를 담고 있음, 응답 객체 -> 클라이언트에게 응답을 보내는 객체)
app.get('/', (req, res) => {
    res.send("안녕하살법333"); // 클라이언트에게 "안녕"이라는 문자열을 응답으로 보냄
});