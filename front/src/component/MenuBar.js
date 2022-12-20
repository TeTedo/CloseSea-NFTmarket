import React from 'react'
import { useNavigate } from 'react-router-dom';
import { MenuContent,MenuText,MenuTitle,TextContent ,UserContent,UserText} from './MenuComponent'

function MenuBar(props) {
    const navigate = useNavigate();
    console.log(props.isLogin);
  return (
    <div >
        <MenuContent>
            <MenuTitle onClick={()=>{navigate("/")}}>
                Close Sea
            </MenuTitle>
            <MenuText>
                <TextContent>Shop</TextContent>
                <TextContent>Swap</TextContent>
            </MenuText>
            <UserContent>
                {
                props.isLogin ?
                <UserText>
                    MyPage
                </UserText>
                :
                <UserText onClick={()=>{navigate("/Login")}}>
                    Login
                </UserText>
                }
            </UserContent>
        </MenuContent>
    </div>
  )
}

export default MenuBar
