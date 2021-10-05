import React from 'react'
import  ReactDOM  from 'react-dom'
import VideoChat from './VideoChat'
import {ContextProvider} from './SocketContext'
import {GlobalStyles} from './GlobalStyles'



ReactDOM.render(
<ContextProvider>
    <GlobalStyles/>
<VideoChat />
</ContextProvider>,
document.getElementById('root')
)


