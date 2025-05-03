document.addEventListener("DOMContentLoaded", function () {
    var map = L.map("map").setView([45.5017, -73.5673], 12);
  
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
  
    fetch("/assets/data/api-data.json")
      .then((response) => response.json())
      .then((data) => {
        data.locations.forEach((location) => {
          L.marker([location.lat, location.lng])
            .addTo(map)
            .bindPopup(`<b>${location.name}</b><br>${location.description}`);
        });
      })
      .catch((error) => console.error("Erreur lors du chargement des données :", error));
  });
  