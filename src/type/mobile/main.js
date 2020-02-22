import React from 'react'
import './main.css'
const infor = require('../../infor.json')
const colors= infor.colors
export default function main(){
    return(
        <div className='Mobile'>
            <div className="header" style={{background:`linear-gradient(${colors.analogo},${colors.triadic2} )`}}>
                    {/* the background effect */}
                    <div style={{backgroundColor:`${colors.triadic}`}}/>
                    <div style={{backgroundColor:`${colors.triadic}`}}/>
                    <div style={{backgroundColor:`${colors.triadic}`}}/>
                    <div style={{backgroundColor:`${colors.triadic}`}}/>
                    {/* ---------------------- */}
                    {/* the "smartphone" */}
                <div className="smartphone" style={{backgroundColor:`${colors.analogo2}88`}}>
                    <a href={`${infor.repo_url}`}>
                        <div className='screen' style={{backgroundColor:`${colors.triadic2}`}}>
                        <h1>
                            {infor.title.split('_').map(value=>` ${value}`)}
                        </h1>
                        {infor.building?                    
                            <h1 style={{padding:'10px'}}>application is not yet ready</h1>
                            :
                            null
                        }
                        </div>
                    </a>
                    <div className="smartphone_button" />
                </div>
                    {/* ------------------- */}
            </div>
                        

            <div className="body">
            </div>

            <div className="footer">
                powered by <a href='https://jecrs687.github.io' style={{color:`${colors.primary}`}}>@jecrs687</a>
            </div>

        </div>
    )
}