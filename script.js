const str = `
test─┬─b84e5d90─┬─60714ca
     │          ├─66b3c─┬─one.js
     │          │       └─two.js
     │          └─7b8f
     ├─f74e59─┬─a3960
     │        └─d39466─┬─aef0c
     │                 ├─bab8f
     │                 └─c974
     ├─zaw90───four.js
     └─three.js
`

/***************************** Exercise #3 *****************************/
/*
	Task: Parse a string
*/

const lines = str.trim().split('\n')

// // const delimeters = ['─┬─', '├─', '└─', '│']
const filenames = []
for (const char of lines) {
    filenames.push(...char.split(' '))
}

const arr = []
for (const char of filenames) {
    arr.push(...char.split('│'))
}
// console.log(arr)

const arr1 = []
for (const char of arr) {
    arr1.push(...char.split('─┬─'))
}
// console.log(arr1)
const arr2 = []
for (const char of arr1) {
    arr2.push(...char.split('├─'))
}
// console.log(arr2)

const arr3 = []
for (const char of arr2) {
    arr3.push(...char.split('└─'))
}
// console.log(arr3)

let arr4 = []
for (const char of arr3) {
    arr4.push(...char.split('───'))
}
// arr4 = arr4.filter(Boolean)
arr4 = arr4.filter(function(elem) {
    return (elem != '')
})
console.log(arr4)

// const arr5 = []
// 	let tmp = ''
// for(const char of arr4){
// 	if(char !== '─┬─' && char !== '├─' && char !== '└─' && char !== '│' && char !== '' && char !== '───') {
// 		tmp += char
// 	} else {
// 		if(tmp !== '') {
// 			arr5.push(tmp)
// 		}
// 		tmp = ''
// 	}
// }
// console.log(arr5)

// const arr = [
//     {
//         name: 'test',
//         type: 'folder',
//         parent: null
//     },
//     {
//         name: 'b84e5d90',
//         type: 'folder',
//         parent: 'test'
//     },
//     {
//         name: 'four.js',
//         type: 'file',
//         parent: 'zaw90'
//     }
// ]

/***************************** Exercise #1 *****************************/
/*
	Task: Count characters in a string
*/

/* Method #1 (ugly) */
// console.log(str.split('│').length - 1)

/* Method #2 (better) */
// const result = Array.from(str).filter(char => char == '│').length
// console.log(result)

/* Method #3 (the best) */
// let result_1 = 0
// let result_2 = 0
// let result_3 = 0
// let result_4 = 0
// let result_5 = 0
// for( const char of str) {
//     if(char == '─') {
//         result_1 += 1
//     } else if(char == '┬') {
//         result_2 += 1

// 	} else if( char == '├') {
//         result_3 += 1
// 	}
// 	else if( char == '└') {
//         result_4 += 1
// 	}
// 	else if( char == '│') {
//         result_5 += 1
// 	}
// }
// console.log(result_1)
// console.log(result_2)
// console.log(result_3)
// console.log(result_4)
// console.log(result_5)

// let delimeters = []
// delimeters[0] = '─'
// delimeters[1] = '┬'
// delimeters[2] = '├'
// delimeters[3] = '└'
// delimeters[4] = '│'
// console.log(delimeters)

// let obj = {}
// obj[delimeters[0]] = result_1
// obj[delimeters[1]] = result_2
// obj[delimeters[2]] = result_3
// obj[delimeters[3]] = result_4
// obj[delimeters[4]] = result_5
// console.log(obj)

// let fromEntries = Object.fromEntries([
// 	[delimeters[0], result_1],
// 	[delimeters[1], result_2],
// 	[delimeters[2], result_3],
// 	[delimeters[3], result_4],
// 	[delimeters[4], result_5]
// ])
// console.log(fromEntries)

/***************************** Exercise #2 *****************************/
/* Task: Count all the delimeters in the string
	The result must look like this:
	{'─': 5, '┬': 10, '├': 1, '└': 2, '│': 3}
*/

// const obj = {}
// let delimeters = ['─', '┬', '├', '└', '│']
// for (const char of str) {
//     if (delimeters.includes(char)) {
//         if (!obj[char]) {
//             obj[char] = 1
//         } else {
//             obj[char] += 1
//         }
//     }
// }
// console.log(obj)

// const _str = 'Hello'
// const vowels = ['a', 'e', 'i', 'o', 'u']
// const _obj = {}
// for (const char of _str) {
// 	if(vowels.includes(char) && _obj[char]) {
// 		_obj[char] += 1
// 	} else if(vowels.includes(char)) {
// 		 _obj[char] = 1
// 	}
//     // if (vowels.includes(char)) {
//     //     if (_obj[char]) {
//     //         _obj[char] += 1
//     //     } else {
//     //         _obj[char] = 1
//     //     }
//     // }
// }
// console.log(_obj)

/***************************** Exercise #2.1 *****************************/
/*
	Task: Re-implement includes()
*/

// function includes(hay, needle) {
// 	for (const item of hay) {
// 		if(item == needle) {
// 			return true
// 		}
// 	}
// 	return false
// }

// const vowels = ['a', 'e', 'i', 'o', 'u']
// console.log(includes(vowels, 's'))
