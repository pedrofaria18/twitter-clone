import React from 'react';

import StickyBox from 'react-sticky-box'

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
        <SearchWrapper>
            <SearchInput placeholder="Buscar no Twitter" />
            <SearchIcon />
        </SearchWrapper>

        <StickyBox>
          <Body>
              <List 
                title="Talvez você curta"
                elements={[
                  <FollowSuggestion 
                    name="breno"
                    nickname="@PereiraBreno14"
                  />, 
                  <FollowSuggestion 
                    name="Állan"
                    nickname="@Allaann_13"
                  />, 
                  <FollowSuggestion 
                    name="Luan Toledo"
                    nickname="@LuanToledo16"
                  />, 
                ]}
              />
              <List 
                title="Talvez você curta"
                elements={[
                  <News />, <News />,<News />
                ]}
              />
          </Body>
        </StickyBox>
    </Container>
  );
}

export default SideBar;