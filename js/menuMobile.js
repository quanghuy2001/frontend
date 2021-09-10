/*
Remastered from Responsive Mobile Menu v1.0
responsivemobilemenu.com
*/

function responsiveMobileMenu() {
  $(".mobile-menu").each(function () {
    $(this).children("ul").addClass("mobile-menu-main-list"); // mark main menu list

    var $style = $(this).attr("data-menu-style"); // get menu style
    if (typeof $style == "undefined" || $style == false) {
      $(this).addClass("minimal"); // set graphite style if style is not defined
    } else {
      $(this).addClass($style);
    }

    /* 	width of menu list (non-toggled) */

    var $width = 0;
    $(this)
      .find("ul li")
      .each(function () {
        $width += $(this).outerWidth();
      });

    // if modern browser

    if ($.support.leadingWhitespace) {
      $(this).css("max-width", $width * 1.428 + "px"); // change this value in order mobile menu to appear in different resolution
    }
    //
    else {
      $(this).css("width", $width * 1.05 + "px"); // change this value in order basic menu to appear in different resolution
    }
  });
}
function getMobileMenu() {
  /* 	build toggled dropdown menu list */

  $(".mobile-menu").each(function () {
    var menutitle = $(this).attr("data-menu-title");
    if (menutitle == "") {
      menutitle = "Menu";
    } else if (menutitle == undefined) {
      menutitle = "MASSAGEBAY";
    }
    var $menulist = $(this).children(".mobile-menu-main-list").html();
    var $menucontrols =
      "<div class='mobile-menu-toggled-controls'><div class='mobile-menu-toggled-title'>" +
      menutitle +
      "</div><div class='mobile-menu-button'><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span></div></div>";
    $(this).prepend(
      "<div class='mobile-menu-toggled mobile-menu-closed'>" +
        $menucontrols +
        "<ul>" +
        $menulist +
        "</ul></div>"
    );
  });
}

function adaptMenu() {
  /* 	toggle menu on resize */

  $(".mobile-menu").each(function () {
    var $width = $(this).css("max-width");
    $width = $width.replace("px", "");
    if ($(this).parent().width() < $width * 1.05) {
      $(this).children(".mobile-menu-main-list").hide(0);
      $(this).children(".mobile-menu-toggled").show(0);
    } else {
      $(this).children(".mobile-menu-main-list").show(0);
      $(this).children(".mobile-menu-toggled").hide(0);
    }
  });
}

$(function () {
  responsiveMobileMenu();
  getMobileMenu();
  adaptMenu();

  /* slide down mobile menu on click */

  $(".mobile-menu-toggled, .mobile-menu-toggled .mobile-menu-button").click(
    function () {
      if ($(this).is(".mobile-menu-closed")) {
        $(this).find("ul").stop().show(300);
        $(this).removeClass("mobile-menu-closed");
      } else {
        $(this).find("ul").stop().hide(300);
        $(this).addClass("mobile-menu-closed");
      }
    }
  );
});
/* 	hide mobile menu on resize */
$(window).resize(function () {
  adaptMenu();
});
