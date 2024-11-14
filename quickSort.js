
function switchAndReturnIndex(arr, left, right, pivot) {

    while(left<=right) {
        while(arr[left]<pivot) {
            left++
        }
        while(arr[right]>pivot) {
            right--
        }

        if(left<=right) {
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++
            right--
        }

    }

    return left

}


function quickSort(arr, left=0, right=arr.length-1) {

    if(left>=right) {
        return
    }

    const pivotIndex = Math.floor((left+right)/2)
    const pivot = arr[pivotIndex]

    const index = switchAndReturnIndex(arr, left, right, pivot)
    quickSort(arr, left, index-1)
    quickSort(arr, index, right)

    return arr
}


console.log(quickSort([1, 2, 3, 7, 5, 6, 7, 8, 3, 2]))