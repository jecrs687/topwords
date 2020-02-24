import React from 'react'
import './main.css'
const infor = require('../../infor.json')

export default function main(){
    return(
        <div className='Site'>
            <div className="header">
                <div/>
                <div/>
                <div/>
                <div/>
                <div className="smartphone">
                    <div className='title'>
                    <h1>
                        {infor.title.split('_').map(value=>` ${value}`)}
                    </h1>
                    {infor.building?                    
                    <h1>application is not yet ready</h1>:
                    null
}

                </div>
                <div className="smartphone_button"/>
                </div>
            </div>

            <div className="body">
            </div>

            <div className="footer">
        rwberb
            </div>

        </div>
    )
}