import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Principal.module.css'

import { useContext, useEffect, useState } from 'react'
import Router from 'next/router'

import Context from '../contexts/myContext'

import { nameSystem, baseUrl } from '../config/config.json'

const Principal: NextPage = () => {

  const myContext = useContext(Context)

  const [users, setUsers] = useState([])

  useEffect(() => {
    if(!JSON.parse(localStorage.getItem('@user_data') || '').token)
        Router.push('/')
  }, [])

  async function handlerChangeGetData() {
    if(users.length == 0) {
      let data: any = await fetch(`${baseUrl}/user/list`, {
        method: "POST",
        headers: {
          'content-type': 'application/json',
          'x-access': myContext.data.token
        }
      })
      data = await data.json()

      if(data.success) {
        setUsers(data.data)
      }
    } else
      setUsers([])
  }

  async function handlerLogout() {
      await myContext.setData([])
      Router.push('/')
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{nameSystem} | Principal</title>
        <meta name="description" content="SGP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <span><b>Token: </b>{myContext.data.token}</span>
      <br />
      <span><b>Access Level: </b>{myContext.data.access_level}</span>
      <br />

      {
        myContext.data.access_level === 2 &&
        <div>
          <br />
          <span>Administrator</span>
          <br />
          <br />
          <button onClick={handlerChangeGetData}>{users.length > 0 ? "Ocultar" : "Listar"} Usuarios</button>
          
          {
            users.map((item: any, index) => (
              <div key={index}>
               <span><strong>Usuário:</strong> {item.username}</span>
               <br />
               <span><strong>E-mail:</strong> {item.email}</span>
               <br />
               <br />
              </div>
            ))
          }
        </div>
      }

      <br />

      <button onClick={handlerLogout}>Sair</button>

    </div>
  )
}

export default Principal
