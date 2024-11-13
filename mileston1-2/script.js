var toggleBtn = document.querySelector('.toggle-btn');
var toggleContainer = document.querySelector('.toggle-container');
toggleBtn.addEventListener('click', function () {
    toggleContainer.classList.toggle('hidden');
});
