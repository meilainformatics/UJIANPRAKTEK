document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("userForm");
    const recommendationDiv = document.getElementById("recommendation");

    // Database rekomendasi film berdasarkan MBTI, umur, mood, dan genre
    const movieRecommendations = {
        "intj": { mood: "excited", genre: "aksi", title: "Inception", img: "inception.jpg" },
        "intp": { mood: "calm", genre: "sci-fi", title: "Interstellar", img: "interstellar.jpg" },
        "entj": { mood: "excited", genre: "thriller", title: "The Dark Knight", img: "dark_knight.jpg" },
        "entp": { mood: "happy", genre: "komedi", title: "Deadpool", img: "deadpool.jpg" },
        "infj": { mood: "sad", genre: "drama", title: "The Green Mile", img: "green_mile.jpg" },
        "infp": { mood: "sad", genre: "fantasi", title: "Spirited Away", img: "spirited_away.jpg" },
        "enfj": { mood: "happy", genre: "romantis", title: "La La Land", img: "la_la_land.jpg" },
        "enfp": { mood: "excited", genre: "petualangan", title: "Guardians of the Galaxy", img: "guardians.jpg" },
        "istj": { mood: "calm", genre: "misteri", title: "Sherlock Holmes", img: "sherlock.jpg" },
        "isfj": { mood: "happy", genre: "drama", title: "Forrest Gump", img: "forrest_gump.jpg" },
        "estj": { mood: "excited", genre: "aksi", title: "Mad Max: Fury Road", img: "mad_max.jpg" },
        "esfj": { mood: "happy", genre: "komedi", title: "Crazy Rich Asians", img: "crazy_rich_asians.jpg" },
        "istp": { mood: "excited", genre: "thriller", title: "John Wick", img: "john_wick.jpg" },
        "isfp": { mood: "calm", genre: "fantasi", title: "Life of Pi", img: "life_of_pi.jpg" },
        "estp": { mood: "excited", genre: "aksi", title: "Fast & Furious", img: "fast_furious.jpg" },
        "esfp": { mood: "happy", genre: "musikal", title: "The Greatest Showman", img: "greatest_showman.jpg" }
    };

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah halaman refresh setelah submit

        // Ambil nilai input
        const mbti = document.getElementById("mbti").value.toLowerCase();
        const age = parseInt(document.getElementById("age").value);
        const mood = document.getElementById("mood").value.toLowerCase();
        const genre = document.getElementById("genre").value.toLowerCase();

        // Tentukan kategori umur
        let ageCategory = "";
        if (age <= 12) {
            ageCategory = "anak";
        } else if (age >= 13 && age <= 17) {
            ageCategory = "remaja";
        } else {
            ageCategory = "dewasa";
        }

        // Validasi input
        if (!mbti || !age || !mood || !genre) {
            recommendationDiv.innerHTML = "<p style='color:red;'>Silakan lengkapi semua data.</p>";
            return;
        }

        // Cek rekomendasi berdasarkan MBTI
        let movieData = movieRecommendations[mbti];

        if (movieData && movieData.mood === mood && movieData.genre === genre) {
            recommendationDiv.innerHTML = `
                <h2>Rekomendasi Film untuk Anda</h2>
                <p><strong>Film:</strong> ${movieData.title}</p>
                <p><strong>Genre:</strong> ${movieData.genre.toUpperCase()}</p>
                <p><strong>MBTI Anda:</strong> ${mbti.toUpperCase()}</p>
                <p><strong>Umur Anda:</strong> ${age} (${ageCategory.toUpperCase()})</p>
                <img src="images/${movieData.img}" alt="${movieData.title}" style="width: 250px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);">
            `;
        } else {
            recommendationDiv.innerHTML = "<p>Maaf, tidak ada rekomendasi film yang cocok dengan pilihan Anda.</p>";
        }
    });
});
