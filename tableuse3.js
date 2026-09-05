function trouverMax(tab){
    let Max = tab[0]

      for (let i = 0; i < tab.length; i++) {
        if (tab[i] > Max) {
     Max = tab[i];
        }
    }
    return Max;
}
let arr = [12, 45, 7, 89, 23]
console.log(trouverMax( arr));