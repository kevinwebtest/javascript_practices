document.addEventListener('DOMContentLoaded', ()=>{
    fetch("https://jsonmock.hackerrank.com/api/movies/search")
    .then(response => response.json())
    .then(result => {
        result.data.forEach(movie => {
            console.log(movie.Title);
            const li = document.createElement('li');
            document.querySelector('#api').append(li);
            li.innerHTML = movie.Title;
            
            // document.querySelector('#api').innerHTML = movie.Title;
        });
        
    })
    .catch(error => console.log('error', error));
});