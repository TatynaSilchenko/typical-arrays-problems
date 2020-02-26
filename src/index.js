
exports.min = function min (array=0) {
    if (array==0) return 0
  return array.sort((a,b)=>a-b)[0];
}

exports.max = function max (array=0) {
    if (array==0) return 0
    return array.sort((a,b)=>a-b)[array.length-1];
}

exports.avg = function avg (array=0) {
    if (array==0) return 0
  return array.reduce((sum,item)=>sum+item)/array.length;
}
