$(document).ready(function() {


// Header Slider
$('.header__slider').slick({
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: '<div class="header__prev"></div>',
    nextArrow: '<div class="header__next"></div>',
    pauseOnHover:false,
    // fade: true,
    // cssEase: 'ease',
    fade: !0,
    cssEase: 'linear',
    speed: 500
});


// Reviews Slider
$('.reviews__body').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover:false,
    prevArrow: '<div class="reviews__prev"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="22"><polyline points="12.5,22.1 1.9,11.5 12.5,0.9"></polyline></svg></div>',
    nextArrow: '<div class="reviews__next"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="22"><polyline points="1.9,22.1 12.5,11.5 1.9,0.9"></polyline></svg></div>',
    // fade: true,
    customPaging : function(slider, i) {
        let thumb = $(slider.$slides[i]).data();
        return `<div class="reviews__item"><img src="img/reviews-author-${i + 1}.jpg"></div>`;
    },
});


// Parallax video
$('.parallaxie').parallaxie();


// $('#bmi-form').submit(function(event) {
//     event.preventDefault();

//     console.log('йо');
// });


function calculateBMI(height, weight, age, gender, activity) {
    let bmi = (weight / (height ** 2)) * 100;
    // bmi = Math.round(bmi);

    console.log(height);
    console.log(weight);
    console.log(bmi);

    if (bmi !== '' && !isNaN(bmi)) {
        if (bmi < 18.5) {
            return 'Underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            return 'Healthy';
        } else if (bmi >= 25 && bmi <= 29.9) {
            return 'Overweight';
        } else {
            return 'Obese';
        }
    } else {
        return 'Please provide a valid height. Please provide a valid weight';
    }
}

const resultBMIBox = document.querySelector('.bmi__result-box');
const resultBMI = document.querySelector('.bmi__result');

bmiForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const height = +bmiForm.elements.height.value;
    const weight = +bmiForm.elements.weight.value;
    const age = +bmiForm.elements.age.value;
    const gender = bmiForm.elements.gender.value;
    const activity = bmiForm.elements.activity.value;

    // console.log(resultBMI);
    resultBMIBox.style.display = 'block';
    resultBMI.innerHTML = calculateBMI(height, weight, age, gender, activity);
    // console.log(calculateBMI(height, weight, age, gender, activity));
    // console.log(`Height: ${height}  Weight: ${weight}  Age: ${age}  Gender: ${gender}  Activity: ${activity}`);
});


});