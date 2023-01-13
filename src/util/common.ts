/* eslint-disable prettier/prettier */
export const  getStandardResponse = (success = true, data, message = '')=>{
    if (success){
        return ({success, data})
    }else{
        return {success, message};
    }
}