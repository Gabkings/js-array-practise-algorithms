function findSum(arr, weight){
    for(var i =0, arrLength = arr.length; i < arrLength; i++){
        for(var j = 1; j < arrLength; j++){
            if(arr[i] + arr[j] == weight){
                return [i,j];
            }
        }
    }
    return -1;
}

///find sum using hashtables 

function findSumBetter(arr, weight) {
    var hashtable = {};

    for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
        var currentElement = arr[i],
            difference = weight - currentElement;

        // check the right one already exists
        if (hashtable[currentElement] != undefined) {
            return [i, hashtable[currentElement]];
        } else {
            // store index
            hashtable[difference] = i;
        }
    }
    return -1;
}

//finding the median of an array

function findArrMedian(array){
    var arrLength = array.length;
    if(arrLength % 2 == 1){
        return array[Math.floor(arrLength)];
    }else{
        return (array[length / 2] + array[length / 2 - 1])/ 2;
    }
}

//finding the median of two sorted arrays

function medianOfTwoSortedArray(arr1, arr2, pos) {
    if (pos <= 0) {
        return -1;
    }
    if (pos == 1) {
        return (arr1[0] + arr2[0]) / 2;
    }
    if (pos == 2) {
        return (Math.max(arr1[0], arr2[0]) + Math.min(arr1[1], arr2[1])) / 2;
    }

    var median1 = medianOfArray(arr1),
        median2 = medianOfArray(arr2);

    if (median1 == median2) {
        return median1;
    }

    var evenOffset = pos % 2 == 0 ? 1 : 0,
        offsetMinus = Math.floor(pos / 2) - evenOffset,
        offsetPlus = pos - Math.floor(pos / 2) + evenOffset;


    if (median1 < median2) {
        return medianOfTwoSortedArray(arr1.slice(offsetMinus), arr2.slice(0, -offsetMinus), offsetPlus);
    } else {
        return medianOfTwoSortedArray(arr2.slice(offsetMinus), arr1.slice(0, -offsetMinus), offsetPlus);
    }
}

medianOfTwoSortedArray([1, 2, 3], [4, 5, 6], 3); // 3.5
medianOfTwoSortedArray([11, 23, 24], [32, 33, 450], 3); // 28
medianOfTwoSortedArray([1, 2, 3], [2, 3, 5], 3); // 2.5


//finding the common elements in the array

function commonElements(kArray) {
    var hashmap = {},
        last, answer = [];

    for (var i = 0, kArrayLength = kArray.length; i < kArrayLength; i++) {
        var currentArray = kArray[i];
        last = null;
        for (var j = 0, currentArrayLen = currentArray.length; j < currentArrayLen; j++) {
            var currentElement = currentArray[j];
            if (last != currentElement) {
                if (!hashmap[currentElement]) {
                    hashmap[currentElement] = 1;
                } else {
                    hashmap[currentElement]++;
                }
            }
            last = currentElement;
        }
    }

    // Iterate through hashmap
    for (var prop in hashmap) {
        if (hashmap[prop] == kArray.length) {
            answer.push(parseInt(prop));
        }
    }
    return answer;
}

commonElements([
    [1, 2, 3],
    [1, 2, 3, 4],
    [1, 2]
]); // [ 1, 2 ]

//rotating matrix 

var matrix = [
    [1, 0, 1],
    [0, 0, 1],
    [1, 1, 1]
];
rotateMatrix90Left(matrix);

function rotateMatrix90Left(mat) {
    var N = mat.length;

    // Consider all squares one by one
    for (var x = 0; x < N / 2; x++) {
        // Consider elements in group of 4 in 
        // current square
        for (var y = x; y < N - x - 1; y++) {
            // store current cell in temp variable
            var temp = mat[x][y];

            // move values from right to top
            mat[x][y] = mat[y][N - 1 - x];

            // move values from bottom to right
            mat[y][N - 1 - x] = mat[N - 1 - x][N - 1 - y];

            // move values from left to bottom
            mat[N - 1 - x][N - 1 - y] = mat[N - 1 - y][x];

            // assign temp to left
            mat[N - 1 - y][x] = temp;
        }
    }
}
