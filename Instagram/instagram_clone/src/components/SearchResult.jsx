import React from 'react'
import defaultUserAvatar from '../images/user.png'
import{useSelector} from 'react-redux'
import SearchReducer from '../features/SearchReducer'
import {Link} from 'react-router-dom'
function SearchResult() {
  const searchReducer = useSelector((state)=>state.searchReducer)
  const User = ({user})=>{
    return (
      <>
      {user._id !== localStorage.getItem('instagram_user_id')
        ?
        <div className='flex flex-row bg-white border-top py-2 space-x-3 items-center'>
          <img src={user.avatar || defaultUserAvatar} alt="user-image" className='w-12'/>
          <div>
            <h5 className='font-semibold cursor-pointer'><Link to={`/user/${user._id}`}>{user.user_name}</Link></h5>
            <h5 className='text-xs font-semibold opacity-60 cursor-pointer'>{user.user_name}</h5>
          </div>
        </div>
      :
        <div></div>
      } 
      </>
    )
  }
  return (
      <>
    {/* {console.log(searchReducer.values.result)} */}
        <div className='absolute w-96 h-96 bg-white border rounded-lg top-3 left-1/2 overflow-auto' style={{
          transform:'translate(-50%,0)'
        }}>
            <div className='flex flex-row justify-between px-3 py-3'>
              <strong>Result </strong>
              <strong>{searchReducer.values.result.length}</strong>
            </div>
            <div className='p-3'>
                {searchReducer.values.result.map((val,key)=>{
                  return <User key = {key} user = {val}/>
                })}
              </div>
        </div>
      </>
  )
}

export default SearchResult