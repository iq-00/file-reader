//warning : the result may occur more than one time
//just ignore it and implement your own logics 

//importing packages
import cmd from "child_process"
import fs from "fs"

//creating a text file
fs.writeFileSync("./file.txt", "")

//watching the changes occuring to the file
fs.watch("./file.txt", (type, dir) => {

    //read the file
    let file = fs.readFileSync("./file.txt", { encoding: "utf8" })
    let arr = file.split(" ")

    //the path in which the result is stored as a bat file
    //change this path according to your system directory
    let path = `D:\\Website\\file-reader\\result.bat`

    //gives the addition value of the given numbers
    if (arr[0] == "add") {
        let result = 0
        for (let i of arr) {
            if (!i.match(/[a-zA-Z]/)) result += parseInt(i)
        }

        //writing the result to the bat file
        fs.writeFileSync("./result.bat", `echo off\ncls\necho ${result}\npause\nexit`)
        
        //executing the bat file
        cmd.execSync(`start ${path}`)

        //deleting the bat file
        fs.unlink("./result.bat", (err => {
            if (err) console.log(err);
        }))
    }
    
    //gives the multiplication value of the given numbers
    else if (arr[0] == "multiply") {
        let result = 1
        for (let i of arr) {
            if (!i.match(/[a-zA-Z]/)) result *= parseInt(i)
        }

        //writing the result to the bat file
        fs.writeFileSync("./result.bat", `echo off\ncls\necho ${result}\npause\nexit`)

        //executing the bat file
        cmd.execSync(`start ${path}`)

        //deleting the bat file
        fs.unlink("./result.bat", (err => {
            if (err) console.log(err);
        }))
    }

    //your other logics for more operations

})