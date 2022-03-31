function range(x, y) {
    var resultArray = [];
    if (x > y)
        return;
    // for (var i = 0, cnt = x; cnt < y; cnt++, i++) {
    //     resultArray[i] = cnt;
    // }
    for (var i = x; i < y; i++) {
        resultArray.push(i);
    }
    return resultArray;
}

console.log(range(4, 12));
