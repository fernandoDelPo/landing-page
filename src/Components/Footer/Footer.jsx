import React from 'react'
import { Container } from '../styles/Container.styled'
import { Flex } from '../styles/Flex.styled'
import SocialIncons from '../SocialIcons'
import { StyledFooter } from '../styles/StyledFooter.styled'

const Footer = () => {
    return (<StyledFooter>
        <Container>
            <img width="200px" src="./images/logo_white.svg" alt="logo" />
            <Flex>
                <ul>
                    <li>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet iure rerum recusandae!
                    </li>
                    <li>+54-261-6230571</li>
                    <li>consultas@products.com</li>
                </ul>
                <ul>
                    <li>Acerca de</li>
                    <li>¿Qué hacemos?</li>
                    <li>FAQ</li>
                </ul>
                <ul>
                    <li>Metas</li>
                    <li>Blog</li>
                    <li>Contáctenos</li>
                </ul>
                <SocialIncons />

            </Flex>
        </Container>
    </StyledFooter>
    )
}

export default Footer;
