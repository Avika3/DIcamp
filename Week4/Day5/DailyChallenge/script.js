// Exercise # Currying
// Create a curried function, that returns the volume of an object
// the volume is calculated like this length * weight * height
// 1. Call the function twice, for products of length 10cm. Weight and Height can differ
// 2. Call the function twice, for products of length 10cm and weight 2 grams,  height can differ


function getVolume (length){
	return function (wieght){
		return function (height){
			return length * wieght * height

		}
	}
}
const getVolume = (length) => (wieght) => (height) => length * wieght * height
const procudtLen = getVolume(10)
const firstProduct = procudtLen(5)(34)
const secondProduct = procudtLen(1)(100)


const getLengt = getVolume(10)(2)
const thirdProduct = getLengt(100)
getVolume(10)(2)(100)




