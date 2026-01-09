/* ❓ DESCRIPTION:
We're given some typical *nix commands and want to parse them into their arguments. We'll ignore quoted arguments and other special characters, although if any of the characters &, ;, >, | show up, those signify that a new command has started (so we can ignore any arguments after it).
*/

// ✅ SOLUTION:
function args(cmd) {
    const regExp = new RegExp(/[&;>|]/);
    const markedIndex = cmd.search(regExp);
    const finalString = (markedIndex >= 0 ? cmd.slice(0, markedIndex) : cmd).trim();
    return finalString.split(' ');
}

// 📌 TESTCASE:
console.log(args('ls -R /'), ['ls', '-R', '/'], 'failed parsing "ls -R /"');
console.log(args('cat /tmp/data.txt | less'), ['cat', '/tmp/data.txt'], 'failed parsing command with pipe (|) operator');
console.log(args('ls -R /&echo not done;echo ok'));
