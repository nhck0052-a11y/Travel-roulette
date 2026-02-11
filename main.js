const countries = [
    { 
        key: 'japan', 
        countryCode: 'JP',
        weight: 20, 
        colorPalette: {
            primary: '#E53935', // Red
            secondary: '#FFEBEE', // Light Red
            background: 'linear-gradient(to right, #E53935, #EF5350)'
        },
        cuisine: [
            { name_key: 'sushi', image: 'https://images.unsplash.com/photo-1579822606562-b13c7c222ce0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { name_key: 'ramen', image: 'https://images.unsplash.com/photo-1582046200212-09b674843b46?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { name_key: 'tempura', image: 'https://images.unsplash.com/photo-1622378931168-b769213197ef?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
        ],
        attractions: [
            { name_key: 'mount_fuji', image: 'https://images.unsplash.com/photo-1579979069677-4b77f98d1a1b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { name_key: 'tokyo_skytree', image: 'https://images.unsplash.com/photo-1540602058-f7b7f1e6f477?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { name_key: 'kiyomizu_dera', image: 'https://images.unsplash.com/photo-1541888946777-6d2740a33116?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
        ],
        etiquette: [
            { key: 'bowing' },
            { key: 'no_tipping' },
            { key: 'shoe_removal' }
        ],
        phrases: [
            { key: 'hello_jp', phrase: 'こんにちは (Konnichiwa)' },
            { key: 'thank_you_jp', phrase: 'ありがとう (Arigato)' }
        ],
        currency: { name_key: 'japanese_yen', symbol: '¥', code: 'JPY' },
        visa_link: 'https://www.mofa.go.jp/j_info/visit/visa/index.html', // Example link
        why_visit: 'japan_why_visit_text', // This will be a key for translations.js
        image: 'https://images.unsplash.com/photo-1542051841-32fd94921980?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Main image for Japan
    },
    { 
        key: 'switzerland', 
        countryCode: 'CH',
        weight: 19, 
        colorPalette: {
            primary: '#D32F2F', // Red
            secondary: '#FFCDD2', // Light Red
            background: 'linear-gradient(to right, #D32F2F, #E57373)'
        }
    },
    { 
        key: 'italy', 
        countryCode: 'IT',
        weight: 18, 
        colorPalette: {
            primary: '#008544', // Green
            secondary: '#F44336', // Red
            background: 'linear-gradient(to right, #008544, #F44336)'
        }
    },
    { 
        key: 'france', 
        countryCode: 'FR',
        weight: 17, 
        colorPalette: {
            primary: '#002654', // Dark Blue
            secondary: '#ED2939', // Red
            background: 'linear-gradient(to right, #002654, #ED2939)'
        }
    },
    { 
        key: 'spain', 
        countryCode: 'ES',
        weight: 16, 
        colorPalette: {
            primary: '#AA151B', // Red
            secondary: '#F1BF00', // Yellow
            background: 'linear-gradient(to right, #AA151B, #F1BF00)'
        }
    },
    { 
        key: 'newzealand', 
        countryCode: 'NZ',
        weight: 15, 
        colorPalette: {
            primary: '#00247D', // Dark Blue
            secondary: '#C60C30', // Red
            background: 'linear-gradient(to right, #00247D, #C60C30)'
        }
    },
    { 
        key: 'thailand', 
        countryCode: 'TH',
        weight: 14, 
        colorPalette: {
            primary: '#F4F5F8', // White
            secondary: '#A51931', // Red
            background: 'linear-gradient(to right, #F4F5F8, #A51931)'
        }
    },
    { 
        key: 'canada', 
        countryCode: 'CA',
        weight: 13, 
        colorPalette: {
            primary: '#F00000', // Red
            secondary: '#FFFFFF', // White
            background: 'linear-gradient(to right, #F00000, #FFFFFF)'
        }
    },
    { 
        key: 'portugal', 
        countryCode: 'PT',
        weight: 12, 
        colorPalette: {
            primary: '#044234', // Green
            secondary: '#FF0000', // Red
            background: 'linear-gradient(to right, #044234, #FF0000)'
        }
    },
    { 
        key: 'australia', 
        countryCode: 'AU',
        weight: 11, 
        colorPalette: {
            primary: '#00008B', // Dark Blue
            secondary: '#E4002B', // Red
            background: 'linear-gradient(to right, #00008B, #E4002B)'
        }
    },
    { 
        key: 'czechrepublic', 
        countryCode: 'CZ',
        weight: 10, 
        colorPalette: {
            primary: '#11457E', // Blue
            secondary: '#D72030', // Red
            background: 'linear-gradient(to right, #11457E, #D72030)'
        }
    },
    { 
        key: 'iceland', 
        countryCode: 'IS',
        weight: 9, 
        colorPalette: {
            primary: '#02529C', // Blue
            secondary: '#DC1E35', // Red
            background: 'linear-gradient(to right, #02529C, #DC1E35)'
        }
    },
    { 
        key: 'greece', 
        countryCode: 'GR',
        weight: 8, 
        colorPalette: {
            primary: '#0D5EAF', // Blue
            secondary: '#F1F1F1', // White
            background: 'linear-gradient(to right, #0D5EAF, #F1F1F1)'
        }
    },
    { 
        key: 'singapore', 
        countryCode: 'SG',
        weight: 7, 
        colorPalette: {
            primary: '#EF2B2D', // Red
            secondary: '#FFFFFF', // White
            background: 'linear-gradient(to right, #EF2B2D, #FFFFFF)'
        }
    },
    { 
        key: 'austria', 
        countryCode: 'AT',
        weight: 6, 
        colorPalette: {
            primary: '#ED2939', // Red
            secondary: '#FFFFFF', // White
            background: 'linear-gradient(to right, #ED2939, #FFFFFF)'
        }
    },
    { 
        key: 'netherlands', 
        countryCode: 'NL',
        weight: 5, 
        colorPalette: {
            primary: '#AD1519', // Red
            secondary: '#21468B', // Blue
            background: 'linear-gradient(to right, #AD1519, #21468B)'
        }
    },
    { 
        key: 'vietnam', 
        countryCode: 'VN',
        weight: 4, 
        colorPalette: {
            primary: '#DA251D', // Red
            secondary: '#FFFF00', // Yellow
            background: 'linear-gradient(to right, #DA251D, #FFFF00)'
        }
    },
    { 
        key: 'germany', 
        countryCode: 'DE',
        weight: 3, 
        colorPalette: {
            primary: '#000000', // Black
            secondary: '#FFCC00', // Gold
            background: 'linear-gradient(to right, #000000, #DD0000)'
        }
    },
    { 
        key: 'unitedkingdom', 
        countryCode: 'GB',
        weight: 2, 
        colorPalette: {
            primary: '#00247D', // Dark Blue
            secondary: '#CF142B', // Red
            background: 'linear-gradient(to right, #00247D, #CF142B)'
        }
    },
    { 
        key: 'indonesia', 
        countryCode: 'ID',
        weight: 1, 
        colorPalette: {
            primary: '#CC0000', // Red
            secondary: '#FFFFFF', // White
            background: 'linear-gradient(to right, #CC0000, #FFFFFF)'
        }
    }
];

const drawButton = document.getElementById('draw-button');
const resultDiv = document.getElementById('result');
const resetButton = document.getElementById('reset-button'); // Get the new reset button

drawButton.addEventListener('click', () => {
    resultDiv.textContent = translations[currentLang].drawing_text;
    // 이전에 생성된 폭죽 요소들을 제거
    document.querySelectorAll('.firework').forEach(f => f.remove());

    drawButton.style.display = 'none'; // Hide the draw button
    resetButton.style.display = 'none'; // Ensure reset button is hidden during drawing

    setTimeout(() => {
        const selectedCountry = getRandomCountry();
        const flagImageUrl = `https://flagcdn.com/w40/${selectedCountry.countryCode.toLowerCase()}.png`; // Using w40 for 40px width

        resultDiv.innerHTML = `
            <div class="country-detail-card">
                <img src="${selectedCountry.image}" alt="${selectedCountry.key}" class="country-main-image">
                <h2 class="country-name-display">
                    ${translations[currentLang].congratulations_prefix} ${translations[currentLang]['country_name_' + selectedCountry.key]} 
                    <img src="${flagImageUrl}" alt="${selectedCountry.key} flag" class="country-flag">
                    ${translations[currentLang].congratulations_suffix}
                </h2>
                <p class="country-why-visit">${translations[currentLang].why_visit_prefix} ${translations[currentLang][selectedCountry.why_visit]}</p>
                <p class="season-info">${translations[currentLang].season_info_prefix} ${translations[currentLang]['country_season_' + selectedCountry.key]}</p>

                <button id="save-to-bucketlist-button" class="action-button" data-i18n="save_to_bucketlist"></button>

                <div class="info-sections-grid">
                    <div class="info-section-item">
                        <h3>${translations[currentLang].cuisine_heading}</h3>
                        <ul class="cuisine-list">
                            ${selectedCountry.cuisine.map(item => `
                                <li>
                                    <img src="${item.image}" alt="${item.name_key}" class="cuisine-image">
                                    <span>${translations[currentLang]['cuisine_name_' + item.name_key]}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>

                    <div class="info-section-item">
                        <h3>${translations[currentLang].attractions_heading}</h3>
                        <ul class="attractions-list">
                            ${selectedCountry.attractions.map(item => `
                                <li>
                                    <img src="${item.image}" alt="${item.name_key}" class="attraction-image">
                                    <span>${translations[currentLang]['attraction_name_' + item.name_key]}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>

                <div class="info-sections-grid">
                    <div class="info-section-item">
                        <h3>${translations[currentLang].etiquette_heading}</h3>
                        <ul class="etiquette-list">
                            ${selectedCountry.etiquette.map(item => `
                                <li>${translations[currentLang]['etiquette_' + item.key]}</li>
                            `).join('')}
                        </ul>
                    </div>

                    <div class="info-section-item">
                        <h3>${translations[currentLang].phrases_heading}</h3>
                        <ul class="phrases-list">
                            ${selectedCountry.phrases.map(item => `
                                <li><strong>${translations[currentLang]['phrase_key_' + item.key]}:</strong> ${item.phrase}</li>
                            `).join('')}
                        </ul>
                    </div>
                </div>

                <div class="country-meta-info">
                    <h4>${translations[currentLang].currency_heading}</h4>
                    <p>${translations[currentLang]['currency_name_' + selectedCountry.currency.name_key]} (${selectedCountry.currency.symbol} ${selectedCountry.currency.code})</p>
                    <h4>${translations[currentLang].visa_heading}</h4>
                    <p><a href="${selectedCountry.visa_link}" target="_blank">${translations[currentLang].visa_link_text}</a></p>
                </div>
            </div>
        `;
        applyCountryStyles(selectedCountry.colorPalette); // Apply dynamic styles
        createFireworks(); // 폭죽 효과 트리거

        resetButton.textContent = translations[currentLang].reset_button; // Set button text from translation
        resetButton.style.display = 'block'; // Show the reset button
    }, 2000);
});

// Event listener for the new reset button
if (resetButton) { // Check if resetButton exists before adding event listener
    resetButton.addEventListener('click', () => {
        resultDiv.innerHTML = ''; // Clear the result display
        document.querySelectorAll('.firework').forEach(f => f.remove()); // Remove any lingering fireworks

        // Reset styles to default
        document.body.style.background = 'linear-gradient(to right, var(--primary-color), var(--secondary-color))';
        document.documentElement.style.setProperty('--primary-color', '#ff7e5f'); // Default primary color
        document.documentElement.style.setProperty('--secondary-color', '#feb47b'); // Default secondary color

        // Show the draw button and hide the reset button
        drawButton.style.display = 'block';
        resetButton.style.display = 'none';

        // Reset main heading and sub-heading text
        document.querySelector('h1[data-i18n="main_heading"]').textContent = translations[currentLang].main_heading;
        document.querySelector('p[data-i18n="sub_heading"]').textContent = translations[currentLang].sub_heading;
    });
}

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

// Language switcher logic
const languageSwitcher = document.getElementById('language-switcher');
if (languageSwitcher) {
    languageSwitcher.addEventListener('change', (event) => {
        setLanguage(event.target.value);
        localStorage.setItem('lang', event.target.value); // Save user preference
    });

    // Set initial language switcher value based on currentLang from translations.js
    document.addEventListener('DOMContentLoaded', () => {
        languageSwitcher.value = currentLang;
    });
}