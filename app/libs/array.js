// 去除包含数组元素的元素
// keysArr 为需要去除的元素(Array)
// array是完整数组(Array)
exports.removeKeysInArr = function(array, keysArr) {
    keysArr.map(item => {
        let index = array.indexOf(item)
        if (index = -1) {
            array.splice(index, 1)
        }
    })
    return array
}