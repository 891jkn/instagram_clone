export const GetTimeBetweenMark = (oldTime,newTime)=>{

    oldTime = Math.floor(Date.parse(oldTime))
    let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(oldTime)
    
    const time = new Date(newTime - oldTime)

}