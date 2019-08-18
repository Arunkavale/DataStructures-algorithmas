function mergeSortedArray(arr1,arr2){
    const mergedArray = [];
    let arr1Item = arr1[0];
    let arr2Item = arr2[0];
    let i = 1;
    let j = 1;
    if(arr1.length ===0){
        return arr2;
    }
    if(arr2.length ===0){
        return arr1;
    }
    while(arr1Item || arr2Item){
        console.log(arr1Item ,arr2Item);
        if(!arr1Item||arr1Item > arr2Item){
            mergedArray.push(arr2Item);
            arr2Item = arr2[i];
            i++;
        }else{
            mergedArray.push(arr1Item);
            arr1Item = arr1[j];
            j++;
        }
    }
    return mergedArray;

}
console.log(mergeSortedArray([1,3,5,8],[1,2,4]));

// mergeSortedArray([1,3,5,8],[1,2,4]);