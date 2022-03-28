$.fn.isOnScreen = function () {
  let win = $(window);

  let viewport = {
    top: win.scrollTop(),
    left: win.scrollLeft(),
  };
  viewport.right = viewport.left + win.width();
  viewport.bottom = viewport.top + win.height();

  let bounds = this.offset();
  bounds.right = bounds.left + this.outerWidth();
  bounds.bottom = bounds.top + this.outerHeight();

  return !(
    viewport.right < bounds.left ||
    viewport.left > bounds.right ||
    viewport.bottom < bounds.top ||
    viewport.top > bounds.bottom
  );
};

let updateNavBack = function () {
  let header = $("header");
  let headerTop = header.offset().top;
  if (headerTop > 1) {
    header.addClass("backed");
  } else {
    header.removeClass("backed");
  }
};

let toggleMenu = function (dir = false) {
  let navMenu = $(".navMenu .toggle");
  navMenu.toggleClass("close");
  $("body").toggleClass("slided");
  $(".page").toggleClass("slided");
  if (!dir) {
    $(".panel").toggleClass("slided");
    $(".panel").toggleClass("no-render");
  } else {
    $(".panel").toggleClass("no-render");
    setTimeout(() => $(".panel").toggleClass("slided"), 200);
  }
};

let updatePanel = function () {
  $(".panel").css({ top: $(window).scrollTop() });
};

$(function () {
  updateNavBack();
  updatePanel();
  $(".brand-path").addClass("animation-unveil");

  $(window).scroll(() => {
    updateNavBack();
    updatePanel();
  });

  $(".navMenu").click(toggleMenu);
  $(".panel-left").click(function () {
    toggleMenu(true);
  });
});
