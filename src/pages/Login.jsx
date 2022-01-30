import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
width: 100vw;
height: 100vh;
background: 
linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),
url('https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80') center;
display:flex;
align-items:center;
justify-content:center;
direction:rtl;
background-size: cover;
`
const Wrapper = styled.div`
width: 25%;
padding: 20px;
background-color: white;
${mobile({width:"75%"})};
`
const Title = styled.h1`
font-size:24px;
font-weight:600;
font-family:kalameh;
`
const Form = styled.form`
display:flex;
flex-direction:column;
`

const Input = styled.input`
flex:1;
min-width:40%;
margin: 10px 0px;
font-family:kalameh;
padding: 10px;
`
const Aggreement = styled.span`
font-family: kalameh;
margin: 10px 10px;

`
const Button = styled.button`
border: none;
padding: 15px 20px;
font-family: kalameh;
font-weight: 800;
font-size:20px;
margin: 10px 0px;
margin-bottom: 10px;
background-color: #2d3436;
cursor: pointer;
color: white;
&:hover{
    background-color: #636e72
}
`
const Link = styled.a`
margin: 5px 0px;
font-family: kalameh;
text-decoration: underline;
font-weight:750;
cursor: pointer;
`
 
const Login = () => {
  return (
    <Container>
    <Wrapper>
        <Title>ورود به حساب کاربری</Title>
          <Form>
              <Input placeholder="ایمیل" />
              <Input placeholder="رمزعبور" />
              <Button>ورود به صباگالری</Button>
              <Link>بازیابی رمزعبور</Link>
              <Link>ایجاد حساب کاربری</Link>
          </Form>
    </Wrapper>
</Container> 
      )
};

export default Login;
