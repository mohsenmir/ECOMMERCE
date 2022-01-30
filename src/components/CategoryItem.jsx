import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh; 
  direction: rtl;
  position: relative;
`
const Image = styled.img`
  width:100%;
  height: 100%;
  object-fit: cover;
  ${mobile({height:"20vh"})};
`;
const Info = styled.div`
font-family: kalameh;
direction: right;
position: absolute;
top: 0;
left:0;
width:100%;
height: 100%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`;
const Title = styled.h1`
font-family: kalameh;
color:white;
margin-bottom:20px;
font-weight:bold;

`;
const Button = styled.button`
font-family: kalameh;
border: none;
padding:10px;
font-size:20px;
font-weight:bold;
background-color: white;
color:gray;
cursor: pointer;
font-weight:600;
`;

const CategoryItem = ({item}) => {
  return (
   <Container>
          <Image src={item.img}/>
       <Info>
         <Title>{item.title}</Title>
         <Button>بیشتر...</Button>
       </Info>
  </Container>
)
};

export default CategoryItem;
