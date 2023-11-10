
const inputBox = document.getElementById("input_box");
const tableBody = document.getElementById("table_body");

document.addEventListener("DOMContentLoaded", () => {
  renderUi(emojiList);
});

function renderUi(list) {
  tableBody.innerHTML = "";
  const fragment = document.createDocumentFragment();

  list.forEach((emoji) => {
    let aliases = emoji.aliases.join(" ");
    let description =
      emoji.description.charAt(0).toUpperCase() + emoji.description.slice(1);
    let row = document.createElement("tr");
    row.innerHTML = `
              <td class="!text-2xl">${emoji.emoji}</td>
              <td class="capitalize text-base">${aliases}</td>
              <td class="text-base">${description}</td>
            `;
    fragment.appendChild(row);
  });

  tableBody.appendChild(fragment); 
}

inputBox.addEventListener("input", filterByInput);

function filterByInput(e) {
  const inputValue = e.target.value.toLowerCase();
  const filteredItems = filterList(emojiList, inputValue);
  renderUi(filteredItems);
}

function filterList(list, inputValue) {
  return list.filter((emoji) => {
    const searchTerms = [
      emoji.aliases.join(" ").toLowerCase(),
      emoji.description.toLowerCase(),
    ];
    return searchTerms.some((term) => term.includes(inputValue));
  });
}
