import React, { useContext, useState, useEffect } from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { OptionsContainer, Form, Input, FlexCenter, SubHeading, Grid, InputField, TextButton } from "../styles";
import { SocketContext } from "../SocketContext";
import {MdPhone} from 'react-icons/md'

const Options =({children}) =>{
    const {me, callAccepted, name, setName, callEnded, leaveCall, callUser} = useContext(SocketContext)
    const [idToCall, setIdToCall] = useState('')

    useEffect(()=>{
        console.log("The ID to call", idToCall)
    },[idToCall])
    return(
        <OptionsContainer>
            <Form noValidate autoComplete="off">
                <FlexCenter>
                    <Input>
<SubHeading>Account Info</SubHeading>
<Grid>
<InputField type="text" name="Name" placeholder="Enter your name" value={name} onChange={(e)=> setName(e.target.value)}></InputField>
<CopyToClipboard text={me}>
    <TextButton type='button'>
Copy Your ID
    </TextButton>
    </CopyToClipboard>
    </Grid>
</Input>
<Input>
    <SubHeading>Make a Call</SubHeading>
    <Grid>
<InputField type="text" label="ID to Call" name="ID to Call" placeholder="Paste Id to Call" value={idToCall} onChange={(e)=> setIdToCall(e.target.value)}></InputField>
{callAccepted && !callEnded ?(
<button type='button' onClick={leaveCall}>Hang Up</button>
):(
<button type='button' onClick={()=> callUser(idToCall)}><MdPhone size={30}/></button>
)}
</Grid>
</Input>
</FlexCenter>
            </Form>
            {children}
        </OptionsContainer>
    )
}

export default Options