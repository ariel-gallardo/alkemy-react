const UserValidator = {
    
    CheckEmail: (email) => {

        let result = {
            isGood: true,
            messages: []
        }

        const regexStartsWith = email.match(/^[_aA-zZ]/)
        const isAnEmail =  email.match(/[aA0-zZ9]*[@][aA-zZ]*[.][aA-zZ]{2,3}/)
        const checkLength = email.length >= 10 && email.length < 30
        
        if(!isAnEmail){
            result.isGood = false
            result.messages.push('Check email format please.')
        }else{
            if(!regexStartsWith){
                result.isGood = false
                result.messages.push('Check email must be starts with _ or a letter.')
            }else{
                if(!checkLength){
                    result.isGood = false
                    result.messages.push('Check email must be between 10-30 characters.')
                }
            }
        }

        return result
    },
    CheckPassword: (password) => {

        let result = {
            isGood: true,
            messages: []
        }

        const checkFormat = password.match(/[aA0-zZ9]*/)
        const checkLength = password.length >= 6 && password.length <= 20

        if(!checkFormat){
            result.isGood = false
            result.messages.push('Password only accepts numbers and letters')
        }else{
            if(!checkLength){
                result.isGood = false
                result.messages.push('Password length must be 6 - 20 characters.')
            }
        }

        return result
    }

}

export default UserValidator