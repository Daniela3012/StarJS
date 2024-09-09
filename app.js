const rater=document.querySelector('.rate');
const stars=document.querySelectorAll('.star-gray path');

for (let s = 0; s < stars.length; s++) {
    stars[s].dataIdStar=s+1;
    stars[s].addEventListener('mouseover', handleMouseYellow);
    stars[s].addEventListener('mouseout', handleMouseGray);
    stars[s].addEventListener('click', handleClickStar);
}

function handleMouseYellow(eve){
    eve.target;
    if (eve.target.dataIdStar) {
        for (let id = 0; id < eve.target.dataIdStar; id++) {
            stars[id].classList.remove('star-gray');
            stars[id].classList.add('star-yellow');
        }
    }
};

function handleMouseGray(eve){
    eve.target;
    if (eve.target.dataIdStar) {
        for (let id = 0; id < eve.target.dataIdStar; id++) {
            stars[id].classList.remove('star-yellow');
            stars[id].classList.add('star-gray');
        }
    }
};

function handleClickStar(eve){
    eve.target;
    if (eve.target.dataIdStar) {
        for (let id = 0; id < eve.target.dataIdStar; id++) {
            stars[id].classList.remove('star-gray');
            stars[id].classList.add('star-yellow');
        }
        for (let id = 0; id < stars.length; id++) {
            stars[id].removeEventListener('mouseout',handleMouseGray);
            stars[id].removeEventListener('mouseover',handleMouseYellow);
        }
    }
};


