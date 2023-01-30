import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import PropTypes from "prop-types";

const navbarLinks = [
  { id: 1, to: "", text: "Home", icon: "material-symbols:home-rounded" },
  {
    id: 2,
    to: "Garden",
    text: "Giardino",
    icon: "material-symbols:potted-plant-outline",
  },
  { id: 3, to: "newPianta", text: "Add", icon: "material-symbols:add-rounded" },
  { id: 4, to: "shop", text: "Shop", icon: "ion:compass-outline" },
  { id: 5, to: "account", text: "Account", icon: "ant-design:user-outlined" },
];

const SNav = styled.nav`
  z-index: 5;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bgGreen};
  padding: 10px 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.light};
  text-decoration: none;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.normal};
  font-weight: 800;
  gap: 3px;
  ${({ add, theme }) =>
    add &&
    `
    background-color: ${theme.colors.primary};
    border-radius: 10px;
    padding: 5px;
    transform: translateY(-35px) rotate(45deg);
    & svg {
        transform: rotate(-45deg);
    }
   `}
  &:focus {
    text-decoration: none;
  }
`;

const Navbar = () => {
  return (
    <SNav>
      {navbarLinks.map((item) => {
        return (
          <NavLink key={item.id} to={item.to} caseSensitive={false}>
            {({ isActive }) => (
              <LinkContainer isActive={isActive} add={item.id === 3}>
                <Icon
                  icon={item.icon}
                  width={item.id === 3 ? 35 : 24}
                  color={isActive ? "#FD8440" : "#fff"}
                />
                {item.id != 3 && item.text}
              </LinkContainer>
            )}
          </NavLink>
        );
      })}
    </SNav>
  );
};

Navbar.prototype = {};
export default Navbar;
