import { Avatar, Button, Typography } from "antd";
import { styled } from "styled-components";
import { auth } from "../../firebase/config";

const UserInfoStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid rgba(82,38,83);

    .username{
        color: white;
        padding-left: 5px;
    }
`

function UserInfo(){
    return (
        <UserInfoStyled>
            <div>
                <Avatar></Avatar>
                <Typography.Text>Name</Typography.Text>
            </div>
            <Button className="username" ghost onClick={()=> auth.signOut()}>Đăng xuất</Button>
        </UserInfoStyled>
    );
}

export default UserInfo;