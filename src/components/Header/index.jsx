import styles from './Header.module.css'

const Header = () => {

    return(
        <header className={styles.header}>
            <h1 className={styles.headerTitle}>
                Calcule seu IMC aqui
            </h1>
            <p className={styles.text}>
                O IMC, Índice de Massa Corporal, é utilizado para avaliar se o peso do indivíduo está adequado à sua altura. É um indicador importante que fornece dados para se avaliar o estado de saúde de uma pessoa, podendo indicar questões como obesidade, desnutrição e outras condições prejudiciais.
            </p>
        </header>
    )
}

export default Header