var header = document.querySelector('header');
var elements = document.querySelectorAll('header *');
var button = document.querySelector('header button');



window.addEventListener('scroll', function(){
    var rect = window.scrollY;
    if(rect > 0){
        header.style.backgroundColor = 'black';
        elements.forEach(function(e){
            e.style.color = '#fff';
        })
        button.style.color = '505f98';
    }else{
        header.style.backgroundColor = 'inherit';
        elements.forEach(function(e){
            e.style.color = '#505f98';
        })
        button.style.color = '#fff';
    }
});

const purchase = document.querySelectorAll('.purchase');
purchase.forEach(function(e){
    e.addEventListener('click', function(){

        if(document.title != 'Landing'){
            window.location = './htmls/landing.html';
        }else{
            console.log('All true');
        }

    });
})