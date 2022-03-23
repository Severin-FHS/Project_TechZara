let note = [34, -27, 76, 100, -46, 27, 39, -50, 27, 32, 27, 100];
let pos = 0;
let nega = 0;
for (let i = 0; i < note.length; i++) {
    if (note[i] < 0) {
        nega += note[i];
    }
    pos += note[i];
}
console.log("Some positif: ", pos);
console.log("Some négatif: ", nega);