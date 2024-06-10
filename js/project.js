const detailButtons = document.querySelectorAll("button");
const textGame = document.querySelector("button~#textGame");
const healingWeb = document.querySelector("button+#healingWeb");
const serverDataProject = document.querySelector("#serverDataProject");
const securityMoney = document.querySelector("button+#securityMoney");
const aiProject = document.querySelector("button~#aiProject");

for(let detailButton of detailButtons) {
  detailButton.addEventListener("click", function() {

    if(detailButton === detailButtons[0]) {
      let newUlTag = document.createElement("ul");
      newUlTag.innerHTML = `
      <span class="deleteButton">닫기</span>
      <li>사용 언어</li>
          <p>C언어</p>
            
      <li>내용</li>
          <p>
            1. 캐릭터의 위치를 입력<br>
            2. 게임 인트로 종료 상태 출력</br>
            3. 난수 생성으로 확률에 따라 캐릭터의 이동 구현<br>
            4. 조건문, 반복문을 통해 게임의 승리, 패배 상황 구현
          </p>

      <li>깃허브 주소</li>  
          <p>:
            <a href="https://github.com/Relax-Phytoncide-Code/ToTheBusanTwoHyeonJaeLee20242415usingGithub.git">
            https://github.com/Relax-Phytoncide-Code/ToTheBusanTwoHyeonJaeLee20242415usingGithub.git</a>
          </p>
      `;
      textGame.appendChild(newUlTag);
    }

    else if(detailButton === detailButtons[1]) {
      let newUlTag = document.createElement("ul");
      newUlTag.innerHTML = `
      <span class="deleteButton">닫기</span>
      <li>사용 언어</li>
          <p>JavaScript, HTML, CSS</p>
            
      <li>내용</li>
          <p>
            사용자들이 업로드한 그림과 글이 돋보일 수 있는 디자인        
          </p>
      `;
      healingWeb.appendChild(newUlTag);
    }

    else if(detailButton === detailButtons[2]) {
      let newUlTag = document.createElement("ul");
      newUlTag.innerHTML = `
      <span class="deleteButton">닫기</span>
      <li>내용</li>
        <p>
          1. 작가들이 업로드한 글과 그림 및 사진 저장할 수 있는 서버 및 데이터베이스 구현(예정)<br>
          2. 도메인 등록 및 배포(예정)
        </p>
      `;
      serverDataProject.appendChild(newUlTag);
    }

    else if(detailButton === detailButtons[3]) {
      let newUlTag = document.createElement("ul");
      newUlTag.innerHTML = `
      <span class="deleteButton">닫기</span>     
      <li>내용</li>
          <p>
            1.웹 페이지 사용자의 비밀번호 아이디 개인정보호 입력 및 보안 기능 추가(예정)<br>
            2.수익 창출 기능 추가(예정);
          </p>
      `;
      securityMoney.appendChild(newUlTag);
    }

    else {
      let newUlTag = document.createElement("ul");
      newUlTag.innerHTML = `
      <span class="deleteButton">닫기</span>     
      <li>내용</li>
          <p>
            AI 기반 사용자 맞춤 글, 이미지 추천기능 구현(예정)<br>
          </p>
      `;
      aiProject.appendChild(newUlTag);
    }

    const deleteButtons = document.querySelectorAll(".deleteButton");

    deleteButtons.forEach(deleteButton => {
      deleteButton.addEventListener("click", function() {
        this.parentNode.remove(this);
      });
    }); 
      
  });
};

