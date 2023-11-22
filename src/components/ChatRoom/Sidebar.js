import { Col, Row } from "antd";
import UserInfo from "./UserInfo";
import RoomList from "./RoomList";
import { styled } from "styled-components";

const SidebarStyle = styled.div`
    background: #09539D;
    color: white;
    height: 100vh;
`

export default function Sidebar() {
    return (
        <SidebarStyle>
            <Row>
                <Col span={24}><UserInfo/></Col>
                <Col span={24}><RoomList/></Col>
            </Row>
        </SidebarStyle>
    );
}