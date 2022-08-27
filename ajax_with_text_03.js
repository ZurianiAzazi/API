//json : stands for javascript object notation 
//stractured format for representing data , 
// so that all the computers can understand it 
// json is a way of communacating data with specific rules
// json is using key values 
//json is portable with other languages 

//select the element 
document.getElementById('btn1').addEventListener('click',loadUser);
document.getElementById('btn2').addEventListener('click',loadUsers);



function loadUser(e){

    //create the xhr object 
    const xhr = new XMLHttpRequest();

    //open method
    xhr.open('Get','user_03.json',true);

    //onload
    xhr.onload = function(){
        if(this.status === 200) {
            // console.log(this.response);
            const user = JSON.parse(this.responseText);
            // console.log(user);
            const output = `
            <ul>
            <li>Id : ${user.id}</li>
            <li>Name : ${user.name}</li>
            <li>Phone : ${user.phone}</li>
            </ul>`;

            document.getElementById('user').innerHTML=output;
        }
    }
    //send()
    xhr.send();
}

//loadUsers
function loadUsers(e){

    //create the xhr object 
    const xhr = new XMLHttpRequest();

    //open method
    xhr.open('Get','users_03.json',true);

    //onload
    xhr.onload = function(){
        if(this.status === 200 ){
            // console.log(this.responseText);
            const users = JSON.parse(this.responseText);

            let output = '';

            users.forEach(function(item){

            output += `
            <ul>
            <li>Id : ${item.id}</li>
            <li>Name : ${item.name}</li>
            <li>Phone : ${item.phone}</li>
            </ul>`;
            });

            document.getElementById('users').innerHTML=output;
        }
    }
    //send()
    xhr.send();
}