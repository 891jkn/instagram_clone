import defaultImagePost from '../images/post_images/vivian_3_15_2020.jpg'
import user from '../images/user.png'

const InfoToast = ({userId = null,hidden})=>{
    if(userId!==null){
      return (
        <>
          <div className={`w-96 h-fit absolute top-5 left-0 ${hidden}  bg-white border rounded`}>
              <div className="flex flex-row space-x-5 items-center py-5  px-5">
                <div className="basis-1/5">
                  <img src={user} className='m-w-56 rounded-circle' alt="" />
                </div>
                <div className="basis-4/5 space-y-2">
                  <div>
                    <p className='text-xs font-semibold text-sky-700'>Vivian</p>
                    <p className='text-xs font-semibold text-gray-400'>Vivian</p>
                  </div>
                    <p className='text-xs font-semibold text-sky-700 w-56 truncate'>https://cloud.mongodb.com/v2/621226d0b3f072709c857772#clusters</p>
                  <div>
                  </div>          
                </div>
              </div>      
              <hr />
              <div className="flex flex-row py-5  px-5">
                <div className='basis-1/3 flex flex-col justify-items-center space-y-0'>
                    <b className='text-sm font-semibold text-center'>7,001</b>
                    <b className='text-gray-400 text-sm text-center font-light'>posts</b>
                </div>
                <div className='basis-1/3 flex flex-col justify-items-center space-y-0'>
                    <b className='text-sm font-semibold text-center'>358m</b>
                    <b className='text-gray-400 text-sm text-center font-light'>followers</b>
                </div>
                <div className='basis-1/3 flex flex-col justify-items-center space-y-0'>
                    <b className='text-sm font-semibold text-center'>109</b>
                    <b className='text-gray-400 text-sm text-center font-light'>following</b>
                </div>
              </div>
              <div className="flex flex-row preview-album">
                <div className='basis-1/3'>
                  <img src={defaultImagePost} className='w-fit' alt="" />
                </div>
                <div className='basis-1/3'>
                  <img src={defaultImagePost} className='w-fit' alt="" />
                </div>
                <div className='basis-1/3'>
                  <img src={defaultImagePost} className='w-fit' alt="" />
                </div>
              </div>
              <div className="flex flex-row py-3 space-x-2 px-4">
                <div className="basis-1/2 text-center">
                  <button className='w-full py-1 border rounded'>Message</button>
                </div>
                <div className="basis-1/2 text-center">
                  <button className='w-full py-1 border rounded'>Follow</button>
                </div>
              </div>
          </div>
        </>
      )
    }else{
      alert('Something wrong!')
    }  
  }
  
export default InfoToast