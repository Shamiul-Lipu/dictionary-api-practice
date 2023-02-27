// fetching the data
const loadData = async () => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/hello`;
    const res = await fetch(url);
    const data = await res.json();
    displayData(data[0]);
}

// displaying data
const displayData = (wordArray) => {
    console.log(wordArray)
    const { word, sourceUrls, meanings, phonetics } = wordArray;
    console.log(meanings);
    console.log(meanings[2].definitions);
    const section = document.getElementById('display-section');
    // display on section
    section.innerHTML = `
    <h3>${word}</h3>
    <p>${phonetics[1].text}</p>
    <h5>${meanings[0].partOfSpeech}</h5>
    <div id="noun-meaning-div">
        <h6>Meaning</h6>
        <p>${meanings[0].definitions[0].definition}</p>
        <ul>

        </ul>
    </div>
    <p>Synonyms : ${meanings[0].synonyms}</p>
    <h5>${meanings[1].partOfSpeech}</h5>
    <div id="varb-meaning-div">
        <h6>Meaning</h6>
        <p>${meanings[1].definitions[0].definition}</p>
        <ul>

        </ul>
    </div>
    <p>Source : <a href="">${sourceUrls}</a></p>
    `
    // definition as list 
    const nounDiv = document.getElementById('noun-meaning-div');

    const nounUl = document.createElement('ul');
    meanings[2].definitions.forEach(el => {
        console.log(el.definition);
        const li = document.createElement('li');
        li.innerText = el.definition;
        nounUl.appendChild(li);
    });

    nounDiv.appendChild(nounUl);
    console.log(nounUl);
}

loadData();