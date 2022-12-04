const input = "I am a good guy in javascript";
const changedInput = input.replace(/[^\w]/g, "").toLowerCase();
const length = changedInput.length;
if (length > 81) return console.log("error input");
const cols = Math.ceil(Math.sqrt(length));
const rows = Math.ceil(length / cols);

var squredText = "";
var plainText = "";

for (let i = 0; i < changedInput.length; i += cols) { 
    for (let j = i; j < (cols + i); j++) {
        if (!changedInput[j]) break;
        squredText += changedInput[j];
    }
    squredText += '\n';
}

for (let i = 0; i < cols; i ++) { 
  for (let j = i; j < changedInput.length; j += cols) {
    plainText += changedInput[j];
  }
  plainText += ' ';
}



console.log(squredText);
console.log(plainText);
