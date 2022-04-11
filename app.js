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
    + "</td></tr>";
    i++;
  });

  }

  function  sortPriorytet() {
    
  }

  function deleteBook() {

  }

displayData();

