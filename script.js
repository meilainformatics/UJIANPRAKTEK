document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let mbti = document.getElementById('mbti').value.toLowerCase();
    let mood = document.getElementById('mood').value.toLowerCase();

    let recommendation = getMovieRecommendation(mbti, mood);
    document.getElementById('recommendation').innerHTML = recommendation;
});

function getMovieRecommendation(mbti, mood) {
    const recommendations = {
        "intj": {
            "happy": [{ name: "Inception", image: "https://example.com/inception.jpg" }],
            "sad": [{ name: "The Imitation Game", image: "https://example.com/imitations-game.jpg" }],
            "excited": [{ name: "The Dark Knight", image: "https://example.com/dark-knight.jpg" }],
            "calm": [{ name: "Her", image: "https://example.com/her.jpg" }]
        },
        "intp": {
            "happy": [{ name: "The Big Bang Theory", image: "https://example.com/big-bang.jpg" }],
            "sad": [{ name: "A Beautiful Mind", image: "https://example.com/beautiful-mind.jpg" }],
            "excited": [{ name: "Ex Machina", image: "https://example.com/ex-machina.jpg" }],
            "calm": [{ name: "Blade Runner 2049", image: "https://example.com/blade-runner.jpg" }]
        },
        "entj": {
            "happy": [{ name: "The Wolf of Wall Street", image: "https://example.com/wolf-wallstreet.jpg" }],
            "sad": [{ name: "The Social Network", image: "https://example.com/social-network.jpg" }],
            "excited": [{ name: "Mad Max: Fury Road", image: "https://example.com/mad-max.jpg" }],
            "calm": [{ name: "Interstellar", image: "https://example.com/interstellar.jpg" }]
        },
        "entp": {
            "happy": [{ name: "Deadpool", image: "https://example.com/deadpool.jpg" }],
            "sad": [{ name: "Catch Me If You Can", image: "https://example.com/catch-me.jpg" }],
            "excited": [{ name: "Iron Man", image: "https://example.com/iron-man.jpg" }],
            "calm": [{ name: "The Grand Budapest Hotel", image: "https://example.com/grand-budapest.jpg" }]
        },
        "infp": {
            "happy": [{ name: "Eternal Sunshine of the Spotless Mind", image: "https://example.com/eternal-sunshine.jpg" }],
            "sad": [{ name: "The Perks of Being a Wallflower", image: "https://example.com/perks.jpg" }],
            "excited": [{ name: "The Lord of the Rings", image: "https://example.com/lotr.jpg" }],
            "calm": [{ name: "Into the Wild", image: "https://example.com/into-the-wild.jpg" }]
        },
        "infj": {
            "happy": [{ name: "The Secret Life of Walter Mitty", image: "https://example.com/walter-mitty.jpg" }],
            "sad": [{ name: "The Pursuit of Happyness", image: "https://example.com/pursuit-of-happyness.jpg" }],
            "excited": [{ name: "The Hobbit", image: "https://example.com/hobbit.jpg" }],
            "calm": [{ name: "The Green Mile", image: "https://example.com/green-mile.jpg" }]
        },
        "enfj": {
            "happy": [{ name: "Good Will Hunting", image: "https://example.com/good-will-hunting.jpg" }],
            "sad": [{ name: "The Green Mile", image: "https://example.com/green-mile.jpg" }],
            "excited": [{ name: "The Pursuit of Happyness", image: "https://example.com/pursuit-of-happyness.jpg" }],
            "calm": [{ name: "A Walk to Remember", image: "https://example.com/walk-to-remember.jpg" }]
        },
        "enfp": {
            "happy": [{ name: "The Secret Life of Walter Mitty", image: "https://example.com/walter-mitty.jpg" }],
            "sad": [{ name: "500 Days of Summer", image: "https://example.com/500-days.jpg" }],
            "excited": [{ name: "Scott Pilgrim vs. The World", image: "https://example.com/scott-pilgrim.jpg" }],
            "calm": [{ name: "Amélie", image: "https://example.com/amelie.jpg" }]
        },
        "istj": {
            "happy": [{ name: "Sherlock Holmes", image: "https://example.com/sherlock.jpg" }],
            "sad": [{ name: "Saving Private Ryan", image: "https://example.com/saving-private-ryan.jpg" }],
            "excited": [{ name: "The Dark Knight", image: "https://example.com/dark-knight.jpg" }],
            "calm": [{ name: "Cast Away", image: "https://example.com/cast-away.jpg" }]
        },
        "istp": {
            "happy": [{ name: "The Italian Job", image: "https://example.com/italian-job.jpg" }],
            "sad": [{ name: "Drive", image: "https://example.com/drive.jpg" }],
            "excited": [{ name: "John Wick", image: "https://example.com/john-wick.jpg" }],
            "calm": [{ name: "No Country for Old Men", image: "https://example.com/no-country.jpg" }]
        },
        "estj": {
            "happy": [{ name: "The Godfather", image: "https://example.com/godfather.jpg" }],
            "sad": [{ name: "Schindler's List", image: "https://example.com/schindlers-list.jpg" }],
            "excited": [{ name: "Gladiator", image: "https://example.com/gladiator.jpg" }],
            "calm": [{ name: "Moneyball", image: "https://example.com/moneyball.jpg" }]
        },
        "estp": {
            "happy": [{ name: "Fast & Furious", image: "https://example.com/fast-furious.jpg" }],
            "sad": [{ name: "The Revenant", image: "https://example.com/revenant.jpg" }],
            "excited": [{ name: "John Wick", image: "https://example.com/john-wick.jpg" }],
            "calm": [{ name: "Ocean's Eleven", image: "https://example.com/oceans-eleven.jpg" }]
        },
        "isfj": {
            "happy": [{ name: "Finding Nemo", image: "https://example.com/finding-nemo.jpg" }],
            "sad": [{ name: "Marley & Me", image: "https://example.com/marley-me.jpg" }],
            "excited": [{ name: "The Greatest Showman", image: "https://example.com/greatest-showman.jpg" }],
            "calm": [{ name: "Up", image: "https://example.com/up.jpg" }]
        },
        "esfp": {
            "happy": [{ name: "The Hangover", image: "https://example.com/hangover.jpg" }],
            "sad": [{ name: "Me Before You", image: "https://example.com/me-before-you.jpg" }],
            "excited": [{ name: "Guardians of the Galaxy", image: "https://example.com/guardians.jpg" }],
            "calm": [{ name: "The Intern", image: "https://example.com/intern.jpg" }]
        }
    };

    return recommendations[mbti] && recommendations[mbti][mood] ? recommendations[mbti][mood].map(movie => 
        `<div><img src="${movie.image}" style="width: 150px;"><span>${movie.name}</span></div>`
    ).join("") : "<p>Tidak ada rekomendasi.</p>";
}
