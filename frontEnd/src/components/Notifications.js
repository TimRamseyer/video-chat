import React, { useContext } from "react";
import Sound from 'react-sound'
import { SocketContext } from "../SocketContext";
import { SubHeading } from "../styles";

const Notifications =() =>{
const {answerCall, call, callAccepted} = useContext(SocketContext)

console.log("The Call", call)
    return(
        
       <>
       {call.isReceivingCall && !callAccepted && (
           <>
           <audio src="phone.mp3" autoPlay loop>
            Your browser does not support the
            <code>audio</code> element.
    </audio>
          {/* <Sound
           url="phone.mp3"
           playStatus={Sound.status.PLAYING}
           loop="true"
          />*/}
           <div style={{display:"flex", justifyContent: "center"}}>
               {console.log("I'm calling a user", call)}

            <SubHeading style={{paddingTop:"8px"}}>{call.name} is calling:&nbsp;&nbsp; </SubHeading>
            <button onClick={answerCall}>Answer Call</button>
           </div>
           </>
       )}
       </>
    )
}

export default Notifications