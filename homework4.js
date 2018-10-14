const repeat = function (char, n) {
    let result = "";
    while(n > 0) {
        result = result + char;
        n = n - 1;
    }
    return result;
};

const triangleStars = function (n) {
    let spNum = 0;
    while(n > 0) {
        console.log(repeat(" ", spNum) + repeat("*", 2*n-1));
        spNum+=2;
        n = n - 1;
    }
}

const multiToSingleAt1 = function (arr1, arr2) {
    const result = [];

    while(result.length < arr1.length) {
        result[result.length] = arr1[result.length];
    }

    while(result.length < arr1.length + arr2.length) {
        result[result.length] = arr2[result.length-arr1.length];
    }
    return result;
}
//ex3
const multiToSingle = function (multdim) {
    let i = 0;
    const result = [];
    while(i < multdim.length) {
        let j = 0;
        while(j < multdim[i].length) {
            result[result.length] = multdim[i][j];
            j = j + 1;
        }
        i = i + 1;
    }
    return result;
}

const findMinMax = function (arr, bool) {
    if(bool) {
        let largest = arr[0];
        let i = 0;
        while(i < arr.length) {
            if(arr[i] > largest) {
                largest = arr[i];
            }
            i = i + 1;
        }
        return largest
    } else {
        let smallest = arr[0];
        let i = 0;
        while(i < arr.length) {
            if(arr[i] < smallest) {
                smallest = arr[i];
            }
            i = i + 1;
        }
        return smallest
    }
};

const forEach = function (arr, func) {
    let i = 0;
    while(i < arr.length) {
        func(arr[i]);
        i = i +1;
    }
};

const sum = function (arr) {
    let i = 0;
    let sum = 0;
    while(i < arr.length) {
        sum += arr[i];
        i = i + 1 ;
    }
    return sum;
};

const reverse = function (str) {
    let result = "";
    let i = 0;
    while(i < str.length) {
        result += str[str.length - 1 - result.length]
    }
    return result;
};

const checkerBoard = function (n) {
    let i = n;
    while(i > 0) {
        if(i % 2 === 0) {
            console.log(repeat("* ", n));
        } else {
            console.log(repeat(" *", n));
        }
        i = i - 1;
    }
}