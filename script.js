<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rekomendasi Film</title>
</head>
<body>

    <form id="userForm">
        <label for="mbti">MBTI:</label>
        <input type="text" id="mbti" required>
        
        <label for="mood">Mood:</label>
        <input type="text" id="mood" required>

        <label for="age">Umur:</label>
        <input type="number" id="age" required>

        <button type="submit">Dapatkan Rekomendasi</button>
    </form>

    <div id="recommendation"></div>

    <script>
        document.getElementById('userForm').addEventListener('submit', function(event) {
            event.preventDefault();

            let mbti = document.getElementById('mbti').value.toLowerCase();
            let mood = document.getElementById('mood').value.toLowerCase();
            let age = parseInt(document.getElementById('age').value);

            let recommendation = getMovieRecommendation(mbti, mood, age);
            document.getElementById('recommendation').innerHTML = recommendation;
        });

function getMovieRecommendation(mbti, mood) {
    const recommendations = {
  "intj": {
    "happy": [
      { "name": "Inception", "image": "https://example.com/inception.jpg", "age": "dewasa" },
      { "name": "The Matrix", "image": "https://example.com/matrix.jpg", "age": "dewasa" },
      { "name": "Paddington", "image": "https://example.com/paddington.jpg", "age": "anak-anak" },
      { "name": "Sing Street", "image": "https://example.com/sing-street.jpg", "age": "remaja" }
    ],
    "sad": [
      { "name": "The Imitation Game", "image": "https://example.com/imitation-game.jpg", "age": "remaja" },
      { "name": "Up", "image": "https://example.com/up.jpg", "age": "anak-anak" },
      { "name": "A Silent Voice", "image": "https://example.com/silent-voice.jpg", "age": "remaja" },
      { "name": "Manchester by the Sea", "image": "https://example.com/manchester.jpg", "age": "dewasa" }
    ],
    "excited": [
      { "name": "The Dark Knight", "image": "https://example.com/dark-knight.jpg", "age": "dewasa" },
      { "name": "Spider-Man: Into the Spider-Verse", "image": "https://example.com/spider-verse.jpg", "age": "anak-anak" },
      { "name": "Scott Pilgrim vs. the World", "image": "https://example.com/scott-pilgrim.jpg", "age": "remaja" },
      { "name": "Mad Max: Fury Road", "image": "https://example.com/mad-max.jpg", "age": "dewasa" }
    ],
    "calm": [
      { "name": "Her", "image": "https://example.com/her.jpg", "age": "dewasa" },
      { "name": "My Neighbor Totoro", "image": "https://example.com/totoro.jpg", "age": "anak-anak" },
      { "name": "Lost in Translation", "image": "https://example.com/lost-in-translation.jpg", "age": "dewasa" },
      { "name": "Kiki's Delivery Service", "image": "https://example.com/kiki.jpg", "age": "remaja" }
    ]
        },
{
  "intp": {
    "happy": [
      { "name": "Primer", "image": "https://example.com/primer.jpg", "age": "dewasa" },
      { "name": "The Hitchhiker's Guide to the Galaxy", "image": "https://example.com/hitchhikers.jpg", "age": "remaja" },
      { "name": "Wall-E", "image": "https://example.com/walle.jpg", "age": "anak-anak" }
    ],
    "sad": [
      { "name": "Eternal Sunshine of the Spotless Mind", "image": "https://example.com/eternal-sunshine.jpg", "age": "dewasa" },
      { "name": "Grave of the Fireflies", "image": "https://example.com/grave-of-the-fireflies.jpg", "age": "remaja" },
      { "name": "Inside Out", "image": "https://example.com/inside-out.jpg", "age": "anak-anak" }
    ],
    "excited": [
      { "name": "Interstellar", "image": "https://example.com/interstellar.jpg", "age": "dewasa" },
      { "name": "Back to the Future", "image": "https://example.com/back-to-the-future.jpg", "age": "remaja" },
      { "name": "How to Train Your Dragon", "image": "https://example.com/how-to-train-your-dragon.jpg", "age": "anak-anak" }
    ],
    "calm": [
      { "name": "2001: A Space Odyssey", "image": "https://example.com/2001.jpg", "age": "dewasa" },
      { "name": "Spirited Away", "image": "https://example.com/spirited-away.jpg", "age": "remaja" },
      { "name": "My Neighbor Totoro", "image": "https://example.com/totoro.jpg", "age": "anak-anak" }
    ]
        },
{
  "entj": {
    "happy": [
      { "name": "The Devil Wears Prada", "image": "https://example.com/devil-wears-prada.jpg", "age": "dewasa" },
      { "name": "Hidden Figures", "image": "https://example.com/hidden-figures.jpg", "age": "remaja" },
      { "name": "Ratatouille", "image": "https://example.com/ratatouille.jpg", "age": "anak-anak" }
    ],
    "sad": [
      { "name": "Schindler's List", "image": "https://example.com/schindlers-list.jpg", "age": "dewasa" },
      { "name": "The Book Thief", "image": "https://example.com/book-thief.jpg", "age": "remaja" },
      { "name": "Coco", "image": "https://example.com/coco.jpg", "age": "anak-anak" }
    ],
    "excited": [
      { "name": "Avengers: Endgame", "image": "https://example.com/avengers-endgame.jpg", "age": "dewasa" },
      { "name": "The Hunger Games", "image": "https://example.com/hunger-games.jpg", "age": "remaja" },
      { "name": "Incredibles 2", "image": "https://example.com/incredibles-2.jpg", "age": "anak-anak" }
    ],
    "calm": [
      { "name": "The Social Network", "image": "https://example.com/social-network.jpg", "age": "dewasa" },
      { "name": "Dead Poets Society", "image": "https://example.com/dead-poets-society.jpg", "age": "remaja" },
      { "name": "Finding Nemo", "image": "https://example.com/finding-nemo.jpg", "age": "anak-anak" }
    ]
        },
{
  "entp": {
    "happy": [
      { "name": "Ferris Bueller's Day Off", "image": "https://example.com/ferris-bueller.jpg", "age": "remaja" },
      { "name": "Legally Blonde", "image": "https://example.com/legally-blonde.jpg", "age": "dewasa" },
      { "name": "The Emperor's New Groove", "image": "https://example.com/emperors-new-groove.jpg", "age": "anak-anak" }
    ],
    "sad": [
      { "name": "Eternal Sunshine of the Spotless Mind", "image": "https://example.com/eternal-sunshine.jpg", "age": "dewasa" },
      { "name": "Persepolis", "image": "https://example.com/persepolis.jpg", "age": "remaja" },
      { "name": "Up", "image": "https://example.com/up.jpg", "age": "anak-anak" }
    ],
    "excited": [
      { "name": "Scott Pilgrim vs. the World", "image": "https://example.com/scott-pilgrim.jpg", "age": "remaja" },
      { "name": "Inglourious Basterds", "image": "https://example.com/inglourious-basterds.jpg", "age": "dewasa" },
      { "name": "Spider-Man: Into the Spider-Verse", "image": "https://example.com/spider-verse.jpg", "age": "anak-anak" }
    ],
    "calm": [
      { "name": "Lost in Translation", "image": "https://example.com/lost-in-translation.jpg", "age": "dewasa" },
      { "name": "Princess Mononoke", "image": "https://example.com/princess-mononoke.jpg", "age": "remaja" },
      { "name": "Kiki's Delivery Service", "image": "https://example.com/kiki.jpg", "age": "anak-anak" }
    ]
        },
{
  "infp": {
    "happy": [
      { "name": "Amelie", "image": "https://example.com/amelie.jpg", "age": "remaja" },
      { "name": "Paddington 2", "image": "https://example.com/paddington2.jpg", "age": "anak-anak" },
      { "name": "Begin Again", "image": "https://example.com/begin-again.jpg", "age": "dewasa" }
    ],
    "sad": [
      { "name": "Eternal Sunshine of the Spotless Mind", "image": "https://example.com/eternal-sunshine.jpg", "age": "dewasa" },
      { "name": "A Silent Voice", "image": "https://example.com/silent-voice.jpg", "age": "remaja" },
      { "name": "Coco", "image": "https://example.com/coco.jpg", "age": "anak-anak" }
    ],
    "excited": [
      { "name": "Spirited Away", "image": "https://example.com/spirited-away.jpg", "age": "remaja" },
      { "name": "Sing Street", "image": "https://example.com/sing-street.jpg", "age": "dewasa" },
      { "name": "How to Train Your Dragon", "image": "https://example.com/how-to-train-your-dragon.jpg", "age": "anak-anak" }
    ],
    "calm": [
      { "name": "Lost in Translation", "image": "https://example.com/lost-in-translation.jpg", "age": "dewasa" },
      { "name": "Kiki's Delivery Service", "image": "https://example.com/kiki.jpg", "age": "remaja" },
      { "name": "My Neighbor Totoro", "image": "https://example.com/totoro.jpg", "age": "anak-anak" }
    ]
        },
{
  "infj": {
    "happy": [
      { "name": "The Perks of Being a Wallflower", "image": "https://example.com/perks.jpg", "age": "remaja" },
      { "name": "Little Miss Sunshine", "image": "https://example.com/little-miss-sunshine.jpg", "age": "dewasa" },
      { "name": "Wall-E", "image": "https://example.com/walle.jpg", "age": "anak-anak" }
    ],
    "sad": [
      { "name": "Schindler's List", "image": "https://example.com/schindlers-list.jpg", "age": "dewasa" },
      { "name": "The Book Thief", "image": "https://example.com/book-thief.jpg", "age": "remaja" },
      { "name": "Inside Out", "image": "https://example.com/inside-out.jpg", "age": "anak-anak" }
    ],
    "excited": [
      { "name": "Arrival", "image": "https://example.com/arrival.jpg", "age": "dewasa" },
      { "name": "Harry Potter and the Prisoner of Azkaban", "image": "https://example.com/harry-potter.jpg", "age": "remaja" },
      { "name": "Incredibles 2", "image": "https://example.com/incredibles-2.jpg", "age": "anak-anak" }
    ],
    "calm": [
      { "name": "The Tree of Life", "image": "https://example.com/tree-of-life.jpg", "age": "dewasa" },
      { "name": "Studio Ghibli films (e.g., Spirited Away, Princess Mononoke)", "image": "https://example.com/ghibli.jpg", "age": "remaja" },
      { "name": "Finding Nemo", "image": "https://example.com/finding-nemo.jpg", "age": "anak-anak" }
    ]
        },
{
  "enfj": {
    "happy": [
      { "name": "Mamma Mia!", "image": "https://example.com/mamma-mia.jpg", "age": "remaja" },
      { "name": "The Greatest Showman", "image": "https://example.com/greatest-showman.jpg", "age": "dewasa" },
      { "name": "Soul", "image": "https://example.com/soul.jpg", "age": "anak-anak" }
    ],
    "sad": [
      { "name": "The Notebook", "image": "https://example.com/the-notebook.jpg", "age": "remaja" },
      { "name": "A Star is Born", "image": "https://example.com/a-star-is-born.jpg", "age": "dewasa" },
      { "name": "Inside Out", "image": "https://example.com/inside-out.jpg", "age": "anak-anak" }
    ],
    "excited": [
      { "name": "High School Musical", "image": "https://example.com/high-school-musical.jpg", "age": "remaja" },
      { "name": "La La Land", "image": "https://example.com/la-la-land.jpg", "age": "dewasa" },
      { "name": "Moana", "image": "https://example.com/moana.jpg", "age": "anak-anak" }
    ],
    "calm": [
      { "name": "Pride and Prejudice", "image": "https://example.com/pride-and-prejudice.jpg", "age": "remaja" },
      { "name": "The King's Speech", "image": "https://example.com/the-kings-speech.jpg", "age": "dewasa" },
      { "name": "Frozen", "image": "https://example.com/frozen.jpg", "age": "anak-anak" }
    ]
        },
{
  "enfp": {
    "happy": [
      { "name": "Pitch Perfect", "image": "https://example.com/pitch-perfect.jpg", "age": "remaja" },
      { "name": "Crazy Rich Asians", "image": "https://example.com/crazy-rich-asians.jpg", "age": "dewasa" },
      { "name": "Tangled", "image": "https://example.com/tangled.jpg", "age": "anak-anak" }
    ],
    "sad": [
      { "name": "The Fault in Our Stars", "image": "https://example.com/the-fault-in-our-stars.jpg", "age": "remaja" },
      { "name": "Me Before You", "image": "https://example.com/me-before-you.jpg", "age": "dewasa" },
      { "name": "Toy Story 3", "image": "https://example.com/toy-story-3.jpg", "age": "anak-anak" }
    ],
    "excited": [
      { "name": "The Hunger Games", "image": "https://example.com/the-hunger-games.jpg", "age": "remaja" },
      { "name": "Guardians of the Galaxy", "image": "https://example.com/guardians-of-the-galaxy.jpg", "age": "dewasa" },
      { "name": "Zootopia", "image": "https://example.com/zootopia.jpg", "age": "anak-anak" }
    ],
    "calm": [
      { "name": "Eat Pray Love", "image": "https://example.com/eat-pray-love.jpg", "age": "dewasa" },
      { "name": "The Secret Life of Walter Mitty", "image": "https://example.com/walter-mitty.jpg", "age": "remaja" },
      { "name": "Big Hero 6", "image": "https://example.com/big-hero-6.jpg", "age": "anak-anak" }
    ]
        },
{
  "istj": {
    "happy": [
      { "name": "The Shawshank Redemption", "image": "https://example.com/shawshank.jpg", "age": "dewasa" },
      { "name": "Moneyball", "image": "https://example.com/moneyball.jpg", "age": "remaja" },
      { "name": "The Incredibles", "image": "https://example.com/incredibles.jpg", "age": "anak-anak" }
    ],
    "sad": [
      { "name": "Saving Private Ryan", "image": "https://example.com/saving-private-ryan.jpg", "age": "dewasa" },
      { "name": "Remember the Titans", "image": "https://example.com/remember-the-titans.jpg", "age": "remaja" },
      { "name": "Up", "image": "https://example.com/up.jpg", "age": "anak-anak" }
    ],
    "excited": [
      { "name": "Mission: Impossible - Fallout", "image": "https://example.com/mission-impossible.jpg", "age": "dewasa" },
      { "name": "Edge of Tomorrow", "image": "https://example.com/edge-of-tomorrow.jpg", "age": "remaja" },
      { "name": "Spider-Man: Into the Spider-Verse", "image": "https://example.com/spider-verse.jpg", "age": "anak-anak" }
    ],
    "calm": [
      { "name": "Apollo 13", "image": "https://example.com/apollo-13.jpg", "age": "dewasa" },
      { "name": "October Sky", "image": "https://example.com/october-sky.jpg", "age": "remaja" },
      { "name": "Finding Nemo", "image": "https://example.com/finding-nemo.jpg", "age": "anak-anak" }
    ]
        },
{
  "istp": {
    "happy": [
      { "name": "Mad Max: Fury Road", "image": "https://example.com/mad-max.jpg", "age": "dewasa" },
      { "name": "Baby Driver", "image": "https://example.com/baby-driver.jpg", "age": "remaja" },
      { "name": "Big Hero 6", "image": "https://example.com/big-hero-6.jpg", "age": "anak-anak" }
    ],
    "sad": [
      { "name": "The Wrestler", "image": "https://example.com/the-wrestler.jpg", "age": "dewasa" },
      { "name": "Warrior", "image": "https://example.com/warrior.jpg", "age": "remaja" },
      { "name": "Wall-E", "image": "https://example.com/walle.jpg", "age": "anak-anak" }
    ],
    "excited": [
      { "name": "John Wick", "image": "https://example.com/john-wick.jpg", "age": "dewasa" },
      { "name": "Kingsman: The Secret Service", "image": "https://example.com/kingsman.jpg", "age": "remaja" },
      { "name": "Incredibles 2", "image": "https://example.com/incredibles-2.jpg", "age": "anak-anak" }
    ],
    "calm
        },
{
  "estj": {
    "happy": [
      { "name": "The Incredibles", "image": "https://example.com/incredibles.jpg", "age": "anak-anak" },
      { "name": "Remember the Titans", "image": "https://example.com/remember-the-titans.jpg", "age": "remaja" },
      { "name": "Moneyball", "image": "https://example.com/moneyball.jpg", "age": "dewasa" }
    ],
    "sad": [
      { "name": "Saving Private Ryan", "image": "https://example.com/saving-private-ryan.jpg", "age": "dewasa" },
      { "name": "We Were Soldiers", "image": "https://example.com/we-were-soldiers.jpg", "age": "remaja" },
      { "name": "War Horse", "image": "https://example.com/war-horse.jpg", "age": "anak-anak" }
    ],
    "excited": [
      { "name": "Zero Dark Thirty", "image": "https://example.com/zero-dark-thirty.jpg", "age": "dewasa" },
      { "name": "Argo", "image": "https://example.com/argo.jpg", "age": "remaja" },
      { "name": "The Incredibles 2", "image": "https://example.com/incredibles-2.jpg", "age": "anak-anak" }
    ],
    "calm": [
      { "name": "Apollo 13", "image": "https://example.com/apollo-13.jpg", "age": "dewasa" },
      { "name": "October Sky", "image": "https://example.com/october-sky.jpg", "age": "remaja" },
      { "name": "Finding Nemo", "image": "https://example.com/finding-nemo.jpg", "age": "anak-anak" }
    ]
        },
{
  "estp": {
    "happy": [
      { "name": "Top Gun: Maverick", "image": "https://example.com/top-gun-maverick.jpg", "age": "dewasa" },
      { "name": "Fast & Furious", "image": "https://example.com/fast-and-furious.jpg", "age": "remaja" },
      { "name": "Sonic the Hedgehog", "image": "https://example.com/sonic.jpg", "age": "anak-anak" }
    ],
    "sad": [
      { "name": "Rocky", "image": "https://example.com/rocky.jpg", "age": "dewasa" },
      { "name": "Ford v Ferrari", "image": "https://example.com/ford-v-ferrari.jpg", "age": "remaja" },
      { "name": "Cars", "image": "https://example.com/cars.jpg", "age": "anak-anak" }
    ],
    "excited": [
      { "name": "Mission: Impossible - Fallout", "image": "https://example.com/mission-impossible.jpg", "age": "dewasa" },
      { "name": "Kingsman: The Secret Service", "image": "https://example.com/kingsman.jpg", "age": "remaja" },
      { "name": "Incredibles 2", "image": "https://example.com/incredibles-2.jpg", "age": "anak-anak" }
    ],
    "calm": [
      { "name": "Point Break", "image": "https://example.com/point-break.jpg", "age": "dewasa" },
      { "name": "The Karate Kid", "image": "https://example.com/karate-kid.jpg", "age": "remaja" },
      { "name": "Surf's Up", "image": "https://example.com/surfs-up.jpg", "age": "anak-anak" }
    ]
        },
{
  "esfp": {
    "happy": [
      { "name": "Top Gun: Maverick", "image": "https://example.com/top-gun-maverick.jpg", "age": "dewasa" },
      { "name": "Fast & Furious", "image": "https://example.com/fast-and-furious.jpg", "age": "remaja" },
      { "name": "Sonic the Hedgehog", "image": "https://example.com/sonic.jpg", "age": "anak-anak" }
    ],
    "sad": [
      { "name": "Rocky", "image": "https://example.com/rocky.jpg", "age": "dewasa" },
      { "name": "Ford v Ferrari", "image": "https://example.com/ford-v-ferrari.jpg", "age": "remaja" },
      { "name": "Cars", "image": "https://example.com/cars.jpg", "age": "anak-anak" }
    ],
    "excited": [
      { "name": "Mission: Impossible - Fallout", "image": "https://example.com/mission-impossible.jpg", "age": "dewasa" },
      { "name": "Kingsman: The Secret Service", "image": "https://example.com/kingsman.jpg", "age": "remaja" },
      { "name": "Incredibles 2", "image": "https://example.com/incredibles-2.jpg", "age": "anak-anak" }
    ],
    "calm": [
      { "name": "Point Break", "image": "https://example.com/point-break.jpg", "age": "dewasa" },
      { "name": "The Karate Kid", "image": "https://example.com/karate-kid.jpg", "age": "remaja" },
      { "name": "Surf's Up", "image": "https://example.com/surfs-up.jpg", "age": "anak-anak" }
    ]
        },
{
  "estp": {
    "happy": [
      { "name": "Top Gun: Maverick", "image": "https://example.com/top-gun-maverick.jpg", "age": "dewasa" },
      { "name": "Fast & Furious", "image": "https://example.com/fast-and-furious.jpg", "age": "remaja" },
      { "name": "Sonic the Hedgehog", "image": "https://example.com/sonic.jpg", "age": "anak-anak" }
    ],
    "sad": [
      { "name": "Rocky", "image": "https://example.com/rocky.jpg", "age": "dewasa" },
      { "name": "Ford v Ferrari", "image": "https://example.com/ford-v-ferrari.jpg", "age": "remaja" },
      { "name": "Cars", "image": "https://example.com/cars.jpg", "age": "anak-anak" }
    ],
    "excited": [
      { "name": "Mission: Impossible - Fallout", "image": "https://example.com/mission-impossible.jpg", "age": "dewasa" },
      { "name": "Kingsman: The Secret Service", "image": "https://example.com/kingsman.jpg", "age": "remaja" },
      { "name": "Incredibles 2", "image": "https://example.com/incredibles-2.jpg", "age": "anak-anak" }
    ],
    "calm": [
      { "name": "Point Break", "image": "https://example.com/point-break.jpg", "age": "dewasa" },
      { "name": "The Karate Kid", "image": "https://example.com/karate-kid.jpg", "age": "remaja" },
      { "name": "Surf's Up", "image": "https://example.com/surfs-up.jpg", "age": "anak-anak" }
    ]
        },
{
  "esfj": {
    "happy": [
      { "name": "Mean Girls", "image": "https://example.com/mean-girls.jpg", "age": "remaja" },
      { "name": "The Proposal", "image": "https://example.com/the-proposal.jpg", "age": "dewasa" },
      { "name": "Tangled", "image": "https://example.com/tangled.jpg", "age": "anak-anak" }
    ],
    "sad": [
      { "name": "The Notebook", "image": "https://example.com/the-notebook.jpg", "age": "remaja" },
      { "name": "P.S. I Love You", "image": "https://example.com/ps-i-love-you.jpg", "age": "dewasa" },
      { "name": "Inside Out", "image": "https://example.com/inside-out.jpg", "age": "anak-anak" }
    ],
    "excited": [
      { "name": "Bring It On", "image": "https://example.com/bring-it-on.jpg", "age": "remaja" },
      { "name": "Bridesmaids", "image": "https://example.com/bridesmaids.jpg", "age": "dewasa" },
      { "name": "Moana", "image": "https://example.com/moana.jpg", "age": "anak-anak" }
    ],
    "calm": [
      { "name": "27 Dresses", "image": "https://example.com/27-dresses.jpg", "age": "dewasa" },
      { "name": "The Princess Diaries", "image": "https://example.com/princess-diaries.jpg", "age": "remaja" },
      { "name": "Frozen", "image": "https://example.com/frozen.jpg", "age": "anak-anak" }
    ]
            };

            if (!recommendations[mbti] || !recommendations[mbti][mood]) {
                return "<p>Maaf, tidak ada rekomendasi yang tersedia.</p>";
            }

            // Filter film berdasarkan usia
            let movieList = recommendations[mbti][mood].filter(movie => {
                if (age < 13) return movie.age === "anak-anak";
                if (age >= 13 && age < 18) return movie.age === "remaja" || movie.age === "anak-anak";
                return true; // Semua umur bisa nonton film "dewasa"
            });

            if (movieList.length === 0) return "<p>Maaf, tidak ada rekomendasi yang cocok untuk umur kamu.</p>";

            // Menampilkan film dalam bentuk gambar dan nama
            return movieList.map(movie => `
                <div>
                    <img src="${movie.image}" alt="${movie.name}" style="width:150px;">
                    <p>${movie.name}</p>
                </div>
            `).join("");
        }
    </script>

</body>
</html>
