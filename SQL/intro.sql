/*  
    Acessando o banco de dados:
    psql -U postgres 

        ( 
            "OBS: SE TIVER UM USUARIO CADASTRADO UTILIZE O NAME DO USUARIO EXEMPLO:
                psql -U pepper_souza
            Logo apos pedira a senha!
        )

    Logando usuario \d  
*/

CREATE USER "pepper_souza" CREATEROLE CREATEDB SUPERUSER PASSWORD '2291994';

CREATE DATABASE T20_postgres;

/*  
    \l listando todos os bancos de dados

    \c selecionando um banco de dados
*/
DROP DATABASE name_data-Base;

CREATE TABLE "recipes" (
    "id" SERIAL PRIMARY KEY,
    "titulo" VARCHAR(150) NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP NOT NULL,
    "updatedAt" TIMESTAMP
);

// deletetando tabelas
DROP TABLE recipes

// listar as tabelas \dt - informacoes resumidas ou \dt+ informacoes completas