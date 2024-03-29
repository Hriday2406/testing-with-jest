function analyze(arr){
    let len = arr.length;
    let mini = Number.MAX_VALUE, maxi = Number.MIN_VALUE;
    let sum = 0;
    for(let i=0; i<len; i++){
        if(arr[i] > maxi)
            maxi = arr[i];
        if(arr[i] < mini)
            mini = arr[i];
        sum += arr[i];
    }
    if(maxi == Number.MIN_VALUE)
        maxi = undefined;
    if(mini == Number.MAX_VALUE)
        mini = undefined;

    let avg = sum / len;
    if(sum == 0 && len == 0)
        avg = undefined;

    return {average:avg, min:mini, max:maxi, length:len};
}

module.exports = analyze;