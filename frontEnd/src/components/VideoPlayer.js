import React, {useContext} from "react";
import { SocketContext } from "../SocketContext";
import { VideoContainer } from "../styles";

const VideoPlayer =() =>{
    const {name, callAccepted, myVideo, userVideo, callEnded, stream, call} = useContext(SocketContext)
    return(
        <>
            {/* Our Video */}
        {stream  &&(
            <VideoContainer>
                
            <h3>{name || 'Name'}</h3>
            <video playsInline muted ref={myVideo} autoPlay />
            </VideoContainer>
        )}

            {/* Other Video */}
    {callAccepted && !callEnded && (
        <div>
        <h3>{call.name || 'Caller'}</h3>
        <video playsInline ref={userVideo} autoPlay controls />
        </div>
    )}

           
        </>
    )
}

export default VideoPlayer