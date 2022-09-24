document.addEventListener('DOMContentLoaded', function(){
    // document.querySelector('form').onsubmit = function(){
    //     const name = document.querySelector('#name').value;
    //     alert(`Hello, ${name}`);
    // };
    document.querySelector('form').addEventListener('submit', function(){
        const name = document.querySelector('#name').value;
        alert(`Hello, ${name}`);
    });
});