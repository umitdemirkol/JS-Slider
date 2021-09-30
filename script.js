var models = [
    {
        name: 'Tesla Model S',
        image: 'img/Tesla-roadster.jpg',
        link: 'https://www.youtube.com'

    },
    {
        name: 'McQueen',
        image: 'img/cars.jpg',
        link: 'https://www.youtube.com'

    },
    {
        name: 'Chevrolet Corvette',
        image: 'img/chevrolet-corvette-.jpg',
        link: 'https://www.youtube.com'

    }
];
var index = 0;
var slaytCount = models.length;

var interval;
var settings = {
    duration: '2000',
    random: false,
};



init(settings);

document.querySelectorAll('.arrow').forEach(function (item) {
    item.addEventListener('mouseenter', function () {
        console.log('enter');
        clearInterval(interval);
    });
});
document.querySelectorAll('.arrow').forEach(function (item) {
    item.addEventListener('mouseleave', function () {
        console.log('out');
        init(settings);
    });
});

function init(settings) {
    var prev;
    interval = setInterval(function () { // setTimeout belli bir süre sonra başlar ve sonra durur setInterval ise sürekli döner

        if (settings.random) {
            // random index
            do {
                index = Math.floor(Math.random() * slaytCount)

            } while (index == prev) {
                prev = index;
            }
        } else {
            // artan index
            if (slaytCount == index + 1) { // eğer son slayta geldiysek 
                index = -1; // inddex başa al
            }
            showSlide(index);
            console.log(index);
            index++;

        }

        showSlide(index);

    }, settings.duration);

}
document.querySelector('.fa-arrow-circle-left').addEventListener('click', function () {

    index--;
    showSlide(index);
    console.log(index);
});
document.querySelector('.fa-arrow-circle-right').addEventListener('click', function () {

    index++;
    showSlide(index);
    console.log(index);
});

function showSlide(i) {

    index = i;
    if (i < 0) {
        index = slaytCount - 1;
    }
    if (i >= slaytCount) {

        index = 0;
    }

    document.querySelector('.card-tittle').textContent = models[index].name;
    document.querySelector('.card-img-top').setAttribute('src', models[index].image);
    document.querySelector('.card-link').setAttribute('href', models[index].link);

}


