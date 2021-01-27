const clickable = document.querySelectorAll('.clickable');
let score = 0;
let checkScore = document.querySelector('.score');

clickable.forEach(element => {
    element.addEventListener('click', () => {
        if (element.classList.contains('clickable')) {
            score++;
            element.classList.add('isNotVisible');
            element.classList.remove('clickable');
            checkScore.innerHTML = score;
        }
        if (score === 10) {
            alert("le niveau est fini");
        } else {
            console.log("encore un effort");
        }
    });
});

const beginBtn = document.querySelector('.beginBtn');
const beginScreen = document.querySelector('.avantGame');

beginBtn.addEventListener('click', () => {
    beginScreen.style.display = "none"; 
});