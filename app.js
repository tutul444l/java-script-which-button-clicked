
// sob thke sohoj vabe ekta ekta kore {{{javascript}}} diye loop bade

// ar jonno poti ta button er alada class deya lagbe ..............................................





// document.querySelector(".myButton1").addEventListener("click", function(){ 
//     let button = this.innerHTML;
//     document.querySelector("h1").innerHTML = button + "  is clicked "
// })

// document.querySelector(".myButton2").addEventListener("click",function(){
//     let buttn = this.innerHTML;
//     document.querySelector("h1").innerHTML=buttn + " is clicked";
// })

// document.querySelector(".myButton3").addEventListener("click",function(){
//     let butn = this.innerHTML;
//     document.querySelector("h1").innerHTML = butn + " is clicked";
// })


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>





// sob thke sohoj vabe ekta ekta kore {{{{jquery diye}}}} diye loop bade

// ar jonno poti ta button er alada class deya lagbe   .....................................................



// $(".myButton1").click(function(){
//     let butn = this.innerHTML;
//     $("h1").text(butn + " is clicked");
// })

// $(".myButton2").click(function(){
//     let butn = this.innerHTML;
//     $("h1").text(butn + " is clicked");
// })

// $(".myButton3").click(function(){
//     let butn = this.innerHTML;
//     $("h1").text(butn + " is clicked");
// })

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



// sob thke sohoj vabe ekta ekta kore {{{{jquery diye}}}} diye loop USE KORE

// ar jonno poti ta button er alada class deya lagbe  NA NA NA NANA  .....................................................

    // $(".myButton").click( function(){
    //     var value = this.innerHTML;
    //     $("h1").text(value + " is clicked");
    // })


    // $(".myButton").click( function(){
    //     var button= this.innerHTML;
    //     $("h1").text(button + "is clicked")
    // })

    // UPORER TAR SHATE SAME 

    // $(".myButton").on("click", function(){
    //     var value = this.innerHTML;
    //     $("h1").text(value + " is clicked");
    // })


    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>





    // sob theke kothin upaiye {{{jquery loop }}} userko
    //    ekhane class gulor ek name use korte hbe same class name alada class deya lagbe na .......................



// var totalButtons = document.querySelectorAll(".myButton").length;

// for(  i=0; i<totalButtons; i++){
//  document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
//         var text = this.innerHTML;
//         document.querySelector("h1").innerHTML = text + " is clicked";
        
//     });
// };


// let totalButton = document.querySelectorAll(".myButton").length;

// for( i =0; i<totalButton;i++){
//     document.querySelectorAll(".myButton")[i].addEventListener("click" ,function(){
//         var text = this.innerHTML;
//         document.querySelector("h1").innerHTML= text + " click kora";
//     })
// }


let totalButton = document.querySelectorAll(".myButton").length;

for(i=0;i<totalButton;i++){
    document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
        var text = this.innerHTML;
        document.querySelector("h1").innerHTML = text + "is clicked";
    })
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>