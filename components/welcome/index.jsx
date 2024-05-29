import Image from "next/image";
import Button from "../button";
import Styles from "../welcome/welcome.module.scss";
import bannerWelcome from "../../public/images/BannerWelcome.svg"



const Welcome = () => {
    return <div className={Styles.container}>
        <div className={Styles.text}>
            <h1>Melhor agência de marketing do bairro</h1>
            <p>Somos uma agência de performance digital, aceleramos vendas e aquisição de leads para grandes marcas.</p>
            <Button title="Aumentar vendas" kind="secundary"/>
        </div>
        <div className={Styles.image}>
            <Image src={bannerWelcome} alt="Banner Welcome" />
        </div>
    </div>
}

export default Welcome