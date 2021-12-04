var modal = document.getElementById('simpleModal');
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[0];

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

//Listen for outside click
window.addEventListener('click', clickOutside);

//function to open modal
function openModal() {
    modal.style.display = 'block';
}

//function to close modal
function closeModal() {
    modal.style.display = 'none';
}

//function to close modal if outside click
function clickOutside(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
}