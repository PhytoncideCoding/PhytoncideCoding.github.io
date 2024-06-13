// class을 이용하여 사용자 객체 생성
class PicturesOfJobs {
  constructor(image0, image1, image2, image3, image4) {
    this.image0 = image0;
    this.image1 = image1;
    this.image2 = image2;
    this.image3 = image3;
    this.image4 = image4;
  }
}
// 인스턴스 객체 생성
const picturesOfJobs = new PicturesOfJobs("image0.jpg", "image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg");
// 질문 가져오기
const jobQuestion = document.querySelector("#jobQuestion");
// 영역 가져오기
const jobResult = document.querySelector("#jobResult");
// 표의 행 가져오기
const jobsTd = document.querySelectorAll("td");
// 프로토타입 이용해서 클래스 객체에 함추 추가 및 표 테두리 경계 색깔 변화 기능 및 백그라운드 이미지 keydown 통한 변화 구현
PicturesOfJobs.prototype.showImages = function() {
  jobQuestion.addEventListener("keydown", (e) => {

    let i = 0;
    
    if(e.key === "0") {
      jobResult.style.backgroundImage = `url(images/${picturesOfJobs.image0})`;
      
      jobsTd[0].classList.add("tableRow0");
      jobsTd[1].classList.add("tableRow0");
    }
    else if(e.key === "1") {
      jobResult.style.backgroundImage = `url(images/${picturesOfJobs.image1})`;
      jobsTd[2].classList.add("tableRow1");
      jobsTd[3].classList.add("tableRow1");
    }
    else if(e.key === "2") {
      jobResult.style.backgroundImage = `url(images/${picturesOfJobs.image2})`;
      jobsTd[4].classList.add("tableRow2");
      jobsTd[5].classList.add("tableRow2");
    }
    else if(e.key === "3") {
      jobResult.style.backgroundImage = `url(images/${picturesOfJobs.image3})`;
      jobsTd[6].classList.add("tableRow3");
      jobsTd[7].classList.add("tableRow3");
    }
    else if(e.key === "4") {
      jobResult.style.backgroundImage = `url(images/${picturesOfJobs.image4})`;
      jobsTd[8].classList.add("tableRow4");
      jobsTd[9].classList.add("tableRow4");
    }
    else {
      alert("인덱스에 해당하는 정확한 값을 다시 입력해주세요");
    }
    
  });
}
//함수 실행
picturesOfJobs.showImages();




