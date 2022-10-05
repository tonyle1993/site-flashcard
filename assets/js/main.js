var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var cards = $$('.js-card');
var newCardBtn = $('.js-card-new');
var cardContainer = $('.js-card-container');

newCardBtn.onclick = () => {
  newCardBtn.insertAdjacentHTML("beforebegin", 
  `<div class="card js-card">
    <div class="card-content">
      <p class="card-title">Goal</p>
    </div>
   </div>`);
}