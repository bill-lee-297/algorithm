function solution(n, arr1, arr2) {
    let firstMap = Array.from({ length: n}, () => Array(n).fill(0));
    let secondMap = Array.from({ length: n}, () => Array(n).fill(0));
    let answer = [];

    for(let i=0; i<arr1.length; i++){
        let v = arr1[i];
        for(let j=0; j<n; j++){
            if(v >= Math.pow(2, n-j-1)){
                firstMap[i][j] = 1;
                v = v - Math.pow(2, n-j-1);
            }else{
                firstMap[i][j] = 0
            }
        }
    }

    for(let i=0; i<arr2.length; i++){
        let v = arr2[i];
        for(let j=0; j<n; j++){
            if(v >= Math.pow(2, n-j-1)){
                secondMap[i][j] = 1;
                v = v - Math.pow(2, n-j-1);
            }else{
                secondMap[i][j] = 0
            }
        }
    }

    for(let i=0; i<n; i++){
        let tmpArr = "";
        for(let j=0; j<n; j++){
            if(firstMap[i][j] === 1 || secondMap[i][j] === 1){
                tmpArr = tmpArr + "#";
            }else{
                tmpArr = tmpArr + " ";
            }
        }
        answer.push(tmpArr);
    }

    return answer;
}