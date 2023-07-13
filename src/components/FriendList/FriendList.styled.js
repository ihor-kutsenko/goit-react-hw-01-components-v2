import styled from 'styled-components';

export const FriendListSection = styled.ul`
  background-color: #fff;
  text-align: center;
  margin-top: 20px;
  padding: 15px 0;
`;

export const FriendListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #000;
  width: 250px;
  margin-right: auto;
  margin-left: auto;
  padding: 5px 0 5px 15px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;

export const FriendStatusOnline = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 5px;
  background-color: green;
`;
export const FriendStatusOffline = styled(FriendStatusOnline)`
  background-color: red;
`;

export const FriendImage = styled.img`
  box-shadow: 5px 3px 26px 0px rgba(0, 0, 0, 0.81);
  margin-right: 15px;
`;

export const FriendName = styled.p`
  font-weight: bold;
  font-size: large;
`;
