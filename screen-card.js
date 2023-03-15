var cards = document.getElementsByClassName('card-1-II');
var elements = document.getElementsByClassName('card-container');
var wrapper = document.getElementsByClassName('show-card-wrapper')[0];
var onScreenContainer = null;
var closeMarks = document.querySelectorAll('.card-container-close');

const obj = {
    'display': 'block',
    'display': 'flex',
    'align-items': 'center',
    'justify-content':'center'
}

const showCard = (e) => {
    onScreenContainer = elements[e.id];
    Object.assign(wrapper.style, obj);
    Object.assign(elements[e.id].style, obj);

}

let clickEvent = () => {
    wrapper.style.display = 'none';
    onScreenContainer.style.display = 'none';
    onScreenContainer = null;
}

closeMarks.forEach((item) => {
    item.addEventListener('click', clickEvent);
});

wrapper.addEventListener('click',clickEvent);
