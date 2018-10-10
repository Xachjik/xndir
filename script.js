function getArr() {
    var num = document.getElementById('numArr').value;
    var k = document.getElementById('numK').value;
    var arrhtml = document.getElementById('arrays');
    var sumnumbers = document.getElementById('sumnumbers');
    var mecaguyn = document.getElementById('mecaguyn');
    var arr=[];
    //-------------------------------------------------
    //  Զանգվածում random մուտքագրվում են քառանիշ թվեր
    //-------------------------------------------------
    for(var i = 0; i<num; i++){
        arr[i] = Math.floor((Math.random() * (9999-1000))+1000);
        arrhtml.innerHTML += arr[i]+'<br>';
    }
    //-----------------------------------------------------------------------------------------
    // Ստեղծում ենո նոր զանգված մեր ստացված թվի թվանշաններնն  գումարելիս երբ ստացվի մեր k թվին
    //-----------------------------------------------------------------------------------------
   var arr2 = [];
    var flag = false;
   for(var j=0; j<arr.length;j++){
       var number = arr[j].toString().split('');
       var Sum = 0;
       for( var l = 0;l<number.length; l++){
           Sum+=Number(number[l]);
       }
            console.log('sum='+Sum );
       var result = document.getElementById('ardyunq');
       //---------------------------------------------------------------------------------------
       // Ստուգում ենք եթե մեր  քառանիշ թվերի թվանշանների գումարն հավասար է մուտքագրված  k թվին
       //---------------------------------------------------------------------------------------
       if(Sum===Number(k)){
           arr2.push(arr[j]);
           arr2.sort(function (a,b) { return b-a });
            result.innerHTML = 'Կստանանք այն թիվն որի թվանշանների գումարն հավասար է k թվին';
           sumnumbers.innerHTML+=arr[j]+'<br>';
           mecaguyn.innerHTML = 'Այդ տարերից մեծագույն տարն կլինի ՝ ' + arr2[0];
            flag = true;
       }
   }
   if (flag===false){
       result.innerHTML = "Չկա այդպիսի թիվ, խնդրում ենք էջն reload անել"
   }
}
