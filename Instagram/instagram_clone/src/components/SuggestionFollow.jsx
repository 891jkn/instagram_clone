import React from 'react'
import userimg from '../images/user.png'
import InforBar from './InforBar'
function SuggestionFollow() {
    let infoBarProps = {
        username:{
            font_size:'xs',
            font_weight:'semibold',
            font_color:'gray-500'
        },
        nickname:{
            font_size:'xs',
            font_weight:'semibold',
            font_color:'gray-400'
        },
        img:{
            width:'10'
        },
        option:{
            link:'Follow'
        }
    }
    let listSuggestion = [1,2,3,4,5,6,7]
    return (
        <>
        <div className='flex flex-row justify-between my-4'>
            <h4 className='text-sm font-semibold text-gray-500'>Suggestion for you</h4>
            <a className='text-gray-600 text-sm font-semibold'>See all</a>
        </div>
        <ul className='flex flex-col pl-2'>
            {listSuggestion.map((val,index)=>{
                return (
                    <li key={index}>
                        <InforBar userInfo={infoBarProps}/>
                    </li>
                )
            })}
        </ul>
        </>
    )
}

export default SuggestionFollow