function linearSearch(arr, val){
    for(let i=0;i<arr.length;i++){
        if(arr[i]=== val){
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([12,15,18,15,22,18,145,48,56],48));


