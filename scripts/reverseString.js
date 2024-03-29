function revString(str) {
    let length = str.length, s = '';

    for(let i=length-1; i>=0; i--)
        s += str[i];

    return s;
}

module.exports = revString;