// NAVBAR SHADOW ON SCROLL

window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.style.boxShadow =
"0 8px 25px rgba(0,0,0,.12)";

}

else{

navbar.style.boxShadow =
"0 4px 20px rgba(0,0,0,.08)";

}

});

// IMPACT COUNTER ANIMATION
document.querySelectorAll('.impact-card h3')
.forEach(counter => {

const target =
parseInt(counter.textContent);

let count = 0;

const update = () => {

count += 1;

counter.textContent =
'+' + count + '%';

if(count < target){

requestAnimationFrame(update);

}

};

update();

});

// IMAGE LIGHTBOX

const galleryImages =
document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(image => {

image.addEventListener("click", () => {

const lightbox =
document.createElement("div");

lightbox.id = "lightbox";

lightbox.style.position = "fixed";
lightbox.style.top = "0";
lightbox.style.left = "0";
lightbox.style.width = "100%";
lightbox.style.height = "100%";
lightbox.style.background =
"rgba(0,0,0,0.9)";
lightbox.style.display = "flex";
lightbox.style.justifyContent = "center";
lightbox.style.alignItems = "center";
lightbox.style.zIndex = "99999";

const img =
document.createElement("img");

img.src = image.src;

img.style.maxWidth = "90%";
img.style.maxHeight = "90%";
img.style.borderRadius = "20px";

lightbox.appendChild(img);

document.body.appendChild(lightbox);

lightbox.addEventListener("click", () => {

lightbox.remove();

});

});

});

// FADE IN EFFECT

const observer =
new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform =
"translateY(0px)";

}

});

},
{
threshold:0.1
});

const animated =
document.querySelectorAll(
".glass-card,.need-card,.action-card,.story-card,.impact-card"
);

animated.forEach(item => {

item.style.opacity = "0";

item.style.transform =
"translateY(40px)";

item.style.transition =
"all 0.8s ease";

observer.observe(item);

});
