import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
} from '@chakra-ui/react'
import ModalComponent from '../modal/Modal';

const MenuResponsive = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        section.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className='flex my-5 mx-10 justify-end'>
            <Menu>
            <MenuButton as={Button}>
                Hola!
            </MenuButton>
            <MenuList>
                <MenuItem onClick={() => scrollToSection('inicio')}>Inicio</MenuItem>
                <MenuItem onClick={() => scrollToSection('proyectos')}>Proyectos</MenuItem>
                <MenuItem onClick={() => scrollToSection('sobre-mi')}>Sobre Mi</MenuItem>
                <ModalComponent />
            </MenuList>
        </Menu>
        </div>
    )
}

export default MenuResponsive
