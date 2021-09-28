import styled from 'styled-components';
import {
  Link
} from "react-router-dom";

const HeaderWrapper= styled.header`
display: inline-flex;
justify-content: center;
align-items: center;
width: 100%;
margin: auto;
padding: 15px;
`
const HeaderTop =  styled.div`
padding-left: 50px;
`
const HeaderNav = styled.nav`
width: 100%;
ul{
  display: flex;
  justify-content: flex-end;
}
>ul>li{
  padding-right: 50px;
  width:100px;
}
`

export default function Index(){
    return (
        <HeaderWrapper>
            <HeaderTop>Ling</HeaderTop>
            <HeaderNav>
                <ul>
                    <li>
                      <Link to="">简介</Link>
                    </li>
                    <li>
                      <Link to="">关注</Link>
                    </li>
                </ul>
            </HeaderNav>
        </HeaderWrapper>
      )
}