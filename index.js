const videosMap = {
    "hotwater": "assets/hotwater.mp4",
    "bookinbeach": "assets/bookinbeach.mp4",
    "sunsetinbeach": "assets/video3.mp4",
    "clouds": "assets/video4.mp4",
    "basketballring": "assets/video5.mp4",
    "riverandtheforest": "assets/video6.mp4",
    "monkeyfamily": "assets/video7.mp4",
    "cityfromabove": "assets/video8.mp4",
    "griget": "assets/video9.mp4"
}

const searchfield = document.querySelector("#inputfield");
const searchbuttonjs = document.getElementById("searchbutton")

const videoheading = document.querySelector("#videoname");

const videoscreen = document.querySelector("video");
const source = document.querySelector("source");

searchbuttonjs.addEventListener("click", () => {
    const query = searchfield.value.trim().toLowerCase();

    console.log("clicked");
    if (videosMap[query]) {
        videoheading.textContent = query;
        source.src = videosMap[query];
        videoscreen.load();
        videoscreen.play();
    }
    else {
        videoheading.textContent = "no video found";
    }
})

