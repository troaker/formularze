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

  dispData();

  document.getElementById("form").reset();
});

function dispData() {
  const booksData = JSON.parse(localStorage.getItem("booksData"));
  output = document.getElementById('tbody');
  let i = 0;

  output.innerHTML += 
  "<tr><td>" + booksData[0].tytul
  + "</td><td>" + booksData[0].autor 
  + "</td><td>" + booksData[0].priorytet 
  + "</td><td>" + booksData[0].kategoria
  + "</td></tr>";

  booksData.forEach(element => {
    i++;
    output.innerHTML += 
    "<tr><td>" + booksData[i].tytul
    + "</td><td>" + booksData[i].autor 
    + "</td><td>" + booksData[i].priorytet 
    + "</td><td>" + booksData[i].kategoria
    + "</td></tr>";
  });

  console.log(booksData);
}

dispData();
