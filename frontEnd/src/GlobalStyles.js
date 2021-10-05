import { createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
    }

  body {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    background: black;
    color: white;
  }



  button {
    border: 0;
    display: inline-block;
    padding: 12px 24px;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 5px;
    cursor: pointer;
    background-color: #1064EA;
    color: #FFFFFF;
    
  }

`