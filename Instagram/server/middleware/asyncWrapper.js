export const AsyncWrapper = (callback)=>{
    return new Promise((res)=>{
        try{
            res(callback)
        }catch(err){
            res(err)
        }
    }).catch(err=>err)
}


