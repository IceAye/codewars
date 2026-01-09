function args(cmd) {
    const regExp = new RegExp(/[&;>|]/);
    const markedIndex = cmd.search(regExp);
    const finalString = (markedIndex >= 0 ? cmd.slice(0, markedIndex) : cmd).trim();
    return finalString.split(' ');
}

console.log(args('ls -R /'), ['ls', '-R', '/'], 'failed parsing "ls -R /"');
console.log(args('cat /tmp/data.txt | less'), ['cat', '/tmp/data.txt'], 'failed parsing command with pipe (|) operator');
console.log(args('ls -R /&echo not done;echo ok'));
