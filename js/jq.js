$(document).ready(function () {
  let options = {
    startAngle: -1.55,
    size: 150,
    value: 0.95,
    fill: { gradient: ["#a445b2", "#fa4299"] },
  };
  $(".circle .bar")
    .circleProgress(options)
    .on("circle-animation-progress", function (event, progress, stepValue) {
      $(this)
        .parent()
        .find("span")
        .text(String(stepValue.toFixed(2).substr(2)) + "%");
    });
  $(".css .bar").circleProgress({
    value: 0.9,
  });
  $(".js .bar").circleProgress({
    value: 0.75,
  });
  $(".ps .bar").circleProgress({
    value: 0.65,
  });

  /* 모바일 영역 메뉴 토글 */
  $(".menu_toggle").on("click", function () {
    $(this).toggleClass("open");
    $(".nav").toggleClass("open");
  });
  $(".nav_link").on("click", function () {
    $(".menu_toggle").removeClass("open");
    $(".nav").removeClass("open");
  });
});
