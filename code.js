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

function mergesort(arr) {
    const n = arr.length;
    for (let curr_size = 1; curr_size < n; curr_size *= 2) {
        for (let left_start = 0; left_start < n - 1; left_start += 2 * curr_size) {
            const mid = Math.min(left_start + curr_size - 1, n - 1);
            const right_end = Math.min(left_start + 2 * curr_size - 1, n - 1);
            merge(arr, left_start, mid, right_end);
        }
    }
    return arr;
}

module.exports = { mergesort, merge };

