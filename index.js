// 헤더
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

// 메인 슬라이드
//자동재생 함수선언
let currentIndex = 0;

function autoPlay() {
  intervalKey = setInterval(function () {
    if (currentIndex < 2) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }

    $(".item").eq(currentIndex).siblings().fadeOut();
    $(".item").eq(currentIndex).fadeIn();
    $(".step").removeClass("active-step");
    $(".step").eq(currentIndex).addClass("active-step");
  }, 3000);
}

//일시정지 함수선언
function autoPause() {
  clearInterval(intervalKey);
  $(".pause-btn").addClass("on").prev().removeClass("on");
}

//플레이 버튼
$(".play-btn").on("click", function (evt) {
  evt.preventDefault();

  $(this).addClass("on").next().removeClass("on");
  autoPlay();
});

//일시정지 이벤트
$(".pause-btn").on("click", function (evt) {
  evt.preventDefault();

  autoPause();
});

//페이지 로드시 자동재생
$(window).on("load", function () {
  autoPlay();
});

// 기사 슬라이드
let newsIndex = 0;

$navItem = $(".news-nav-item");
$newsList = $(".news-list");

$navItem.click(function () {
  $navItem.removeClass("actived");
  $(this).addClass("actived");
  $index = $(this).data("index");
  console.log($index);
  $newsList.css("margin-left", "-" + `${100 * $index}` + "%");
});
