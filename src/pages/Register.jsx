import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
width: 100vw;
height: 100vh;
background: 
linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),
url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80') center;
display:flex;
align-items:center;
justify-content:center;
direction:rtl;
background-size: cover;

`
const Wrapper = styled.div`
width: 40%;
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
flex-wrap:wrap;
`
const Input = styled.input`
flex:1;
min-width:40%;
margin: 20px 10px 0px 0px;
font-family:kalameh;
padding: 10px;
`
const Aggreement = styled.span`
font-family: kalameh;
margin: 10px 10px;

`
const Button = styled.button`
width: 100%;
border: none;
padding: 15px 20px;
font-family: kalameh;
font-weight: 800;
font-size:20px;
background-color: #fdcb6e;
cursor: pointer;
&:hover{
    background-color: #ffeaa7
}
`


const Register = () => {
  return (
      <Container>
          <Wrapper>
              <Title>ایجاد حساب کاربری</Title>
                <Form>
                    <Input placeholder="نام" />
                    <Input placeholder="نام خانوادگی" />
                    <Input placeholder="نام کاربری" />
                    <Input placeholder="ایمیل" />
                    <Input placeholder="رمزعبور" />
                    <Input placeholder="تکرار رمز عبور" />
                    <Aggreement>
                    با ورود و یا ثبت نام در صباگالری شما <b style={{fontWeight:850}}> قوانین حریم خصوصی </b>شرایط و قوانین استفاده از سرویس های سایت صبا گالری و  آن را می‌پذیرید.
                    </Aggreement>
                    <Button>ثبت نام در صباگالری</Button>
                </Form>
          </Wrapper>
      </Container> 
      )
};

export default Register;
