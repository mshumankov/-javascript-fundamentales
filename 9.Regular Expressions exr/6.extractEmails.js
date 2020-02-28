function extractEmails(input) {

    // let patternSplit = /\s+/g
    // let textArr = input[0].split(patternSplit);

    // for (let str of textArr) {
    //     //let patternEmail = /^[A-Za-z0-9][A-Za-z0-9\-\.\_]*[A-Za-z0-9]@[A-Za-z]+?\-?[A-Za-z]+?\.[A-Za-z]+\-*[A-Za-z]+[\.?\w+]??/g;
    //     let patternEmail = /^(?<=\s)([A-Za-z0-9]+[\.\-\_]?[A-Za-z0-9]+)@([A-Za-z]+[\-]?[A-Za-z]+\.[A-Za-z]+[\-]?[A-Za-z]+)(\.[a-z]+)??/g;
    //     let isValid = patternEmail.exec(str);
    //     if (isValid) {
    //         console.log(isValid[0]);
    //     }

    // }

    let pattern = /(?<=\s)([A-Za-z0-9]+[\.\-\_]?[A-Za-z0-9]+)@([A-Za-z]+[\-]?[A-Za-z]+\.[A-Za-z]+[\-]?[A-Za-z]+)(\.[a-z]+)?/g;
    let result = input[0].match(pattern);
    if (result) {
        console.log(result.join('\n'));
    }


}
extractEmails(['Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.', 'end']);