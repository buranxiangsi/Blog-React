import styled from 'styled-components';
import {
  Link
} from "react-router-dom";

const MainWrapper = styled.main`
width: 80%;
margin: auto;
margin-top: 60px;
display: flex;
flex-flow: row;
padding:0 100px;
max-height: 90%;
.LingBlog-aside{
    display: flex;
    box-shadow: 0px 0px 2px 2px #f4f4f4;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 250px;
    margin-right: 20px;
    .asideContent{
        margin: 0 30px;
        .aside-icon{
            margin-top: 40px;
            border: 1px solid #fff;
            border-radius: 50%;
            box-shadow: 0px 0px 2px 2px #f4f4f4;
            width: 100px;
            height: 100px;
            text-align: center;
            margin-bottom: 40px;
        }
        .aside-name{
            padding-bottom: 10px;
        }
        .aside-year{
            padding-bottom: 10px;
        }
        .aside-phone{
            padding-bottom: 10px;
        }
    }
    
}
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
            <aside className="LingBlog-aside">
            <div className="asideContent">
                <div className="aside-icon">ling</div>
                <div className="aside-name">姓 名:  罗玲玉</div>
                <div className="aside-year">年 纪：26</div>
                <div className="aside-phone">联系方式</div>
            </div>
            
            </aside>
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