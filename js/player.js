let songsData = [
    {
        title: "Chúng ta không thuộc về nhau",
        artist: "Sơn Tùng M-TP",
        file: "./songs/ChungTaKhongThuocVeNhau.mp3",
        coverImage:
            "https://upload.wikimedia.org/wikipedia/vi/0/01/Ch%C3%BAng_ta_kh%C3%B4ng_thu%E1%BB%99c_v%E1%BB%81_nhau.jpeg",
    },
    {
        title: "Cơn mưa ngang qua",
        artist: "Sơn Tùng M-TP",
        file: "./songs/ConMuaNgangQua.mp3",
        coverImage:
            "https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/covers/5/b/5baa8ca8d0dd072524767a4aff6d400c_1349715671.jpg",
    },
    {
        title: "Lạc trôi",
        artist: "Sơn Tùng M-TP",
        file: "./songs/LacTroi.mp3",
        coverImage:
            "https://upload.wikimedia.org/wikipedia/vi/5/5d/Lac_troi_single_sontungmtp.jpg",
    },
];

function loadSongs() {
    let songList = document.querySelector(".song-list");
    for (const song of songsData) {
        songList.innerHTML += `
            <div class="song-item mb-2" onclick="chooseSong('${song.title}', '${song.artist}', '${song.file}', '${song.coverImage}')" >
                <h6 class="mb-1">${song.title}</h6>
                <small class="text-muted">${song.artist}</small>
            </div>
        `;
    }
}

function chooseSong(title, artist, file, coverImage) {
    let coverImg = document.querySelector(".album-cover");
    let songTitle = document.querySelector(".song-title");
    let songArtist = document.querySelector(".song-artist");
    let audioPlayer = document.querySelector(".audio-player");

    coverImg.src = coverImage;
    songTitle.innerText = title;
    songArtist.innerText = artist;
    audioPlayer.src = file;

    audioPlayer.play();

    // Highlight the selected song in the list
    let songsInList = document.querySelectorAll(".song-item");
    let indexSong = songsData.findIndex((x) => x.title == title);
    for (let index = 0; index < songsInList.length; index++) {
        const songItem = songsInList[index];
        if (index == indexSong) {
            songItem.classList.add("active");
        } else {
            songItem.classList.remove("active");
        }
    }
}

loadSongs();
