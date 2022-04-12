export const AsyncWrapper = (callback)=>{
    return new Promise(async(res)=>{
        try{
            await res(callback)
        }catch(err){
            res(err)
        }
    }).catch(err=>err)
}


