function genererEmail(prenom,nom) {
    let a = prenom.toLowerCase()
    let b = nom.toLowerCase()
    return (`${a}.${b}@entreprise.com`)
}
console.log(genererEmail("YOUSSEF" ,"eLMRANI"));
