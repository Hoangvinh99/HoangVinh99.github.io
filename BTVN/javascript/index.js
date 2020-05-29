function bai1(){
    let name = prompt("What your name ?");
    let age = prompt("How old are you?");
    let temp = document.getElementById("bai1")
    temp.innerHTML = "Hello " +"<b>" + name.toUpperCase()+ "</b>" + "<br>" + "Your Name: " +"<u>" +age+"</u>";
}
// het bai 1
function bai2(){
    let content = document.getElementById("bai2");
    alert(content.value);
}
// het bai 2,3
function bai45(){
    let temp = new Date();
    let currentYear = temp.getFullYear();
    
        let getText = prompt("Please enter your birth year: ");
        if(currentYear - getText < 0){
            alert("Tuoi Khong Hop Le");
            getText = prompt("Please enter your birth year: ");
            alert("Tuoi Cua Ban La: " + (currentYear - getText))
        }
        else{
            alert("Tuoi Cua Ban La: " + (currentYear - getText))
        }
}
// hết bài 4,5
function bai67_bg_red(){
    document.getElementById("box_content1").style.backgroundColor = "red"
}
function bai67_bg_blue(){
    
    document.getElementById("box_content1").style.backgroundColor = "blue"
}
function choose(){
    let option = document.getElementById("color")
    if(option.value == "red"){
        return bai67_bg_red();
    }
    else if(option.value == "blue"){
        return bai67_bg_blue();
    }
    else if(option.value == "brown"){
        document.getElementById("box_content1").style.backgroundColor = "brown"
    }
    else if(option.value == "lavender"){
        document.getElementById("box_content1").style.backgroundColor = "lavender"
    }
}
// hết bài 6,7
function bai8(){
    
    function upDateTime(){
        let date = new Date();
        document.getElementById("title").innerHTML = date.toLocaleTimeString();
    }
    setInterval(upDateTime,1000)
}
//hết bài 8

function bai9(){
    function upDateTime(){
        let date = new Date();
        document.getElementById("clock").innerHTML = date.toLocaleTimeString();
    }
    setInterval(upDateTime,1000)
}

//hết bài 9
function bai10(){
    let dots = document.getElementById("dots");
    let showMore = document.getElementById("more");
    let btnShow = document.getElementById("showText");
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnShow.innerHTML = "Read more";
        showMore.style.display = "none";
    } else {
        dots.style.display = "none";
        btnShow.innerHTML = "Read less";
        showMore.style.display = "inline";
    }
}
// het bai 10
var listWork = [];
var nameWork = $("#listWork");
bai11(nameWork,listWork);
function bai11(container,items){
    let work = document.getElementById("addWork");
    listWork.push(work.value);
    var html = items.map(function(element) {
        return '<li class="list-group-item">' + element + '</li>';
    })
    var htmlElement = html.join('');
    container.html(htmlElement);
}
// het bai 11
function bai12(){
    let quantity  = document.getElementById("quantity ");
    let price = document.getElementById("price");
    document.getElementById("total").value = quantity.value * price.value;
}
//het bai 12
var hour = 00;
var sec = 00;
var msec = 00;
var ssec = 00;
var loop
function upDateTime(){
    ssec += 1;
    if(ssec == 10){
        msec +=1;
        ssec = 0;
    }
    else if(msec == 60){
        sec += 1;
        msec = 0;
    }
    else if( sec == 60){
        hour += 1;
        sec = 0;
    }
    document.getElementById("clock1").innerHTML = hour +":"+sec +":"+msec +":"+ssec;
}
function start(){
    loop = setInterval(upDateTime,100);
    document.getElementById("start").disabled = true;
}
function stop(){
    clearInterval(loop);
    document.getElementById("start").disabled = false;
}
function reset(){
    document.getElementById("clock1").innerHTML = "00:00:00"
    clearInterval(loop);
    document.getElementById("start").disabled = false;
    hour = 0;
    sec = 0;
    msec = 0;
    ssec = 0;
}