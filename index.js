$(document).ready(function () {
  // 검색창 toggle
  $(".search-btn").click(function () {
    $(".search-box-root").addClass("on");
  });
  $(".close-btn").click(function () {
    $(".search-box-root").removeClass("on");
  });

  // 모바일 nav메뉴 toggle
  $(".menu-btn").click(function () {
    $(".mobile-menu-root").addClass("on");
  });
  $(".menu-close-btn").click(function () {
    $(".mobile-menu-root").removeClass("on");
  });

  // nav 클릭시 활성화
  $(".nav").click(function () {
    $(".nav").removeClass("actived");
    $(this).addClass("actived");
  });
});
