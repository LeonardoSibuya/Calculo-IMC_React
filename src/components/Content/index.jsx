import { useState } from 'react'

import styles from './Content.module.css'

const Content = () => {
    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)

    const renderizaImc = () => {
        const calculaImc = parseInt(peso) / parseFloat((altura * altura))

        if (altura >= 3) {
            alert('Por favor coloque a altura separada por ponto, ex: 1.80')
        } else if (calculaImc === Infinity) {
            return ''
        } else {
            return calculaImc
        }
    }

    const tabelaImc = () => {
        if (renderizaImc() < 16) {
            return 'Baixo peso Grau III'
        } else if (renderizaImc() <= 16.99) {
            return 'Baixo peso Grau II'
        } else if (renderizaImc() <= 18.49) {
            return 'Baixo peso Grau I'
        } else if (renderizaImc() <= 24.99) {
            return 'Peso ideal'
        } else if (renderizaImc() <= 29.99) {
            return 'Sobrepeso'
        } else if (renderizaImc() <= 34.99) {
            return 'Obesidade Grau I'
        } else if (renderizaImc() <= 39.99) {
            return 'Obesidade Grau II'
        } else {
            return 'Obesidade Grau III'
        }
    }

    return (
        <main className={styles.main}>
            <div className={styles.info}>
                <h2 className={styles.title}>
                    Coloque seus dados abaixo:
                </h2>
                <form>
                    <input className={styles.input} type="number" placeholder="Seu peso:" required onBlur={evento => setPeso(evento.target.value)}/>
                    <input className={styles.input} type="number" placeholder="Sua altura, Ex: 1.80" required onBlur={evento => setAltura(evento.target.value)}/>
                    <button className={styles.button} type='button'>Calcular</button>
                </form>
            </div>
            <div className={styles.resp}>
                <p className={styles.text}>Seu IMC é de: <b>{!renderizaImc() ? '' : renderizaImc().toFixed(1)}</b></p>
                <p className={styles.text}>De acordo com a tabela, você está com: <b>{!renderizaImc() ? '' : tabelaImc()}</b></p>
                <a className={styles.link} href="https://indicedemassacorporal.com/tabela-imc.html" target='_blank'>Consultar tabela completa</a>
            </div>
        </main>
    )
}

export default Content