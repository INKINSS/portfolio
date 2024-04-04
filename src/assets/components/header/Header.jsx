import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Header = () => {
    return (
        <header className="md:w-[70%] px-10" id="inicio">
            <section className="mb-4">
                <h1 className="text-white text-[2.5em] lg:text-[3em] font-semibold">Hey!, soy Samuel</h1>
                <h2 className="text-white font-normal lg:text-[2em] text-[1.6em]">Estudiante de Desarrollo Web con <span className="text-poppins text-yellow-300 font-semibold">Javascript en React</span></h2>
                <span className="text-white font-poppins italic text-xs md:text-[1.1em]">transformando visiones en ideas digitales</span>
            </section>
            <section className="flex">
                <a className="flex items-center text-white rounded-full bg-purpleCustom px-5 py-1 mr-4 hover:bg-greenCustom transition duration-500" href="https://www.linkedin.com/in/mart%C3%ADn-samuel-p%C3%A9rez-montenero-747690251/" target="blank" > <FaLinkedin style={{marginRight:'.4em'}} color="white" /> Linkedin </a>
                <a className="flex items-center text-white rounded-full bg-purpleCustom px-5 py-1 hover:bg-greenCustom transition duration-500" href="https://github.com/INKINSS" target="blank"> <FaGithubSquare style={{marginRight:'.4em'}} color="white" /> GitHub </a>
            </section>


        </header>
    )
}

export default Header