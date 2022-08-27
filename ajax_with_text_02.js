//select the element 
document.getElementById('btn').addEventListener('click',loadData);

function loadData(){
    //create xhr object 
    const xhr = new XMLHttpRequest();

    //open method (type of the request, url(where to get the data from),async(true))
    xhr.open('Get','text_02.txt',true);

    //load response
    xhr.onload = function(){
        // console.log('readystate',xhr.readyState);
        if(this.status === 200){
            document.getElementById('output').innerHTML = 
            `<h1>${this.responseText}</h1>`


            // console.log(this.responseText);
        }
    } 
    //send()
    xhr.send();
}

//ready state values :
// 0 : request is not initialised
// 1 : server request established
// 2 : request received
// 3 : processing the request
// 4 : request finished and response is ready

//HTTP Status
// 200 : ok 
// 403 : forbidden 
// 404 : NOT FOUND