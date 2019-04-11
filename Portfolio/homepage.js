// Portfolio Javascript


// let activeBtn = document.getElementsByClassName('active-button');
// let inactiveBtn = document.getElementsByClassName('inactive-button');

const allBtn = document.querySelector('#all-btn');
const designBtn = document.querySelector('#design-btn');
const devBtn = document.querySelector('#dev-btn');

// Function that sets the all button as active upon page load
function defaultAllBtn() {
    allBtn.classList.add('active-button');    
}

defaultAllBtn();

designBtn.addEventListener('click', () => {
    designBtn.classList.add('active-button');
    allBtn.classList.remove('active-button');
    devBtn.classList.remove('active-button');   
});

devBtn.addEventListener('click', () => {
    devBtn.classList.add('active-button');
    allBtn.classList.remove('active-button');
    designBtn.classList.remove('active-button');
});

allBtn.addEventListener('click', () => {
    allBtn.classList.add('active-button');
    devBtn.classList.remove('active-button');
    designBtn.classList.remove('active-button');
});
