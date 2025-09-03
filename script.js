// Sample itineraries data
const itineraries = [
  "Delhi → Manali (3N/4D)",
  "Shimla → Kullu (4N/5D)",
  "Leh → Ladakh Adventure (6N/7D)",
  "Goa Beach Tour (3N/4D)",
  "Jaipur → Udaipur Heritage Trip (5N/6D)",
  "Kerala Backwaters (4N/5D)",
];

const searchBar = document.getElementById("searchBar");
const results = document.getElementById("results");

if (searchBar) {
  searchBar.addEventListener("input", () => {
    const query = searchBar.value.toLowerCase();
    results.innerHTML = "";
    if (query) {
      const filtered = itineraries.filter((item) =>
        item.toLowerCase().includes(query)
      );
      if (filtered.length > 0) {
        results.style.display = "block";
        filtered.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item;
          li.onclick = () => {
            searchBar.value = item;
            results.style.display = "none";
          };
          results.appendChild(li);
        });
      } else {
        results.style.display = "none";
      }
    } else {
      results.style.display = "none";
    }
  });
}

// Auto-fill search bar when clicking a frequent itinerary
document.querySelectorAll("#itineraryList li").forEach((item) => {
  item.addEventListener("click", () => {
    const searchBar = document.getElementById("searchBar");
    // Remove emoji/symbols if present
    searchBar.value = item.textContent.replace(/^[^\w]+/, "");
    searchBar.focus();

    // Optionally, trigger results dropdown immediately
    if (results) {
      const query = searchBar.value.toLowerCase();
      results.innerHTML = "";
      const filtered = itineraries.filter((itin) =>
        itin.toLowerCase().includes(query)
      );
      if (filtered.length > 0) {
        results.style.display = "block";
        filtered.forEach((itin) => {
          const li = document.createElement("li");
          li.textContent = itin;
          li.onclick = () => {
            searchBar.value = itin;
            results.style.display = "none";
          };
          results.appendChild(li);
        });
      } else {
        results.style.display = "none";
      }
    }
  });
});
