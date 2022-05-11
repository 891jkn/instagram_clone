export const ResponseHelper = async(res)=>{
    return {
        code:res.code ? 200 : 400,
        result : res.result ? res.result :false ,
        data:res.data ? res.data : [],
        message:res.message ? res.message : "Dev don't write more anything"
    }
}