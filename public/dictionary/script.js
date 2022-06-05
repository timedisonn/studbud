function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

//dictionary 
//
const resultDiv = document.querySelector(".result");
const wordEle = document.querySelector(".word");
const phonetics = document.querySelector(".phonetics");
const wordMeaning = document.querySelector(".word-definition");
const synonyms = document.querySelector(".synonyms");

// function to handle searched words
const handle = async (e) => {
  if (e.keyCode === 13) {
    const word = e.target.value;
    // make a request to the api
    const result = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    if (!result.ok) {
      alert("No definition found");
      return;
    }
    //converting data fetched from the dictionary API
    const data = await result.json();
    resultDiv.style.display = "block";
    wordEle.innerText = data[0].word;
    phonetics.innerText = data[0].phonetics[0].text;
    wordMeaning.innerText = data[0].meanings[0].definitions[0].definition;
    const synonymsArray = data[0].meanings[0].definitions[0].synonyms;
    if (synonymsArray) {
      let synonymsData = "";
      for (let i = 0; i < synonymsArray.length; i++) {
        synonymsData += `<p class="pills">${synonymsArray[i]}</p>`;
      }
      synonyms.innerHTML = synonymsData;
    } else {
      synonyms.innerHTML = '<p class="pills">No synonyms available</p>';
    }
  }
};
