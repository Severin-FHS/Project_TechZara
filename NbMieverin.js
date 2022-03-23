let tab = [3, 23, 4, 5, 23, 1, 1, 5, 5, 5, 23, 23];
let k = 0;
let n = 0;
let t = [];
var s;
//let p = 0;


for (let i = 0; i < tab.length; i++) {
    for (let j = 0; j < tab.length; j++) {
        if (tab[i] == tab[j]) {
            n++;
            var c = tab[i];
        }
        s = n;
        var p = {
            tab: c,
            n: s
        };

    }
    console.log(p);
    n = 0;
    k++;

}