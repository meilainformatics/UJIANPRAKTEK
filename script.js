document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("userForm");
    const recommendationDiv = document.getElementById("recommendation");

    // Database rekomendasi film berdasarkan MBTI, umur, mood, dan genre
    const movieRecommendations = {
{
  "intj": [
    {
      "mood": "excited",
      "genre": "aksi",
      "title": "Inception",
      "img": "https://www.themoviedb.org/t/2720/poster",
      "age_rating": "13+"
    },
    {
      "mood": "excited",
      "genre": "aksi",
      "title": "The Dark Knight",
      "img": "https://www.themoviedb.org/t/155/poster",
      "age_rating": "13+"
    },
    {
      "mood": "excited",
      "genre": "aksi",
      "title": "John Wick",
      "img": "https://www.themoviedb.org/t/245891/poster",
      "age_rating": "17+"
    },
    {
      "mood": "excited",
      "genre": "fiksi ilmiah",
      "title": "Interstellar",
      "img": "https://www.themoviedb.org/t/157336/poster",
      "age_rating": "13+"
    },
    {
      "mood": "excited",
      "genre": "fiksi ilmiah",
      "title": "Blade Runner 2049",
      "img": "https://www.themoviedb.org/t/335983/poster",
      "age_rating": "17+"
    },
    {
      "mood": "excited",
      "genre": "fiksi ilmiah",
      "title": "Arrival",
      "img": "https://www.themoviedb.org/t/329865/poster",
      "age_rating": "13+"
    },
    {
      "mood": "calm",
      "genre": "drama",
      "title": "The Shawshank Redemption",
      "img": "https://www.themoviedb.org/t/278/poster",
      "age_rating": "15+"
    },
    {
      "mood": "calm",
      "genre": "drama",
      "title": "The Godfather",
      "img": "https://www.themoviedb.org/t/238/poster",
      "age_rating": "17+"
    },
    {
      "mood": "calm",
      "genre": "drama",
      "title": "12 Angry Men",
      "img": "https://www.themoviedb.org/t/389/poster",
      "age_rating": "13+"
    },
    {
      "mood": "calm",
      "genre": "misteri",
      "title": "Sherlock Holmes",
      "img": "https://www.themoviedb.org/t/10119/poster",
      "age_rating": "13+"
    },
    {
      "mood": "calm",
      "genre": "misteri",
      "title": "Zodiac",
      "img": "https://www.themoviedb.org/t/18240/poster",
      "age_rating": "15+"
    },
    {
      "mood": "calm",
      "genre": "misteri",
      "title": "The Girl with the Dragon Tattoo",
      "img": "https://www.themoviedb.org/t/2625/poster",
      "age_rating": "17+"
    },
    {
      "mood": "happy",
      "genre": "komedi",
      "title": "Monty Python and the Holy Grail",
      "img": "https://www.themoviedb.org/t/77/poster",
      "age_rating": "13+"
    },
    {
      "mood": "happy",
      "genre": "komedi",
      "title": "The Big Lebowski",
      "img": "https://www.themoviedb.org/t/10680/poster",
      "age_rating": "17+"
    },
    {
      "mood": "happy",
      "genre": "komedi",
      "title": "Shaun of the Dead",
      "img": "https://www.themoviedb.org/t/4702/poster",
      "age_rating": "17+"
    },
    {
      "mood": "happy",
      "genre": "animasi",
      "title": "Spirited Away",
      "img": "https://www.themoviedb.org/t/129/poster",
      "age_rating": "SU"
    },
    {
      "mood": "happy",
      "genre": "animasi",
      "title": "Wall-E",
      "img": "https://www.themoviedb.org/t/12085/poster",
      "age_rating": "SU"
    },
    {
      "mood": "happy",
      "genre": "animasi",
      "title": "Inside Out",
      "img": "https://www.themoviedb.org/t/150540/poster",
      "age_rating": "SU"
    },
    {
      "mood": "sad",
      "genre": "drama",
      "title": "Schindler's List",
      "img": "https://www.themoviedb.org/t/424/poster",
      "age_rating": "15+"
    },
    {
      "mood": "sad",
      "genre": "drama",
      "title": "The Pianist",
      "img": "https://www.themoviedb.org/t/502/poster",
      "age_rating": "15+"
    },
    {
      "mood": "sad",
      "genre": "drama",
      "title": "Manchester by the Sea",
      "img": "https://www.themoviedb.org/t/297802/poster",
      "age_rating": "17+"
    },
    {
      "mood": "sad",
      "genre": "romantis",
      "title": "The Notebook",
      "img": "https://www.themoviedb.org/t/636/poster",
      "age_rating": "13+"
    },
    {
      "mood": "sad",
      "genre": "romantis",
      "title": "Eternal Sunshine of the Spotless Mind",
      "img": "https://www.themoviedb.org/t/38/poster",
      "age_rating": "17+"
    }
  ]
},
{
  "intp": [
    {
      "mood": "excited",
      "genre": "aksi",
      "title": "Inception",
      "img": "https://www.themoviedb.org/t/2720/poster",
      "age_rating": "13+"
    },
    {
      "mood": "excited",
      "genre": "aksi",
      "title": "The Matrix",
      "img": "https://www.themoviedb.org/t/603/poster",
      "age_rating": "17+"
    },
    {
      "mood": "excited",
      "genre": "fiksi ilmiah",
      "title": "Interstellar",
      "img": "https://www.themoviedb.org/t/157336/poster",
      "age_rating": "13+"
    },
    {
      "mood": "excited",
      "genre": "fiksi ilmiah",
      "title": "Arrival",
      "img": "https://www.themoviedb.org/t/329865/poster",
      "age_rating": "13+"
    },
    {
      "mood": "calm",
      "genre": "drama",
      "title": "A Beautiful Mind",
      "img": "https://www.themoviedb.org/t/408/poster",
      "age_rating": "13+"
    },
    {
      "mood": "calm",
      "genre": "drama",
      "title": "The Imitation Game",
      "img": "https://www.themoviedb.org/t/205596/poster",
      "age_rating": "13+"
    },
    {
      "mood": "calm",
      "genre": "misteri",
      "title": "Zodiac",
      "img": "https://www.themoviedb.org/t/18240/poster",
      "age_rating": "15+"
    },
    {
      "mood": "calm",
      "genre": "misteri",
      "title": "Memento",
      "img": "https://www.themoviedb.org/t/77/poster",
      "age_rating": "17+"
    },
    {
      "mood": "happy",
      "genre": "komedi",
      "title": "The Big Lebowski",
      "img": "https://www.themoviedb.org/t/10680/poster",
      "age_rating": "17+"
    },
    {
      "mood": "happy",
      "genre": "komedi",
      "title": "Shaun of the Dead",
      "img": "https://www.themoviedb.org/t/4702/poster",
      "age_rating": "17+"
    },
    {
      "mood": "happy",
      "genre": "animasi",
      "title": "Spirited Away",
      "img": "https://www.themoviedb.org/t/129/poster",
      "age_rating": "SU"
    },
    {
      "mood": "happy",
      "genre": "animasi",
      "title": "Wall-E",
      "img": "https://www.themoviedb.org/t/12085/poster",
      "age_rating": "SU"
    },
    {
      "mood": "sad",
      "genre": "drama",
      "title": "Manchester by the Sea",
      "img": "https://www.themoviedb.org/t/297802/poster",
      "age_rating": "17+"
    },
    {
      "mood": "sad",
      "genre": "drama",
      "title": "Eternal Sunshine of the Spotless Mind",
      "img": "https://www.themoviedb.org/t/38/poster",
      "age_rating": "17+"
    },
    {
      "mood": "sad",
      "genre": "fiksi ilmiah",
      "title": "Moon",
      "img": "https://www.themoviedb.org/t/11229/poster",
      "age_rating": "15+"
    }
  ]
},
{
  "entj": [
    {
      "mood": "excited",
      "genre": "aksi",
      "title": "Inception",
      "img": "https://www.themoviedb.org/t/2720/poster",
      "age_rating": "13+"
    },
    {
      "mood": "excited",
      "genre": "aksi",
      "title": "The Dark Knight",
      "img": "https://www.themoviedb.org/t/155/poster",
      "age_rating": "13+"
    },
    {
      "mood": "excited",
      "genre": "fiksi ilmiah",
      "title": "Interstellar",
      "img": "https://www.themoviedb.org/t/157336/poster",
      "age_rating": "13+"
    },
    {
      "mood": "excited",
      "genre": "fiksi ilmiah",
      "title": "Minority Report",
      "img": "https://www.themoviedb.org/t/180/poster",
      "age_rating": "13+"
    },
    {
      "mood": "calm",
      "genre": "drama",
      "title": "The Social Network",
      "img": "https://www.themoviedb.org/t/41217/poster",
      "age_rating": "13+"
    },
    {
      "mood": "calm",
      "genre": "drama",
      "title": "Moneyball",
      "img": "https://www.themoviedb.org/t/49226/poster",
      "age_rating": "13+"
    },
    {
      "mood": "calm",
      "genre": "misteri",
      "title": "Zodiac",
      "img": "https://www.themoviedb.org/t/18240/poster",
      "age_rating": "15+"
    },
    {
      "mood": "calm",
      "genre": "misteri",
      "title": "Sherlock Holmes",
      "img": "https://www.themoviedb.org/t/10119/poster",
      "age_rating": "13+"
    },
    {
      "mood": "happy",
      "genre": "komedi",
      "title": "The Wolf of Wall Street",
      "img": "https://www.themoviedb.org/t/166807/poster",
      "age_rating": "17+"
    },
    {
      "mood": "happy",
      "genre": "komedi",
      "title": "Thank You for Smoking",
      "img": "https://www.themoviedb.org/t/38284/poster",
      "age_rating": "17+"
    },
    {
      "mood": "happy",
      "genre": "animasi",
      "title": "The Incredibles",
      "img": "https://www.themoviedb.org/t/10292/poster",
      "age_rating": "SU"
    },
    {
      "mood": "happy",
      "genre": "animasi",
      "title": "Ratatouille",
      "img": "https://www.themoviedb.org/t/10758/poster",
      "age_rating": "SU"
    },
    {
      "mood": "sad",
      "genre": "drama",
      "title": "Schindler's List",
      "img": "https://www.themoviedb.org/t/424/poster",
      "age_rating": "15+"
    },
    {
      "mood": "sad",
      "genre": "drama",
      "title": "The Pianist",
      "img": "https://www.themoviedb.org/t/502/poster",
      "age_rating": "15+"
    },
    {
      "mood": "sad",
      "genre": "romantis",
      "title": "Eternal Sunshine of the Spotless Mind",
      "img": "https://www.themoviedb.org/t/38/poster",
      "age_rating": "17+"
    }
  ]
},
{
  "entp": [
    {
      "mood": "excited",
      "genre": "aksi",
      "title": "Inception",
      "img": "https://www.themoviedb.org/t/2720/poster",
      "age_rating": "13+"
    },
    {
      "mood": "excited",
      "genre": "aksi",
      "title": "The Matrix",
      "img": "https://www.themoviedb.org/t/603/poster",
      "age_rating": "17+"
    },
    {
      "mood": "excited",
      "genre": "fiksi ilmiah",
      "title": "Back to the Future",
      "img": "https://www.themoviedb.org/t/164/poster",
      "age_rating": "SU"
    },
    {
      "mood": "excited",
      "genre": "fiksi ilmiah",
      "title": "Eternal Sunshine of the Spotless Mind",
      "img": "https://www.themoviedb.org/t/38/poster",
      "age_rating": "17+"
    },
    {
      "mood": "calm",
      "genre": "drama",
      "title": "Fight Club",
      "img": "https://www.themoviedb.org/t/550/poster",
      "age_rating": "17+"
    },
    {
      "mood": "calm",
      "genre": "drama",
      "title": "Catch Me If You Can",
      "img": "https://www.themoviedb.org/t/640/poster",
      "age_rating": "13+"
    },
    {
      "mood": "calm",
      "genre": "misteri",
      "title": "The Usual Suspects",
      "img": "https://www.themoviedb.org/t/629/poster",
      "age_rating": "17+"
    },
    {
      "mood": "calm",
      "genre": "misteri",
      "title": "Memento",
      "img": "https://www.themoviedb.org/t/77/poster",
      "age_rating": "17+"
    },
    {
      "mood": "happy",
      "genre": "komedi",
      "title": "Monty Python and the Holy Grail",
      "img": "https://www.themoviedb.org/t/77/poster",
      "age_rating": "13+"
    },
    {
      "mood": "happy",
      "genre": "komedi",
      "title": "The Big Lebowski",
      "img": "https://www.themoviedb.org/t/10680/poster",
      "age_rating": "17+"
    },
    {
      "mood": "happy",
      "genre": "animasi",
      "title": "Rick and Morty",
      "img": "https://www.themoviedb.org/t/60625/poster",
      "age_rating": "17+"
    },
    {
      "mood": "happy",
      "genre": "animasi",
      "title": "South Park",
      "img": "https://www.themoviedb.org/t/1434/poster",
      "age_rating": "17+"
    },
    {
      "mood": "sad",
      "genre": "drama",
      "title": "Good Will Hunting",
      "img": "https://www.themoviedb.org/t/489/poster",
      "age_rating": "17+"
    },
    {
      "mood": "sad",
      "genre": "drama",
      "title": "Eternal Sunshine of the Spotless Mind",
      "img": "https://www.themoviedb.org/t/38/poster",
      "age_rating": "17+"
    },
    {
      "mood": "sad",
      "genre": "fiksi ilmiah",
      "title": "Her",
      "img": "https://www.themoviedb.org/t/154205/poster",
      "age_rating": "15+"
    }
  ]
},
{
  "infj": [
    {
      "mood": "excited",
      "genre": "drama",
      "title": "The Shawshank Redemption",
      "img": "https://www.themoviedb.org/t/278/poster",
      "age_rating": "15+"
    },
    {
      "mood": "excited",
      "genre": "fantasi",
      "title": "Spirited Away",
      "img": "https://www.themoviedb.org/t/129/poster",
      "age_rating": "SU"
    },
    {
      "mood": "excited",
      "genre": "fiksi ilmiah",
      "title": "Arrival",
      "img": "https://www.themoviedb.org/t/329865/poster",
      "age_rating": "13+"
    },
    {
      "mood": "calm",
      "genre": "drama",
      "title": "The Green Mile",
      "img": "https://www.themoviedb.org/t/497/poster",
      "age_rating": "15+"
    },
    {
      "mood": "calm",
      "genre": "romantis",
      "title": "Eternal Sunshine of the Spotless Mind",
      "img": "https://www.themoviedb.org/t/38/poster",
      "age_rating": "17+"
    },
    {
      "mood": "calm",
      "genre": "misteri",
      "title": "Zodiac",
      "img": "https://www.themoviedb.org/t/18240/poster",
      "age_rating": "15+"
    },
    {
      "mood": "happy",
      "genre": "komedi",
      "title": "Amélie",
      "img": "https://www.themoviedb.org/t/194/poster",
      "age_rating": "SU"
    },
    {
      "mood": "happy",
      "genre": "drama",
      "title": "The Intouchables",
      "img": "https://www.themoviedb.org/t/77338/poster",
      "age_rating": "13+"
    },
    {
      "mood": "happy",
      "genre": "animasi",
      "title": "Inside Out",
      "img": "https://www.themoviedb.org/t/150540/poster",
      "age_rating": "SU"
    },
    {
      "mood": "sad",
      "genre": "drama",
      "title": "Schindler's List",
      "img": "https://www.themoviedb.org/t/424/poster",
      "age_rating": "15+"
    },
    {
      "mood": "sad",
      "genre": "drama",
      "title": "The Pianist",
      "img": "https://www.themoviedb.org/t/502/poster",
      "age_rating": "15+"
    },
    {
      "mood": "sad",
      "genre": "romantis",
      "title": "The Notebook",
      "img": "https://www.themoviedb.org/t/636/poster",
      "age_rating": "13+"
    }
  ]
},{
  "infp": [
    {
      "mood": "excited",
      "genre": "fantasi",
      "title": "Spirited Away",
      "img": "https://www.themoviedb.org/t/129/poster",
      "age_rating": "SU"
    },
    {
      "mood": "excited",
      "genre": "drama",
      "title": "The Perks of Being a Wallflower",
      "img": "https://www.themoviedb.org/t/84855/poster",
      "age_rating": "13+"
    },
    {
      "mood": "excited",
      "genre": "petualangan",
      "title": "Into the Wild",
      "img": "https://www.themoviedb.org/t/1875/poster",
      "age_rating": "15+"
    },
    {
      "mood": "calm",
      "genre": "drama",
      "title": "Eternal Sunshine of the Spotless Mind",
      "img": "https://www.themoviedb.org/t/38/poster",
      "age_rating": "17+"
    },
    {
      "mood": "calm",
      "genre": "romantis",
      "title": "Before Sunrise",
      "img": "https://www.themoviedb.org/t/475/poster",
      "age_rating": "15+"
    },
    {
      "mood": "calm",
      "genre": "misteri",
      "title": "Zodiac",
      "img": "https://www.themoviedb.org/t/18240/poster",
      "age_rating": "15+"
    },
    {
      "mood": "happy",
      "genre": "komedi",
      "title": "Amélie",
      "img": "https://www.themoviedb.org/t/194/poster",
      "age_rating": "SU"
    },
    {
      "mood": "happy",
      "genre": "komedi romantis",
      "title": "500 Days of Summer",
      "img": "https://www.themoviedb.org/t/19913/poster",
      "age_rating": "13+"
    },
    {
      "mood": "happy",
      "genre": "animasi",
      "title": "Inside Out",
      "img": "https://www.themoviedb.org/t/150540/poster",
      "age_rating": "SU"
    },
    {
      "mood": "sad",
      "genre": "drama",
      "title": "Schindler's List",
      "img": "https://www.themoviedb.org/t/424/poster",
      "age_rating": "15+"
    },
    {
      "mood": "sad",
      "genre": "drama",
      "title": "The Pianist",
      "img": "https://www.themoviedb.org/t/502/poster",
      "age_rating": "15+"
    },
    {
      "mood": "sad",
      "genre": "romantis",
      "title": "The Notebook",
      "img": "https://www.themoviedb.org/t/636/poster",
      "age_rating": "13+"
    }
  ]
},
{
  "enfj": [
    {
      "mood": "excited",
      "genre": "drama",
      "title": "The Shawshank Redemption",
      "img": "https://www.themoviedb.org/t/278/poster",
      "age_rating": "15+"
    },
    {
      "mood": "excited",
      "genre": "petualangan",
      "title": "The Lord of the Rings: The Fellowship of the Ring",
      "img": "https://www.themoviedb.org/t/120/poster",
      "age_rating": "13+"
    },
    {
      "mood": "excited",
      "genre": "komedi",
      "title": "Mamma Mia!",
      "img": "https://www.themoviedb.org/t/9593/poster",
      "age_rating": "SU"
    },
    {
      "mood": "calm",
      "genre": "drama",
      "title": "The Green Mile",
      "img": "https://www.themoviedb.org/t/497/poster",
      "age_rating": "15+"
    },
    {
      "mood": "calm",
      "genre": "romantis",
      "title": "Pride & Prejudice",
      "img": "https://www.themoviedb.org/t/68/poster",
      "age_rating": "SU"
    },
    {
      "mood": "calm",
      "genre": "misteri",
      "title": "Zodiac",
      "img": "https://www.themoviedb.org/t/18240/poster",
      "age_rating": "15+"
    },
    {
      "mood": "happy",
      "genre": "komedi",
      "title": "Love Actually",
      "img": "https://www.themoviedb.org/t/384/poster",
      "age_rating": "15+"
    },
    {
      "mood": "happy",
      "genre": "drama",
      "title": "The Intouchables",
      "img": "https://www.themoviedb.org/t/77338/poster",
      "age_rating": "13+"
    },
    {
      "mood": "happy",
      "genre": "animasi",
      "title": "Inside Out",
      "img": "https://www.themoviedb.org/t/150540/poster",
      "age_rating": "SU"
    },
    {
      "mood": "sad",
      "genre": "drama",
      "title": "Schindler's List",
      "img": "https://www.themoviedb.org/t/424/poster",
      "age_rating": "15+"
    },
    {
      "mood": "sad",
      "genre": "drama",
      "title": "The Pianist",
      "img": "https://www.themoviedb.org/t/502/poster",
      "age_rating": "15+"
    },
    {
      "mood": "sad",
      "genre": "romantis",
      "title": "The Notebook",
      "img": "https://www.themoviedb.org/t/636/poster",
      "age_rating": "13+"
    }
  ]
},
{
  "enfp": [
    {
      "mood": "excited",
      "genre": "fantasi",
      "title": "Spirited Away",
      "img": "https://www.themoviedb.org/t/129/poster",
      "age_rating": "SU"
    },
    {
      "mood": "excited",
      "genre": "petualangan",
      "title": "The Goonies",
      "img": "https://www.themoviedb.org/t/9348/poster",
      "age_rating": "SU"
    },
    {
      "mood": "excited",
      "genre": "komedi",
      "title": "Ferris Bueller's Day Off",
      "img": "https://www.themoviedb.org/t/9362/poster",
      "age_rating": "13+"
    },
    {
      "mood": "calm",
      "genre": "drama",
      "title": "Eternal Sunshine of the Spotless Mind",
      "img": "https://www.themoviedb.org/t/38/poster",
      "age_rating": "17+"
    },
    {
      "mood": "calm",
      "genre": "romantis",
      "title": "Before Sunrise",
      "img": "https://www.themoviedb.org/t/475/poster",
      "age_rating": "15+"
    },
    {
      "mood": "calm",
      "genre": "misteri",
      "title": "Zodiac",
      "img": "https://www.themoviedb.org/t/18240/poster",
      "age_rating": "15+"
    },
    {
      "mood": "happy",
      "genre": "komedi",
      "title": "Amélie",
      "img": "https://www.themoviedb.org/t/194/poster",
      "age_rating": "SU"
    },
    {
      "mood": "happy",
      "genre": "komedi romantis",
      "title": "500 Days of Summer",
      "img": "https://www.themoviedb.org/t/19913/poster",
      "age_rating": "13+"
    },
    {
      "mood": "happy",
      "genre": "animasi",
      "title": "Inside Out",
      "img": "https://www.themoviedb.org/t/150540/poster",
      "age_rating": "SU"
    },
    {
      "mood": "sad",
      "genre": "drama",
      "title": "Schindler's List",
      "img": "https://www.themoviedb.org/t/424/poster",
      "age_rating": "15+"
    },
    {
      "mood": "sad",
      "genre": "drama",
      "title": "The Pianist",
      "img": "https://www.themoviedb.org/t/502/poster",
      "age_rating": "15+"
    },
    {
      "mood": "sad",
      "genre": "romantis",
      "title": "The Notebook",
      "img": "https://www.themoviedb.org/t/636/poster",
      "age_rating": "13+"
    }
  ]
},
{
  "istj": [
    {
      "mood": "excited",
      "genre": "aksi",
      "title": "Mission: Impossible - Fallout",
      "img": "https://www.themoviedb.org/t/353081/poster",
      "age_rating": "13+"
    },
    {
      "mood": "excited",
      "genre": "kriminal",
      "title": "The Departed",
      "img": "https://www.themoviedb.org/t/1422/poster",
      "age_rating": "17+"
    },
    {
      "mood": "excited",
      "genre": "fiksi ilmiah",
      "title": "The Martian",
      "img": "https://www.themoviedb.org/t/286903/poster",
      "age_rating": "13+"
    },
    {
      "mood": "calm",
      "genre": "drama",
      "title": "12 Angry Men",
      "img": "https://www.themoviedb.org/t/389/poster",
      "age_rating": "13+"
    },
    {
      "mood": "calm",
      "genre": "sejarah",
      "title": "Lincoln",
      "img": "https://www.themoviedb.org/t/100080/poster",
      "age_rating": "13+"
    },
    {
      "mood": "calm",
      "genre": "misteri",
      "title": "Zodiac",
      "img": "https://www.themoviedb.org/t/18240/poster",
      "age_rating": "15+"
    },
    {
      "mood": "happy",
      "genre": "komedi",
      "title": "The Grand Budapest Hotel",
      "img": "https://www.themoviedb.org/t/68718/poster",
      "age_rating": "15+"
    },
    {
      "mood": "happy",
      "genre": "komedi",
      "title": "Shaun of the Dead",
      "img": "https://www.themoviedb.org/t/4702/poster",
      "age_rating": "17+"
    },
    {
      "mood": "happy",
      "genre": "animasi",
      "title": "How to Train Your Dragon",
      "img": "https://www.themoviedb.org/t/49529/poster",
      "age_rating": "SU"
    },
    {
      "mood": "sad",
      "genre": "drama",
      "title": "Schindler's List",
      "img": "https://www.themoviedb.org/t/424/poster",
      "age_rating": "15+"
    },
    {
      "mood": "sad",
      "genre": "biografi",
      "title": "The Pianist",
      "img": "https://www.themoviedb.org/t/502/poster",
      "age_rating": "15+"
    },
    {
      "mood": "sad",
      "genre": "drama",
      "title": "Manchester by the Sea",
      "img": "https://www.themoviedb.org/t/297802/poster",
      "age_rating": "17+"
    }
  ]
},
{
  "isfj": [
    {
      "mood": "excited",
      "genre": "drama",
      "title": "The Blind Side",
      "img": "https://www.themoviedb.org/t/24029/poster",
      "age_rating": "13+"
    },
    {
      "mood": "excited",
      "genre": "komedi",
      "title": "The Proposal",
      "img": "https://www.themoviedb.org/t/22967/poster",
      "age_rating": "13+"
    },
    {
      "mood": "excited",
      "genre": "animasi",
      "title": "Frozen",
      "img": "https://www.themoviedb.org/t/109445/poster",
      "age_rating": "SU"
    },
    {
      "mood": "calm",
      "genre": "drama",
      "title": "Forrest Gump",
      "img": "https://www.themoviedb.org/t/13/poster",
      "age_rating": "13+"
    },
    {
      "mood": "calm",
      "genre": "romantis",
      "title": "The Notebook",
      "img": "https://www.themoviedb.org/t/636/poster",
      "age_rating": "13+"
    },
    {
      "mood": "calm",
      "genre": "misteri",
      "title": "Knives Out",
      "img": "https://www.themoviedb.org/t/546554/poster",
      "age_rating": "13+"
    },
    {
      "mood": "happy",
      "genre": "komedi",
      "title": "You've Got Mail",
      "img": "https://www.themoviedb.org/t/9401/poster",
      "age_rating": "SU"
    },
    {
      "mood": "happy",
      "genre": "keluarga",
      "title": "Paddington",
      "img": "https://www.themoviedb.org/t/269158/poster",
      "age_rating": "SU"
    },
    {
      "mood": "happy",
      "genre": "animasi",
      "title": "Inside Out",
      "img": "https://www.themoviedb.org/t/150540/poster",
      "age_rating": "SU"
    },
    {
      "mood": "sad",
      "genre": "drama",
      "title": "A Walk to Remember",
      "img": "https://www.themoviedb.org/t/10698/poster",
      "age_rating": "SU"
    },
    {
      "mood": "sad",
      "genre": "drama",
      "title": "My Sister's Keeper",
      "img": "https://www.themoviedb.org/t/19937/poster",
      "age_rating": "13+"
    },
    {
      "mood": "sad",
      "genre": "romantis",
      "title": "Me Before You",
      "img": "https://www.themoviedb.org/t/297800/poster",
      "age_rating": "13+"
    }
  ]
},
{
  "estj": [
    {
      "mood": "excited",
      "genre": "aksi",
      "title": "Mission: Impossible - Fallout",
      "img": "https://www.themoviedb.org/t/353081/poster",
      "age_rating": "13+"
    },
    {
      "mood": "excited",
      "genre": "kriminal",
      "title": "The Departed",
      "img": "https://www.themoviedb.org/t/1422/poster",
      "age_rating": "17+"
    },
    {
      "mood": "excited",
      "genre": "fiksi ilmiah",
      "title": "The Martian",
      "img": "https://www.themoviedb.org/t/286903/poster",
      "age_rating": "13+"
    },
    {
      "mood": "calm",
      "genre": "drama",
      "title": "12 Angry Men",
      "img": "https://www.themoviedb.org/t/389/poster",
      "age_rating": "13+"
    },
    {
      "mood": "calm",
      "genre": "sejarah",
      "title": "Lincoln",
      "img": "https://www.themoviedb.org/t/100080/poster",
      "age_rating": "13+"
    },
    {
      "mood": "calm",
      "genre": "misteri",
      "title": "Zodiac",
      "img": "https://www.themoviedb.org/t/18240/poster",
      "age_rating": "15+"
    },
    {
      "mood": "happy",
      "genre": "komedi",
      "title": "The Grand Budapest Hotel",
      "img": "https://www.themoviedb.org/t/68718/poster",
      "age_rating": "15+"
    },
    {
      "mood": "happy",
      "genre": "komedi",
      "title": "Shaun of the Dead",
      "img": "https://www.themoviedb.org/t/4702/poster",
      "age_rating": "17+"
    },
    {
      "mood": "happy",
      "genre": "animasi",
      "title": "How to Train Your Dragon",
      "img": "https://www.themoviedb.org/t/49529/poster",
      "age_rating": "SU"
    },
    {
      "mood": "sad",
      "genre": "drama",
      "title": "Schindler's List",
      "img": "https://www.themoviedb.org/t/424/poster",
      "age_rating": "15+"
    },
    {
      "mood": "sad",
      "genre": "biografi",
      "title": "The Pianist",
      "img": "https://www.themoviedb.org/t/502/poster",
      "age_rating": "15+"
    },
    {
      "mood": "sad",
      "genre": "drama",
      "title": "Manchester by the Sea",
      "img": "https://www.themoviedb.org/t/297802/poster",
      "age_rating": "17+"
    }
  ]
},
{
  "esfj": [
    {
      "mood": "excited",
      "genre": "drama",
      "title": "The Blind Side",
      "img": "https://www.themoviedb.org/t/24029/poster",
      "age_rating": "13+"
    },
    {
      "mood": "excited",
      "genre": "komedi",
      "title": "The Proposal",
      "img": "https://www.themoviedb.org/t/22967/poster",
      "age_rating": "13+"
    },
    {
      "mood": "excited",
      "genre": "animasi",
      "title": "Frozen",
      "img": "https://www.themoviedb.org/t/109445/poster",
      "age_rating": "SU"
    },
    {
      "mood": "calm",
      "genre": "drama",
      "title": "Forrest Gump",
      "img": "https://www.themoviedb.org/t/13/poster",
      "age_rating": "13+"
    },
    {
      "mood": "calm",
      "genre": "romantis",
      "title": "The Notebook",
      "img": "https://www.themoviedb.org/t/636/poster",
      "age_rating": "13+"
    },
    {
      "mood": "calm",
      "genre": "misteri",
      "title": "Knives Out",
      "img": "https://www.themoviedb.org/t/546554/poster",
      "age_rating": "13+"
    },
    {
      "mood": "happy",
      "genre": "komedi",
      "title": "You've Got Mail",
      "img": "https://www.themoviedb.org/t/9401/poster",
      "age_rating": "SU"
    },
    {
      "mood": "happy",
      "genre": "keluarga",
      "title": "Paddington",
      "img": "https://www.themoviedb.org/t/269158/poster",
      "age_rating": "SU"
    },
    {
      "mood": "happy",
      "genre": "animasi",
      "title": "Inside Out",
      "img": "https://www.themoviedb.org/t/150540/poster",
      "age_rating": "SU"
    },
    {
      "mood": "sad",
      "genre": "drama",
      "title": "A Walk to Remember",
      "img": "https://www.themoviedb.org/t/10698/poster",
      "age_rating": "SU"
    },
    {
      "mood": "sad",
      "genre": "drama",
      "title": "My Sister's Keeper",
      "img": "https://www.themoviedb.org/t/19937/poster",
      "age_rating": "13+"
    },
    {
      "mood": "sad",
      "genre": "romantis",
      "title": "Me Before You",
      "img": "https://www.themoviedb.org/t/297800/poster",
      "age_rating": "13+"
    }
  ]
},
{
  "istp": [
    {
      "mood": "excited",
      "genre": "aksi",
      "title": "Mad Max: Fury Road",
      "img": "https://www.themoviedb.org/t/76341/poster",
      "age_rating": "17+"
    },
    {
      "mood": "excited",
      "genre": "kriminal",
      "title": "Drive",
      "img": "https://www.themoviedb.org/t/64686/poster",
      "age_rating": "17+"
    },
    {
      "mood": "excited",
      "genre": "fiksi ilmiah",
      "title": "Blade Runner 2049",
      "img": "https://www.themoviedb.org/t/335983/poster",
      "age_rating": "17+"
    },
    {
      "mood": "calm",
      "genre": "drama",
      "title": "There Will Be Blood",
      "img": "https://www.themoviedb.org/t/671/poster",
      "age_rating": "17+"
    },
    {
      "mood": "calm",
      "genre": "neo-noir",
      "title": "Chinatown",
      "img": "https://www.themoviedb.org/t/925/poster",
      "age_rating": "15+"
    },
    {
      "mood": "calm",
      "genre": "misteri",
      "title": "The Big Lebowski",
      "img": "https://www.themoviedb.org/t/10680/poster",
      "age_rating": "17+"
    },
    {
      "mood": "happy",
      "genre": "komedi",
      "title": "Hot Fuzz",
      "img": "https://www.themoviedb.org/t/4682/poster",
      "age_rating": "15+"
    },
    {
      "mood": "happy",
      "genre": "komedi",
      "title": "21 Jump Street",
      "img": "https://www.themoviedb.org/t/83556/poster",
      "age_rating": "17+"
    },
    {
      "mood": "happy",
      "genre": "animasi",
      "title": "Spider-Man: Into the Spider-Verse",
      "img": "https://www.themoviedb.org/t/466273/poster",
      "age_rating": "SU"
    },
    {
      "mood": "sad",
      "genre": "drama",
      "title": "Schindler's List",
      "img": "https://www.themoviedb.org/t/424/poster",
      "age_rating": "15+"
    },
    {
      "mood": "sad",
      "genre": "drama",
      "title": "The Pianist",
      "img": "https://www.themoviedb.org/t/502/poster",
      "age_rating": "15+"
    },
    {
      "mood": "sad",
      "genre": "romantis",
      "title": "Lost in Translation",
      "img": "https://www.themoviedb.org/t/37721/poster",
      "age_rating": "15+"
    }
  ]
},
{
  "isfp": [
    {
      "mood": "excited",
      "genre": "petualangan",
      "title": "Into the Wild",
      "img": "https://www.themoviedb.org/t/1875/poster",
      "age_rating": "15+"
    },
    {
      "mood": "excited",
      "genre": "drama",
      "title": "The Way",
      "img": "https://www.themoviedb.org/t/44759/poster",
      "age_rating": "13+"
    },
    {
      "mood": "excited",
      "genre": "musik",
      "title": "Sing Street",
      "img": "https://www.themoviedb.org/t/332116/poster",
      "age_rating": "13+"
    },
    {
      "mood": "calm",
      "genre": "drama",
      "title": "Eternal Sunshine of the Spotless Mind",
      "img": "https://www.themoviedb.org/t/38/poster",
      "age_rating": "17+"
    },
    {
      "mood": "calm",
      "genre": "romantis",
      "title": "Before Sunrise",
      "img": "https://www.themoviedb.org/t/475/poster",
      "age_rating": "15+"
    },
    {
      "mood": "calm",
      "genre": "misteri",
      "title": "Zodiac",
      "img": "https://www.themoviedb.org/t/18240/poster",
      "age_rating": "15+"
    },
    {
      "mood": "happy",
      "genre": "komedi",
      "title": "Amélie",
      "img": "https://www.themoviedb.org/t/194/poster",
      "age_rating": "SU"
    },
    {
      "mood": "happy",
      "genre": "komedi romantis",
      "title": "500 Days of Summer",
      "img": "https://www.themoviedb.org/t/19913/poster",
      "age_rating": "13+"
    },
    {
      "mood": "happy",
      "genre": "animasi",
      "title": "Inside Out",
      "img": "https://www.themoviedb.org/t/150540/poster",
      "age_rating": "SU"
    },
    {
      "mood": "sad",
      "genre": "drama",
      "title": "Schindler's List",
      "img": "https://www.themoviedb.org/t/424/poster",
      "age_rating": "15+"
    },
    {
      "mood": "sad",
      "genre": "drama",
      "title": "The Pianist",
      "img": "https://www.themoviedb.org/t/502/poster",
      "age_rating": "15+"
    },
    {
      "mood": "sad",
      "genre": "romantis",
      "title": "The Notebook",
      "img": "https://www.themoviedb.org/t/636/poster",
      "age_rating": "13+"
    }
  ]
},
{
  "estp": [
    {
      "mood": "excited",
      "genre": "aksi",
      "title": "Mad Max: Fury Road",
      "img": "https://www.themoviedb.org/t/76341/poster",
      "age_rating": "17+"
    },
    {
      "mood": "excited",
      "genre": "kriminal",
      "title": "Drive",
      "img": "https://www.themoviedb.org/t/64686/poster",
      "age_rating": "17+"
    },
    {
      "mood": "excited",
      "genre": "olahraga",
      "title": "Rush",
      "img": "https://www.themoviedb.org/t/160424/poster",
      "age_rating": "15+"
    },
    {
      "mood": "calm",
      "genre": "drama",
      "title": "The Wolf of Wall Street",
      "img": "https://www.themoviedb.org/t/166807/poster",
      "age_rating": "17+"
    },
    {
      "mood": "calm",
      "genre": "petualangan",
      "title": "The Revenant",
      "img": "https://www.themoviedb.org/t/281957/poster",
      "age_rating": "17+"
    },
    {
      "mood": "calm",
      "genre": "misteri",
      "title": "The Big Lebowski",
      "img": "https://www.themoviedb.org/t/10680/poster",
      "age_rating": "17+"
    },
    {
      "mood": "happy",
      "genre": "komedi",
      "title": "Hot Fuzz",
      "img": "https://www.themoviedb.org/t/4682/poster",
      "age_rating": "15+"
    },
    {
      "mood": "happy",
      "genre": "komedi",
      "title": "21 Jump Street",
      "img": "https://www.themoviedb.org/t/83556/poster",
      "age_rating": "17+"
    },
    {
      "mood": "happy",
      "genre": "animasi",
      "title": "Spider-Man: Into the Spider-Verse",
      "img": "https://www.themoviedb.org/t/466273/poster",
      "age_rating": "SU"
    },
    {
      "mood": "sad",
      "genre": "drama",
      "title": "Schindler's List",
      "img": "https://www.themoviedb.org/t/424/poster",
      "age_rating": "15+"
    },
    {
      "mood": "sad",
      "genre": "drama",
      "title": "The Pianist",
      "img": "https://www.themoviedb.org/t/502/poster",
      "age_rating": "15+"
    },
    {
      "mood": "sad",
      "genre": "romantis",
      "title": "Lost in Translation",
      "img": "https://www.themoviedb.org/t/37721/poster",
      "age_rating": "15+"
    }
  ]
},
{
  "esfp": [
    {
      "mood": "excited",
      "genre": "komedi",
      "title": "21 Jump Street",
      "img": "https://www.themoviedb.org/t/83556/poster",
      "age_rating": "17+"
    },
    {
      "mood": "excited",
      "genre": "petualangan",
      "title": "The Goonies",
      "img": "https://www.themoviedb.org/t/9348/poster",
      "age_rating": "SU"
    },
    {
      "mood": "excited",
      "genre": "musik",
      "title": "Pitch Perfect",
      "img": "https://www.themoviedb.org/t/77296/poster",
      "age_rating": "13+"
    },
    {
      "mood": "calm",
      "genre": "drama",
      "title": "The Wolf of Wall Street",
      "img": "https://www.themoviedb.org/t/166807/poster",
      "age_rating": "17+"
    },
    {
      "mood": "calm",
      "genre": "komedi romantis",
      "title": "Crazy, Stupid, Love.",
      "img": "https://www.themoviedb.org/t/49538/poster",
      "age_rating": "13+"
    },
    {
      "mood": "calm",
      "genre": "misteri",
      "title": "Knives Out",
      "img": "https://www.themoviedb.org/t/546554/poster",
      "age_rating": "13+"
    },
    {
      "mood": "happy",
      "genre": "komedi",
      "title": "Mean Girls",
      "img": "https://www.themoviedb.org/t/10375/poster",
      "age_rating": "13+"
    },
    {
      "mood": "happy",
      "genre": "komedi romantis",
      "title": "Set It Up",
      "img": "https://www.themoviedb.org/t/510355/poster",
      "age_rating": "13+"
    },
    {
      "mood": "happy",
      "genre": "animasi",
      "title": "Tangled",
      "img": "https://www.themoviedb.org/t/150689/poster",
      "age_rating": "SU"
    },
    {
      "mood": "sad",
      "genre": "drama",
      "title": "A Walk to Remember",
      "img": "https://www.themoviedb.org/t/10698/poster",
      "age_rating": "SU"
    },
    {
      "mood": "sad",
      "genre": "drama",
      "title": "The Perks of Being a Wallflower",
      "img": "https://www.themoviedb.org/t/84855/poster",
      "age_rating": "13+"
    },
    {
      "mood": "sad",
      "genre": "romantis",
      "title": "Me Before You",
      "img": "https://www.themoviedb.org/t/297800/poster",
      "age_rating": "13+"
    }
  ]
    };

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah halaman refresh setelah submit

        // Ambil nilai input
        const mbti = document.getElementById("mbti").value.toLowerCase();
        const age = parseInt(document.getElementById("age_rating").value);
        const mood = document.getElementById("mood").value.toLowerCase();
        const genre = document.getElementById("genre").value.toLowerCase();

        // Tentukan kategori umur
        let ageCategory = "";
        if (age_rating <= "SU") {
            ageCategory = "anak";
        } else if (age_rating >= 13 && age <= 17 , "SU") {
            ageCategory = "remaja";
        } else if (age_rating >= 17=>100)
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
