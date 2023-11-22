import { Avatar, Button, Form, Input, Tooltip } from "antd";
import { styled } from "styled-components";
import { UserAddOutlined } from "@ant-design/icons";
import MessageItem from "./MessageItem";

const ChatWindowStyled = styled.div`
  height: 100vh;
`;

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
  align-items: center;
  border-bottom: 1px solid rgb(230, 230, 230);

  .header_info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .header_title {
    margin: 0;
    font-weight: bold;
  }

  .header_description {
    font-size: 12px;
  }
`;

const ButtonGroupStyled = styled.div`
  display: flex;
  align-items: center;
`;

const ContentStyled = styled.div`
  height: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  padding: 11px;
  justify-content: flex-end;
`;

const FormStyled = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 2px 2px 0;
  border: 1px solid rgb(230, 230, 230);
  border-darius: 2px;

  .ant-form-item {
    flex: 1;
    margin: 0;
  }
`;

const MessageListStyled = styled.div`
  max-height: 100%;
  overflow-y: auto;
`;
export default function ChatWindow() {
  return (
    <ChatWindowStyled>
      <HeaderStyled>
        <div className="header_info">
          <p className="header_title">Room 1</p>
          <span className="header_description">Đây là room 1</span>
        </div>
        <ButtonGroupStyled>
          <Button icon={<UserAddOutlined />} type="text">
            Mời
          </Button>
          <Avatar.Group size="small" maxCount={2}>
            <Tooltip title="A">
              <Avatar>A</Avatar>
            </Tooltip>
            <Tooltip title="B">
              <Avatar>B</Avatar>
            </Tooltip>
            <Tooltip title="C">
              <Avatar>C</Avatar>
            </Tooltip>
            <Tooltip title="D">
              <Avatar>D</Avatar>
            </Tooltip>
          </Avatar.Group>
        </ButtonGroupStyled>
      </HeaderStyled>

      <ContentStyled>
        <MessageListStyled>
          <MessageItem
            text={"Xin chào"}
            photoURL={null}
            displayName={"Nguyen A"}
            createAt={123213}
          />
          <MessageItem
            text={"Xin chào"}
            photoURL={null}
            displayName={"Nguyen A"}
            createAt={123213}
          />
          <MessageItem
            text={"Xin chào"}
            photoURL={null}
            displayName={"Nguyen A"}
            createAt={123213}
          />
          <MessageItem
            text={"Xin chào"}
            photoURL={null}
            displayName={"Nguyen A"}
            createAt={123213}
          />
          <MessageItem
            text={"Xin chào"}
            photoURL={null}
            displayName={"Nguyen A"}
            createAt={123213}
          />
          <MessageItem
            text={"Xin chào"}
            photoURL={null}
            displayName={"Nguyen A"}
            createAt={123213}
          />
        </MessageListStyled>
        <FormStyled>
          <Form.Item>
            <Input
              placeholder="Nhập tin nhắn..."
              bordered={false}
              autoComplete="off"
            />
          </Form.Item>
          <Button type="primary">Gửi</Button>
        </FormStyled>
      </ContentStyled>
    </ChatWindowStyled>
  );
}
