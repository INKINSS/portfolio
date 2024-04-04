import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const ModalComponent = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button className='w-full justify-start' style={{background:'#61FF33'}} onClick={onOpen}>¡Hablemos!</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Un gusto :)</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <p>¡Me encantaría escuchar de ti! Si tienes alguna pregunta, sugerencia o simplemente quieres saludar, no dudes en ponerte en contacto conmigo a través de mis redes sociales. Estoy siempre disponible para charlar y colaborar en proyectos interesantes. ¡Espero con ansias conectar contigo pronto!</p>
                        <section className='mt-2'>
                            <div className='flex items-center gap-2'>
                                <AiFillInstagram />
                                <span>samuelperez_98</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FaFacebookSquare />
                                <span>Samuel Perez</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FaLinkedin />
                                <span>Martín Samuel Pérez Montenegro</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FaSquareGithub />
                                <span>INKINSS</span>
                            </div>
                        </section>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Cerrar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ModalComponent;
