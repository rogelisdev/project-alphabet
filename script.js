const letters = "abcdefghijklmnñopqrstuvwxyz".toLowerCase().split('');
const vowels = ['a', 'e', 'i', 'o', 'u'];

const container = document.getElementById("alphabet");

const images = {
    a: "https://cdn-icons-png.flaticon.com/128/16004/16004663.png",
    b: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
    c: "https://cdn-icons-png.flaticon.com/512/616/616430.png",
    d: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
    e: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
    // sigue con las demás...
};

letters.forEach(letter => {

    const isVowel = vowels.includes(letter);
    const type = isVowel ? "Vowel" : "Consonant";
    const classes = isVowel ? "vowel" : "consonant";

    const card = document.createElement('div');
    card.className = `card-container ${classes}`;

    card.innerHTML = `
        <div class="card-inner">

            <!-- FRONT -->
            <div class="card card-front">
                <div class="card-body text-center">
                    <h1 class="card-title">${letter.toUpperCase()}</h1>
                    <p class="card-text">
                        Information ${letter.toUpperCase()}
                    </p>
                    <button class="btn btn-primary flip-btn">Voltear</button>
                </div>
            </div>

            <!-- BACK -->
            <div class="card card-back">
                <div class="img-container">
                    <img src="${images[letter] || 'https://via.placeholder.com/150'}" 
                    class="card-img-top" alt="${letter}">
                </div>
                <div class="card-body">
                    <p class="card-text">${type}</p>
                    <button class="btn btn-secondary flip-btn">Volver</button>
                </div>
            </div>

        </div>
    `;

    container.appendChild(card);
});

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('flip-btn')) {
        const card = e.target.closest('.card-container');
        card.classList.toggle('flipped'); // 🔥 aquí estaba el error
    }
});