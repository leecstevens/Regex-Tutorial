const regex = /^\[(\d{4}|\d{2})(\/|-)\d{2}(\/|-)\d{2} \d{2}:\d{2}(:\d{2})?]/g
const timestamps = ["[2023-09-08 12:22:10]","2023-09-08 12:22:10","[2023-09-08 12:22]",
"[23-09-08 12:22:10]","[23-09-08 12:22]"]

console.log (`Testing regex: ${regex.toString()}`)
for (i = 0; i < timestamps.length - 1; i++) {
    result = timestamps[i].match(regex)
    let output = ""
    if (result == timestamps[i]) {
        output = "Passed"
    }
    else {
        output = "Failed"
    }

    console.log (`Matching ${timestamps[i]}`, `: ${output}`)
}