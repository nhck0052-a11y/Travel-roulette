const countries = [
    { 
        name: '일본', 
        flag: '🇯🇵', 
        weight: 20, 
        seasonInfo: '봄(3~5월)과 가을(9~11월)이 성수기입니다.',
        description: '첨단 기술과 고유한 문화가 공존하는 매력적인 나라, 일본으로 떠나보세요! 아름다운 자연 경관과 맛있는 음식, 그리고 현대적인 도시의 활기가 당신을 기다립니다.',
        colorPalette: {
            primary: '#E53935', // Red
            secondary: '#FFEBEE', // Light Red
            background: 'linear-gradient(to right, #E53935, #EF5350)'
        }
    },
    { 
        name: '스위스', 
        flag: '🇨🇭', 
        weight: 19, 
        seasonInfo: '여름(6~8월)과 겨울(12~2월)이 성수기입니다.',
        description: '알프스의 웅장한 자연과 맑은 공기, 그림 같은 마을이 어우러진 스위스! 하이킹, 스키, 그리고 아름다운 호수에서 잊지 못할 추억을 만들어 보세요.',
        colorPalette: {
            primary: '#D32F2F', // Red
            secondary: '#FFCDD2', // Light Red
            background: 'linear-gradient(to right, #D32F2F, #E57373)'
        }
    },
    { 
        name: '이탈리아', 
        flag: '🇮🇹', 
        weight: 18, 
        seasonInfo: '봄(4~6월)과 가을(9~10월)이 성수기입니다.',
        description: '찬란한 역사와 예술, 그리고 미식의 나라 이탈리아! 로마의 유적부터 피렌체의 르네상스, 베네치아의 낭만까지 다채로운 매력을 경험해 보세요.',
        colorPalette: {
            primary: '#008544', // Green
            secondary: '#F44336', // Red
            background: 'linear-gradient(to right, #008544, #F44336)'
        }
    },
    { 
        name: '프랑스', 
        flag: '🇫🇷', 
        weight: 17, 
        seasonInfo: '봄(4~6월)과 가을(9~10월)이 성수기입니다.',
        description: '예술과 낭만의 나라, 프랑스! 파리의 에펠탑부터 프로방스의 라벤더 밭까지, 다채로운 매력이 가득한 곳에서 특별한 경험을 만끽하세요.',
        colorPalette: {
            primary: '#002654', // Dark Blue
            secondary: '#ED2939', // Red
            background: 'linear-gradient(to right, #002654, #ED2939)'
        }
    },
    { 
        name: '스페인', 
        flag: '🇪🇸', 
        weight: 16, 
        seasonInfo: '봄(4~6월)과 가을(9~10월)이 성수기입니다.',
        description: '태양의 열정과 예술이 살아 숨 쉬는 스페인! 정열적인 플라멩코와 맛있는 타파스, 가우디의 건축물이 있는 매력적인 나라입니다.',
        colorPalette: {
            primary: '#AA151B', // Red
            secondary: '#F1BF00', // Yellow
            background: 'linear-gradient(to right, #AA151B, #F1BF00)'
        }
    },
    { 
        name: '뉴질랜드', 
        flag: '🇳🇿', 
        weight: 15, 
        seasonInfo: '여름(12~2월)이 성수기입니다.',
        description: '대자연의 경이로움이 가득한 뉴질랜드! 영화 속 한 장면 같은 풍경과 다이나믹한 액티비티로 모험을 즐겨보세요.',
        colorPalette: {
            primary: '#00247D', // Dark Blue
            secondary: '#C60C30', // Red
            background: 'linear-gradient(to right, #00247D, #C60C30)'
        }
    },
    { 
        name: '태국', 
        flag: '🇹🇭', 
        weight: 14, 
        seasonInfo: '건기(11월~2월)가 성수기입니다.',
        description: '황금빛 사원과 이국적인 해변, 활기 넘치는 시장이 매력적인 태국! 맛있는 길거리 음식과 따뜻한 미소로 가득한 곳에서 휴가를 즐겨보세요.',
        colorPalette: {
            primary: '#F4F5F8', // White
            secondary: '#A51931', // Red
            background: 'linear-gradient(to right, #F4F5F8, #A51931)'
        }
    },
    { 
        name: '캐나다', 
        flag: '🇨🇦', 
        weight: 13, 
        seasonInfo: '여름(6~8월)이 성수기입니다.',
        description: '광활한 자연과 다채로운 문화가 공존하는 캐나다! 록키 산맥의 웅장함부터 도시의 활기찬 분위기까지, 모든 것을 경험할 수 있습니다.',
        colorPalette: {
            primary: '#F00000', // Red
            secondary: '#FFFFFF', // White
            background: 'linear-gradient(to right, #F00000, #FFFFFF)'
        }
    },
    { 
        name: '포르투갈', 
        flag: '🇵🇹', 
        weight: 12, 
        seasonInfo: '여름(6~8월)이 성수기입니다.',
        description: '아름다운 해안선과 유서 깊은 도시들이 매력적인 포르투갈! 따뜻한 햇살 아래 맛있는 와인과 신선한 해산물을 즐기며 여유로운 시간을 보내세요.',
        colorPalette: {
            primary: '#044234', // Green
            secondary: '#FF0000', // Red
            background: 'linear-gradient(to right, #044234, #FF0000)'
        }
    },
    { 
        name: '호주', 
        flag: '🇦🇺', 
        weight: 11, 
        seasonInfo: '봄(9~11월)과 가을(3~5월)이 성수기입니다.',
        description: '다양한 야생동물과 아름다운 자연경관이 펼쳐지는 호주! 서핑, 스쿠버 다이빙, 그리고 아웃백 탐험 등 다채로운 경험을 즐겨보세요.',
        colorPalette: {
            primary: '#00008B', // Dark Blue
            secondary: '#E4002B', // Red
            background: 'linear-gradient(to right, #00008B, #E4002B)'
        }
    },
    { 
        name: '체코', 
        flag: '🇨🇿', 
        weight: 10, 
        seasonInfo: '봄(4~6월)과 가을(9~10월)이 성수기입니다.',
        description: '중세의 아름다움을 간직한 동유럽의 보석, 체코! 프라하의 낭만적인 거리와 역사적인 건축물들이 당신을 동화 속으로 초대합니다.',
        colorPalette: {
            primary: '#11457E', // Blue
            secondary: '#D72030', // Red
            background: 'linear-gradient(to right, #11457E, #D72030)'
        }
    },
    { 
        name: '아이슬란드', 
        flag: '🇮🇸', 
        weight: 9, 
        seasonInfo: '여름(6~8월)이 성수기입니다.',
        description: '불과 얼음의 땅, 아이슬란드! 신비로운 오로라와 빙하, 온천 등 경이로운 자연 속에서 잊지 못할 경험을 선사합니다.',
        colorPalette: {
            primary: '#02529C', // Blue
            secondary: '#DC1E35', // Red
            background: 'linear-gradient(to right, #02529C, #DC1E35)'
        }
    },
    { 
        name: '그리스', 
        flag: '🇬🇷', 
        weight: 8, 
        seasonInfo: '여름(6~9월)이 성수기입니다.',
        description: '고대 문명의 발상지이자 아름다운 에게 해의 나라, 그리스! 신화 속 풍경과 푸른 바다가 어우러진 환상적인 여행을 경험해 보세요.',
        colorPalette: {
            primary: '#0D5EAF', // Blue
            secondary: '#F1F1F1', // White
            background: 'linear-gradient(to right, #0D5EAF, #F1F1F1)'
        }
    },
    { 
        name: '싱가포르', 
        flag: '🇸🇬', 
        weight: 7, 
        seasonInfo: '연중 온화하나 2~4월이 쾌적합니다.',
        description: '다채로운 문화가 공존하는 미래 도시, 싱가포르! 화려한 야경과 현대적인 건축물, 미식의 향연을 즐기며 도시의 매력에 빠져보세요.',
        colorPalette: {
            primary: '#EF2B2D', // Red
            secondary: '#FFFFFF', // White
            background: 'linear-gradient(to right, #EF2B2D, #FFFFFF)'
        }
    },
    { 
        name: '오스트리아', 
        flag: '🇦🇹', 
        weight: 6, 
        seasonInfo: '여름(6~8월)과 겨울(12~2월)이 성수기입니다.',
        description: '음악과 예술의 나라, 오스트리아! 웅장한 알프스 산맥과 아름다운 도시에서 클래식 음악과 함께 여유로운 휴식을 즐겨보세요.',
        colorPalette: {
            primary: '#ED2939', // Red
            secondary: '#FFFFFF', // White
            background: 'linear-gradient(to right, #ED2939, #FFFFFF)'
        }
    },
    { 
        name: '네덜란드', 
        flag: '🇳🇱', 
        weight: 5, 
        seasonInfo: '봄(4~5월)과 여름(6~8월)이 성수기입니다.',
        description: '풍차와 튤립의 나라, 네덜란드! 아름다운 운하와 예술 작품, 그리고 자유로운 분위기 속에서 특별한 경험을 만끽하세요.',
        colorPalette: {
            primary: '#AD1519', // Red
            secondary: '#21468B', // Blue
            background: 'linear-gradient(to right, #AD1519, #21468B)'
        }
    },
    { 
        name: '베트남', 
        flag: '🇻🇳', 
        weight: 4, 
        seasonInfo: '건기(11월~4월)가 성수기입니다.',
        description: '아름다운 자연경관과 풍부한 문화유산이 매력적인 베트남! 하롱베이의 신비로운 풍경과 활기찬 도시에서 특별한 경험을 만끽하세요.',
        colorPalette: {
            primary: '#DA251D', // Red
            secondary: '#FFFF00', // Yellow
            background: 'linear-gradient(to right, #DA251D, #FFFF00)'
        }
    },
    { 
        name: '독일', 
        flag: '🇩🇪', 
        weight: 3, 
        seasonInfo: '여름(6~8월)과 크리스마스 시즌이 성수기입니다.',
        description: '역사와 현대가 공존하는 매력적인 나라, 독일! 중세 시대의 성과 현대적인 도시 풍경, 그리고 맛있는 맥주를 즐겨보세요.',
        colorPalette: {
            primary: '#000000', // Black
            secondary: '#FFCC00', // Gold
            background: 'linear-gradient(to right, #000000, #DD0000)'
        }
    },
    { 
        name: '영국', 
        flag: '🇬🇧', 
        weight: 2, 
        seasonInfo: '여름(6~8월)이 성수기입니다.',
        description: '오랜 역사와 전통, 그리고 현대적인 매력이 어우러진 영국! 런던의 활기찬 분위기와 고풍스러운 건축물, 아름다운 자연을 만끽하세요.',
        colorPalette: {
            primary: '#00247D', // Dark Blue
            secondary: '#CF142B', // Red
            background: 'linear-gradient(to right, #00247D, #CF142B)'
        }
    },
    { 
        name: '인도네시아', 
        flag: '🇮🇩', 
        weight: 1, 
        seasonInfo: '건기(4~10월)가 성수기입니다.',
        description: '다양한 문화와 아름다운 섬들이 매력적인 인도네시아! 발리의 이국적인 해변부터 자바의 고대 사원까지, 다채로운 매력을 경험해 보세요.',
        colorPalette: {
            primary: '#CC0000', // Red
            secondary: '#FFFFFF', // White
            background: 'linear-gradient(to right, #CC0000, #FFFFFF)'
        }
    }
];

const drawButton = document.getElementById('draw-button');
const resultDiv = document.getElementById('result');

drawButton.addEventListener('click', () => {
    resultDiv.textContent = '두구두구두구...';
    // 이전에 생성된 폭죽 요소들을 제거
    document.querySelectorAll('.firework').forEach(f => f.remove());

    setTimeout(() => {
        const selectedCountry = getRandomCountry();
        resultDiv.innerHTML = `
            <h2>축하합니다! 당신의 다음 여행지는 <br>${selectedCountry.name} ${selectedCountry.flag}입니다!</h2>
            <p class="country-description">${selectedCountry.description}</p>
            <p class="season-info">${selectedCountry.seasonInfo}</p>
        `;
        applyCountryStyles(selectedCountry.colorPalette); // Apply dynamic styles
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

function applyCountryStyles(colorPalette) {
    document.body.style.background = colorPalette.background;
    document.documentElement.style.setProperty('--primary-color', colorPalette.primary);
    document.documentElement.style.setProperty('--secondary-color', colorPalette.secondary);
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
