import React from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './DemoUser.css'

function DemoUser() {
    const dispatch = useDispatch();
    const demoUserLogin = async (e) => {
        e.preventDefault()

        try {
            await dispatch(
            sessionActions.login(
                'demo@aa.io',
                'password',
            )
        );
        } catch (err) {
            console.error("error: ", err)
        }

    };

    return (
            <form onSubmit={demoUserLogin} className='demo-form'>
                <button id='' className="demo-button" >
                    Demo User
                </button>
            </form>
    )
}

export default DemoUser;
