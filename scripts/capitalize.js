function capitalize(str) {
    if(str == '')
        return '';

    let s = str[0].toUpperCase();

    for(let i=1; i<str.length; i++)
        s += str[i];

    return s;
}

module.exports = capitalize;