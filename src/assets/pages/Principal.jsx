import React from 'react'
import Header from '../components/header/Header'
import Proyects from '../components/proyects/Proyects'
import AboutMe from '../components/aboutMe/AboutMe'
import MenuResponsive from '../components/menuResponsive/MenuResponsive'
import { Divider } from '@chakra-ui/react'

const Principal = () => {
    return (
        <main className=' flex-col w-full'>
            <MenuResponsive />
            <Header />
            <Divider className='mt-4' />
            <Proyects />
            <AboutMe />
        </main>
    )
}

export default Principal