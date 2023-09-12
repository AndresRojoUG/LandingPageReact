import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  margin-top:5rem;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FooterLinks = styled.nav`
  margin-top: 10px;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 10px;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Footer() {
  return (
    <FooterContainer id='contacto'>
      <FooterContent>
        <p>&copy; 2023 Andres Rojo Ugalde </p>
        <FooterLinks>
          <FooterLink href="#incio">Inicio</FooterLink>
          <FooterLink href="#acerca-de">Acerca de</FooterLink>
          <FooterLink href="#contacto">Contacto</FooterLink>
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  )
}
