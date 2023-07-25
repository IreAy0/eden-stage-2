const modalBtn = document.getElementById('modal-btn');
const cleaningModalBtn = document.getElementById('cleaning-modal-btn')
const modal = document.getElementById('food-modal');
const cleaningModal = document.getElementById('cleaning-modal')
const closeBtn = modal.querySelector('.close');
const close2 = cleaningModal.querySelector('.close')
const homePage = document.querySelector('.home-page')

modalBtn.addEventListener('click', function() {
  modal.style.display = 'block';
  homePage.style.filter = 'blur(1px)';
});


closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
  homePage.style.filter = 'none';

});

window.addEventListener('click', function(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
    homePage.style.filter = 'none';
  }
});

cleaningModalBtn.addEventListener('click', function() {
  cleaningModal.style.display = 'block';
  homePage.style.filter = 'blur(1px)';
});

close2.addEventListener('click', function() {
  cleaningModal.style.display = 'none';
  homePage.style.filter = 'none';

});
window.addEventListener('click', function(e) {
  if (e.target == cleaningModal) {
    modal.style.display = 'none';
    homePage.style.filter = 'none';
  }
});

