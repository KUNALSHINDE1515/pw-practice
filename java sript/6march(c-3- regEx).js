let pattern = "kunal"

let regExOne = new RegExp(pattern)

let flag = 'gi'
let regExTwo = new RegExp(pattern,flag)

let regExThree = /kunal/gi

const strToCheck = "kunal is growing at a rapid speed and recently they are working on kunals to  create skiills paswd kunal content"

const result = regExThree.test(strToCheck)
console.log(result);

const anotherResult = strToCheck.match(regExThree)
console.log(anotherResult);

const oneMoreResult = strToCheck.replace(regExThree,'ku-nal')
console.log(oneMoreResult);

const webUrl ="http://pwskill.com/kunal%20shinde"

const useableUrl = webUrl.replace(/ %\d0/,'-')
console.log(useableUrl);