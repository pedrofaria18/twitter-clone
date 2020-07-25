import React from 'react';

import Feed from '../Feed';

import Perfil from './assets/perfil.jpg';

import Fundo from './assets/banner.jpg';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, TimeIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
            <img src={Fundo} alt="Banner"/>
              <Avatar> 
                <img src={Perfil} alt="Perfil"/>
              </Avatar> 
          </Banner>

          <ProfileData>
              <EditButton outlined>Editar Perfil</EditButton>

              <h1>Faria</h1>
              <h2>@pedrfaria18</h2>

              <p>
                <a href="https://twitter.com/atletico">@atletico</a>
              </p>

              <ul>
                  <li>
                      <LocationIcon />
                      Belo Horizonte, Brasil

                      <CakeIcon />
                      Nascido(a) em 21 de setembro de 2001
                  </li>
                  <li>
                      <TimeIcon />
                      Ingressou em dezembro de 2017
                  </li>
              </ul>

              <Followage>
                  <span>
                      seguindo <strong>87</strong>
                  </span>
                  <span>
                      <strong>106 </strong> seguidores
                  </span>
              </Followage>
          </ProfileData>

          <Feed />
      </Container>
  );
}

export default ProfilePage;