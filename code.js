function merge(arr, left, mid, right) {
    
    let start2 = mid + 1;
    if (arr[mid] <= arr[start2]) {
        return;
    }
    while (left <= mid && start2 <= right) {
         
        if (arr[left] <= arr[start2]) {
            left++;
        } else {
            let value = arr[start2];
            let index = start2;
            while (index !== left) {
                arr[index] = arr[index - 1];
                index--;
            }
            arr[left] = value;
            left++;
            mid++;
            start2++;
        }
    }
}

function mergesort(arr, l, r) {

    if (l < r) {
        let m = l + Math.floor((r - l) / 2);
        mergesort(arr, l, m);
        mergesort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}

module.exports = { mergesort }
