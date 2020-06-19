const navbtn = document.querySelector('#navbutton');

const wholeMenu = document.querySelector('#menu');

const theBody = document.getElementsByTagName("BODY")[0];

const colors = ['blue', 'red', 'green', 'yellow', 'meat'];

const navItems = Array.from(document.querySelectorAll("li"));


navbtn.addEventListener("click", function showToggle() {
    wholeMenu.classList.toggle("show")
});

navItems.forEach(function (item) {
    item.classList.add(`${colors[navItems.indexOf(item)]}BG`) //BONUS
    item.addEventListener("click", function () {
        theBody.className = '';
        theBody.classList.toggle(`${colors[navItems.indexOf(item)]}BG`);
        wholeMenu.classList.toggle("show");
        document.getElementById('nameTheColor').innerHTML = `${colors[navItems.indexOf(item)]}` //BONUS
    })
})


