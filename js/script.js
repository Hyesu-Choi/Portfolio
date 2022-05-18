// 클릭 효과
let body = document.querySelector("body");

document.addEventListener("click", function (e) {
  var x = e.offsetX;
  var y = e.offsetY;
  let ripple = document.createElement("div");
  ripple.className = "ripple";
  body.appendChild(ripple);
  ripple.style.left = x + "px";
  ripple.style.top = y + "px";
  ripple.onanimationend = () => {
    body.removeChild(ripple);
  };
});

// 스크롤시 헤더 색상 변경
function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 70) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// HOME 타이핑커서 이펙트
const content =
  "안녕하세요, 신입 퍼블리셔 최혜수 입니다. \n Welcome to my Portfolio.";
const text = document.querySelector(".text");
let i = 0;

function sleep(delay) {
  // 텍스트 다 입력 후, 조금 쉬었다 지우고 다시 시작하는 함수
  const start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

function typing() {
  let txt = content[i++];
  text.innerHTML += txt === "\n" ? "<br/>" : txt;
  if (i > content.length) {
    text.textContent = "";
    i = 0;
    sleep(3000);
  }
}
setInterval(typing, 200);

// scroll up 버튼 보이기
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

// 스크롤시 헤더에 해당 섹션 active
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 250,
      sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);
