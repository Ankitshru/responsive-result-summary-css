//const parents = document.querySelectorAll(".icon");
const icons = document.querySelectorAll('.icon')
const path = 'data.json';

fetch(path)
.then((response) => response.json())
.then((jsonData) => {
    let sum = 0;
    icons.forEach((parent,i) => {
        icons[i].src = jsonData[i].icon;
    });
})
.catch((error) => alert(error));