// document.addEventListener('DOMContentLoaded', function(){
//     document.querySelectorAll('button').forEach(function(button){
//         button.onclick = function(){
//             document.querySelector('#changecolor').style.color = button.dataset.color;
//         }
//     })
// });

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('button').forEach(button => {
        button.onclick = () => {
            document.querySelector('#changecolor').style.color = button.dataset.color;
        }
    });

    document.querySelector('select').onchange = function(){
        document.querySelector('#changecolor').style.color = this.value;
    }
});
