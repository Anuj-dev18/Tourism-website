const destinations = [
  {
    name: "Agra",
    state: "Uttar Pradesh",
    tag: "Heritage",
    description: "Home to the iconic Taj Mahal and rich Mughal history.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Manali",
    state: "Himachal Pradesh",
    tag: "Mountains",
    description: "Snowy mountains, valleys and unforgettable Himalayan views.",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Goa",
    state: "Goa",
    tag: "Beach",
    description: "Relax by the sea, explore local culture and enjoy sunsets.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Jaipur",
    state: "Rajasthan",
    tag: "Culture",
    description: "Discover grand forts, colorful markets and royal history.",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Kerala",
    state: "Kerala",
    tag: "Nature",
    description: "Beautiful backwaters, greenery and peaceful landscapes.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Ladakh",
    state: "Ladakh",
    tag: "Adventure",
    description: "High-altitude landscapes, monasteries and road-trip views.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80"
  }
];

const cards = document.getElementById("cards");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const resultMessage = document.getElementById("resultMessage");

function displayDestinations(list) {
  cards.innerHTML = "";

  if (list.length === 0) {
    cards.innerHTML = "<p>No record found. Try another destination.</p>";
    return;
  }

  list.forEach(place => {
    const card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `
      <img src="${place.image}" alt="${place.name}">
      <div class="card-body">
        <span class="card-tag">${place.tag}</span>
        <h3>${place.name}</h3>
        <p>${place.state}</p>
        <p>${place.description}</p>
      </div>
    `;

    cards.append(card);
  });
}

function searchDestinations() {
  const query = searchInput.value.trim().toLowerCase();

  if (!query) {
    displayDestinations(destinations);
    resultMessage.textContent = "";
    return;
  }

  const filtered = destinations.filter(place =>
    `${place.name} ${place.state} ${place.tag}`.toLowerCase().includes(query)
  );

  displayDestinations(filtered);
  resultMessage.textContent = filtered.length
    ? `${filtered.length} destination found`
    : "No destination found";
}

searchBtn.addEventListener("click", searchDestinations);

searchInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    searchDestinations();
  }
});

displayDestinations(destinations);
