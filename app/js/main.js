var text = document.querySelectorAll('.together__questions-text');
var answer = document.querySelectorAll('.together__questions-answerbox');

if (text) {
    text.forEach(e => {
        e.addEventListener('click', function () {
            answer.forEach(e => {
                e.classList.remove('together__questions-answerbox--active')
            })
            this.nextElementSibling.classList.add('together__questions-answerbox--active');
            this.childNodes[3].querySelectorAll('.together__questions-icon').forEach(e => {
                e.classList.toggle('icon-hidden');
            });

        });
    });

}

const menuBtn = document.querySelector('.header__menu-btn');
const menuList = document.querySelector('.header__menu-list')
console.log(menuBtn)

menuBtn.addEventListener('click', function () {
    menuList.classList.toggle('header__menu-list--active');
    document.body.classList.toggle('locked')
})





//This code must be in the END!!!!!!!
const rating = document.querySelectorAll('.clients__rate');
const clients = document.querySelector('.clients');

if (rating) {
    for (let j = 0; j <= rating.length; j++) {
        for (let i = 0; i < rating[j].dataset.stars && i < 5; i++) {
            rating[j].insertAdjacentHTML('beforeend', `<img class="clients__rate-star" src="images/star.svg" alt="">`)
        }
    }
}



