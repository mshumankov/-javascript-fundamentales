function extractFile(filePath) {
    let startIndexFile = filePath.lastIndexOf('\\');
    let endIndexFile = filePath.lastIndexOf('.');
    let fileName = filePath.substring(startIndexFile + 1, endIndexFile);
    let startExtension = filePath.lastIndexOf('.');
    let extension = filePath.substring(startExtension + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');