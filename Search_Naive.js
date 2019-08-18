function naiveSearch(string1,string2 ) {
    var longString,sortString , count = 0;
    if(string1 === string2) return 1;
    if(string1.length > string2.length){
        longString = string1;
        sortString = string2;
    }else{
        longString = string2;
        sortString = string1;
    }
    for (let i = 0; i < longString.length; i++) {
        for (let j = 0; j < sortString.length; j++) {
            if(longString[i+j]!==sortString[j]) break;
            if (j === sortString.length-1) count++;    
        }
    }
    return count;
}


console.log(naiveSearch("Hello I Am Arun" ,"Am"));
