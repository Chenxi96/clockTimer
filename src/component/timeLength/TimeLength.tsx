import React from "react";
import './time.css';


const TimeLength = (props: any) => {
    /* This is where the setting for the timer goes */
    const {breakTime, sessionTime, setBreakTime, setSessionTime} = props

    return(
        <>
        <div className="break-Session">
        <div className="breakLength">
            <h3 id='break-label'>Break Length</h3>
            <div className="breakContainer">
                <div id="break-increment" onClick={() => {
                    if(breakTime < 60){
                        setBreakTime(breakTime + 1)
                    }
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                    </svg>
                </div>
                <div id="break-length">
                {breakTime}
                </div>
                <div id="break-decrement" onClick={() => {
                    if(breakTime > 1) {
                        setBreakTime(breakTime - 1)
                    }
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                    </svg>
                </div>
            </div>
        </div>
        <div className="sessionLength">
            <h3 id="session-label">Session Length</h3>
            <div className="breakContainer">
                <div id="session-increment" onClick={() => {
                    if(sessionTime < 60){
                        setSessionTime(sessionTime + 1)
                    }
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                    </svg>
                </div>
                <div id="session-length">
                    {sessionTime}
                </div>
                <div id="session-decrement" onClick={() => {
                    if(sessionTime > 1) {
                        setSessionTime(sessionTime - 1)
                    }
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                    </svg>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default TimeLength;