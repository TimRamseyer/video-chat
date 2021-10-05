import React from "react";
import VideoPlayer from "./components/VideoPlayer";
import Notifications from "./components/Notifications";
import Options from "./components/Options";
import {Section, Header, Main} from './styles' 
const VideoChat = () =>{
    return (
        <Section>
            <Header>
            <h1>Video Chat App</h1>
            </Header>
            <Main>
        <VideoPlayer />
        <Options>
            <Notifications />
        </Options>
</Main>
        </Section>
    )
}

export default VideoChat