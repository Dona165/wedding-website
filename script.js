// ================= COUNTDOWN =================
const wedding = new Date("August 22, 2026 10:30:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const diff = wedding - now;

    document.getElementById("days").innerHTML = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerHTML = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerHTML = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerHTML = Math.floor((diff % (1000 * 60)) / 1000);
}, 1000);


// ================= GALLERY LIGHTBOX =================
/*const gallery = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const image = document.getElementById("lightbox-img");
const close = document.getElementById("close");

gallery.forEach(photo => {
    photo.onclick = () => {
        lightbox.style.display = "flex";
        image.src = photo.src;
    };
});

close.onclick = () => {
    lightbox.style.display = "none";
};

lightbox.onclick = () => {
    lightbox.style.display = "none";
};*/

// ================= SLIDESHOW =================
/*function showSlides() {
  let slides = document.getElementsByClassName("slides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

function plusSlides(n) {
  slideIndex += n - 1;
  showSlides();
}  */


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Move to next slide
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}

  // Show current slide
  slides[slideIndex-1].style.display = "block";

  // Reset dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex-1].className += " active";

  // Change slide every 4 seconds (adjust as needed)
  setTimeout(showSlides, 4000);
}


// ================= LOADER =================
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.classList.add("loaded"); // triggers CSS fade-out
    }, 1000); // optional delay before fade
});

  window.addEventListener("load", function() {
    const loader = document.getElementById("loader");
    const mainContent = document.getElementById("main-content");

    // Hide loader after 2 seconds
    setTimeout(() => {
      loader.style.display = "none";
      mainContent.style.display = "block";
    }, 2000);
  });



// ================= SCROLL REVEAL =================
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 120) {
            section.classList.add("active"); // only add active
        }
    });
});

window.addEventListener("load", () => {
    const music = document.getElementById("bg-music");
    let volume = 0;
    music.volume = 0;
    music.muted = false; // unmute after load

    const fade = setInterval(() => {
        if (volume < 0.5) { // target volume
            volume += 0.01;
            music.volume = volume;
        } else {
            clearInterval(fade);
        }
    }, 200);
});

document.getElementById("sound-toggle").addEventListener("click", () => {
    const music = document.getElementById("bg-music");
    music.play();
});

const video = document.getElementById("hero-video");
const music = document.getElementById("bg-music");
const toggleBtn = document.getElementById("sound-toggle");

toggleBtn.addEventListener("click", () => {
    // Unmute video
   // video.muted = false;

    // Play background music
    if (music.paused) {
        music.play().then(() => {
            // Fade-in effect
            let volume = 0;
            music.volume = 0;
            const fade = setInterval(() => {
                if (volume < 0.5) {
                    volume += 0.01;
                    music.volume = volume;
                } else {
                    clearInterval(fade);
                }
            }, 200);
        }).catch(err => {
            console.log("Playback blocked:", err);
        });
    }

    toggleBtn.textContent = "🔊 Sound On";
});

const petalsImages = [
  "images/rose-petal.png",
  "images/jasmine-petal.png",
  "images/gold-petal.png"
];

// ================= PETALS =================
const petalImages = [
  "images/rose-petal.png",
  "images/jasmine-petal.png",
  "images/gold-petal.png"
];

function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");

  // random image
  petal.style.backgroundImage = `url(${petalImages[Math.floor(Math.random() * petalImages.length)]})`;

  // random horizontal position
  petal.style.left = Math.random() * window.innerWidth + "px";

  // random animation duration
  const duration = 5 + Math.random() * 5;
  petal.style.animationDuration = duration + "s";

  // random size
  const size = 15 + Math.random() * 20;
  petal.style.width = size + "px";
  petal.style.height = size + "px";
  petal.style.opacity = Math.random() * 0.8 + 0.2; // random opacity between 0.2–1

  document.querySelector(".petals").appendChild(petal);

  // remove petal after animation
  setTimeout(() => petal.remove(), duration * 1000);
}

// generate petals continuously
setInterval(createPetal, 600);


  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

