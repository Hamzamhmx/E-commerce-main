import styled from "styled-components";


export const NavStyle = styled.nav`
.navbar-lists {
  display: flex;
  gap: 4.8rem;
  align-items: center;

  .navbar-link {
    &:link,
    &:visited {
      display: inline-block;
      text-decoration: none;
      font-size: 1.8rem;
      font-weight: 500;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.black};
      transition: color 0.3s linear;
    }
    &:hover,
    &:active {
      color: ${({ theme }) => theme.colors.helper};
    }
  }
}
.mobile-navbar-btn {
  display: none;
  background-color: transparent;
  cursor: pointer;
  border: ${({ theme }) => theme.colors.black};
}
.mobile-nav-icon[name="close-outline"] {
  display: none;
}
.close-outline {
  display: none;
}
.cart-trolley--link {
  position: relative;

  .cart-trolley {
    position: relative;
    font-size: 3.2rem;
  }
  .cart-total--item {
    width: 2.4rem;
    height: 2.4rem;
    position: absolute;
    background-color: #000;
    color: #000;
    border-radius: 50%;
    display: grid;
    place-items: center;
    top: -20%;
    left: 70%;
    background-color: ${({ theme }) => theme.colors.helper};
  }
}
.user-login--name {
  text-transform: capitalize;
}
.user-logout,
.user-login {
  font-size: 1.4rem;
  padding: 0.8rem 1.4rem;
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .mobile-navbar-btn {
    display: inline-block;
    z-index: 9999;
    border: ${({ theme }) => theme.colors.black};

    .mobile-nav-icon {
      font-size: 4.2rem;
      color: ${({ theme }) => theme.colors.black};
    }
  }

  .active .mobile-nav-icon {
    display: none;
    font-size: 4.2rem;
    position: absolute;
    top: 30%;
    right: 10%;
    color: ${({ theme }) => theme.colors.black};
    z-index: 9999;
  }
  .active .clone-outline {
    display: inline-block;
  }
  .navbar-lists {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    visibility: hidden;
    opacity: 0;
    transform: translateX(100%);
    transition: all 3s linear;
  }
  .active .navbar-lists {
    visibility: visible;
    opacity: 1;
    transform: translateX(0);
    z-index: 999;
    transform-origin: right;
    transition: all 3s linear;

    .navbar-link {
      font-size: 4.2rem;
    }
  }
  .cart-trolley--link {
    position: relative;

    .cart-trolley {
      position: relative;
      font-size: 5.2rem;
    }

    .cart-total--item {
      width: 4.2rem;
      height: 4.2rem;
      font-size: 2rem;
    }
  }

  .user-logout,
  .user-login {
    font-size: 2rem;
    padding: 0.8rem 1.4rem;
  }
}
`;

export const MainHeader = styled.header`
padding : 0 4.8rem;
height: 10rem;
background-color: ${({ theme }) => theme.colors.bg};
display: flex;
justify-content: space-between;
align-items: center;
position: relative;

.logo {
height: 5rem;}`;

export const HeroSectionStyle = styled.section` padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export const ContactStyle = styled.section`
padding: 9rem 0 5rem 0;
text-align: center;

.container {
  margin-top: 6rem;

  .contact-form {
    max-width: 50rem;
    margin: auto;

    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.btn};
          color: ${({ theme }) => theme.colors.btn};
          transform: scale(0.9);
        }
      }
    }
  }
}
`;

export const ServicesStyle = styled.div`
padding: 9rem 0;

  .grid {
    gap: 4.8rem;
  }

  .services-1,
  .services-2,
  .services-3 {
    width: auto;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background: ${({ theme }) => theme.colors.bg};
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }

  .services-2 {
    gap: 4rem;
    background-color: transparent;
    box-shadow: none;

    .services-colum-2 {
      background: ${({ theme }) => theme.colors.bg};
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    }
  }

  h3 {
    margin-top: 1.4rem;
    font-size: 2rem;
  }

  .icon {
    /* font-size: rem; */
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
  }
`;

export const TrustedStyle = styled.section`
padding: 9rem 0;
background-color: ${({ theme }) => theme.colors.bg};

.brand-section {
  padding: 12rem 0 0 0;
}
h3 {
  text-align: center;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.text};
  font-size: 2rem;
  font-weight: bold;
}

img {
  min-width: 10rem;
  height: 10rem;
}

.brand-section-slider {
  margin-top: 3.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .brand-section-slider {
    margin-top: 3.2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* background-color: red; */
    text-align: center;
  }
}
`;

export const FooterStyle = styled.section`
.iSIFGq {
  margin: 0;
}

.contact-short {
  max-width: 60vw;
  margin: auto;
  padding: 5rem 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.colors.shadowSupport};
  transform: translateY(50%);}

  .grid div:last-child {
    justify-self: end;
    align-self: center;
  }
}

footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
  h3 {
    color: ${({ theme }) => theme.colors.hr};
    margin-bottom: 2.4rem;
  }
  p {
    color: ${({ theme }) => theme.colors.white};
  }
    .footer-contact a{
    text-decoration:none;
     color: ${({ theme }) => theme.colors.white};
     font-size: 20px;
    }
  .footer-social--icons {
    display: flex;
    gap: 2rem;

    div {
      padding: 1rem;
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.colors.white};

      .icons {
        color: ${({ theme }) => theme.colors.white};
        font-size: 2.4rem;
        position: relative;
        cursor: pointer;
      }
    }
  }
}

.footer-bottom--section {
  padding-top: 9rem;

  hr {
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.hr};
    height: 0.1px;
  }
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .contact-short {
    max-width: 80vw;
    margin: 4.8rem auto;
    transform: translateY(0%);
    text-align: center;

    .grid div:last-child {
      justify-self: center;
    }
  }

  footer {
    padding: 9rem 0 9rem 0;
  }

  .footer-bottom--section {
    padding-top: 4.8rem;
  }
}
`;

export const ErrorPageStyle = styled.section`
.container {
  padding: 9rem 0;
  text-align: center;

  h2 {
    font-size: 10rem;
  }

  h3 {
    font-size: 4.2rem;
  }

  p {
    margin: 2rem 0;
  }
}
`;

export const FeatureProductStyle = styled.section`
padding: 9rem 0;
background-color: ${({ theme }) => theme.colors.bg};

.container {
  max-width: 120rem;
}

figure {
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: all 0.5s linear;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.2s linear;
    cursor: pointer;
  }
  &:hover::after {
    width: 100%;
  }
  &:hover img {
    transform: scale(1.2);
  }
  img {
    max-width: 90%;
    margin-top: 1.5rem;
    height: 20rem;
    transition: all 0.2s linear;
  }

  .caption {
    position: absolute;
    top: 15%;
    right: 10%;
    text-transform: uppercase;
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.helper};
    padding: 0.8rem 2rem;
    font-size: 1.2rem;
    border-radius: 2rem;
  }
}

.card {
  background-color: #fff;
  border-radius: 1rem;

  .card-data {
    padding: 0 2rem;
  }

  .card-data-flex {
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h3 {
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .card-data--price {
    color: ${({ theme }) => theme.colors.helper};
  }

  .btn {
    margin: 2rem auto;
    background-color: rgb(0 0 0 / 0%);
    border: 0.1rem solid rgb(98 84 243);
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: rgb(98 84 243);
    }

    &:hover a {
      color: #fff;
    }
    a {
      color: rgb(98 84 243);
      font-size: 1.4rem;
    }
  }
}
`;

