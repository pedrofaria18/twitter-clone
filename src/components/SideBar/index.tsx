import React from 'react';

import StickyBox from 'react-sticky-box'

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import Perfil1 from '../../assets/breno.jpg';
import Perfil2 from '../../assets/allan.jpg';
import Perfil3 from '../../assets/luan.jpg';



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
                    picture={Perfil1} 
                    name="breno"
                    nickname="@PereiraBreno14"
                  />, 
                  <FollowSuggestion 
                    picture={Perfil2} 
                    name="Állan"
                    nickname="@Allaann_13"
                  />, 
                  <FollowSuggestion 
                    picture={Perfil3} 
                    name="Luan Toledo"
                    nickname="@LuanToledo16"
                  />, 
                ]}
              />
              <List 
                title="O que está acontecendo"
                elements={[
                  <News 
                    top = "Assuntos do Momento do Brasil"
                    description = "Elon Musk"
                  />,
                  <News 
                    top = "Assuntos do Momento do Brasil"
                    description = "Crise do covid-19"
                  />,
                  <News 
                    top = "Assuntos do Momento do Brasil"
                    description = "Enem 2020"
                  />
                ]}
              />
          </Body>
        </StickyBox>
    </Container>
  );
}

export default SideBar;