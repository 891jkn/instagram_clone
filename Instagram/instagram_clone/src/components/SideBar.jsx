import React from 'react'
import InforBar from './InforBar'
import SuggestionFollow from './SuggestionFollow'

function SideBar() {
    
    {/* props for info bar */}
    let infoBarProps = {
        username:{
            font_size:'sm',
            font_weight:'semibold',
            font_color:'gray-500'
        },
        nickname:{
            font_size:'xs',
            font_weight:'semibold',
            font_color:'gray-400'
        },
        img:{
            width:'14'
        },
        option:{
            link:'Switch'
        }
    }
    return (
        <>
        <div className='flex justify-end flex-col md:p-0 lg:pl-8'>
            <InforBar userInfo = {infoBarProps} switchAccount={true}/>   
            {/* suggestions follow */}
            <SuggestionFollow/>
        </div>
        </>
    )
}

export default SideBar