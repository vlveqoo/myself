const whatDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const whatMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let todayFull = new Date();
let todayDay = whatDay[todayFull.getDay()];
let todayDate = todayFull.getDate();
let todayMonth = whatMonth[todayFull.getMonth()];
let todayYear = todayFull.getFullYear();

let def = todayFull;
let defDay = whatDay[def.getDay()];
let defDate = def.getDate();
let defMonth = whatMonth[def.getMonth()];
let defYear = def.getFullYear();

document.getElementById("todayDay").textContent = todayDay;
document.getElementById("todayDate").textContent = todayDate;
document.getElementById("thisYear").textContent = todayYear;
document.getElementById("thisMonth").textContent = todayMonth;

const week1 = document.getElementById("week1");
const week2 = document.getElementById("week2");
const week3 = document.getElementById("week3");
const week4 = document.getElementById("week4");
const week5 = document.getElementById("week5");

const MakeCalen = function(){
    let firstdate = 1;
    let lastdayF = new Date(defYear, def.getMonth()+1, 0);
    // console.log(lastdayF, "lastdayF")
    let lastdate = lastdayF.getDate();
    let dayone = new Date(defYear, def.getMonth(), 1);

    for(let i = dayone.getDay(); i < 7; i++){
        week1.children[i].innerHTML = firstdate;
        firstdate++
    }
    let week2day1 = Number(week1.children[6].innerHTML) + 1;

    for(let i = 0; i < 7; i++){
        week2.children[i].innerHTML = week2day1;
        week2day1++
    }
    let week3day1 = Number(week2.children[6].innerHTML) + 1;
    for(let i = 0; i < 7; i++){
        week3.children[i].innerHTML = week3day1;
        week3day1++
    }
    let week4day1 = Number(week3.children[6].innerHTML) + 1;
    for(let i = 0; i < 7; i++){
        if(week4day1<=lastdate){
            week4.children[i].innerHTML = week4day1;
            week4day1++
        }
    }
    let week5day1 = Number(week4.children[6].innerHTML) + 1;
    for(let i = 0; i < 7; i++){
        if(week5day1<=lastdate){
            week5.children[i].innerHTML = week5day1;
            week5day1++
        }
    }
    let week6day1 = Number(week5.children[6].innerHTML) + 1;
    console.log(week6day1, "week6day1")
    for(let i = 0; i < 7; i++){
        if(week6day1<=lastdate && week6day1>1){
            week6.children[i].innerHTML = week6day1;
            week6day1++
        }
    }
}

MakeCalen()

const deleteCalen = function(){
    for(let i = 0; i < 7; i++){
        week1.children[i].innerHTML = null;
    }
    for(let i = 0; i < 7; i++){
        week2.children[i].innerHTML = null;
    }
    for(let i = 0; i < 7; i++){
        week3.children[i].innerHTML = null;
    }
    for(let i = 0; i < 7; i++){
        week4.children[i].innerHTML = null;
    }
    for(let i = 0; i < 7; i++){
        week5.children[i].innerHTML = null;
    }
    for(let i = 0; i < 7; i++){
        week6.children[i].innerHTML = null;
    }
}


document.querySelector("#calenbody").addEventListener("click", function(Sday){
    
    let selectedDate = Sday.target.innerHTML;
    let selectedDay = Sday.target.getAttribute("class");

    console.log(selectedDate, "selectedDate")
    console.log(selectedDay, "selectedDay")

    document.getElementById("todayDay").textContent = selectedDay;
    document.getElementById("todayDate").textContent = selectedDate;
})

document.querySelector(".prevMonth").addEventListener("click", function(){
    let prevdayone = new Date(defYear, def.getMonth()-1, 1);
    let prevMonth = whatMonth[prevdayone.getMonth()]
    let prevYear = prevdayone.getFullYear();
    document.getElementById("thisYear").textContent = prevYear;
    document.getElementById("thisMonth").textContent = prevMonth;  
    def = prevdayone;
    defYear = def.getFullYear();
    console.log(def, "newprevdef")
    deleteCalen();
    MakeCalen();
})

document.querySelector(".nextMonth").addEventListener("click", function(){
    let nextdayone = new Date(defYear, def.getMonth()+1, 1);
    let nextMonth = whatMonth[nextdayone.getMonth()]
    let nextYear = nextdayone.getFullYear();
    document.getElementById("thisYear").textContent = nextYear;
    document.getElementById("thisMonth").textContent = nextMonth;  
    def = nextdayone;
    defYear = def.getFullYear();
    console.log(def, "newnextdef")
    deleteCalen();
    MakeCalen();
})


console.log(def, "def")