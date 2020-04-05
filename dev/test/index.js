var readLineSync = require('readline-sync');
var fs = require('fs');
var content = [];

//loadData

function loadData(){
    var content1 = fs.readFileSync('./data.json');
    content = JSON.parse(content1);
} 

//Menu chuc nang

function showMenu(){
    console.log('1: Show list contact');
    console.log('2: Add contact');
    console.log('3: Edit contact');
    console.log('4: Delete contact');
    console.log('5: Search contact');
    console.log('6: Exit');
    var option = readLineSync.question('What do you want to choice option : ');
    switch(option){
        case '1' : 
            showListContact();
            break;
        case '2' :
            addContact();
            break;
        case '3' :
            console.log("Bạn muốn sửa tên nào: ");
            name = readLineSync.question('Name : ');
            editContact(content,name);
            break;
        case '4' : 
            console.log("Bạn muốn tim tên nào: ");
            var name = readLineSync.question('Name : ');
            deleteContact(content,name);
            break;
        case '5' : 
            console.log("Bạn muốn tim tên nào: ");
            var ten = readLineSync.question('Name : ');
            searchContact(content,ten);
            break;
        case '6' :
            break;
        default : console.log('wrong option!!!');
        showMenu();
            break;

            
    }
}
// hien thi thong tin danh ba

function showListContact(){
    for( var cont of content){
        
         console.log(cont.name,cont.telephoneNumber);
    }
}

//Them so dien thoai

function addContact(){
    var name = readLineSync.question('Name : ');
    var telephoneNumber = readLineSync.question('Telephone Number : ');
    var data = {
        name : name,
        telephoneNumber : parseInt(telephoneNumber)
    }
    content.push(data);
    var contentJson = JSON.stringify(content);
    fs.writeFileSync('./data.json',contentJson,charset = 'utf8');
}

//Xoa Thông Tin danh bạ

function deleteContact(arr,name){
    var xoa = arr.find( a => {
        return a.name === name;
     });
    var index = arr.indexOf(xoa);
    var removeIlement = arr.splice(index,1);
    var Json = JSON.stringify(arr);
    fs.writeFileSync('./data.json',Json,charset = 'utf8');
    return console.log("Delete Complete !")
}

// Sua Thong Tin Danh Ba
function editContact(arr,name){
    reName = readLineSync.question('Rename : ');
    newNumber = readLineSync.question('New Number: ');
    var edit = arr.find( a => {
        return a.name === name;
     });
    var index = arr.indexOf(edit);
    arr[index].name = reName;
    arr[index].telephoneNumber = newNumber;
    var json = JSON.stringify(arr);
    fs.writeFileSync('./data.json',json,charset = 'utf8');
    return console.log('Complete!');
}

//Tim thong tin danh ba

function searchContact(content,name){
   
    var find = content.find( a => {
        return a.name === name;
     });
     return console.log(find.name + ':' + find.telephoneNumber);
   
}

function main(){
    loadData();
    showMenu();
}

main();