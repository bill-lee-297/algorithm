function solution(n, times) {
    let left = 1;
    let right = Math.max(...times) * n;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let sum = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);

        // console.log("left: ",left," / mid: ",mid,"/ right: ",right," / sum: ",sum)
        if (sum < n) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
}
