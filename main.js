// BT1: Tìm string có độ dài lớn nhất & nhỏ nhất trong mảng

var arrays = ["You","are","Beautiful","looking"]

// Lớn nhất:

var long = arrays[0]
for (i = 1 ; i < arrays.length ; i++) {
    if (arrays[i].length > long.length) {
        long = arrays[i]
    }
}
console.log(long)

// Nhỏ nhất:

var short = arrays[0]
for (i = 1 ; i < arrays.length ; i++) {
    if (arrays[i].length < short.length) {
        short = arrays[i]
    }
}
console.log(short)

// BT2: Ẩn địa chỉ email của người dùng

var EX1 = "peter_cutee@gmail.com"

var privateEmail = ""
var flag = 0
for (i = 0 ; i < EX1.length ; i++) {
    if (EX1.charAt(i) === "_") {
        flag = 1
    } else if (EX1.charAt(i) === "@") {
        flag = 0
    }
    
    if (flag === 0) {
        privateEmail = privateEmail + EX1.charAt(i)
    } else if (flag === 1) {
        flag = 2
        privateEmail = privateEmail + "_"
    } else if (flag === 2) {
        flag = 2
        privateEmail = privateEmail + "*"
    }
}
console.log(privateEmail)

var EX2 = "david_thuan@gmail.com"

var privateEmail = ""
var flag = 0
for (i = 0 ; i < EX2.length ; i++) {
    if (EX2.charAt(i) === "_") {
        flag = 1
    } else if (EX2.charAt(i) === "@") {
        flag = 0
    }
    
    if (flag === 0) {
        privateEmail = privateEmail + EX2.charAt(i)
    } else if (flag === 1) {
        flag = 2
        privateEmail = privateEmail + "_"
    } else if (flag === 2) {
        flag = 2
        privateEmail = privateEmail + "*"
    }
}
console.log(privateEmail)