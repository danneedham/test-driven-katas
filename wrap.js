const wrap = (string, num) => {
    let result="";
    let line="";
    const stringArr = string.split(' ');
    for (let i = 0; i<stringArr.length; i++) {
        if ((line+stringArr[i]).length>num) {
            result+=line.slice(0,line.length-1)
            result+='\n'
            line=stringArr[i]+' '
        }
        else {
            line+=stringArr[i]
            line+=' '
        }
    }
    return result += line.slice(0,line.length-1);
}
module.exports = wrap;