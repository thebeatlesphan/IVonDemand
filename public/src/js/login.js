// import fetch from 'node-fetch';

const ele = document.querySelector('form');
ele.addEventListener('submit', event => {
    const pw = document.getElementById("password");
    console.log(pw.value);
    event.preventDefault();
})

