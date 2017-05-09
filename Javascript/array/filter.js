
function afterc(str){
    if(str.indexOf('cie') > -1){
        return true;
    } else {
        return false;
    }
}

var words = ['recieve', 'deceive', 'percieve', 'deceit', 'concieve'];
var misspelled = words.filter(afterc);

console.log(missppelled);