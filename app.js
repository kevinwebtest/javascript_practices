if (!localStorage.getItem('counter')){
    localStorage.setItem('counter', 0);
}
// let counter = 0;
function count() {
    let counter = localStorage.getItem('counter');
    counter++;
    let h1 = document.querySelector('h1');
    h1.innerHTML = counter;
    // if (counter%10 === 0) {
    //     alert(`Count is now ${counter}`);
    // }
    localStorage.setItem('counter',counter);

}
document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('h1').innerHTML = localStorage.getItem('counter');
    // document.querySelector('#increment').onclick = count;
    document.querySelector('#increment').addEventListener('click',count);

    // setInterval(count,1000); //do function count for every 1 s
});