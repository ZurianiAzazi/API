const posts = [
    {title: 'post one' , body:' This is post one'},
    {title: 'post two' , body:' This is post two'}
];

//sync way 
// function createPost (post){
//     setTimeout(function(){
//         posts.push(post);
//     },3000);
// };

// function getPost(){
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(post){
//             output += `
//             <li>${post.title}</li>`
//         });
//         document.body.innerHTML = output;
//     },1000);
// }

// createPost({title: 'post three' , body:' This is post three'});
// getPost();

// async with callback


function createPost (post,callback){
    setTimeout(function(){
        posts.push(post);
        callback();
    },3000);
};


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

createPost({title: 'post three' , body:' This is post three'},getPost);