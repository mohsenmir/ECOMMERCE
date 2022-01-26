import { Send } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;
`
const Title = styled.h1`
font-family: kalameh;
font-weight: 850;
font-size:70px;
margin-bottom:20px;
`
const Desc = styled.div`
font-family: kalameh;
font-size:24px;
font-weight:300;
margin-bottom:20px;
`
const InputContainer = styled.div`
font-family: kalameh;
width:50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
`
const Input = styled.input`
font-family: kalameh;
border: none;
flex:8;
padding-left:20px;
`

const Button = styled.button`
font-family: kalameh;
flex:1;
font-weight:350;
border: none;
background-color: teal;
color: white;

`


const Newsletter = () => {
  return( 
  <Container>
      <Title>خبرنامه</Title>
      <Desc>!از تازه ترین تخفیفات و جشنواره های فروش با خبر شوید</Desc>
      <InputContainer>
        <Input placeholder="ایمیل خود را وارد کنید"/>
        <Button>
            <Send/>
        </Button>
      </InputContainer>
  </Container>
  )
};

export default Newsletter;