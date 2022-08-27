//API : application programming interface

//contract provided by one software to another software
//it usually consist of structured request and structured response

// a set of functions and procedures that provide access to the data
// of an operating system , application , ....

//sync
let posts = loadSync(){
    //wait untill the post fetch
    //do something with post
    // do the next thing
}

//Async

//callback function : when we pass a function as a parametere to another function 

loadAsync(function(){
    //...wait untill the post fetch
    //do something with post
    // do the next thing
})

//Most of the API code that you work with would be a part of API library  

//1- XMLHttpRequest and fetch
//2- Ajax , axios , other http libraries
//3- node.js

//Note : all the above are async technologies and all you need
//  is to handle the response in a certain way 


//The following are the ways to handle async code
//1-callback
//2-promise
//3-async/await

//Ajax => async javascript and xml
//they are a set of web technologies
// send and receive data async
// they dont intefer with the current page 
//Json has replaced xml for most cases 
//no page reload / very interactive
// XMLHttpRequest : XHR object