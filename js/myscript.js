$(function(){
    $(window).scroll(function(){
        var windowscroll = $(this).scrollTop()
        if(windowscroll > 500){
                $(".btn_direction").fadeIn();
        }
        else{
            $(".btn_direction").fadeOut();
        }
    })
    $(".btn_direction").on('click',function(){
     $("html").animate({
         scrollTop : 0
     },1000);
    })
    $(".link_header").fadeOut(0).fadeIn(1000);
});


  /*===== MENU SHOW =====*/
  const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);
  
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("show");
      });
    }
  };
  showMenu("nav-toggle", "nav-menu");
  
  /*===== ACTIVE AND REMOVE MENU =====*/
  const navLink = document.querySelectorAll(".link_nav");
  
  function linkAction() {
    /*Active link*/
    navLink.forEach((n) => n.classList.remove("active"));
    this.classList.add("active");
  
    /*Remove menu mobile*/
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show");
  }
  navLink.forEach((n) => n.addEventListener("click", linkAction));
  
  /*===== SCROLL REVEAL ANIMATION =====*/
  const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
  });
  
  /*SCROLL HOME*/
  sr.reveal(".slide_sec", {});
  
  /*SCROLL ABOUT*/
  sr.reveal(".titil_services", {});
  sr.reveal(".titel_services", { delay: 400 });
  sr.reveal(".desc_services", { delay: 500 });
  sr.reveal(".link_services", { delay: 600 });

  
  /*SCROLL SKILLS*/
  sr.reveal(".items_services", {});
  sr.reveal(".item_services", {});
  sr.reveal(".btn_services", { interval: 200 });
  
  /*SCROLL WORK*/
  sr.reveal(".titil_services", { interval: 200 });
  sr.reveal(".nav-tabs", { interval: 400 });
  /*SCROLL CONTACT*/

  sr.reveal(".item-person", { interval: 400 });
  sr.reveal(".img_images_sec", { interval: 500 });
  sr.reveal(".titil_dash-home", { interval: 600 });
  sr.reveal(".img_message-home", { interval: 400 });
  sr.reveal(".desc_message-home", { interval: 500 });
  sr.reveal(".c-line-left", { interval: 600 });

  sr.reveal(".text_contact", { interval: 400 });
  sr.reveal(".contact_footer", { interval: 500 });

  // --------------------------------------------------------------------------
  let selectHeader = select('#team')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 10) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }