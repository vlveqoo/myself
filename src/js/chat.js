import { CHAT_HISTORY, generateHexCode } from './app.js';

console.log('데이터 체크 : ', CHAT_HISTORY);

const chatView = document.querySelector(".chat-view");
const msgList = document.querySelector(".chat-view msg-list");
const textBox = document.querySelector(".chat-view msg-list text-box");
const dataList = document.querySelector(".chat-view msg-list text-box ul"); //for문 돌릴 과거 기록
const date = document.querySelector(".chat-view msg-list text-box p");
const historyName = document.querySelector(".chat-view msg-list text-box ul li span:first-child");
const historyText = document.querySelector(".chat-view msg-list text-box ul li span:nth-child(2)");
const historyTime = document.querySelector(".chat-view msg-list text-box ul li span:last-child");

const newMsg = document.querySelector(".chat-view msg-list new-msg span");
const useMsg = document.querySelector(".create-input");
const submit = document.querySelector("input.btn");

// dataList for문 돌려서 각각의 객체 키값을 설정하여 var값을 html태그 내용으로 출력합니다.
const histObj = CHAT_HISTORY

window.addEventListener("load", function(ev){

    for(const i of histObj) {
        // console.log('for..of array', i);
        // innerHtml에 값넣기
        console.log('usename : ',i.username);
        console.log('text : ',i.text);
        console.log('createdAt : ',i.createdAt);
        console.log('colorCodes : ',i.colorCode);
        makeDate(i.createdAt);
        makeTime(i.createdAt);
    }

// function으로 Date 배열 자르기 함수
// 1. 날짜
// 2. 시간
    function makeDate (e) {
        console.log(e.split("",10).join(""));
        return e.split("",10).join("");
    }

    function makeTime (e) {
        console.log(e.slice(11,16));
        return e.slice(11,16);
    }
})

// 1. useMsg에 새로운 텍스트가 생성되면, 전송 버튼이 활성화 됨.
// 2. '' 빈값이면 버튼이 비활성화됨
// 3. useMsg의 value 값이 createMsg의 innerHtml에 출력됨
function createMsg (e) {
    console.log("메세지 출력", e);
    return;
}

useMsg.addEventListener("keyup", function(event) {
    console.log('input 체크', useMsg);
    const targetVar = event.target.value;
    console.log('inputVar',targetVar);

    if(targetVar === ''){
        return submit.setAttribute("disabled", "");
    } else {
        submit.removeAttribute("disabled");
        // createMsg(targetVar);
        submitBtn(targetVar);
        return ;
    };
})

function submitBtn(e) {
    console.log('메세지 event : ', e)
    return;
}

submit.addEventListener("click", function(e) {
    submitBtn(e);
    // input var reset
    useMsg.value = null;
    if(e === '') return submit.setAttribute("disabled", "");
    console.log("메세지 전송")
})
