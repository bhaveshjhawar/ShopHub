export const getPriceQueryParams=(queryParams,key,value)=>{
    const hasValueInParams= queryParams.has(key)

console.log(hasValueInParams);
    if(value && hasValueInParams){
        queryParams.set(key,value)

    }
    else if (value){
        queryParams.append(key,value)
    }
    else if (hasValueInParams){
        queryParams.delete(key,value)
    }
    return queryParams
}