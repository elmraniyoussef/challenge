function calculerSomme(tab){
    let somme = 0;
  for (let i = 0; i < tab.length; i++) {
    somme =somme +i;
    somme = somme +tab[i]
   //     console.log(tab[i]);
  }

          console.log(somme);
}
calculerSomme([1,5,9])