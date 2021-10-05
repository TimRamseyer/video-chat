import styled from "styled-components";

export const Section =  styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column
`

export const Header = styled.header`
    width:100%;
    background: black;
    color: white;
    border-bottom: 1px solid white;
    text-align: center;
    padding: 20px 0px;
`
export const Main =  styled.main`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-image: url("background.jpg");
`

export const VideoContainer = styled.div`
    padding: 2em 0em;
`
export const OptionsContainer = styled.div`
    border: 1px solid white;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 6px;
    width: 600px;
    margin: 35px 0;
    padding: 0;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column
`

export const Input = styled.div`
padding: 1em;
`

export const FlexCenter = styled.div`
    display: flex;
    align-self: center;
`
export const SubHeading = styled.h2`
font-size: 1.25rem;
font-weight: 500;
line-height: 1.6;
letter-spacing: 0.0075em;
`
export const Grid = styled.div`
display: grid;
`
export const InputField = styled.input`
margin-bottom: .5em;
font-size:14pt;
` 
export const TextButton = styled.button`
border: 0;
    display: inline-block;
    padding: 18px 24px;
    font-size: 18px;
    border-radius: 4px;
    margin-top: 5px;
    cursor: pointer;
    background-color: #1064EA;
    color: #FFFFFF;
` 