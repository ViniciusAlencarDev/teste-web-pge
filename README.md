# SGP - Teste PGE
# Web

## Pré-requisitos ✔

Ter o **nodejs** ou **dokcer** instalado.


## Instalação ⚙

Configurar a **baseUrl** em **config/config.json** com os dados do backend.

Transpilar a aplicação
```
npm run build
```

Iniciar servidor
```
yarn run start
```


## Com Docker

Criar container para a aplicação
```
docker build . -t viniciusalencardev/testepgeweb
```

Iniciar servidor
```
docker run -p 3000:3000 -d viniciusalencardev/testepgeweb
```

Iniciado em http://localhost:3000

* Obrigado 😎
