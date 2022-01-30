import styled from "styled-components";
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { mobile } from "../responsive";

const Container = styled.div`

`
const Title = styled.h1`
margin: 20px;
font-size:20px;
font-weight:800;
font-family:kalameh;
direction:rtl;
display: flex;
  justify-content: center;
`
const FilterContainer = styled.div`
display: flex;
direction:rtl;
font-size:20px;
font-weight:600;
font-family:kalameh;
`
const Filter = styled.div`
margin:20px;
${mobile({margin:"0px 20px" , display:"flex", flexDirection:"column"})};
`

const FilterText = styled.span`
font-size:20px;
font-weight:600;
font-family:kalameh;
margin-right:20px;
`

const Select = styled.select`
padding: 10px;
margin-right:20px;
font-size:20px;
font-weight:600;
font-family:kalameh;
${mobile({margin:"10px 0px"})};
`
const Option = styled.option`
padding: 20px;
margin-left:20px;
font-size:20px;
font-weight:600;
font-family:kalameh;
`

const ProductList = () => {
  return (
  <div>
      <Container>
      <Announcement />
      <Navbar />
      <Title>شال</Title>
      <FilterContainer>
        <Filter>
            <FilterText>فیلتر محصولات:</FilterText>
            <Select>
                <Option disabled selected>
                    رنگ
                </Option>
                <Option>سفید</Option>
                <Option>آبی</Option>
                <Option>مشکی</Option>
                <Option>صورتی</Option>
                <Option>قرمز</Option>
            </Select>
            <Select>
                <Option disabled selected>
                    سایز
                </Option>
                <Option>Small</Option>
                <Option>Medium</Option>
                <Option>Large</Option>
                <Option>X-Large</Option>
                <Option>XX-Large</Option>
            </Select>
        </Filter>
        <Filter>
        <FilterText>مرتب سازی بر اساس:</FilterText>
        <Select>
                <Option selected>
                    جدیدترین    
                </Option>
                <Option>ارزانترین</Option>
                <Option>گرانترین</Option>
            </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
      </Container>
  </div>
  )
};

export default ProductList;
