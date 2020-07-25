import React from 'react';

import Button from '../Button';

import Perfil from '../../assets/perfil.jpg';

import { Container, Topside, Logo, MenuButton, HomeIcon, HashtagIcon, BellIcon, EmailIcon, BookmarkIcon, ListIcon, ProfileIcon, MoreIcon, Botside, Avatar, ProfileData, ExitIcon} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
        <Topside>
            <Logo />

            <MenuButton>
                <HomeIcon />
                <span>Página Inicial</span>
            </MenuButton>

            <MenuButton>
                <HashtagIcon />
                <span>Explorar</span>
            </MenuButton>

            <MenuButton>
                <BellIcon />
                <span>Notificações</span>
            </MenuButton>

            <MenuButton>
                <EmailIcon />
                <span>Mensagens</span>
            </MenuButton>

            <MenuButton>
                <BookmarkIcon />
                <span>Itens Salvos</span>
            </MenuButton>

            <MenuButton>
                <ListIcon />
                <span>Listas</span>
            </MenuButton>

            <MenuButton className = 'active'>
                <ProfileIcon />
                <span>Perfil</span>
            </MenuButton>

            <MenuButton>
                <MoreIcon />
                <span>Mais</span>
            </MenuButton>
            
            <Button>
                <span>Tweetar</span>
            </Button>
            
        </Topside>

        <Botside>
            <Avatar>
                <img src={Perfil} alt=""/>
            </Avatar>

            <ProfileData>
                <strong>Faria</strong>
                <span>@pedrfaria18</span>
            </ProfileData>

            <ExitIcon />
        </Botside>
    </Container>
  );
}

export default MenuBar;