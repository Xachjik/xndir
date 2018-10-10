
// Window  hamarvum e global obyekt

//

// window.location = 'http://yandex.ru'
// window.alert('Hello');
// window.document.getElementById('')


// setTimeout();


// setInterval();

window.onload = function () {

    var wrap = document.getElementById('popup_overlay');

    var closeB = document.getElementById('popup_close');
    closeB.onclick = popupClose;

    var inP = document.getElementById('popupIn');
    inP.onclick = popup;

    var tIn, tOut;

    function popup() {
        wrap.style.display = 'block';

        popupIn(1);
    }

    function popupClose() {
        popupOut(0);
    }

    function popupIn(x) {

        /// 0.05 0.1 0.15
        var op = (wrap.style.opacity) ? parseFloat(wrap.style.opacity) : 0;

        if(op < x) {

            clearInterval(tOut);
            op += 0.05;
            wrap.style.opacity = op;

            //setTimeout(popupIn, 50, x);
            tIn = setTimeout(function () {

                popupIn(x);

            }, 10);
        }
    }

    function popupOut(x) {
        var op = (wrap.style.opacity)? parseFloat(wrap.style.opacity) :0;
        console.log(op);

        if(op>x){
            clearInterval(tIn);
            op-=0.05;
            wrap.style.opacity = op;
         tOut = setTimeout(function () {
                popupOut(x);
            },10)
        }
        if(wrap.style.opacity == x){
            wrap.style.display = 'none';
        }
    }

    var h1 = document.getElementById('header');
        h1.onclick = function () {

         clearTimeout(intStop);
        };

        function changeColor() {

            if(h1.style.color =='black'){
                h1.style.color ='red';
            }else{
                h1.style.color ='black'
            }

        }

       var  intStop = setInterval(changeColor,500);


    // setTimeout(popup,4000);
}





