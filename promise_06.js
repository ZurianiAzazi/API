//promises:

//they are a part of es6 and alternative to callbacks
//theay are another way of handling async calls
// they promise to do something when they operation finished
//we handle the promise response by using .then()

const posts = [
    {title: 'post one' , body:' This is post one'},
    {title: 'post two' , body:' This is post two'}
];

function createPost (post){
     return new Promise(function(resolve,reject){
        setTimeout(function(){
            posts.push(post);

            const error = false;

            if(!error){
                resolve();
            }else{
                reject('something went wrong');
            }
        },2000);
     });
}

function getPost(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `
            <li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    },1000);
}

createPost({title: 'post three' , body:' This is post three'})
.then(getPost).catch(function(err){
    console.log(err)
});