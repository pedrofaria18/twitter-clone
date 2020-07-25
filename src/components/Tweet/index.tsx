import React from 'react';

import ODB from '../../assets/odb.jpg';

import TweetODB from '../../assets/djonga.jpg';

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
              <Avatar>
                  <img src={ODB} alt=""/>
              </ Avatar>
              
              <Content>
                  <Header>
                      <strong>Ol'Darth Bástarde</strong>
                      <span>@oldarthbastarde</span>
                      <Dot />
                      <time>24 de jul</time>
                  </Header>

                  {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                  <Description>PRIMEIRA CHAMADA DOS DORME NUNCA<br></br> <br></br>quem tiver acordado digite qualquer emoji</Description>
                  
                  <ImageContent>
                      <img src={TweetODB} alt=""/>
                  </ImageContent>

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