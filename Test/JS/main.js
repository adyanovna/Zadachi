// function puush(){
//     document.getElementById('button').style.backgroundColor = '#817F7FFF';
//     var abc = document.querySelectorAll('.catalog__col');
//     for(var i = 0; i < abc.length; i++) {
//         abc[i].style.width="100%";
//     }
// }


function puush() {
    if (document.getElementById('button').style.backgroundColor ==='rgb(129, 127, 127)') {
        document.getElementById('button').style.backgroundColor = '#FFF';
        var abc = document.querySelectorAll('.catalog__col');
        for (var i = 0; i < abc.length; i++) {
            abc[i].classList.remove('catalog__full');
        }
    } else {
        document.getElementById('button').style.backgroundColor = '#817F7FFF';
        var abc = document.querySelectorAll('.catalog__col');
        for (var i = 0; i < abc.length; i++) {
            abc[i].classList.add('catalog__full');
        }
    }
}


// abc[i].classList.remove('catalog__full');