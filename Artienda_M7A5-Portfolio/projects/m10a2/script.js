// Module 10, Activity 2 - Search the menu, and decide

const dishes = [
  {
    name: "Pad Thai",
    price: 180,
    spicy: false
  },
  {
    name: "Green Curry",
    price: 220,
    spicy: true
  },
  {
    name: "Tom Yum Soup",
    price: 200,
    spicy: true
  },
  {
    name: "Spring Rolls",
    price: 150,
    spicy: false
  }
];

const menu = document.querySelector("#menu");
const search = document.querySelector("#search");
const count = document.querySelector("#count");
const empty = document.querySelector("#empty");

function renderMenu(list) {
  menu.innerHTML = "";

  for (const dish of list) {
    const item = document.createElement("li");

    item.textContent = `${dish.name} - ₱${dish.price}`;

    if (dish.spicy) {
      const spicyBadge = document.createElement("span");
      spicyBadge.className = "spicy";
      spicyBadge.textContent = " Spicy";

      item.appendChild(spicyBadge);
    }

    menu.appendChild(item);
  }

  count.textContent = list.length;

  if (list.length === 0) {
    empty.textContent = "No dishes found.";
  } else {
    empty.textContent = "";
  }
}

renderMenu(dishes);

search.addEventListener("input", function () {
  const searchText = search.value.toLowerCase();

  const filteredDishes = dishes.filter(function (dish) {
    const dishText = `${dish.name} - ₱${dish.price}`.toLowerCase();

    return dishText.includes(searchText);
  });

  renderMenu(filteredDishes);
});