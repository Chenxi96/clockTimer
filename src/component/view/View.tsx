import { useEffect, useState } from "react";
import './views.css'

export default function View( props: any ) {
    const {sessionTime, breakTime, setSessionTime, setBreakTime } = props;
    const [isSession, setIsSession] = useState('Session');

    
    useEffect(() => {
        let pause = true;
        let minutes = sessionTime;
        let seconds = 0;

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
            
            if(!pause){
                seconds--
                if(seconds < 0) {
                    minutes--
                    seconds = 59;
                }
                
                if(minutes < 0 && isSession === 'Session') {
                    minutes = breakTime;
                    seconds = 0;
                    setIsSession('Break')
                } 
                
                if(minutes < 0 && isSession === 'Break') {
                    minutes = sessionTime;
                    seconds = 0;
                    setIsSession('Session')
                } 
            }

            document.getElementById('time-left')!.innerHTML = `${parseMin()}:${parseSec()}`

        }, 1000)
        
        document.getElementById('start_stop')!.addEventListener('click', function() {
            pause ? pause = false : pause = true;
        });


        document.getElementById('reset')!.addEventListener('click', function() {
            setIsSession('Session')
            setSessionTime(25)
            setBreakTime(5)
            minutes = sessionTime
            seconds = 0
        });

        return () => {
            clearInterval(timer)
        }

    }, [sessionTime, breakTime, setIsSession, setBreakTime, setSessionTime, isSession])

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
                    <button id="start_stop">Start/Stop</button>
                    <button id="reset">Reset</button>
                    <audio 
                        id="beep" 
                        preload="auto" 
                        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
                </div>
            </div>
            
        </>
    )
}