function text_out() {
    event.preventDefault();
    let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let arr2 = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    let newArr = [];
    for (let i = 0; i < 12; i++) {
        if (i % 2 == 0) {
            newArr.push(arr1[i+1]);
        }
        else {
            newArr.push(arr2[i-1]);
        }
    }
    let result;
    result = document.getElementById('text-result1');
    result.innerHTML = newArr;
}