$(document).ready(function () {
  (function ($) {
    "use strict";

    /*------------------------------    
    Go Top
    ------------------------------*/
    $(document).ready(function () {
      var scrollBtn = $("#scrollToTopBtn");

      // 1. Check window scroll position
      $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
          // Show button after scrolling down 300px
          scrollBtn.addClass("show-btn");
        } else {
          // Hide button if at the top
          scrollBtn.removeClass("show-btn");
        }
      });

      // 2. Click action to smoothly scroll back to the top
      scrollBtn.on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "300"); // 300ms smooth animation speed
      });
    });

    /*------------------------------    
    Go Top from template
    ------------------------------*/
    $('a[href="#top"]').on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 800);
      return false;
    });

    /*------------------------------    
    Shortcodes
    ------------------------------*/
    $('span[data-toggle="tooltip"]').tooltip();
    $('span[data-toggle="tooltip"][data-placement="top"]').tooltip("show");

    /*------------------------------    
    Search Filter
    ------------------------------*/
    $(".searchFilters .dropdown-menu")
      .find("a")
      .click(function (e) {
        e.preventDefault();
        var param = $(this).attr("href").replace("#", "");
        var concept = $(this).text();
        $(".searchFilters span#searchFilterValue").text(concept);
        $(".input-group #search_param").val(param);
      });

    /*------------------------------    
    Partner And Testimonial
    ------------------------------*/
    $(".ptTabNavs").on("click", ".prevTab", function () {
      $(".ptTab_nav > .active").prev("li").find("a").trigger("click");
    });

    $(".ptTabNavs").on("click", ".nextTab", function () {
      $(".ptTab_nav > .active").next("li").find("a").trigger("click");
    });

    /*------------------------------    
Gallery Slider
------------------------------*/
    $(".featureCats").owlCarousel({
      loop: true,
      margin: 0,
      responsiveClass: true,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],

      // --- SPEED SETTINGS START ---

      // 1. Animation Speed: Controls how fast the slide moves.
      // The default is usually 250. Higher number = slower animation.
      // 1000 = 1 second.
      smartSpeed: 1000,

      // 2. Autoplay Settings (Optional):
      // Currently, your autoplay is off. If you decide to turn it to 'true',
      // you can control the wait time between slides here.
      autoplay: false,
      autoplayTimeout: 3000, // Wait time in milliseconds (3000 = 3 seconds). Higher = slower.

      // --- SPEED SETTINGS END ---

      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        600: {
          items: 2,
          nav: true,
        },
        1000: {
          items: 4,
          nav: true,
        },
      },
    });

    /*----------------------------------------------------*/
    /*  Count Up
    /*----------------------------------------------------*/
    $(".counter").counterUp({
      delay: 15,
      time: 1500,
    });

    /*----------------------------------------------------*/
    /*  Spinner
    /*----------------------------------------------------*/
    $(".spinner .btn:first-of-type").on("click", function () {
      $(".spinner input").val(parseInt($(".spinner input").val(), 10) + 1);
    });
    $(".spinner .btn:last-of-type").on("click", function () {
      $(".spinner input").val(parseInt($(".spinner input").val(), 10) - 1);
    });

    /*----------------------------------------------------*/
    /*  Shipping Address
    /*----------------------------------------------------*/
    $("#shippingAddressEscape").on("click", function () {
      var isChecked = $("#shippingAddressEscape").is(":checked");
      if (isChecked)
        $("#shippingAddress").find(":input").attr("disabled", "disabled");
      else
        $("#shippingAddress").find(":input").removeAttr("disabled", "disabled");
    });

    /*------------------------------    
    Team Member Slider
    ------------------------------*/
    $(".ourTeamSlide").owlCarousel({
      loop: true,
      margin: 0,
      responsiveClass: true,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      autoplay: true,
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        600: {
          items: 1,
          nav: true,
        },
        1000: {
          items: 2,
          nav: true,
        },
      },
    });
  })(jQuery);
});

$(window).load(function () {
  /*------------------------------    
    Sinlge Prodcut Slider
    ------------------------------*/
  $("#productImageSliderNav").flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    directionNav: true,
    slideshow: false,
    itemWidth: 130,
    itemMargin: 10,
    asNavFor: "#productImageSlider",
    prevText: '<i class="fa fa-angle-left"></i>',
    nextText: '<i class="fa fa-angle-right"></i>',
  });

  $("#productImageSlider").flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    directionNav: false,
    slideshow: false,
    sync: "#productImageSliderNav",
  });

  /*------------------------------    
    Main Slider
    ------------------------------*/
  $(".sliderCont").flexslider({
    animation: "fade",
    // Primary Controls
    controlNav: false, //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
    directionNav: true, //Boolean: Create navigation for previous/next navigation? (true/false)
    prevText: '<i class="fa fa-angle-left"></i>', //String: Set the text for the "previous" directionNav item
    nextText: '<i class="fa fa-angle-right"></i>', //String: Set the text for the "next" directionNav item
  });
  $(".sliderCont2").flexslider({
    animation: "fade",
    // Primary Controls
    controlNav: "thumbnails", //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
    directionNav: true, //Boolean: Create navigation for previous/next navigation? (true/false)
    prevText: '<i class="fa fa-angle-left"></i>', //String: Set the text for the "previous" directionNav item
    nextText: '<i class="fa fa-angle-right"></i>', //String: Set the text for the "next" directionNav item
  });
});

/*------------------------------    
    Individual Product Inquire Button
    ------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  // 1. Find all the Inquire buttons on the page
  const inquireButtons = document.querySelectorAll(".smart-inquire-btn");

  inquireButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      // Stop the button from just jumping to the top of the page
      event.preventDefault();

      // 2. Look inside the same product box and find the H2 title
      const productBox = this.closest(".productContentBox");
      let productName = productBox.querySelector("h2").innerText;

      // 3. Clean up the name (This removes the "01. ", "02. " numbers from the title!)
      productName = productName.replace(/^\d+\.\s*/, "");

      // 4. Send the user to the contact page with the exact product name attached
      window.location.href =
        "/contact.html?product=" +
        encodeURIComponent(productName) +
        "#contactForm";
    });
  });
});
