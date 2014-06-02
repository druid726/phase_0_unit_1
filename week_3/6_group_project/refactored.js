var numArray=[1,2,3,4,5,6];
function sum(array){
    for (var i=0;i<array.length;i++){
        var result=+array[i];
        return result;
    }
    }
    
function sum(oddLengthArray){
    if (oddLengthArray.length%2===0){
        console.log("not odd length");
    }else{
        sum();
    }
}

function sum(evenLengthArray){
     if (evenLengthArray.length%2!==0){
        console.log("not even length");
    }else{
        sum();
    }
}

function mean(){
    for (var i=0;i<array.length;i++){
    var result=+array[i];
    return result/numArray.length;
    }
}

function mean(oddLengthArray){
     if (oddLengthArray.length%2===0){
        console.log("not odd length");
    }else{
        mean();
    }
}

function mean(evenLengthArray){
     if (evenLengthArray.length%2!==0){
        console.log("not even length");
    }else{
        mean();
    }
}
function median(){
    numArray.sort(function(a, b){return a-b});
    var half = Math.ceil(array.length/2);
 
    if(values.length%2!==0){
        return values[half];
    } else{
        return (values[half-1] + values[half]) / 2;
         }
 
}

function median(){
    oddLengthArray.sort(function(a, b){return a-b});
    var half = Math.ceil(oddLengthArray.length/2);
 
    if(values.length%2!==0){
        return values[half];
    } else{
        return (values[half-1] + values[half]) / 2;
         }
 
}

function median(){
    evenLengthArray.sort(function(a, b){return a-b});
    var half = Math.ceil(evenLengthArray.length/2);
 
    if(values.length%2!==0){
        return values[half];
    } else{
        return (values[half-1] + values[half]) / 2;
         }
 
}