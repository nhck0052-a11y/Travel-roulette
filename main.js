const countries = [
    { name: '일본', flag: '🇯🇵', weight: 20 },
    { name: '스위스', flag: '🇨🇭', weight: 19 },
    { name: '이탈리아', flag: '🇮🇹', weight: 18 },
    { name: '프랑스', flag: '🇫🇷', weight: 17 },
    { name: '스페인', flag: '🇪🇸', weight: 16 },
    { name: '뉴질랜드', flag: '🇳🇿', weight: 15 },
    { name: '태국', flag: '🇹🇭', weight: 14 },
    { name: '캐나다', flag: '🇨🇦', weight: 13 },
    { name: '포르투갈', flag: '🇵🇹', weight: 12 },
    { name: '호주', flag: '🇦🇺', weight: 11 },
    { name: '체코', flag: '🇨🇿', weight: 10 },
    { name: '아이슬란드', flag: '🇮🇸', weight: 9 },
    { name: '그리스', flag: '🇬🇷', weight: 8 },
    { name: '싱가포르', flag: '🇸🇬', weight: 7 },
    { name: '오스트리아', flag: '🇦🇹', weight: 6 },
    { name: '네덜란드', flag: '🇳🇱', weight: 5 },
    { name: '베트남', flag: '🇻🇳', weight: 4 },
    { name: '독일', flag: '🇩🇪', weight: 3 },
    { name: '영국', flag: '🇬🇧', weight: 2 },
    { name: '인도네시아', flag: '🇮🇩', weight: 1 }
];

const drawButton = document.getElementById('draw-button');
const resultDiv = document.getElementById('result');

drawButton.addEventListener('click', () => {
    resultDiv.textContent = '두구두구두구...';
    // 이전에 생성된 폭죽 요소들을 제거
    document.querySelectorAll('.firework').forEach(f => f.remove());

    setTimeout(() => {
        const selectedCountry = getRandomCountry();
        resultDiv.innerHTML = `축하합니다! 당신의 다음 여행지는 ${selectedCountry.name} ${selectedCountry.flag}입니다!`;
        createFireworks(); // 폭죽 효과 트리거
    }, 2000);
});

function getRandomCountry() {
    const totalWeight = countries.reduce((sum, country) => sum + country.weight, 0);
    let random = Math.random() * totalWeight;

    for (const country of countries) {
        if (random < country.weight) {
            return country;
        }
        random -= country.weight;
    }
}

// 폭죽 효과 생성 함수
function createFireworks() {
    const fireworkCount = 10; // 생성할 폭죽의 개수
    for (let i = 0; i < fireworkCount; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.left = `${Math.random() * 100}vw`; // 화면 전체에 랜덤 위치
        firework.style.top = `${Math.random() * 80}vh`; // 화면 상단 80% 내에서 랜덤 위치
        document.body.appendChild(firework);

        // 애니메이션이 끝나면 요소 제거 (메모리 관리)
        firework.addEventListener('animationend', () => {
            firework.remove();
        });
    }
}


// 제휴 문의 폼 토글 기능
const toggleInquiryButton = document.getElementById('toggle-inquiry-form');
const inquiryFormContent = document.getElementById('inquiry-form-content');

if (toggleInquiryButton && inquiryFormContent) {
    toggleInquiryButton.addEventListener('click', () => {
        inquiryFormContent.classList.toggle('hidden');
    });
}