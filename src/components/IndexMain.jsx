import styled from 'styled-components';
import {
  Link
} from "react-router-dom";
import IndexMainAside from './IndexMainAside';

const MainWrapper = styled.main`
width: 80%;
margin: auto;
margin-top: 60px;
display: flex;
flex-flow: row;
padding:0 100px;
max-height: 90%;
.LingBlog-section{
    box-shadow: 0px 0px 1px 1px #eee;
    flex-grow: 3;
    margin-left: 30px;
    max-width: 70%;
    ol{
        margin: 10px 40px;
        counter-reset: section;             
        list-style-type: none;
        li::before {
            counter-increment: section;  
            content:  counter(section) ": "; 
            flex-grow: 0.5;

        }
        li{
            padding: 4px 4px;
            display: flex;
            justify-content: space-between;
            .article-list{
                flex-grow: 16;
            }
            .article-data{
                flex-grow: 1;
                color: slategrey;
            }
        }
    
    }
}


`


function IndexMain(){
    return (
        <MainWrapper>
            <IndexMainAside />
            <section className="LingBlog-section">
                <ol>
                    <li>
                        <Link className="article-list" to="">博客目录</Link>
                        <span className="article-date">2021-9-25</span>
                    </li>
                </ol>
            </section>
    </MainWrapper>
    )

}

export default IndexMain