import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";

// Styled Components
const NavContainer = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: linear-gradient(45deg, #e0f7fa, #f1e5ff); /* Light pastel gradient */
  color: #333333; /* Dark text for contrast */
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: all 0.3s ease;
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const SpecialK = styled(motion.div)`
  font-size: 3.5rem;
  font-weight: 900;
  color: #6a1b9a; /* Soft purple color */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s ease;
  
  &:hover {
    transform: rotate(360deg); /* Logo rotates on hover */
  }
`;

const LogoText = styled(motion.span)`
  font-size: 2rem;
  font-weight: 600;
  color: #6a1b9a; /* Matching soft purple */
  margin-left: 10px;
  font-family: "Poppins", sans-serif;
  letter-spacing: 1px;
  transition: color 0.3s ease;

  ${SpecialK}:hover & {
    color: #ff80ab; /* Light pink when logo is hovered */
  }
`;

const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLinks = styled(motion.ul)`
  display: flex;
  list-style: none;
  gap: 30px;
  margin: 0;
  padding: 0;
`;

const NavItem = styled(motion.li)`
  position: relative;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #6a1b9a; /* Soft purple for text */
  font-size: 1.1rem;
  font-weight: 600;
  padding: 10px 18px;
  border-radius: 30px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #6a1b9a;
    color: #ffffff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const SocialIconBox = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  background: #ffffff;
  border-radius: 50%;
  font-size: 1.8rem;
  color: #6a1b9a;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #6a1b9a;
    color: #ffffff;
    transform: scale(1.2);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  font-size: 2rem;
  cursor: pointer;
  color: #6a1b9a;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNavLinks = styled(motion.ul)`
  display: none;
  list-style: none;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  top: 70px;
  right: 20px;
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  @media (max-width: 768px) {
    display: flex;
  }
`;

// Animation Variants
const logoVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Navbar Component
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <NavContainer>
      {/* Logo */}
      <LogoContainer to="/">
        <SpecialK
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        >
          K
        </SpecialK>
        <LogoText>Maths</LogoText>
      </LogoContainer>

      {/* Navigation Links */}
      <NavLinksContainer>
        <NavLinks>
          {["Home", "Courses", "Dashboard", "Login"].map((item) => (
            <NavItem key={item}>
              <NavLink to={`/${item.toLowerCase()}`}>{item}</NavLink>
            </NavItem>
          ))}
        </NavLinks>

        {/* Social Media Links */}
        <SocialMediaContainer>
          <SocialIconBox
            href="https://web.facebook.com/me/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaFacebook />
          </SocialIconBox>
          <SocialIconBox
            href="https://www.youtube.com/channel/UCkOs7Sbp6U1Oh63H4fCUetA?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaYoutube />
          </SocialIconBox>
          <SocialIconBox
            href="https://wa.me/qr/MPHUV4UGNLPZF1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaWhatsapp />
          </SocialIconBox>
        </SocialMediaContainer>
      </NavLinksContainer>

      {/* Mobile Menu */}
      <HamburgerIcon onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </HamburgerIcon>

      {isMobileMenuOpen && (
        <MobileNavLinks>
          {["Home", "Courses", "Dashboard", "Login"].map((item) => (
            <motion.li key={item}>
              <NavLink to={`/${item.toLowerCase()}`} onClick={toggleMobileMenu}>
                {item}
              </NavLink>
            </motion.li>
          ))}
          <motion.li>
            <SocialMediaContainer>
              <SocialIconBox
                href="https://web.facebook.com/me/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </SocialIconBox>
              <SocialIconBox
                href="https://www.youtube.com/channel/UCkOs7Sbp6U1Oh63H4fCUetA?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </SocialIconBox>
              <SocialIconBox
                href="https://wa.me/qr/MPHUV4UGNLPZF1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </SocialIconBox>
            </SocialMediaContainer>
          </motion.li>
        </MobileNavLinks>
      )}
    </NavContainer>
  );
};

export default Navbar;
