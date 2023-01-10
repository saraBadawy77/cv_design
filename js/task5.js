 
 
 $(document).ready (function () {
   
    $(window).on( 'scroll',function (){
var scroll=$(window).scrollTop();
var tt=document.getElementById("sticky")
if( scroll>=50){

    tt.classList.add("stickyadd");
   }
    else{
    tt.classList.remove("stickyadd"); 
    
    }
    })
   
    var el=document.getElementById("element")
    var typed= new Typed(el,{
        strings:["SARA BADAWY","DEVELOPER","DESIGNER","BUSINESS WOMAN"],
        smartBackspace: true,
        typeSpeed:100,
        backSpeed:100,
        loop:true,
        loopCount: Infinity,
        startDelay:1000
    })

    







})