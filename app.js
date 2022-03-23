/* Biblioteka */
let output = document.getElementById('tbody');

form.addEventListener("submit", function (event) {
  event.preventDefault();

  output.innerHTML = "";

  let booksData = JSON.parse(localStorage.getItem("booksData")) || [];
  booksData.push({
    tytul: document.getElementById("tytul").value,
    autor: document.getElementById("autor").value,
    priorytet: document.getElementById("priorytet").value,
    kategoria: document.getElementById("kategoria").value,
  });
  localStorage.setItem("booksData", JSON.stringify(booksData));
  console.log(localStorage.getItem("booksData"));

  displayData();

  document.getElementById("form").reset();
});

function displayData() {
  const booksData = JSON.parse(localStorage.getItem("booksData"));
  output = document.getElementById('tbody');
  let i = 0;

  booksData.forEach(element => {
    output.innerHTML += 
    "<tr><td>" + booksData[i].tytul
    + "</td><td>" + booksData[i].autor 
    + "</td><td>" + booksData[i].priorytet 
    + "</td><td>" + booksData[i].kategoria
    + "<button>Usuń</button>"
    + "</td></tr>";
    i++;
  });

  }

  function  sortPriorytet() {
    
  }

  function deleteBook() {

  }

displayData();

/* Slideshow */

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slides");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/* Clock */
function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();

  if (hh > 12) 
  {
    session = "PM";
  }

  hh = (hh < 10) ? "0" + hh : hh;
  mm = (mm < 10) ? "0" + mm : mm;

  let time = hh + ":" + mm
  document.getElementById("clock").innerText = time;
  
  setTimeout(currentTime(), 1000);
}

currentTime();