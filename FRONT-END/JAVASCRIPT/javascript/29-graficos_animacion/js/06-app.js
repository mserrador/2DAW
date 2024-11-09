//POST 

//Guía de como trabajar con diferentes peticiones

//https://www.jsonplaceholder.org/

//https://jsonplaceholder.typicode.com/posts

//https://jsonplaceholder.typicode.com/guide/

const enviarButonPost=document.querySelector('#cargarPOST');


enviarButonPost.addEventListener('click',()=>{
    const newPost={
        title: 'foo',
        body: 'bar',
        userId: 1,  
    }
    console.log(newPost);
    console.log(JSON.stringify(newPost));
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }    
    })

    .then(res=>{
        return res.json();
    })
    .then(datos=>console.log(datos));
})


/* fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
 */

