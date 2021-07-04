const counter = document.getElementById('counter');
const text = document.getElementById('text');
let count = 0;

text.addEventListener('input', e => {
    console.log(e)
    if (e.isTrusted == true) {
        counter.innerHTML = count++
        console.log(count)
    }
})

