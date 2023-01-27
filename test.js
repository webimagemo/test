const indeOf = (arr,val) => {
    for(let i in arr){
        if(arr[i]===val) return i;
    }
    return -1;
}

indeOf([1,2,3,4,5],5); // -> 4