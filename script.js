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

const info = {
    a: "First letter of the alphabet; vowel sound /a/; comes from Greek alpha.",
    b: "Second letter; consonant sound /b/; from Phoenician beth (house).",
    c: "Third letter; /k/ or /s/ sound; from Latin/Greek origins.",
    d: "Fourth letter; consonant sound /d/; from Phoenician daleth.",
    e: "Fifth letter; vowel sound /e/; comes from Greek epsilon.",
    f: "Sixth letter; consonant sound /f/; from Phoenician waw.",
    g: "Seventh letter; consonant sound /g/; developed in Latin from C.",
    h: "Eighth letter; consonant sound /h/; from Phoenician heth.",
    i: "Ninth letter; vowel sound /i/; from Greek iota.",
    j: "Tenth letter; /dʒ/ sound; evolved from the letter I in Latin.",
    k: "Eleventh letter; consonant sound /k/; from Greek kappa.",
    l: "Twelfth letter; consonant sound /l/; from Phoenician lamed.",
    m: "Thirteenth letter; consonant sound /m/; from Phoenician mem.",
    n: "Fourteenth letter; consonant sound /n/; from Phoenician nun.",
    o: "Fifteenth letter; vowel sound /o/; from Greek omicron.",
    p: "Sixteenth letter; consonant sound /p/; from Phoenician pe.",
    q: "Seventeenth letter; /kw/ sound; always used with U in English.",
    r: "Eighteenth letter; consonant sound /r/; from Phoenician resh.",
    s: "Nineteenth letter; consonant sound /s/; from Phoenician shin.",
    t: "Twentieth letter; consonant sound /t/; from Phoenician taw.",
    u: "Twenty-first letter; vowel sound /u/; developed from Latin V.",
    v: "Twenty-second letter; consonant sound /v/; from Latin V/U split.",
    w: "Twenty-third letter; /w/ sound; called 'double U'.",
    x: "Twenty-fourth letter; /ks/ sound; from Greek xi.",
    y: "Twenty-fifth letter; /j/ or vowel sound; from Greek upsilon.",
    z: "Twenty-sixth letter; /z/ sound; from Greek zeta."
} 

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
                        ${info[letter]} ${letter.toUpperCase()}
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
        card.classList.toggle('flipped'); 
    }
});