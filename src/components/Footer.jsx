import { Email, Instagram, LocationOn, MailOutline, Phone, Telegram, Twitter } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
display: flex;
background-color:#171717;
${mobile({flexDirection:"column"})};
`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo = styled.h1`
font-family:kalameh;
font-weight:700;
color: white;
direction: rtl; 
padding-right:20px

`
const Title = styled.h3`
    margin-bottom: 30px;
    color: white;
    font-family:kalameh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display: flex;
    flex-wrap: wrap;
    color: white;
    font-family:kalameh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ListItem = styled.li`
    width: 50%;
    color: white;
    font-family:kalameh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom:10px;
`

const Desc = styled.p`
    font-family: kalameh;
    color: white;
    direction:rtl;
    margin: 20px 0px;
    padding-right:20px
`
const SocialContainer = styled.div`
    display: flex;
    direction:rtl
`
const SocialIcon = styled.div`
    width:40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=> props.color};
    align-items: center;
    justify-content: center;
    margin-right:20px
`

const Center = styled.div`
flex: 1;
padding:20px;
${mobile({display:"none"})};
`
const Right = styled.div`
flex: 1;
padding:20px;
`
const ContactItem = styled.div`
color:white;
font-family: kalameh;
direction:rtl;
margin-bottom: 20px;
display:flex;
align-items:center;
`
const Footer = () => {
  return (
  <Container>
      <Left>
      
        <Title style={{fontWeight:850, fontSize:30}}>ارتباط با ما</Title>
        <ContactItem>
            <LocationOn  color='white'/>
            شیراز - ستارخان - کوچه ۱۹ - مجتمع تجاری امیر
        </ContactItem>
        <ContactItem>
            <Phone color='white'/>
            ۰۵۲۰ ۷۹۰ ۹۲۱ ۹۸+ 
        </ContactItem>
        <ContactItem style={{fontSize:20}}>
            <MailOutline color='white'/>
            contact@saba.ir
        </ContactItem>
      </Left>
      <Center>
            <Title style={{fontWeight:850, fontSize:30}}>لینک های به درد بخور</Title>
            <List>
                <ListItem>صفحه اصلی</ListItem>
                <ListItem>سبد خرید</ListItem>
                <ListItem>حساب کاربری</ListItem>
                <ListItem>لیست علاقه مندی ها</ListItem>
                <ListItem>پیگیری سفارشات</ListItem>
                <ListItem>شال</ListItem>
                <ListItem>روسری</ListItem>
                <ListItem>کُت</ListItem>
                <ListItem>ژاکت</ListItem>
                <ListItem>کلاه</ListItem>

            </List>
      </Center>
      <Right>
      <Logo>.صبا گالری.</Logo>
        <Desc>
        فروشگاه اینترنتی دایان شاپ، راهکاری آسان برای خریدهای آنلاین شماست. پرداخت در محل، ارائه درگاه‌های امن، پیگیری سریع سفارشات، تضمین سلامت و کیفیت کالا از جمله کلیدی‌ترین ویژگی‌های این فروشگاه اینترنتی است. کالاهای دایان شاپ در 6 دسته بندی اصلی شامل پوشاک مردانه، زنانه، بچگانه، کالای دیجیتال، اکسسوری و لوازم منزل طبقه‌بندی می‌شوند.
        </Desc>
        <SocialContainer>
            <SocialIcon color="">
                <Twitter/>
            </SocialIcon>
            <SocialIcon color="">
                <Instagram/>
            </SocialIcon>
            <SocialIcon color="">
                <Telegram/>
            </SocialIcon>
        </SocialContainer>
      </Right>
  </Container>
  )
};

export default Footer;
