// popup.js

const loginBtn = document.getElementById('loginBtn');
const status = document.getElementById('status');

// 로그인 버튼 클릭 시 실행
loginBtn.addEventListener('click', () => {
  status.textContent = '로그인 중...';

  // chrome.identity.getAuthToken: 구글 OAuth2 토큰을 가져오는 함수
  // interactive: true → 로그인 창을 직접 띄워줌
  chrome.identity.getAuthToken({ interactive: true }, (token) => {

    // 에러가 났거나 토큰이 없으면
    if (chrome.runtime.lastError || !token) {
      status.textContent = '로그인 실패: ' + (chrome.runtime.lastError?.message || '알 수 없는 오류');
      return;
    }

    // 토큰을 받아왔으면
    status.textContent = '로그인 성공! 토큰 수신 완료.';
    console.log('토큰:', token);
  });
});