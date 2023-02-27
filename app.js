// fetching the data
const loadData = async (searchText) => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayData(data[0]);
}

// displaying data
const displayData = (wordArray) => {
    console.log(wordArray)
    const { word, sourceUrls, meanings, phonetics } = wordArray;
    console.log(meanings);
    console.log(meanings[2]?.definitions);
    const section = document.getElementById('display-section');
    // display on section
    section.innerHTML = `
    <h3>${word}</h3>
    <p>${phonetics[1]?.text ? phonetics[1].text : 'not found'}</p>
    <h5>${meanings[0].partOfSpeech}</h5>
    <div id="noun-meaning-div">
        <h6>Meaning</h6>
        <p>${meanings[0].definitions[0].definition}</p>
        <ul>

        </ul>
    </div>
    <p>Synonyms : ${meanings[0].synonyms}</p>
    <h5>${meanings[1]?.partOfSpeech ? meanings[1].partOfSpeech : 'not found'}</h5>
    <div id="varb-meaning-div">
        <h6>Meaning</h6>
        <p>${meanings[1]?.definitions[0].definition ? meanings[1].definitions[0].definition : 'not found'}</p>
        <ul>

        </ul>
    </div>
    <p>Source : <a href="">${sourceUrls}</a></p>
    `
    // definition as list 
    const nounDiv = document.getElementById('noun-meaning-div');

    const nounUl = document.createElement('ul');
    meanings[2]?.definitions.forEach(el => {
        console.log(el.definition);
        const li = document.createElement('li');
        li.innerText = el.definition;
        nounUl.appendChild(li);
    });

    nounDiv.appendChild(nounUl);
    console.log(nounUl);
}

// search
document.getElementById('search-btn').addEventListener('click', function () {
    const searchText = document.getElementById('search-input').value;
    loadData(searchText)
})


// deafult set as undefined because of empty function no value
loadData();