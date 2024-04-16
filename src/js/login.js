const userName = document.querySelector('input');
const loginBtn = document.querySelector('button');
const errorMsg = document.querySelector('.error-msg')


function validNameSpecial(userName){
  return !(/[^A-Za-z0-9ㄱ-ㅎ가-힣]/gi).test(userName);
}

function validNamelength(userName){
  if(String(userName).length<21 && String(userName).length>1){
    return true;
  } else {
    return false;
  } 
}

function validName(userName){
   // console.log(validNameSpecial(userName), validNamelength(userName))
  if(validNameSpecial(userName) && validNamelength(userName)){
    return true;
  } else {
    return false;
  }
}

const clicked = () => {
  if(validName(userName.value)){
    window.location.href = "./chat.html";
  } 
}

const inputWord = () => {
  // 기본값 설정: 오류메세지 보이지않음 & 버튼 비활성화
  console.log('입력갑:', userName.value)
  errorMsg.children[0].style.display = "none";
  errorMsg.children[1].style.display = "none";
  errorMsg.children[2].style.display = "none";
  loginBtn.setAttribute("disabled", "")
  // 유효할 경우
  if(validName(userName.value)){
    loginBtn.removeAttribute("disabled");
  } else {
// 오류메세지 표시
    if(userName.value === ""){
      // 빈칸일시 display block처리는 안하고 끝냄 // keyup 이벤트는 백스페이스, 딜리트를 잡아내지 못한다
    } else {
      if(!validNameSpecial(userName.value) && !validNamelength(userName.value)){
        console.log("둘다오류")
        errorMsg.children[2].style.display = "block";
      } else {
          if(!validNameSpecial(userName.value)){
            console.log("특문잘못");
            errorMsg.children[1].style.display = "block";
          } else {
            console.log("길이잘못");
            errorMsg.children[0].style.display = "block";
          }
    }
  }
    }
}

loginBtn.addEventListener('click', clicked)
userName.addEventListener('keyup', inputWord)

userName.addEventListener("keydown", (key) => {
  if(key === "enter") {
    // e.preventDefault(); //엔터키로 이벤트 2번눌림 방지
    loginBtn.click();  
  }
  // loginBtn.click();
})

// userName.keyup(function(e){
//   if(e.key == "enter"){
//     loginBtn.click();
//   }
// });