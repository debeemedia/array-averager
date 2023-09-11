function findArrayAverage(arr) {
    let sum = 0
    arr.forEach(num => sum += num)
    return sum / arr.length
}
module.exports = findArrayAverage