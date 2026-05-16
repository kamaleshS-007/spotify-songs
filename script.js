// Song Data Array
const songs = [
    {
        title: "Karuppa Kooda Va (V1)",
        artist: "MassTamilan",
        src: "https://res.cloudinary.com/doduftwwh/video/upload/q_auto/f_auto/v1778645602/Karuppa-Kooda-Va-MassTamilan.dev_1_v2t4pn.mp3",
        cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
        title: "God Mode",
        artist: "MassTamilan",
        src: "https://res.cloudinary.com/doduftwwh/video/upload/q_auto/f_auto/v1778645601/God-Mode-MassTamilan.dev_r6azht.mp3",
        cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
        title: "Vengamavan - Natpe Thunai",
        artist: "Hiphop Tamizha",
        src: "https://res.cloudinary.com/doduftwwh/video/upload/q_auto/f_auto/v1778645599/Vengamavan_-_Natpe_Thunai_Original_Motion_Picture_Soundtrack_320_kbps_kvzrtd.mp3",
        cover: "https://images.unsplash.com/photo-1493225457124-a1a2a5f5f924?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
        title: "Raathu Raasan",
        artist: "MassTamilan",
        src: "https://res.cloudinary.com/doduftwwh/video/upload/q_auto/f_auto/v1778645598/Raathu-Raasan-MassTamilan.dev_of6ghu.mp3",
        cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
        title: "Naanga Naalu Peru",
        artist: "MassTamilan",
        src: "https://res.cloudinary.com/doduftwwh/video/upload/q_auto/f_auto/v1778645598/Naanga-Naalu-Peru-MassTamilan.dev_wbe44e.mp3",
        cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
        title: "Karuppa Kooda Va (V2)",
        artist: "MassTamilan",
        src: "https://res.cloudinary.com/doduftwwh/video/upload/q_auto/f_auto/v1778645598/Karuppa-Kooda-Va-MassTamilan.dev_qtemob.mp3",
        cover: "https://images.unsplash.com/photo-1516280440502-861159f43f0a?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
        title: "Verappa",
        artist: "MassTamilan",
        src: "https://res.cloudinary.com/doduftwwh/video/upload/q_auto/f_auto/v1778645597/Verappa-MassTamilan.dev_bzu9ma.mp3",
        cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
        title: "Pookattum",
        artist: "MassTamilan",
        src: "https://res.cloudinary.com/doduftwwh/video/upload/q_auto/f_auto/v1778647358/Pookattum_1_dbe5nu.mp3",
        cover: "https://images.unsplash.com/photo-1493225457124-a1a2a5f5f924?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
        title: "Naa Ready",
        artist: "MassTamilan",
        src: "https://res.cloudinary.com/doduftwwh/video/upload/q_auto/f_auto/v1778647337/Naa-Ready-MassTamilan.dev_t24y7d.mp3",
        cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
        title: "Naa Ready (V2)",
        artist: "MassTamilan",
        src: "https://res.cloudinary.com/doduftwwh/video/upload/q_auto/f_auto/v1778647337/Naa-Ready-MassTamilan.dev_1_t4gunk.mp3",
        cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
        title: "Badass",
        artist: "MassTamilan",
        src: "https://res.cloudinary.com/doduftwwh/video/upload/q_auto/f_auto/v1778647336/Badass-MassTamilan.dev_qwslzn.mp3",
        cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
        title: "Chella Magale",
        artist: "MassTamilan",
        src: "https://res.cloudinary.com/doduftwwh/video/upload/q_auto/f_auto/v1778647334/Chella-Magale-MassTamilan.dev_t0si52.mp3",
        cover: "https://images.unsplash.com/photo-1516280440502-861159f43f0a?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
        title: "Lokiverse 2.0",
        artist: "MassTamilan",
        src: "https://res.cloudinary.com/doduftwwh/video/upload/q_auto/f_auto/v1778647334/Lokiverse-2.0-MassTamilan.dev_jjmyxh.mp3",
        cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
        title: "Oru Pere Varalaaru",
        artist: "MassTamilan",
        src: "https://res.cloudinary.com/doduftwwh/video/upload/q_auto/f_auto/v1778647333/Oru-Pere-Varalaaru-MassTamilan.dev_eyy3qi.mp3",
        cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
        title: "Raavana Mavandaa",
        artist: "MassTamilan",
        src: "https://res.cloudinary.com/doduftwwh/video/upload/q_auto/f_auto/v1778647333/Raavana-Mavandaa-MassTamilan.dev_kjdmdd.mp3",
        cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
        title: "Thalapathy Kacheri",
        artist: "MassTamilan",
        src: "https://res.cloudinary.com/doduftwwh/video/upload/q_auto/f_auto/v1778647332/Thalapathy_Kacheri_d2zyip.mp3",
        cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
        title: "Raavana Mavandaa (V2)",
        artist: "MassTamilan",
        src: "https://res.cloudinary.com/doduftwwh/video/upload/q_auto/f_auto/v1778647332/Raavana-Mavandaa-MassTamilan.dev_1_qh39ou.mp3",
        cover: "https://images.unsplash.com/photo-1493225457124-a1a2a5f5f924?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
        title: "Vibe Vaasey",
        artist: "MassTamilan",
        src: "https://res.cloudinary.com/doduftwwh/video/upload/q_auto/f_auto/v1778647332/Vibe_Vaasey_f0rh1c.mp3",
        cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
        title: "Dheema",
        artist: "MassTamilan",
        src: "https://res.cloudinary.com/doduftwwh/video/upload/q_auto/f_auto/v1778647331/Dheema_rx8oi1.mp3",
        cover: "https://images.unsplash.com/photo-1493225457124-a1a2a5f5f924?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
        title: "Adaavadi (V1)",
        artist: "MassTamilan",
        src: "https://res.cloudinary.com/doduftwwh/video/upload/q_auto/f_auto/v1778647330/Adaavadi_1_jhxaof.mp3",
        cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
        title: "Pattuma",
        artist: "MassTamilan",
        src: "https://res.cloudinary.com/doduftwwh/video/upload/q_auto/f_auto/v1778647330/Pattuma_n1k6tt.mp3",
        cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
        title: "Enakenna Yaarum Illaye (V1)",
        artist: "MassTamilan",
        src: "https://res.cloudinary.com/doduftwwh/video/upload/q_auto/f_auto/v1778647329/Enakenna_Yaarum_Illaye_1_fcdcmc.mp3",
        cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
        title: "Adaavadi",
        artist: "MassTamilan",
        src: "https://res.cloudinary.com/doduftwwh/video/upload/q_auto/f_auto/v1778647329/Adaavadi_g1ahwx.mp3",
        cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
        title: "Pavazha Malli",
        artist: "MassTamilan",
        src: "https://res.cloudinary.com/doduftwwh/video/upload/q_auto/f_auto/v1778647328/Pavazha_Malli_lnogso.mp3",
        cover: "https://images.unsplash.com/photo-1516280440502-861159f43f0a?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
        title: "Enakenna Yaarum Illaye",
        artist: "MassTamilan",
        src: "https://res.cloudinary.com/doduftwwh/video/upload/v1778647327/Enakenna_Yaarum_Illaye_nstlgd.mp3",
        cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
        title: "Pookattum (V2)",
        artist: "MassTamilan",
        src: "https://res.cloudinary.com/doduftwwh/video/upload/v1778647327/Pookattum_qurt8r.mp3",
        cover: "https://images.unsplash.com/photo-1493225457124-a1a2a5f5f924?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
        title: "Pavazha Malli (V2)",
        artist: "MassTamilan",
        src: "https://res.cloudinary.com/doduftwwh/video/upload/v1778647326/Pavazha_Malli_1_wb9lha.mp3",
        cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
        title: "Katchi Sera",
        artist: "MassTamilan",
        src: "https://res.cloudinary.com/doduftwwh/video/upload/q_auto/f_auto/v1778647323/Katchi_Sera_zchrm0.mp3",
        cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
        title: "Rise of Veera",
        artist: "MassTamilan",
        src: "https://res.cloudinary.com/doduftwwh/video/upload/v1778647323/Rise-of-Veera-MassTamilan.dev_tekdie.mp3",
        cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
        title: "Rise of Veera (V2)",
        artist: "MassTamilan",
        src: "https://res.cloudinary.com/doduftwwh/video/upload/q_auto/f_auto/v1778647322/Rise-of-Veera-MassTamilan.dev_1_augpev.mp3",
        cover: "https://images.unsplash.com/photo-1516280440502-861159f43f0a?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
        title: "Arasan Theme",
        artist: "MassTamilan",
        src: "https://res.cloudinary.com/doduftwwh/video/upload/q_auto/f_auto/v1778647322/Arasan-Theme-MassTamilan.dev_effk3b.mp3",
        cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
        title: "Bloody Sweet",
        artist: "MassTamilan",
        src: "https://res.cloudinary.com/doduftwwh/video/upload/q_auto/f_auto/v1778647322/Bloody-Sweet-MassTamilan.dev_kaevro.mp3",
        cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
        title: "23 Theme",
        artist: "MassTamilan",
        src: "https://res.cloudinary.com/doduftwwh/video/upload/q_auto/f_auto/v1778647322/23_Theme_noqnxg.mp3",
        cover: "https://images.unsplash.com/photo-1493225457124-a1a2a5f5f924?auto=format&fit=crop&q=80&w=300&h=300"
    }
];

