function searching(key, jum, callback){
    const names = ["Abigali", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"];
    let resultSearch = [];
    let finalResult = []
    names.forEach((name) => {
    if (name.toLowerCase().search(key.toLowerCase()) > -1) {
        resultSearch.push(name)
    }})
    resultSearch.forEach( (value , i) => {
        if(i < jum){
            finalResult.push(value)
        }else{
            return false
        }
    })
    callback(finalResult)
}

function showResult(result){
    console.log(result);
}

searching("an", 3 , showResult)
searching("Ab", 3 , showResult)