import React from 'react';

import { Container, Avatar, Info, FollowButton } from './styles';

interface Props {
    name: string;
    nickname: string;
    picture: string;
}

const FollowSuggestion: React.FC <Props> = ({
    name, nickname, picture
}) => {
  return (
    <Container>
        <div>
            <Avatar>
              <img src={picture} alt="Perfil"/>
            </Avatar>

            <Info>
            <strong>{name}</strong>
            <span>{nickname}</span>
            </Info>
        </div>
        <FollowButton outlined>Seguir</FollowButton>
    </Container>
  );
}

export default FollowSuggestion;