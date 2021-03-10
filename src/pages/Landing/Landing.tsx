import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StateContext } from '../../provider/StateProvider';

// @ts-ignore
import eeQL2 from "../../../assets/img/eeql_logo_copy.png"
import FileUpload from '../../components/FileUpload/FileUpload'
// @ts-ignore
import "react-awesome-button/dist/styles.scss";
import './Landing.scss'
// @ts-ignore
import { AwesomeButton, AwesomeButtonProgress, AwesomeButtonSocial } from 'react-awesome-button';
const shell = require('electron').shell;


const Landing = () => {
    const { activePortHandler }: any = useContext(StateContext);
    const [ toggleButton, setToggleButton]  = useState(true)
    const [upload, setUpload] = useState(false);
    const setPort = (e) => {
        e.preventDefault()
        activePortHandler(e.target.value)
    }


        return (
            <div>
                <div className='visualize'>
                <Link to='/visualize'> 
                <AwesomeButton 
                type="secondary"
                ripple={true}
                onPress={() => {
                  window.alert('This feature is currently in beta, we appeciate your patience. -eeQL')
                }}>
                VISUALIZE (beta)
                </AwesomeButton>
                <AwesomeButtonSocial
                type="github"
                onPress={() => {
                    shell.openExternal("https://github.com/oslabs-beta/eeQL")
                  }}
                >
                SUPPORT
                </AwesomeButtonSocial>

                </Link>
                </div>
            <div id='landing'>
                <img id='logo' src={eeQL2} alt="eeql"/>
                <div className='input'>
                <FileUpload />

                </div>
            </div>

            </div>
        )
    
}

export default Landing