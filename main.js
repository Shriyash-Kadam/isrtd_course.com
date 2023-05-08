function allClass() {
    window.location = "index.html";
}

function classQuiz() {
    window.location = "quiz.html";
}

function profile(){
    window.location = "profile.html";
}

function playCls() {
    window.location.href = "";
}

function quiz1(){
    window.location.href = ""
}

function quiz2(){
    window.location.href = ""
}

function quiz3(){
    window.location.href = ""
}

function quiz4(){
    window.location.href = ""
}

function quiz5(){
    window.location.href = ""
}

function quiz6(){
    window.location.href = ""
}

function quiz7(){
    window.location.href = ""
}

function quiz8(){
    window.location.href = ""
}

function quiz9(){
    window.location.href = ""
}

function quiz10(){
    window.location.href = ""
}

function quiz11(){
    window.location.href = ""
}

function quiz12(){
    window.location.href = ""
}

function quiz13(){
    window.location.href = ""
}

function quiz14(){
    window.location.href = ""
}

function quiz15(){
    window.location.href = ""
}

function updateTime() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').textContent = hours + ':' + minutes + ':' + seconds;
  }
  setInterval(updateTime, 1000); // Update every second

function logOut(){
    window.location = "login.html"
}