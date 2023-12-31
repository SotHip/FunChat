import { Avatar, Typography } from "antd";
import { styled } from "styled-components";

const WrapperStyled = styled.div`
  margin-bottom: 1px;

  .author {
    margin-left: 5px;
    font-weight: bold;
  }

  .date {
    margin-left: 10px;
    font-size: 12px;
    color: #a7a7a7;
  }

  .content {
    margin-left: 30px;
  }
`;

function MessageItem({ text, displayName, createAt, photoURL }) {
  return (
    <WrapperStyled>
      <div>
        <Avatar size="small" src={photoURL}>
          A
        </Avatar>
        <Typography.Text className="author">{displayName}</Typography.Text>
        <Typography.Text className="date">{createAt}</Typography.Text>
      </div>
      <div>
        <Typography.Text className="content">{text}</Typography.Text>
      </div>
    </WrapperStyled>
  );
}

export default MessageItem;
