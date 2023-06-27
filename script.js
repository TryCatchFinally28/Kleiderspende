// Überprüfen, welcher Registrierungstyp ausgewählt wurde
let registrationTypeSelect = document.getElementById("registration-type");
let personalHandoverFields = document.getElementById("personal-clothing-type");
let pickupFields = document.getElementById("pickup-fields");

// Ein- oder Ausblenden der Felder im Formular, basierend auf der Auswahl des Registrierungstyps
function handleRegistrationTypeChange() {
  if (registrationTypeSelect.value === "persönliche-übergabe") {
    personalHandoverFields.style.display = "block";
    pickupFields.style.display = "none";
  } else if (registrationTypeSelect.value === "abholung") {
    personalHandoverFields.style.display = "none";
    pickupFields.style.display = "block";
  }
}

// Initialisieren: Alle Felder ausblenden
personalHandoverFields.style.display = "none";
pickupFields.style.display = "none";

// Event Listener hinzufügen
registrationTypeSelect.addEventListener("change", handleRegistrationTypeChange);


document.getElementById("donateForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Verhindert das automatische Absenden des Formulars


  let artDerSpende = document.getElementById("registration-type").value;
  let name = document.getElementById("name").value;
  let vorname = document.getElementById("vorname").value;
  let street = document.getElementById("street").value;
  let houseNumber = document.getElementById("houseNumber").value;
  let zip = document.getElementById("zip").value;
  let location = document.getElementById("location").value;
  let email = document.getElementById("email").value;
  let packages = document.getElementById("packages").value;
  let krisengebiet = document.getElementById("crisis-area").value;
  let artDerKleidung = document.getElementById("personal-clothing-type").value;
  let alter = document.getElementById("age").value;


  // Aktuelles Datum, aktuelle Uhrzeit
  let currentDate = new Date().toLocaleDateString();
  let currentTime = new Date().toLocaleTimeString();

  if (artDerSpende === "abholung") {
  } else if (artDerSpende === "persönliche-übergabe") {
    // Anzeige der Bestätigungsnachricht für Geschäftsstelle
    alert("Vielen Dank für Ihre Registrierung! Die Übergabe findet in der Geschäftsstelle statt.");
 }
 

  // Anzeige des Bestätigungs-Pop-up
  let confirmationMessage =
    "Ihre Spende wurde erfolgreich registriert\n" +
    "Bitte stellen Sie Ihre Spende zur Abholung für unser Sammelfahrzeug bereit\n" + "\n" +
    "Spendenart: " + artDerSpende + "\n" +
    "Nachname: " + name + "\n" +
    "Vorname: " + vorname + "\n" +
    "Straße: " + street + "\n" +
    "Hausnummer: " + houseNumber + "\n" +
    "Postleitzahl: " + zip + "\n" +
    "Ort: " + location + "\n" +
    "Email-Adresse: " + email + "\n" +
    "Anzahl der Pakete: " + packages + "\n" +
    "Krisengebiet: " + krisengebiet + "\n" +
    "Datum: " + currentDate + "\n" +
    "Uhrzeit: " + currentTime + "\n" +
    "Kleidungsart: " + artDerKleidung + "\n" +
    "Alter: " + alter;



  // Validierung der Daten
  if (name === "" || vorname === "" || street === "" || zip === "" || location === "" || email === "") {
    return;
  }

  // Die eingegebene Postleitzahl befindet sich in einer Variable "userPostalCode"
  const userPostalCode = document.getElementById("zip").value;

  // Extrahiere die ersten beiden Stellen der eingegebenen Postleitzahl
  const userPostalCodePrefix = userPostalCode.substr(0, 2);

  // Vergleiche die ersten beiden Stellen mit einer anderen Postleitzahl
  const targetPostalCodePrefix = "48";

  if (userPostalCodePrefix === targetPostalCodePrefix) {
    // Zurücksetzen des Formulars
    event.target.reset();

    // Bestätigungsseite anzeigen und Daten aktualisieren
    alert(confirmationMessage);
  
  } else {
    alert("Die Abholadresse befindet sich leider nicht in der Nähe der Geschäftsstelle.");
  }
});


// Aufklappbares Menü im Header (Media Query)
function mobileMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Array mit Daten zum Durchsuchen
const data = [
  { title: "Artikel 1", content: "Kleidung spenden" },
  { title: "Artikel 2", content: "Übergabe an der Geschäftsstelle" },
  { title: "Artikel 3", content: "Spendenaktion für Bedürftige" }
];


// Funktion zum Durchsuchen der Daten
function search(query) {
  const results = [];

  // Durchsuche die Daten nach Übereinstimmungen
  for (let i = 0; i < data.length; i++) {
    const item = data[i];

    // Überprüfe, ob der Titel oder der Inhalt Übereinstimmungen mit der Suchanfrage haben
    if (
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.content.toLowerCase().includes(query.toLowerCase())
    ) {
      results.push(item);
    }
  }

  return results;
}

var contents = [
  "Jetzt Spenden",
  "Kleidung Spenden",
  "Über uns",
  "Leistungen.",
  "Abholung",
  "Geschäftsstelle",
  "Sammelfahrzeug",
  "Helping Hands",
  "Datenschutz",
  "Impressum"
];

// Funktion zur Durchführung der Suche
function performSearch() {
  var searchInput = document.getElementById("search-input");
  var searchResults = document.getElementById("search-results");
  var searchTerm = searchInput.value.toLowerCase();
  var matchingResults = [];

  // Durchsuche die Inhalte nach Übereinstimmungen
  for (var i = 0; i < contents.length; i++) {
    var content = contents[i].toLowerCase();
    if (content.includes(searchTerm)) {
      matchingResults.push(contents[i]);
    }
  }

  // Zeige die Suchergebnisse an
  searchResults.innerHTML = "";
  if (matchingResults.length > 0) {
    for (var j = 0; j < matchingResults.length; j++) {
      var result = document.createElement("p");
      result.textContent = matchingResults[j];
      searchResults.appendChild(result);
    }
  } else {
    var noResults = document.createElement("p");
    noResults.textContent = "Keine Ergebnisse gefunden.";
    searchResults.appendChild(noResults);
  }
}

// Event-Handler für die Suche
var searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Verhindert das automatische Absenden des Formulars
  performSearch();
});