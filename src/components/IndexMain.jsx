import styled from 'styled-components';

import IndexMainAside from './IndexMainAside';
import IndexMainSection from './IndexMainSection';

const MainWrapper = styled.main`
    width: 80%;
    margin: auto;
    margin-top: 60px;
    display: flex;
    flex-flow: row;
    padding:0 100px;
    max-height: 90%;

`


function IndexMain(){
    return (
        <MainWrapper>
            <IndexMainAside />
            <IndexMainSection />
        </MainWrapper>
    )

}

export default IndexMain