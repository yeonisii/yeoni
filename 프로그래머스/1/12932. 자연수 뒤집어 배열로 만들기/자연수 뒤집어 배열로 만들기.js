function solution(n) {
    let arr = n.toString().split('');
    let answer = [];
    // 자연수 n을 뒤집는다
    // 각 자리 숫자를 원소로 가진다 
    for(let i=arr.length-1; i>=0; i--){
        answer.push(Number(arr[i]));
    }
    
    return answer;
}