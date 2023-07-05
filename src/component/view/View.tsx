import { useEffect, useState } from "react";
import './views.css'

export default function View( props: any ) {
    const {sessionTime, breakTime, setSessionTime, setBreakTime } = props;
    const [isSession, setIsSession] = useState('Session');
    const [pause, setPause] = useState<boolean>(true)
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    
    useEffect(() => {
        const x = document.getElementById('beep');


        const timer = setInterval(() => {
            console.log(seconds)
            if(!pause){
                setSeconds(seconds - 1)
                if(seconds <= 0) {
                    setMinutes(minutes - 1);
                    console.log(minutes)
                    setSeconds(59);
                }
                
                if(minutes <= 0 && seconds <= 0 && isSession === 'Session') {
                    console.log('break')
                    setMinutes(breakTime);
                    setSeconds(0);
                    setIsSession('Break');
                    (x as HTMLAudioElement).play();
                } 
                
                if(minutes <= 0 && seconds <= 0 && isSession === 'Break') {
                    console.log('session')
                    setMinutes(sessionTime);
                    setSeconds(0);
                    setIsSession('Session');
                    (x as HTMLAudioElement).play();
                } 
            } 
        }, 1000)

        const timer1 = setInterval(() => {
            if(pause) {
                setMinutes(sessionTime)
            }
        })
        
        document.getElementById('start_stop')!.addEventListener('click', function() {
            if(!pause) {
                setPause(true)
            } else {
                setPause(false)
            }

        });


        document.getElementById('reset')!.addEventListener('click', function() {
            setIsSession('Session');
            setSessionTime(25);
            setBreakTime(5);
            setMinutes(sessionTime);
            setSeconds(0);
            setPause(true);
            (x as HTMLAudioElement).load();
        });

        return () => {
            clearInterval(timer)
            clearInterval(timer1)
        }

    }, [pause, setPause, setMinutes, setSeconds, minutes, seconds, sessionTime, breakTime, setIsSession, setBreakTime, setSessionTime, isSession])

    function parseSec() {
        if(seconds < 10) {
            return `0${seconds}`
        } else {
            return `${seconds}`
        }
    }

    function parseMin() {
        if(minutes < 10) {
            return `0${minutes}`
        } else {
            return `${minutes}`
        }
    }

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
                            {`${parseMin()}:${parseSec()}`}
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