// DOM Elements
const playPauseBtn = document.getElementById('play-pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');
const currentTimeEl = document.getElementById('current-time');
const totalTimeEl = document.getElementById('total-time');
const volumeBar = document.getElementById('volume-bar');
const volumeIcon = document.getElementById('volume-icon');

const currentCover = document.getElementById('current-cover');
const currentTitle = document.getElementById('current-title');
const currentArtist = document.getElementById('current-artist');

const greetingGrid = document.getElementById('greeting-grid');
const songCards = document.getElementById('song-cards');
const searchInput = document.getElementById('search-input');

// Audio Object
let audio = new Audio();
let currentSongIndex = 0;
let isPlaying = false;

// Initialize
function init() {
    renderGreetingCards();
    renderSongCards();
    loadSong(currentSongIndex);
}

// Render 6 greeting cards (just using first 6 songs for UI)
function renderGreetingCards() {
    greetingGrid.innerHTML = '';
    const displaySongs = songs.slice(0, 6);
    
    displaySongs.forEach((song, index) => {
        const card = document.createElement('div');
        card.className = 'greeting-card';
        card.innerHTML = `
            <img src="${song.cover}" alt="${song.title}">
            <h4>${song.title}</h4>
            <div class="greeting-play-btn" onclick="playSpecificSong(event, ${index})">
                <i class="fas fa-play"></i>
            </div>
        `;
        // Also clicking the card plays it
        card.onclick = () => playSpecificSong(null, index);
        greetingGrid.appendChild(card);
    });
}

