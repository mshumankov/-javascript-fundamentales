function fullName(input) {
    let regex = /\b[A-Z][a-z]{1,} [A-Z][a-z]{1,}\b/g;
    let text = input;
    let validName = null;

    let result = [];

    while ((validName = regex.exec(text)) !== null) {
        result.push(validName[0]);
    }

    console.log(result.join(' '));
}
fullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")