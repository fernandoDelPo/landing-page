import React from 'react';
import { Container } from '../styles/Container.styled';
import { Logo, Nav, Image, StyledHeader } from '../styles/Header.styled';
import { Button } from '../styles/Button.styled';
import { Flex } from '../styles/Flex.styled';

const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src='./images/logo.svg' alt="Logo" />
                    <Button>Probar gratis</Button>
                </Nav>
                <Flex>
                    <div>
                        <h1>Crea una comunidad extraordinaria</h1>
                        <p>Crear una comunidad es más que simplemente reunir a un grupo de personas. Implica construir un espacio donde los individuos puedan conectarse, colaborar y crecer juntos.
                            No solo implica proporcionar herramientas y recursos, sino también cultivar un sentido de pertenencia y apoyo mutuo que impulse el crecimiento personal y profesional de todos los involucrados.</p>
                        <Button bg='#ff0099' color='#fff'>
                            Comenzá ahora
                        </Button>
                    </div>
                    <Image src='./images/illustration-mockups.svg' />
                </Flex>
            </Container>
        </StyledHeader>
    )
}

export default Header
