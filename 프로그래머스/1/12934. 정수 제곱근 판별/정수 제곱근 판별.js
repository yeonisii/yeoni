function solution(n) {
    for(let i=0, a=0; i<=n; i++){
        if(n/i===i){
            a =i+1
            return a*a
        }else {
            answer= -1;
        }
    }
    return answer;
}