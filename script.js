
function countWords(phrase) {
    const words = phrase.split('');
    console.log(words.lenght);
}

function readFile (param) {
    fs.readFile (`./ficheros/${param}.json`,(err, data) => {
    countWords(data);
    })
}