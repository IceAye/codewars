// ❓ DESCRIPTION:
// You have to extract a portion of the file name as follows:
//
// Assume it will start with date represented as long number
// Followed by an underscore
// You'll have then a filename with an extension
// it will always have an extra extension at the end
//
// Inputs:
// 1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION
// 1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34
// 1231231223123131_myFile.tar.gz2
// Outputs
// FILE_NAME.EXTENSION
// This_is_an_otherExample.mpg
// myFile.tar
//
// Acceptable characters for random tests:
// abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-0123456789
//
// The recommended way to solve it is using RegEx and specifically groups.

// ✅ SOLUTION 1:
class FileNameExtractor {
    static extractFileName (dirtyFileName) {
        return dirtyFileName.replace(/\d+_([^.]+\.\w+).*$/g, "$1");
    }
}

// ✅ SOLUTION 2:
class FileNameExtractor {
    static extractFileName (dirtyFileName) {
        return dirtyFileName.slice(dirtyFileName.indexOf("_") + 1, dirtyFileName.lastIndexOf("."));
    }
}

// 📌 TESTCASE:
console.log(FileNameExtractor.extractFileName("1_FILE_NAME.EXTENSION.OTHEREXTENSIONadasdassdassds34"), "FILE_NAME.EXTENSION");
console.log(FileNameExtractor.extractFileName("1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION"), "FILE_NAME.EXTENSION");