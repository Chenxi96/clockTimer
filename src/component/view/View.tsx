import { useEffect, useState } from "react";
import './views.css'

export default function View( props: any ) {
    const {sessionTime, breakTime } = props;
    const [isSession, setIsSession] = useState('Session');

    
    useEffect(() => {
        let pause = true;
        let minutes = sessionTime;
        let seconds = 0;
        console.log(minutes)

        function parseMin() {
            if(minutes < 10) {
                return `0${minutes}`
            } else {
                return `${minutes}`
            }
        }

        function parseSec() {
            if(seconds < 10) {
                return `0${seconds}`
            } else {
                return `${seconds}`
            }
        }
        
        document.getElementById('time-left')!.innerHTML = `${parseMin()}:${parseSec()}`
        const timer = setInterval(() => {
            document.getElementById('time-left')!.innerHTML = `${parseMin()}:${parseSec()}`
            if(!pause){
                console.log(minutes)
                seconds--
                if(seconds < 0) {
                    minutes--
                    console.log(minutes)
                    seconds = 59;
                }
                
                if(minutes < 0) {
                    console.log('log3')
                    minutes = breakTime;
                    seconds = 0;
                    setIsSession('Break')
                }
            } 
        }, 1000)
        

        document.getElementById('stop')!.addEventListener('click', function() {
            pause = true
        })

        document.getElementById('start')!.addEventListener('click', function() {
            pause = false
        })

        return () => {
            clearInterval(timer)
        }

    }, [sessionTime, breakTime])

    /* this is the screen would be */
    return (
        <>  
            <div className="wrapper">
                <div className="view">
                    <div>
                        <div id="timer-label">
                            {isSession}
                        </div>
                        <div id="time-left">
                        </div>
                    </div>
                    <button id="start">Start</button>
                    <button id='stop'>Pause</button>
                </div>
            </div>
            
        </>
    )
}