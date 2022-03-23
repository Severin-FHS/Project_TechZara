let note = [34, -27, 76, 100, -46, 27, 39, -50, 27, 32, 27, 100];
let Crs = [];
let p = 0;
for (let i = 0; i < note.length; i++) {
    for (let j = 0; j < p; j++) {
        if (note[i] <= note[j]) {
            let k = note[i];
            note[i] = note[j];
            note[j] = k;
        }
    }
    p++;
}
//Sans doublant
let t1 = [];
t1[0] = note[0];
let a = note.length;
let k = 0;
let n = 0;
let w = 1;

for (let i = 0; i < a; i++) {
    for (let j = 0; j < k; j++) {
        if (note[i] != t1[j]) {
            n++;
        }
        if (n == i) {
            t1.push(note[i]);
        }
    }
    n = 0;
    k++;
}
console.table(note);
console.table(t1);