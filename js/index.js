let loading = document.getElementById("loading")

let time = 2000;
let step = 100;


function func (num) {


    let text = document.getElementById("p");

    let n = 0;
    let t = Math.round(time / (num / step));
    let interval = setInterval(() => {

        n = n + step;
        if(n == num){

            clearInterval(interval);
            loading.style.display = "none"

        }
        text.innerHTML = n

    },t)



}
func(2000,"p")