exports.generateCode = () => {
    let code = "";
    while (code.length < 4) {
        code += String.fromCharCode(Math.ceil(Math.random()*26) +64)
    }
    return code;
}