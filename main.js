const countries = [
    { 
        key: 'japan', 
        countryCode: 'JP',
        weight: 20, 
        colorPalette: {
            primary: '#E53935', // Red
            secondary: '#FFEBEE', // Light Red
            background: 'linear-gradient(to right, #E53935, #EF5350)'
        }
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
            <h2>${translations[currentLang].congratulations_prefix} <br>${translations[currentLang]['country_name_' + selectedCountry.key]} <img src="${flagImageUrl}" alt="${selectedCountry.key} flag" class="country-flag">${translations[currentLang].congratulations_suffix}</h2>
            <p class="country-description">${translations[currentLang].country_description_prefix} ${translations[currentLang]['country_description_' + selectedCountry.key]}</p>
            <p class="season-info">${translations[currentLang].season_info_prefix} ${translations[currentLang]['country_season_' + selectedCountry.key]}</p>
        `;
        applyCountryStyles(selectedCountry.colorPalette); // Apply dynamic styles
        createFireworks(); // 폭죽 효과 트리거

        resetButton.textContent = translations[currentLang].reset_button; // Set button text from translation
        resetButton.style.display = 'block'; // Show the reset button
    }, 2000);
});

// Event listener for the new reset button
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