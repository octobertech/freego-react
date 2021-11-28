import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2.2rem 1rem;
  
`
export const Main = styled.main`
  flex: 1;
  align-items: baseline; 
  background-color: #ffffff;
  padding: 0 2rem;
  border-radius: 3px;
  max-width: 450px;
`


export const Header = styled.header`
    position: -webkit-sticky; 
    position: sticky;
    top: 0;
    padding: 0 10px;
    background-color: #ffffff;
    border-radius: 3px;
`

export const Footer = styled.footer`
    position: -webkit-sticky; 
    position: sticky;
    bottom: 0;
    padding: 10px;
    
`
export const SetContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  max-width: 500px;
  min-width: 360px;
`

export const Title = styled.h1`
  color: var(--text-color);
  margin-bottom: 3.2rem;
  text-align: center;
`

export const InputContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  overflow: auto;
  height: calc(100vh - 150px);
  width: 80%;
  padding-bottom: 70px;
  -webkit-backface-visibility: hidden;
 -moz-backface-visibility: hidden;
 -webkit-transform: translate3d(0, 0, 0);
 -moz-transform: translate3d(0, 0, 0);
 
`

export const DayInput = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 10px 0;
  font-size: 18px;
  justify-content: space-between;
  align-items: center;
`

export const Input = styled.input`
  display: flex;
  margin: 8px 0;
  padding: 1.6rem;
  background: var(--background-color);
  border: none;
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-radius: 5px;
  transition: all .2s ease-in-out;
  outline: none;
  &:focus {
    background: rgba(255,255,255,0.1);
    border: 2px solid rgba(255, 255, 255, 0.8);
  }
`
export const Select = styled.select`
background-color: hsl(0, 0%, 100%);
    border-color: hsl(0, 0%, 80%);
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
  height: 37px;
  color: #333;
  padding-left: 5px;
  font-size: 14px;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1  px;
  }
`;

export const Label = styled.label`
    margin-top: 0.3em;
	margin-bottom: 0;
	color: var(--text-color);
`;

export const AddButton = styled.button`
  padding: 1.6rem 2.4rem;
  background: var(--accent-color);
  transition: background .2s ease-in-out;
  outline: none;
  border: none;
  border-radius: 5px;
  margin: 1.2rem 0 0.8rem 0;
  width: 100%;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.8rem;
  &:hover, &:active{
    background: var(--accent-color-active);
  }
  &:disabled {
    color: #000;
    background: #999;
  }
`

export const Button = styled.button`
    appearance: button;
    -moz-appearance: button;
-webkit-appearance: button;
-webkit-border-fit:border !important;
  padding: 0.5rem 1rem 0.5rem 1rem;
  background: var(--accent-color-active);
  transition: background .2s ease-in-out;
  outline: none;
  border: solid 0px transparent;
  border-radius: 2px;
  margin: 0.8rem 0 0.8rem 0;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.3rem;
  color: #FFFFFF;
  &:hover, &:active{
    background: var(--accent-color);
  }
`

export const NavButton = styled.button`
    appearance: button;
    -moz-appearance: button;
-webkit-appearance: button;
-webkit-border-fit:border !important;
  padding: 1rem 1.4rem 1rem 1.4rem;
  background: transparent;
  transition: background .2s ease-in-out;
  outline: none;
  border: solid 1px var(--accent-color-active);
  border-radius: 2px;
  margin: 2.2rem 0 0.8rem 0;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.3rem;
  color: var(--accent-color);
  &:hover{
    background: var(--accent-color-active);
    color: #ffffff;
    border: solid 1px var(--accent-color-active);
  }
  &:active{
    background: var(--accent-color);
    color: #ffffff;
    border: solid 1px var(--accent-color-active);
  }
`

export const SmallButton = styled.button`
    appearance: button;
    -moz-appearance: button;
-webkit-appearance: button;
-webkit-border-fit:border !important;
  padding: 0.2rem 0.5rem 0.2rem 0.5rem;
  background: transparent;
  transition: background .2s ease-in-out;
  outline: none;
  border: solid 1px var(--accent-color-active);
  border-radius: 2px;
  margin-right: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.8rem;
  color: var(--accent-color);
  &:hover{
    background: var(--accent-color-active);
    color: #ffffff;
    border: solid 1px var(--accent-color-active);
  }
  &:active{
    background: var(--accent-color);
    color: #ffffff;
    border: solid 1px var(--accent-color-active);
  }
`


export const SetListContainer = styled.div`
  background: var(--list-container-background);
  padding: 3.2rem;
  border-radius: 5px;
  width: 100%;
`

export const EmptyListMessage = styled.div`
  color: #333;
  text-align: center;
`
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const ErrorMessage = styled.p`
color: var(--error-color);
font-size: 1.5rem;
margin: 1rem 0;
`

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  
  border-top: 2px solid var(--accent-color);
  border-right: 2px solid var(--accent-color);
  border-bottom: 2px solid var(--accent-color);
  border-left: 5px solid var(--accent-color-active);
  background: transparent;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const TopNav = styled.d

export const LogoText = styled.a`
    font-family: "Roboto", sans-serif !important;
    font-size: 2.7rem !important;
    background: var(--accent-color) !important;
    color: #FFFFFF !important;
    padding: 0.5rem 1rem 0.5rem 1rem !important;
    margin: 2rem 0 !important;
`

export const LogoDesc = styled.h2`
    font-size: 1.2rem;
    color: grey;
    margin: 5px 0;
`