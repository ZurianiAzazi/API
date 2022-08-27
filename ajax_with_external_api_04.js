//select the element
document.getElementById('btn').addEventListener('click',getJokes);


function getJokes(e){

    const number = document.querySelector('input[type="number"]').value;

    //create the xhr object 
    const xhr = new XMLHttpRequest();

    //open method
    xhr.open('Get',`http://api.icndb.com/jokes/random/${number}`,true);

    //onload
    xhr.onload = function (){
        if(this.status === 200){
            // console.log(this.responseText);
            const response = JSON.parse(this.responseText);

            let output = '';

            if(response.type === 'success'){
                response.value.forEach(function(item){
                    output += `<li>${item.joke}</li>`
                })
            }else{
                output += `<li>Something went wrong.....</li>`
            }
            document.querySelector('ul').innerHTML=output;
        }
    }
    //send()
    xhr.send();
}