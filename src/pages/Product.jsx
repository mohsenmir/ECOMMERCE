import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { mobile } from '../responsive';


const Container = styled.div`
`
const Wrapper = styled.div`
padding: 50px;
display:flex;
${mobile({padding:"10px",flexDirection:"column"})};
`
const ImgContainer = styled.div`
flex:1;
`
const Image = styled.img`
width:100%;
height:90vh;
object-fit:cover;
${mobile({height:"40vh"})};
`
const InfoContainer = styled.div`
flex:1;
padding: 0px 50px;
direction:rtl;
${mobile({padding:"10px"})};
`
const Title = styled.h1`
font-weight:700;
font-family:kalameh;
`
const Desc = styled.p`
margin: 20px 0px;
font-family:kalameh;
`
const Price = styled.span`
font-family:kalameh;
font-weight: 500;
font-size:50px;
`
const FilterContainer = styled.div`
width: 50%;
margin: 30px 0px;
display:flex;
justify-content: space-between;
${mobile({width:"100%"})};
`
const Filter = styled.div`
display:flex;
align-items:center;
`
const FilterTitle = styled.span`
font-size:20px;
font-weight:600;
font-family:kalameh;
`
const FilterColor = styled.div`
width:20px;
height:20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin:0px 5px;
cursor: pointer;
`
const FilterSize = styled.select`
margin-right:10px;
padding:5px;
`
const FilterSizeOption = styled.option`

`
const AddContainer = styled.div`
width:50%;
display:flex;
align-items:center;
justify-content: space-between;
${mobile({width:"100%"})};
`
const AmountContainer = styled.div`
display:flex;
align-items:center;
font-weight:700;
`
const Amount = styled.span`
font-family:kalameh;
width:30px;
height:30px;
border-radius: 10px;
border: 1px solid teal;
display:flex;
align-items:center;
justify-content: center;
margin: 0px 5px;
`
const Button = styled.button`
padding: 15px;
border: 1.5px solid teal;
background-color: white;
cursor: pointer;
font-family: kalameh;
font-weight: 700;
&:hover{
    background-color: #f8f4f4
}
`

const Product = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
            <InfoContainer>
                <Title>
                شلوار مردانه مدل قواصی
                </Title>
                <Desc>
                امروزه اینگونه شلوار ها مورد استقبال فراوان خریداران قرار گرفته و به دلیل فرم زیبا و راسته ی آراسته ای که دارند ، در رده ی پر فروش ترین شلوار ها ، قرار دارند، لذا از دمپای پاکتی نیز برخوردار میباشد  
                </Desc>
                <Price>۳۹۹,۰۰۰ تـومـان</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>رنگ</FilterTitle>
                            <FilterColor color="blue"/>
                            <FilterColor color="red"/>
                            <FilterColor color="black"/>
                            <FilterColor color="lightgray"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>سایز</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>Medium</FilterSizeOption>
                                <FilterSizeOption>Large</FilterSizeOption>
                                <FilterSizeOption>X-Large</FilterSizeOption>
                                <FilterSizeOption>XX-Large</FilterSizeOption>
                            </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Add />
                        <Amount>1</Amount>
                        <Remove />
                    </AmountContainer>
                    <Button>افزودن به سبد خرید</Button>
                </AddContainer>
            </InfoContainer>
            <ImgContainer>
                <Image src="https://images.unsplash.com/photo-1619452783467-1baf7b2cbe79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"/>
            </ImgContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
    )
};

export default Product;
