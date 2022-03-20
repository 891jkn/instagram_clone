export const  AsyncWrapper =  async (callback) => {
    try{
        callback()
    }catch(err){
        return err;
    }
}