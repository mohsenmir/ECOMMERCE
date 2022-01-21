import React from 'react';
import styled from 'styled-components';
import {Search} from '@material-ui/icons';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';

const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Left = styled.div`
  font-family: kalameh;
  flex: 1;
  display: flex;
  align-items: center;
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Input = styled.input`
  border: none;
`

const Logo = styled.h1`
  font-weight: bold;

`

const Center = styled.div`
  font-family: kalameh;
  text-align: center;
  font-size:20px;
  flex: 1;
`
const Right = styled.div`
  font-family: kalameh;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left:25px;
`

function Navbar() {
  return(
    <Container>
          <Wrapper>
          <Left>
            <Language>فارسی</Language>
            <SearchContainer>
              <Input/>
              <Search style={{color:'gray',fontSize:16}}/>
            </SearchContainer>
            </Left>
          <Center>
            <Logo>.صبا گالری.</Logo>
          </Center>
          <Right>
            <MenuItem>ثبت نام</MenuItem>
            <MenuItem>ورود</MenuItem>
            <MenuItem>
            <Badge badgeContent={4} color="primary">
             <ShoppingCartOutlinedIcon color="action" />
             </Badge>
            </MenuItem>
          </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar;
