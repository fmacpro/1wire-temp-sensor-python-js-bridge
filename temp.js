var spawn = require("child_process").spawn;
var process = spawn('python',["temp.py"]);

process.stdout.on('data',function(chunk){

    var textChunk = chunk.toString('utf8');// buffer to string

    console.log(textChunk);
});
