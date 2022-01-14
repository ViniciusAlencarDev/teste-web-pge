import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Router from 'next/router'

import { baseUrl, repatchaKey } from '../config/config.json'
import { useContext, useEffect, useState } from 'react'

import Context from '../contexts/myContext'

import { nameSystem } from '../config/config.json'

// import components
import BoxContact from '../components/BoxContact'

import ReCAPTCHA from "react-google-recaptcha";

const Home: NextPage = () => {

  const myContext = useContext(Context)

  const [usernameOrEmail, setUsernameOrEmail]: any = useState('')
  const [password, setPassword]: any = useState('')

  useEffect(() => {
    if(JSON.parse(localStorage.getItem('@user_data') || '').token)
      Router.push('/Home')
  }, [])

  async function handlerSubmit(e: any) {
    e.preventDefault();

    if(usernameOrEmail && password) {
      let data: any = await fetch(`${baseUrl}/user/login`, {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({ usernameOrEmail, password })
      })
      data = await data.json()
  
      if(data.success) {
        myContext.setData({ token: data.data[0].token, access_level: data.data[0].access_level})
        Router.push('/principal')
      } else
        alert('Login inválido, favor verirficar.')
    } else
      alert('Preenhca os campos necessários!')
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{nameSystem} | Login</title>
        <meta name="description" content="SGP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BoxContact />

      <div className={styles.boxFlex}>
        <img src="https://intranet.pge.se.gov.br/Imagens/fachada-PGE.png" />
        <form onSubmit={handlerSubmit}>
          <img src="https://intranet.pge.se.gov.br/Imagens/logo-2.png" />

          <div className={styles.boxInput}>
            <label>Usuário</label>
            <input type="text" placeholder="Digite o usuário" value={usernameOrEmail} onChange={input => setUsernameOrEmail(input.target.value)} />
            <label>Senha</label>
            <input type="password" placeholder="Digite a senha" value={password} onChange={input => setPassword(input.target.value)}/>
          </div>

          <div style={{ marginTop: -50, marginBottom: 30 }}>
            <ReCAPTCHA
              sitekey={repatchaKey || 'key'}
              onChange={() => {}}
            />
          </div>
          
          <input type="submit" value="Entrar" />          

          <a className={styles.link} href="">Esqueceu sua senha ou bloqueou seu usuário?</a>
        
          <div className={styles.footerDescription}>
            <span>Sistema desenvolvido pela CODIN | SGP © 2010 - 2022</span>
            <span>desenvolvimento@pge.se.gov.br</span>
            <span>Versão 2.13.1</span>
          </div>
        </form>
      </div>


    </div>
  )
}

export default Home
