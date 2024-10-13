const points = [
    "Hey Happy Bithday",
    "Many more happy returns of the day----",
    "This is what i was about to say",
    "But Many people must have already wished u like this",
    "Then i realised that i need to do something special",
    "So i want to wish u in a different way",
    "Coz u are Special to me",
    "So",
    "After thinking for some time I came up with this idea",
    "To wish u like this",
    "Happy Birthday, my love!",
    "You light up my life in ways words can't express,",
    "and I'm so grateful for every moment with you so",
    "Always be happy",
    "Take care",
    "Eat well",
    "Focus on ur carrier",
    "Hmmm",
    "Thats it",
    "Ahh i Forgot the most impotant thing",
    "U always wanted a nickname na",
    "how is this name",
    "LUNA",
    "i liked this name. Luna refers to moon",
    "U are my Moon",
    "From now i will call u Luna",
    "Once Again",
     "Happy Birthday My dear Luna ❤️❤️"
];
const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
    "image7.jpg"
];
let i=0;

function displayPoint() {
    const Display = document.getElementById('display');
    
    if (i < points.length) {
        Display.textContent = points[i];
        Display.style.opacity = 1;

        setTimeout(() => {
            Display.style.opacity = 0;
            i++;
            setTimeout(displayPoint, 500);
        }, 3000);
    }
    else {
      displayImages();
    }
}
function displayImages() {
    const Display = document.getElementById('display');
    Display.style.opacity = 1;
    Display.innerHTML = images.map(src => 
        `<img src="${src}" alt="Image" style="width: 100px; margin: 5px; border-radius: 10px;">`
    ).join('')
}

displayPoint();
