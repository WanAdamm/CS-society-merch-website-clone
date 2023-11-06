var glider_list = document.querySelectorAll('.glider'); // returns NodeList
var glider_array = [...glider_list]; // converts NodeList to Array

var dots_list = document.querySelectorAll('#dots'); // returns NodeList
var dots_array = [...dots_list];

glider_array.forEach((glider,index) => {

    const dots = dots_array[index];

    new Glider(glider, {
    slideToShow: 1,
    draggable: true,
    dots: dots,
    scrollLock: true,
    });

});

