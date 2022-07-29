let password = 'codingisfun5!'
let passwordNumOfCharacters = password.length
// console.log(passwordNumOfCharacters)
// if(passwordNumOfCharactersn >= 10 && password) {

function containsLetter(password) {
        return /[a-zA-Z]/.test(password)
    }
   
function containsNumber(password){
            return /\d/.test(password)
        }
    
function containsSpecialChar(password) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(password);
    }

function containsSpace(password) {
    return /\s/.test(password);
    }

if (containsSpecialChar(password) && containsLetter(password) && containsNumber(password) && passwordNumOfCharacters >= 10 && containsSpace(password) === false) {
    console.log("Password is accepted!")
} else (console.log("Password does not meet requirements."))



// if (function containsLetter(password) {
//     return /[a-zA-Z]/.test(password)
// } &&
//     function containsNumber(password){
//         return /\d/.test(password)
//     }
//     ) {
//     console.log('It\'s legit!')
// }


// console.log(containsLetter(password))
// const passwordArray = password.split('');
// if(passwordArray.filter(item => typeof item === 'number')) {
//     console.log("yes")
// }