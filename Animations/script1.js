// var myVar = 'hello word';
//
// window.onload = function () {
//     var show = document.getElementById('show');
//     var w1 = null;
//     show.onclick = function () {
//        w1= window.open(
//             'w1.html',
//             'w1',
//             "width = 420, height=220, resizable = no scrolbars = yes, status=yes, left=500, top=300, menubar=no, toolbar = no"
//
//
//                    );
//
//
//
//     }
//
//     var close = document.getElementById('close');
//     close.onclick = function () {
//             if(typeof w1 =='object'){
//                 w1.close();
//                 console.log(w1.closed)
//             }
//     }
//     function getMyvar () {
//         alert(myVar);
//         w1.editMyVar();
//         alert(myVar);
//
//
//     }
//     var func = document.getElementById('func');
//
//     func.onclick = function () {
//         getMyvar();
//     }
//
//
//
// }

//
// window.onload = function (ev) {
//
//  console.log(window.location);
//
//     function urlArgs() {
//         var args = {};
//         var query = window.location.search.substring(1);
//         var parts = query.split('&');
//         for(var i = 0; i<parts.length; i++){
//             var pos = parts[i].indexOf('=');
//             if(pos==-1){
//                 continue
//             }
//              var name = parts[i].substring(0,pos);
//             var value = parts[i].substring(pos+1,)
//
//                 args[name] = value;
//
//         }
//         return args;
//     }
//     console.log(urlArgs());
//
//
//     window.location
//     console.log(window.screen)
// }


