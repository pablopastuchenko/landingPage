import Image from "next/image";
import Logo from "../../public/images/logo.svg";
import Link from "next/link";
import Styles from "./header.module.scss" //o module.scss não sobreescreve se repetir o nome um do outro
import Button from "../button";


const Header = () => {
    //Chamamos o c.container de module.scss dessa forma
    return <div className={Styles.container}>
        <div className="logotipo">
            <Image src={Logo} alt="Logo" />
        </div>
        <div className={Styles.menu}>
            <ul>
                <Link href="/">Home</Link>
                <Link href="/">O que fazemos</Link>
                <Link href="/">Cases</Link>
            </ul>
        </div>
        <div className={Styles.action}>
            <Button title="Fale conosco" />
        </div>
    </div>
}

export default Header