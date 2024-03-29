function cipher(text, shift){
    let secret = '';
    for(let i=0; i<text.length; i++)
        secret += encode(text[i], shift);
    
    return secret
}

function encode(ltr, shift){
    if(ltr == ' ')
        return ' ';
    let code = `\ ${ltr.toLowerCase()}`.charCodeAt(1) + shift;
    if(code > 122+shift || code < 65)
        return ltr;
    if(code > 122){
        let diff = code - 122;
        console.log(` diff = ${diff} `);
        return String.fromCharCode(96 + diff).toUpperCase();
    }
    return String.fromCharCode(code).toUpperCase();
}

module.exports = cipher;

// a = 97
// z = 122
