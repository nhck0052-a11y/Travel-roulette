const countries = [
    { name: '일본', weight: 20 },
    { name: '스위스', weight: 19 },
    { name: '이탈리아', weight: 18 },
    { name: '프랑스', weight: 17 },
    { name: '스페인', weight: 16 },
    { name: '뉴질랜드', weight: 15 },
    { name: '태국', weight: 14 },
    { name: '캐나다', weight: 13 },
    { name: '포르투갈', weight: 12 },
    { name: '호주', weight: 11 },
    { name: '체코', weight: 10 },
    { name: '아이슬란드', weight: 9 },
    { name: '그리스', weight: 8 },
    { name: '싱가포르', weight: 7 },
    { name: '오스트리아', weight: 6 },
    { name: '네덜란드', weight: 5 },
    { name: '베트남', weight: 4 },
    { name: '독일', weight: 3 },
    { name: '영국', weight: 2 },
    { name: '인도네시아', weight: 1 }
];

const drawButton = document.getElementById('draw-button');
const resultDiv = document.getElementById('result');

drawButton.addEventListener('click', () => {
    resultDiv.textContent = '두구두구두구...';
    setTimeout(() => {
        const selectedCountry = getRandomCountry();
        resultDiv.textContent = `축하합니다! 당신의 다음 여행지는 ${selectedCountry.name}입니다!`;
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

// 제휴 문의 폼 토글 기능
const toggleInquiryButton = document.getElementById('toggle-inquiry-form');
const inquiryFormContent = document.getElementById('inquiry-form-content');

if (toggleInquiryButton && inquiryFormContent) {
    toggleInquiryButton.addEventListener('click', () => {
        inquiryFormContent.classList.toggle('hidden');
    });
}
