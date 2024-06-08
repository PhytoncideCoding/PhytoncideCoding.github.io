// 오른쪽 버튼 사용금지 알림창 기능 구현
window.addEventListener("contextmenu", e => {
  e.preventDefault();
  alert("오른쪽 버튼을 사용할 수 없습니다.");
});

// 나의 스킬 5가지 작성 클릭했을 때 네온 효과 강조 만들기
const skills = document.querySelectorAll(".skills");

let i;

skills.forEach( skill => {
  skill.addEventListener("mouseover", (e) => {
    if(e.target.innerText === "C Language") {
      i = 0;
    }
    else if(e.target.innerText === "JavaScript") {
      i = 1;
    }
    else if(e.target.innerText === "Git(planning)") {
      i = 2;
    }
    else if(e.target.innerText === "Phyton(planning)") {
      i = 3;
    }
    else if(e.target.innerText === "NodeJS(planning)") {
      i = 4;
    }
    skills[i].classList.toggle(`neon${i}`);
  });
});

skills.forEach( skill => {
  skill.addEventListener("mouseout", (e) => {
    if(e.target.innerText === "C Language") {
      i = 0;
    }
    else if(e.target.innerText === "JavaScript") {
      i = 1;
    }
    else if(e.target.innerText === "Git(planning)") {
      i = 2;
    }
    else if(e.target.innerText === "Phyton(planning)") {
      i = 3;
    }
    else if(e.target.innerText === "NodeJS(planning)") {
      i = 4;
    }
    skills[i].classList.toggle(`neon${i}`);
  });
});


