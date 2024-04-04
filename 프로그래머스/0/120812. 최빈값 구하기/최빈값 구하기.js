function solution(array) {
    const counter = {};
    
    for(let i = 0; i < array.length; i++){
        if(counter[array[i]]) {
            counter[array[i]]++;
        } else {
            counter[array[i]] = 1;
        }
    }
    
    let maxCount =0;
    let mode = [];
    
    for (const key in counter){
        if (counter.hasOwnProperty(key)) {
            const count = counter[key];
            
            if (count > maxCount) {
                maxCount = count;
                mode = [parseInt(key)];
            } else if (count === maxCount){
                mode.push(parseInt(key));
            }
        }
    }
    
    if (mode.length > 1){
        return -1;
    } else{
        return mode[0];
    }
    return answer;
}