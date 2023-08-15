
$(document).ready(function(){
    $('.room ,.travel-pic').hover(
        function()
        {
            $(this).find("img").css("transform","scale(1.1)");
            console.log($(this).attr("class"));
        },
        function()
        {
            $(this).find("img").css("transform","scale(1)");
        });


    $(".travel-title a, li i, li a, li span, .language span, .desc span").hover(
        function()
        {
        $(this).addClass("hover-color");
        console.log($(this).attr("class"));
        },
        function()
        {
            $(this).removeClass("hover-color");
        }
    );


    $(".img-hl").hover(
        function()
        {
            $(this).css("transform"," rotate(-45deg)");
            $(this).closest(".pic").addClass("hover-rotate");
            
            console.log($(this).attr("class"));
        },
        function()
        {
            $(this).css("transform"," rotate(0)");
            $(this).closest(".pic").removeClass("hover-rotate");
        }
    );

    //  -------------------------SLIDE SHOW------------------------
    var swiper1 = new Swiper(".banner", {
        loop:true,
        autoplay:{
            delay:7500,
            disableOnInteraction: true,
        },
        // pagination: {
        // el: ".swiper-pagination",
        // dynamicBullets: true,
        // }
    });    


    //comment form cm
    var swiper2 = new Swiper(".commands .content", {
        loop:true,
        spaceBetween:100,
        autoplay:{
            delay:7500,
            disableOnInteraction: true,
        },
        // pagination: {
        // el: ".swiper-pagination",
        // dynamicBullets: true,
        // }
    });  


    //slide foods-restaurant
    var swiper3 = new Swiper(".foods", {
        loop:true,
        autoplay:{
            delay:7500,
            disableOnInteraction: true,
        },
        // pagination: {
        // el: ".swiper-pagination",
        // dynamicBullets: true,
        // }
    });   

   
});

