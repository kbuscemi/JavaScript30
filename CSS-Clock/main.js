const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90; //need to turn seconds into degrees
    //transform is set to rotate(degrees)
    //seconds / 60 will give us our % and multiple by 360 b/c full circle is 360 degrees
    //add 90 because transform is set to 90 deg
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    // console.log(seconds);

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}



setInterval(setDate, 1000);