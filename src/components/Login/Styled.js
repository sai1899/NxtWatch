import styled from 'styled-components'

const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => (props.outline ? '#ffffff' : '#000000')};
  background-color: ${props => (props.outline ? '#181818' : '#f9f9f9')};
  //   background-color: black;
`

export const FormContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 250px;
  background-color: ${props => (props.outline ? '#383838' : ' #ebebeb')};
  box-shadow: 5px #ffffff;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 90%;
    height: 300px;
  }
`

export const FormLogo = styled.img`
  height: 30px;
  width: 70px;
`

export const FormLogin = styled.button`
  background-color: #3b82f6;
  color: '#ffffff';
  border-radius: 10px;
  border-width: 0;
  padding: 5px;
  margin-top: 10px;
`

export const LoginFormInput = styled.input`
  padding: 3px;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const FormTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export default LoginContainer
