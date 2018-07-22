//console.log(Object.keys(process));

process.stdout.write('prompt > ');
process.stdin.on('data', function(data) {
    let cmd = data.toString().trim();
    if(cmd === 'pwd') {
        process.stdout.write(process.env["PWD"]);
    }
    else if(cmd === 'date') {
        let date = new Date(); 
        process.stdout.write(date.getHours());
    }
    else {
        process.stdout.write('You typed: ' + cmd);
    }
    process.stdout.write('\nprompt >');
})