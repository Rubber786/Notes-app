const chalk = require("chalk")
const fs = require("fs")
const { title } = require("process")

//adding notes
const addNote = (title, body) => {
    const notes = loadNotes()//return an empty array
    const duplicateNote = notes.find((n) => n.title === title);
    //find --finds the array and stops the function there and creates a new array just like filter
    // filter -- notes is an array, and we have created a new array here taking notes array and filtering it eventually making another array
    //title property


    if (!duplicateNote) {//this means there is no title repeatition
        notes.push({
            title: title,//new object which will pass the value of argv.title and body to the array
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen("Notes Saved!!"));
    } else {
        console.log(chalk.bgRed(" Notes title Taken !!"));
        console.log(duplicateNotes)
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)//saving the new note aka array made in the notes.json file
    fs.writeFileSync("notes.json", dataJSON)
}

const loadNotes = () => {//reading the json file and sending the data to the function 
    try {
        const dataBuffer = fs.readFileSync("notes.json")//if an error occures in this code then the code in catch will run, which basicaly return an empty array
        const dataJSON = dataBuffer.toString()
        return parsedData = JSON.parse(dataJSON)

    } catch (e) {
        return []
    }

}

//removing notes
const removeNote = function (title) {
    const notes2 = loadNotes();
    const realNotes = notes2.filter((n) => n.title !== title)
    if (notes2.length > realNotes.length) {
        console.log(chalk.bgGreen("Note Removed"));
        saveNotes(realNotes)

    } else {
        console.log(chalk.bgRed("No Note found!!"))
    }
}

//List notes

const listNote = () => {
    console.log(chalk.bgBlue("Your Notes...."));
    const listNotes = loadNotes();
    listNotes.forEach((note) => {
        console.log(note.title)
    });
}

//readNotes

const readNotes = (title) => {
    const readFiles = loadNotes();
    const foundNote = readFiles.find((note) => note.title === title)
    if (foundNote) {
        console.log(chalk.bgGreen(foundNote.title));
        console.log(chalk.bgBlue(foundNote.body));
    } else {
        console.log(chalk.bgRed("No note Found Alert!!"));
    }

}



module.exports = {//we have put the propeties in an object now and ow we can export all of them to a different file 
    addNote: addNote,//these are variables so no ()

    removeNote: removeNote,
    listNote: listNote,
    readNotes: readNotes
}