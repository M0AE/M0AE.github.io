$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }

        // remove the logo
        if(this.scrollY > 20){
            $('.navbar .max-width .logo img').css("visibility", "hidden");
            
        }else{
            $('.navbar .max-width .logo img').css("visibility", "visible");
            $('.navbar .max-width .logo a').css("padding-left", "10px");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script

    var typed = new Typed(".typing-2", {
        strings: ["Aurélien Rosat"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

// window.onload = function(){
    
//     let titre = document.getElementById("titre_connaissances");
//     let slide1 = document.getElementById("slide1");
//     let slide2 = document.getElementById("slide2");
//     let slide3 = document.getElementById("slide3");
//     let slide4 = document.getElementById("slide4");
//     let slide5 = document.getElementById("slide5");
//     let slide6 = document.getElementById("slide6");

//     $('#carouselConnaissances').on('slid.bs.carousel', function () {
        
//         if(slide1.className.indexOf("active") != -1 ){
//             titre.innerHTML = "Gérer le patrimoine informatique";
        
//         }else if(slide2.className.indexOf("active") != -1 ){
//             titre.innerHTML = "Répondre aux incidents et aux demandes d’assistance et d’évolution";
        
//         }else if(slide3.className.indexOf("active") != -1 ){
//             titre.innerHTML = "Développer la présence en ligne de l’organisation";
        
//         }else if(slide4.className.indexOf("active") != -1 ){
//             titre.innerHTML = "Travailler en mode projet";

//         }else if(slide5.className.indexOf("active") != -1 ){
//             titre.innerHTML = "Mettre à disposition des utilisateurs un service informatique";
            
//         }else if(slide6.className.indexOf("active") != -1 ){
//             titre.innerHTML = "Organiser son développement professionnel";

//         }

//     });

// }

window.onload = function(){
    
    let titre = document.getElementById("titre_connaissances");
    let slide1 = document.getElementById("slide1");
    let slide2 = document.getElementById("slide2");
    let slide3 = document.getElementById("slide3");
    let slide4 = document.getElementById("slide4");
    let slide5 = document.getElementById("slide5");

    $('#carouselConnaissances').on('slid.bs.carousel', function () {
        
        if(slide1.className.indexOf("active") != -1 ){
            titre.innerHTML = "Mes Connaissances en WEB";
        
        }else if(slide2.className.indexOf("active") != -1 ){
            titre.innerHTML = "Mes Connaissances en Base de données";
        
        }else if(slide3.className.indexOf("active") != -1 ){
            titre.innerHTML = "Mes Connaissances en Programmation";

        }else if(slide4.className.indexOf("active") != -1 ){
            titre.innerHTML = "Les logiciels que j'utilise";

        }else if(slide5.className.indexOf("active") != -1 ){
            titre.innerHTML = "Organiser son développement professionnel";
        }

    });

}