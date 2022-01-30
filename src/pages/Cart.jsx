import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div``
const Wrapper = styled.div`
direction: rtl;
padding: 20px;
${mobile({padding:"10px"})};
`
const Title = styled.h1`
font-family: kalameh;
font-weight: 500;
text-align: center;
`
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`
const TopButton = styled.button`
  padding: 10px;
  font-family:kalameh;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Bottom = styled.div`
display: flex;
justify-content: space-between;
  ${mobile({ flexDirection: "column" })};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
font-family: kalameh;
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;   
`

const Info = styled.div`
font-family:kalameh;
flex:3;
`
const Summary = styled.div`
font-family:kalameh;
flex:1;
border:0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height:50vh;
`

const Product = styled.div`
display:flex;
justify-content: space-between;
margin-bottom:10px;
${mobile({ flexDirection: "column" })};
`
const ProductDetail = styled.div`
flex:2;
display:flex;
`
const Image = styled.img`
width:200px;
`
const Details = styled.div`
padding:20px;
display:flex;
flex-direction:column;
justify-content: space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=> props.color};
`
const ProductSize = styled.span``
const PriceDetail = styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items:center;
justify-content: center;
`
const ProductAmountContainer = styled.div`
display:flex;
align-items:center;
margin-bottom:20px;
`
const ProductAmount = styled.div`
font-size: 24px;
margin:5px;
${mobile({ margin: "5px 15px" })};
`
const ProductPrice = styled.div`
font-size: 30px;
font-weight:200;
`

const Hr = styled.hr`
background-color: #eee;
border:none;
height: 1px;
margin-bottom: 10px;
`

const SummaryTitle = styled.h1`
font-weight:200;
`
const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content : space-between;
font-weight: ${props=>props.type === "total" && "800"};
font-size: ${props=>props.type === "total" && "24px"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
border: none;
color: white;
font-family:kalameh;
font-weight: 850;
font-size: 24px;
`

const Cart = () => {
  return (
      <Container>
          <Announcement />
          <Navbar />
            <Wrapper>
                <Title>سبد خرید شما</Title>
                <Top>
                    <TopButton>ادامه خرید</TopButton>
                    <TopTexts>  
                        <TopText>سبد خرید (2)</TopText>
                        <TopText>لیست علاقه مندی ها</TopText>
                    </TopTexts>
                    <TopButton type="filled">برو به پرداخت</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://images.unsplash.com/photo-1619452783467-1baf7b2cbe79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"/>
                                <Details>
                                    <ProductName><b>نام محصول: </b>شلوار پاما</ProductName>
                                    <ProductId><b>شناسه محصول: </b> 4568415</ProductId>
                                    <ProductColor color="black"/>
                                    <ProductSize><b>سایز: </b> XXL</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>۸۵۰,۰۰۰ تـومـان</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image src="https://images.unsplash.com/photo-1624972699570-81ce254b3141?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
                                <Details>
                                    <ProductName><b>نام محصول: </b>شلوار پاما</ProductName>
                                    <ProductId><b>شناسه محصول: </b> 4568415</ProductId>
                                    <ProductColor color="gray"/>
                                    <ProductSize><b>سایز: </b> XXL</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>۸۵۰,۰۰۰ تـومـان</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle >
                            خلاصه سفارش
                        </SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>مجموع:</SummaryItemText>
                            <SummaryItemText>۸۵۰,۰۰۰ تـومـان</SummaryItemText>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>هزینه ارسال:</SummaryItemText>
                            <SummaryItemText>۸۵,۰۰۰ تـومـان</SummaryItemText>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>تخفیف ارسال:</SummaryItemText>
                            <SummaryItemText>۸۵۰,۰۰۰ تـومـان</SummaryItemText>
                        </SummaryItem>
                        <SummaryItem  type="total">
                            <SummaryItemText>مجموع فاکتور:</SummaryItemText>
                            <SummaryItemText>۸۵۰,۰۰۰ تـومـان</SummaryItemText>
                        </SummaryItem>
                        <Button>پرداخت</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
          <Footer />
      </Container>

  )
};

export default Cart;
