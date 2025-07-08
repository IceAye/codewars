class FileNameExtractor {
    static extractFileName (dirtyFileName) {
        return dirtyFileName.replace(/\d+_([^.]+\.\w+).*$/g, "$1");
    }
}

class FileNameExtractor {
    static extractFileName (dirtyFileName) {
        return dirtyFileName.slice(dirtyFileName.indexOf("_") + 1, dirtyFileName.lastIndexOf("."));
    }
}

console.log(FileNameExtractor.extractFileName("1_FILE_NAME.EXTENSION.OTHEREXTENSIONadasdassdassds34"), "FILE_NAME.EXTENSION");
console.log(FileNameExtractor.extractFileName("1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION"), "FILE_NAME.EXTENSION");