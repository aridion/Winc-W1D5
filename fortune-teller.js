// This entire file is just something EXTRA I made on accident cuz I didnt read the instructions well on wednesday 

let options = {
    femaleNames: ['Mary', 'Jane', 'Alicia', 'Luciana', 'Dany', 'nobody'],
    places: ['Amsterdam', 'NY', 'LA', 'London', 'Paris', 'Berlin'],
    jobs: ['lawyer', 'doctor', 'designer', 'farmer']
}

const randomNumber = function (input) {

    if (input === undefined) {
        return Math.floor(Math.random() * 10);
    } else {
        return Math.floor(Math.random() * input.length) + 1;
    }
}

const FT = document.querySelector('#FT');
const FTbtn = document.querySelector('#FTbutton');

FTbtn.addEventListener("click", function TellIt() {
    FT.innerHTML = `You will have ${randomNumber()} 
    child(ren). Be married to ${options.femaleNames[randomNumber(options.femaleNames) - 1]}.
    Live in ${options.places[randomNumber(options.places) - 1]}, 
     and work as a ${options.jobs[randomNumber(options.jobs) - 1]}.`

});

// const fortuneTeller = function () {
//     'You will have', randomNumber(), 'children. Be married to',
//         options.femaleNames[randomNumber(options.femaleNames) - 1],
//         'Live in', options.places[randomNumber(options.places) - 1],
//         ', and work as a', options.jobs[randomNumber(options.jobs) - 1];
// }