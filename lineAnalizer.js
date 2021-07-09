function checkBrackets(string) {

    let a = '(';
    let b = '{';
    let c = '[';
    let A = ')';
    let B = '}';
    let C = ']';

    let arr = [];

    for(let i = 0; i < string.length; i++) {

        if((arr[arr.length-1] == a && string[i] == A) || (arr[arr.length-1] == b && string[i] == B) || (arr[arr.length-1] == c && string[i] == C) ) {

                    arr.pop();

                    console.log(arr);
                    
        } else if(string[i] == a || string[i] == b || string[i] == c) {

                    arr.push(string[i]);

                    console.log(arr);}
            else {
                continue;
            }
                
        
            
        
    }

    if(arr.length == 0) {
        return true;
    } else {
        return false;
    }




}

console.log(checkBrackets('{kwdi(kwfnk[wjwbcj]wbccb{fewu}wfcwev()kwgfben)}'));