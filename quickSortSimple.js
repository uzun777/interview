function quickSortSimple(array) {
    if(array.length <= 2) {
        return array
    }

    const pivotIndex = Math.floor(array.length / 2)
    const pivot = array[pivotIndex]
    const left =[]
    const right = []


    for (let i=0; i<array.length; i++) {
        if(i === pivotIndex) {
            continue
        }
        if (array[i] <= pivot) {
            left.push(array[i])
        }
        else {
            right.push(array[i])
        }

    }

    return [...quickSortSimple(left), pivot, ...quickSortSimple(right)]
}

console.log(quickSortSimple([1, 2, 3, 7, 5, 6, 7, 8, 3, 2]))