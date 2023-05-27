const chalk = require("chalk")
const { demandOption, argv } = require("yargs")
const yargs = require("yargs")
const notes = require("./notes.js")//calling our file, which is exporting an object with 2 properties, in a way the other functions have become this files methods.

//customize yarg version
yargs.version("1.1.0")
//make an add command
yargs.command({
    command: "add",
    describe: "Will add a note",//what will it do
    builder: {//adds option 
        title: {//it will take in value
            describe: "Note title",
            demandOption: true,//makes it compulsory to write title every time, the defualt value for this is false, so to make it compulsory we make it true in boolean
            type: "string"//only string type will be parsed through the comment

        },
        body: {
            describe: "Note main body",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {//how will it do the action, new es6 function syntax
        notes.addNote(argv.title, argv.body)//the .title and body here are from the builder, argv is just whatever we write in the command lines as argument
    }
})
//make a remove command

yargs.command({
    command: "remove",
    describe: "will remove a note",
    builder: {
        title: {
            describe: "removing note title",
            demandOption: true,
            type: "string"

        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
    //list a note
})
yargs.command({
    command: "list",
    describe: "will list a note",
    handler() {
        notes.listNote()
    }
    //read a note 
})
yargs.command({
    command: "read",
    describe: "will read a note",
    builder: {
        title: {
            describe: "reading note title",
            demandOption: true,
            type: "string"

        }
    },
    handler(argv) {
        notes.readNotes(argv.title)
    }

})
yargs.parse()//will give arguments of command line inside yarg.argv or can use console.log(yangs.argv)


