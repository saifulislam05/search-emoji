const list = [
    {
      "emoji": "😀"
    , "description": "grinning face"
    , "category": "Smileys & Emotion"
    , "aliases": [
        "grinning"
      ]
    , "tags": [
        "smile"
      , "happy"
      ]
    , "unicode_version": "6.1"
    , "ios_version": "6.0"
    }
  , {
      "emoji": "😃"
    , "description": "grinning face with big eyes"
    , "category": "Smileys & Emotion"
    , "aliases": [
        "smiley"
      ]
    , "tags": [
        "happy"
      , "joy"
      , "haha"
      ]
    , "unicode_version": "6.0"
    , "ios_version": "6.0"
    }
  , {
      "emoji": "😄"
    , "description": "grinning face with smiling eyes"
    , "category": "Smileys & Emotion"
    , "aliases": [
        "smile"
      ]
    , "tags": [
        "happy"
      , "joy"
      , "laugh"
      , "pleased"
      ]
    , "unicode_version": "6.0"
    , "ios_version": "6.0"
    }
  , {
      "emoji": "😁"
    , "description": "beaming face with smiling eyes"
    , "category": "Smileys & Emotion"
    , "aliases": [
        "grin"
      ]
    , "tags": [
      ]
    , "unicode_version": "6.0"
    , "ios_version": "6.0"
    }
  , {
      "emoji": "😆"
    , "description": "grinning squinting face"
    , "category": "Smileys & Emotion"
    , "aliases": [
        "laughing"
      , "satisfied"
      ]
    , "tags": [
        "happy"
      , "haha"
      ]
    , "unicode_version": "6.0"
    , "ios_version": "6.0"
    }
  , {
      "emoji": "😅"
    , "description": "grinning face with sweat"
    , "category": "Smileys & Emotion"
    , "aliases": [
        "sweat_smile"
      ]
    , "tags": [
        "hot"
      ]
    , "unicode_version": "6.0"
    , "ios_version": "6.0"
    }
  , {
      "emoji": "🤣"
    , "description": "rolling on the floor laughing"
    , "category": "Smileys & Emotion"
    , "aliases": [
        "rofl"
      ]
    , "tags": [
        "lol"
      , "laughing"
      ]
    , "unicode_version": "9.0"
    , "ios_version": "10.2"
    }
  , {
      "emoji": "😂"
    , "description": "face with tears of joy"
    , "category": "Smileys & Emotion"
    , "aliases": [
        "joy"
      ]
    , "tags": [
        "tears"
      ]
    , "unicode_version": "6.0"
    , "ios_version": "6.0"
    }
  , {
      "emoji": "🙂"
    , "description": "slightly smiling face"
    , "category": "Smileys & Emotion"
    , "aliases": [
        "slightly_smiling_face"
      ]
    , "tags": [
      ]
    , "unicode_version": "7.0"
    , "ios_version": "9.1"
  }
]


const inputBox = document.getElementById("input_box");
const tableBody = document.getElementById("table_body");

document.addEventListener("DOMContentLoaded", () => {
  renderUi(list);
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
  const filteredItems = filterList(list, inputValue);
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
