import React from 'react';

import {
    Container,
    Retweeted,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    RetweetIcon1,
    LikeIcon,
  } from './styles';

const Tweet: React.FC = () => {
  return (
      <Container>
          <Retweeted>
              <RetweetIcon />
              Você retweetou
          </Retweeted>
          <Body>
              <Avatar />
              
              <Content>
                  <Header>
                      <strong>Rocketseat</strong>
                      <span>@rocketseat</span>
                      <Dot />
                      <time>24 de jul</time>
                  </Header>

                  {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                  <Description>Foguete não tem ré 🚀</Description>
                  
                  <ImageContent />

                  <Icons>
                      <Status>
                          <CommentIcon />
                          18
                      </Status>
                      <Status>
                          <RetweetIcon1 />
                          18
                      </Status>
                      <Status>
                          <LikeIcon />
                          999
                      </Status>
                  </Icons>
              </Content>
          </Body>
      </Container>
  );
}

export default Tweet;