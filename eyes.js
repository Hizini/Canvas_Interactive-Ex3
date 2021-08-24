
const eyeBall = function (selector) {
    const eye = document.querySelector(selector),
        nondongja = eye.querySelector('.nondongja');
    let eyeSection = eye.getBoundingClientRect();
 
    const eyeRoll = function (mouseX, mouseY) {
        const radian = Math.atan2(mouseY - (eyeSection.y + eyeSection.height * 0.5), mouseX - (eyeSection.x + eyeSection.width * 0.5));
        nondongja.style.transform = 'rotate(' + (180 * radian / Math.PI - 90) + 'deg)';
    };
    return {
        eyeRoll: eyeRoll
    };
};
let leftEye = eyeBall('.eye-1');
let rigntEye = eyeBall('.eye-2');
window.addEventListener('mousemove', function (e) {
    leftEye.eyeRoll(e.pageX, e.pageY);
    rigntEye.eyeRoll(e.pageX, e.pageY);
    //console.log(e);
});

window.addEventListener('resize', function(){ 
    this.location.reload();
    eyeSection = eye.getBoundingClientRect();

});

