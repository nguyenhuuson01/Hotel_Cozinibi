
$(document).ready(function(){

    console.log(window.location.pathname);
    pathName=window.location.pathname;
    const Array_path=pathName.split("/");
    var mainpath=Array_path[Array_path.length-1];
    subName=mainpath.substring(0,mainpath.length-5);
    console.log(subName);
    if(subName.includes("_2"))
    {
        subName=subName.replace("_2","\0");
    }
    if(subName.includes("_"))
    {
        subName=subName.replace("_"," ");
    }
    console.log("subName:",subName);
    $(".menu-item").each(function(){
        // console.log($(this).text());
        if($(this).find(">a").text().localeCompare(subName)==0)
        {
            $(this).toggleClass("load_menuItem");
        }
    });
        

    $(".book-action").click(function(){
        window.open("./accommodation_2.html", "_blank");
    });
    // console.log(window.location.origin);
    $(".navbar .menu-item").click(function(){

        let itemName=$(this).find(">a").text();
        if(itemName.includes(" "))
        {
            itemName=itemName.replace(" ","_");
        }
        let stringURL="./"+itemName+".html";
        window.location.href=stringURL;
        // window.open(stringURL, "_blank");
        console.log(stringURL);

    });
    $(".ft-menu ul li").click(function(){

        let itemName=$(this).find(">a").text().toLowerCase();
        console.log(itemName);
        if(itemName.includes(" "))
        {
            itemName=itemName.replace(" ","_");
        }
        if(itemName=="contact_us")
        {
            itemName="contact";
        }
        else if(itemName=="food_restaurant")
        {
            itemName="menu";
        }
        let stringURL="./"+itemName+".html";
        // window.location.href=stringURL;
        window.open(stringURL, "_blank");
        console.log(stringURL);

    });

    $("li i, li a, li span, .language span").hover(
        function()
        {
        $(this).addClass("hover-color");
        $(this).css("cursor","pointer");
        console.log($(this).attr("class"));
        },
        function()
        {
            $(this).removeClass("hover-color");
        }
    );

    $(".language").click(function(){

        $(".language .lang-option").toggle();

    });
   
    $(".language .lang-option li").click(function(){
        let langCurrent=$(this).find(">a");
        let beforeSelection= $(".lang-active .lang-current").text();
        console.log(langCurrent.text());
        // console.log(beforeSelection);
        $(".lang-active .lang-current").text(langCurrent.text());
        langCurrent.text(beforeSelection);
    });

    $(".move-pages .btn").hover(
        function(){
            $(this).addClass("hover-border");
            $(this).css("cursor","pointer");
            console.log($(this).text());
        },
        function(){

            $(this).removeClass("hover-border");
        }
    );

    $("#menu-btn").click(function(){
        $(".navbar").toggleClass("active");
        $(".language").removeClass("active");
        $(".search-form").removeClass("active");

        console.log("check");
    });
    $("#global-btn").click(function(){
        $(".language").toggleClass("active");
        $(".search-form").removeClass("active");
        $(".navbar").removeClass("active");

    });
    $("#search-btn2").click(function(){
        console.log("check");
        $(".search-form").toggleClass("active");
        $(".navbar").removeClass("active");
        $(".language").removeClass("active");
       

    });

   
});