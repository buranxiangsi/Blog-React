import styled from "styled-components"

const AsideWrapper=styled.aside`
   display: flex;
   flex-grow: 1;
   justify-content: center;
   align-items: flex-start;
   max-width: 250px;
    margin-right: 20px;
    flex-flow: column;
    box-shadow: 0px 0px 1px 1px #f4f4f4;
   .asideContent{
       width: 100%;
       margin: 0 30px;
       li{
           margin-bottom: 15px;
       }
       .aside-icon{
           margin: 40px 50px;
           width: 100px;
           height: 100px;
           box-shadow: 0px 0px 2px 2px #f4f4f4;
           border-radius: 50%;
           text-align: center;
       }
   }
`

function IndexMainAside(){
    return (
        <AsideWrapper >
            <ul className="asideContent">
                <li className="aside-icon">ling</li>
                <li className="aside-name">姓 名:  罗玲玉</li>
                <li className="aside-year">年 纪：26</li>
                <li className="aside-phone">联系方式</li>
            </ul>
            
        </AsideWrapper>
    )

}

export default IndexMainAside