// Render all song cards in the main section
function renderSongCards(songsToRender = songs) {
    songCards.innerHTML = '';
    
    songsToRender.forEach((song) => {
        const index = songs.indexOf(song); // get original index for playSpecificSong
        const card = document.createElement('div');
        card.className = 'song-card';
        card.innerHTML = `
            <div class="card-img-container">
                <img src="${song.cover}" alt="${song.title}">
                <button class="card-play-btn" onclick="playSpecificSong(event, ${index})">
                    <i class="fas fa-play"></i>
                </button>
            </div>
            <h4>${song.title}</h4>
            <p>${song.artist}</p>
        `;
        // clicking the card plays it
        card.onclick = () => playSpecificSong(null, index);
        songCards.appendChild(card);
    });
}

// Load a song into the audio player
function loadSong(index) {
    currentSongIndex = index;
    const song = songs[index];
    
    audio.src = song.src;
    currentTitle.textContent = song.title;
    currentArtist.textContent = song.artist;
    currentCover.src = song.cover;
    
    // Reset Progress
    progressBar.value = 0;
    currentTimeEl.textContent = "0:00";
    
    // Wait for metadata to load to display duration
    audio.addEventListener('loadedmetadata', () => {
        totalTimeEl.textContent = formatTime(audio.duration);
        progressBar.max = audio.duration;
    });
}

// Play/Pause functionality
function togglePlayPause() {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
}

function playSong() {
    isPlaying = true;
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    audio.play();
}

function pauseSong() {
    isPlaying = false;
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    audio.pause();
}

// Play specific song from list
function playSpecificSong(event, index) {
    if(event) event.stopPropagation(); // prevent card click if button clicked
    
    if (currentSongIndex === index) {
        togglePlayPause();
    } else {
        loadSong(index);
        playSong();
    }
}

// Next and Previous
function nextSong() {
    currentSongIndex++;
    if (currentSongIndex > songs.length - 1) {
        currentSongIndex = 0; // Loop back
    }
    loadSong(currentSongIndex);
    if (isPlaying) playSong();
}

function prevSong() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1; // Loop to end
    }
    loadSong(currentSongIndex);
    if (isPlaying) playSong();
}

// Update Progress Bar
function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    if (isNaN(duration)) return;
    
    progressBar.value = currentTime;
    currentTimeEl.textContent = formatTime(currentTime);
    
    // Update the slider background fill using a CSS variable or direct style
    const percent = (currentTime / duration) * 100;
    progressBar.style.background = `linear-gradient(to right, var(--accent-color) ${percent}%, #535353 ${percent}%)`;
}

// Set Progress Bar manually
function setProgress(e) {
    const time = e.target.value;
    audio.currentTime = time;
}

// Volume Control
function updateVolume(e) {
    const volume = e.target.value / 100;
    audio.volume = volume;
    
    const percent = e.target.value;
    volumeBar.style.background = `linear-gradient(to right, var(--accent-color) ${percent}%, #535353 ${percent}%)`;
    
    // Update icon
    if (volume === 0) {
        volumeIcon.className = 'fas fa-volume-mute';
    } else if (volume < 0.5) {
        volumeIcon.className = 'fas fa-volume-down';
    } else {
        volumeIcon.className = 'fas fa-volume-up';
    }
}

// Format Time (seconds to mm:ss)
function formatTime(time) {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Event Listeners
playPauseBtn.addEventListener('click', togglePlayPause);
nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);
audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('ended', nextSong);
progressBar.addEventListener('input', setProgress);
volumeBar.addEventListener('input', updateVolume);

// Handle spacebar to play/pause
document.body.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && e.target.tagName !== 'INPUT') {
        e.preventDefault();
        togglePlayPause();
    }
});

// Search Functionality
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredSongs = songs.filter(song => 
            song.title.toLowerCase().includes(searchTerm) || 
            song.artist.toLowerCase().includes(searchTerm)
        );
        renderSongCards(filteredSongs);
    });
}

// Run Init
init();
