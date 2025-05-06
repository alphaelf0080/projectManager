function mergeSelElementFromList(selData,index){
    console.log('mergeSelElementFromList')
    var mergeList = []
   // console.log(selData)
   // console.log(index)

    for(var i = 0 ; i<selData.length ; i++){
        mergeList.push(selData[i][index])    
        
    }
    
    return mergeList
    
};


function mergeSelElementFromListToString(selData,index,plusSymbol){
    console.log('mergeSelElementFromList')
    var mergeListString = ''
   // console.log(selData)
   // console.log(index)

    for(var i = 0 ; i<selData.length ; i++){
        mergeListString =+ '__'+ String(selData[i][index])
        
    }
    console.log(mergeListString)
    return mergeListString
    
};