import styled from "styled-components"
import {
    Link
  } from "react-router-dom";


const SectionWrapper = styled.section`
    box-shadow: 0px 0px 1px 1px #eee;
    flex-grow: 10;
    margin-left: 30px;
    max-width: 100%;
    ol{
        margin: 10px 40px;
        counter-reset: section;             
        list-style-type: none;
        li::before {
            counter-increment: section;  
            content:  counter(section) ":"; 
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
`

function IndexMainSection() {
    return (
        <SectionWrapper>
            <ol>
                <li>
                    <Link className="article-list" to="">博客目录</Link>
                    <span className="article-date">2021-9-25</span>
                </li>
            </ol>
        </SectionWrapper>
    )

}

export default IndexMainSection