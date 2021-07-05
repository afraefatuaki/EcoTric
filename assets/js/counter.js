const counter = document.getElementById('counter');
const text = document.getElementById('text');

text.onkeyup = function () {
    counter.innerHTML = (this.value.length) + `/800`
}
