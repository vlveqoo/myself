let randomNarr = [];

function makeRandomNarr() {
    randomNarr[0] = Math.floor(Math.random()*10)

    for(i = 1; i < 3;){
        makeNum = Math.floor(Math.random()*10)
        if(!randomNarr.includes(makeNum)){
            randomNarr[i] = makeNum;
            i++
        } else {
            makeNum = Math.floor(Math.random()*10)
        }
    }
}
makeRandomNarr()
console.log(`randomNarr is ${randomNarr}`);

let userNarr = [];

const form = document.querySelector("#baseform")

const submitBtn = document.getElementById("submitBtn")
const resetBtn = document.getElementById("resetBtn")

const inputNum = document.querySelector("#inputNum")
const strike = document.querySelector("#strike")
const ball = document.querySelector("#ball")
let strikeNum = 0;
let ballNum = 0;
let tryNum = 0;



const resetEverything = function() {
    makeRandomNarr()
    console.log(`New randomNarr is ${randomNarr}`)
    strike.innerText = 0;
    ball.innerText = 0;
    tryNum = 0;
    document.getElementById("inputNum").value = "";
    document.querySelector("#yourNum").textContent = "";

    console.log(`tryNum is ${tryNum}`);
}

resetBtn.addEventListener("click", resetEverything);

form.addEventListener("keydown", (e) => {
    if(e.keyCode == 13){
        submitBtn.click();
        e.preventDefault(); //엔터키로 이벤트 2번눌림 방지
    }
    
})

form.addEventListener('submit', (e) => {
   let input = document.getElementById("inputNum").value;
   console.log("초기진입")
   e.preventDefault();
   document.querySelector("#yourNum").textContent = document.getElementById("inputNum").value
   tryNum++;

    if(tryNum<=10){
        console.log("10보다작당")
    } else {
        console.log("10보다크지롱")
        alert("시도횟수가 10번을 초과하였습니다. 강제 리셋됩니다")
        resetEverything()
        ball.innerText = 0;
        strike.innerText = 0;
    }

   
    if(!isNaN(input)){
        if(input.length === 3){
        userNarr = input.split("");
        console.log("인풋검증통과:인풋값 3자리 숫자")

        let ballCount = 0;
            for(i = 0; i < 3; i++){ 
                if(userNarr.includes(String(randomNarr[i]))){
                    ballCount++;             
                } 
            } 
            // console.log(`ballCount is ${ballCount}`);
            ball.innerText = ballCount;
            
            if(ball.textContent > 0){
                let strikeCount = 0;
                for(i = 0; i < 3; i++){
                    if(userNarr[i] == randomNarr[i]){
                        strikeCount++;
                    }
                }
                strike.innerText = strikeCount;
            }
        } else {
            alert("3자리로된 숫자를 입력하십시오")
            console.log("인풋값3자리아님")
        } 
    } else {
        console.log("인풋값숫자아님")
        alert("숫자를 입력하십시오");
    }

        console.log("끝까지다나오는지확인")
        console.log(`ballValue is ${ball.textContent}`);
        console.log(`tryNum is ${tryNum}`);
        document.querySelector("#tryNum").textContent = tryNum;
        document.getElementById("inputNum").value = "";
}); 
