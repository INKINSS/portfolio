import React from 'react'
import { Divider } from '@chakra-ui/react'

const Proyects = () => {

    const proyects = [
        {
            title: 'Clon de Spotify',
            description: 'Maquetación para tamaño escritorio',
            description2: 'Maquetación de la página principal del Streaming de Música Spotify hechas desde cero usando Javascript / ReactJs / TailwindCSS / MaterialUI para el lardo del FrontEnd, esta maquetación funciona solo para tamaños de Escritorio.',
            urlImg: '/img/spotify.webp',
            href: 'https://spotify-smoky-ten.vercel.app/',
            scripts: 'React / MaterialUI / TailwindCSS'
        },
        {
            title: 'Clon de X',
            description: 'Maquetación Responsive',
            description2: 'Maquetación hecha de la red social X hecha desde cero totalmente responsive para diferentes dispositivos, este clon de X cuenta con las tecnologías de JavaScript / ReactJs / ChakraUI',
            urlImg: '/img/twitter.webp',
            href: 'https://twitter-wheat-two.vercel.app/',
            scripts: 'React / ChakraUI / TailwindCSS'
        }
    ]

    return (
        <main id='proyectos'>
            <h2 className='text-yellow-400 text-xl pt-5 px-5 font-medium md:text-[1.9em] lg:mb-10'>Proyectos</h2>
            {proyects.map((item, index) => (
                <section className='px-16 pt-5' key={index}>
                    <h2 className='text-white font-medium text-2xl mb-4 md:text-[2em]'>{item.title}</h2>
                    <div className='flex-col lg:flex-row lg:flex lg:justify-between'>
                        <img className=' rounded-lg lg:w-[40%]' src={item.urlImg} alt="img proyect" />
                        <div className='flex lg:flex-col lg:w-[40%] items-center my-4'>
                            <p className='text-white hidden lg:block text-[1.5em]'>{item.description2}</p>
                            <div className='flex justify-center items-center'>
                                <span className='text-yellow-400 text-[1.2em] font-medium inline-block mt-3'>{item.scripts}</span>
                                <a className='inline-block text-white text-base bg-purpleCustom px-3 py-2 rounded-2xl hover:bg-greenCustom transition duration-500 ml-10 h-10' href={item.href} target='blank'>preview</a>
                            </div>

                        </div>
                    </div>
                    <div className='flex justify-between w-full pt-5 lg:w-[100%]'>
                    </div>
                    <Divider className='pb-10' />
                </section>
            ))}
        </main>
    )
}

export default Proyects