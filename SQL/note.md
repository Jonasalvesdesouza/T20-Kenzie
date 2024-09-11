# Aula - O que é um Banco de Dados

### 1 Introdução
######  Um dos pilares fundamentais da tecnologia da informação é o conceito de bancos de dados. Eles desempenham um papel crucial em praticamente todos os aspectos do mundo digital, desde aplicativos de smartphone até sistemas empresariais complexos. Nesta primeira aula, vamos explorar o que exatamente é um banco de dados e por que ele é tão essencial em nosso ambiente tecnológico atual.

### 2 Definição de Banco de Dados
######  Um banco de dados é uma coleção organizada e estruturada de informações ou dados armazenados de forma persistente, geralmente em formato digital. Esses dados podem ser facilmente acessados, gerenciados, atualizados e consultados conforme necessário. A principal característica que distingue um banco de dados de outras formas de armazenamento de dados é sua capacidade de fornecer estruturas e métodos para organizar, recuperar e modificar informações de maneira eficiente.

### 3 Componentes de um Banco de Dados
######  Um banco de dados é composto por três componentes principais:
######  Dados: Os próprios dados que estão sendo armazenados. Esses dados podem representar informações sobre pessoas, produtos, transações, eventos, e muito mais, dependendo do contexto do banco de dados.

######  Software de Gerenciamento de Banco de Dados (SGBD): O SGBD é um sistema de software responsável por gerenciar o armazenamento, a organização e o acesso aos dados. Ele fornece uma interface para os usuários e aplicativos interagirem com o banco de dados.

######  Hardware: O hardware inclui os servidores e dispositivos de armazenamento que mantêm os dados fisicamente. A capacidade e o desempenho do hardware têm um impacto significativo no desempenho do banco de dados.
### 4 Importância dos Bancos de Dados
######  Os bancos de dados desempenham um papel crucial em muitos aspectos da vida moderna, incluindo:
######  Armazenamento Eficiente: Eles permitem o armazenamento eficiente e estruturado de grandes volumes de dados.
######  Recuperação Rápida: Facilitam a recuperação rápida e precisa de informações específicas.
######  Consistência de Dados: Garantem a integridade e consistência dos dados, prevenindo duplicatas e erros.
######  Suporte a Aplicativos: São essenciais para aplicativos de software que precisam armazenar e recuperar dados, como aplicativos de e-commerce, redes sociais e sistemas de gerenciamento de estoque.

#   Aula - Importância Dos Bancos de Dados na Tecnologia Moderna

### 1 Introdução
######  Nesta aula, exploraremos a importância dos bancos de dados na tecnologia moderna. À medida que vivemos em uma era cada vez mais orientada por dados, compreender o papel central dos bancos de dados se torna fundamental. Vamos analisar como os bancos de dados afetam todos os aspectos de nossas vidas digitais, desde o comércio eletrônico até a análise de dados em larga escala.

### 2 Fundamentos da Importância dos Bancos de Dados
######  Armazenamento Eficiente: Os bancos de dados permitem o armazenamento organizado e eficiente de grandes volumes de dados. Em um mundo onde a quantidade de dados gerados diariamente está em constante crescimento, essa eficiência é essencial.

######  Recuperação Rápida: Os bancos de dados são projetados para permitir a recuperação rápida e precisa de informações específicas. Isso é vital para sistemas que precisam fornecer respostas instantâneas, como motores de busca na web.

######  Consistência de Dados: Os bancos de dados garantem a integridade e consistência dos dados. Isso significa que os dados armazenados são precisos, confiáveis e estão livres de duplicatas ou erros. Isso é fundamental para tomadas de decisão baseadas em dados.

### 3 Aplicações na Vida Moderna
######  Comércio Eletrônico: Bancos de dados são usados para armazenar informações sobre produtos, clientes, transações e histórico de compras em lojas online. Isso permite recomendações personalizadas, gestão de inventário eficiente e processamento de pedidos.

######  Redes Sociais: Plataformas de redes sociais como Facebook, Twitter e Instagram dependem fortemente de bancos de dados para armazenar perfis de usuários, postagens, conexões entre usuários e dados de engajamento.

######  Saúde: Em hospitais e clínicas, bancos de dados armazenam registros médicos eletrônicos, históricos de pacientes, informações de seguros e dados de pesquisas clínicas.

######  Finanças: Bancos, instituições financeiras e empresas de fintech utilizam bancos de dados para rastrear transações, históricos de contas, relatórios de crédito e gerenciamento de riscos.

######  Análise de Dados: Empresas e pesquisadores usam bancos de dados para armazenar grandes conjuntos de dados e realizar análises avançadas, como aprendizado de máquina e mineração de dados.

### 4 O Futuro dos Bancos de Dados
######  À medida que a tecnologia avança, os bancos de dados continuam a evoluir. Tendências como bancos de dados NoSQL, armazenamento em nuvem e processamento em tempo real estão moldando o futuro dos bancos de dados. Essas inovações estão permitindo que as empresas lidem com volumes de dados cada vez maiores e forneçam respostas mais rápidas às demandas dos usuários.

#   Aula - Entidades e Atributos
### 1 Introdução
######  Nesta aula, vamos explorar dois conceitos fundamentais no projeto de bancos de dados: entidades e atributos. Esses conceitos são a base para a modelagem de dados em bancos de dados relacionais e desempenham um papel central na criação de estruturas de dados eficazes e organizadas.

### 2 Entidades e Atributos - Definições
###### Entidade: Uma entidade representa um objeto do mundo real ou um conceito abstrato que pode ser diferenciado dos outros. No contexto de bancos de dados, uma entidade é geralmente algo que você deseja rastrear e armazenar informações sobre. Por exemplo, em um sistema de gerenciamento de biblioteca, entidades podem incluir "livros", "autores" e "clientes".

###### Atributo: Um atributo é uma característica ou propriedade que descreve uma entidade. Em outras palavras, os atributos são os detalhes específicos que você deseja armazenar sobre uma entidade. Para o exemplo da entidade "livro", os atributos podem incluir "título", "autor", "ano de publicação" e "número de páginas".

### 2.1 Exemplo de Modelagem de Entidades e Atributos
######  Vamos usar o exemplo de uma entidade "Cliente" em um sistema de gerenciamento de uma loja online para ilustrar a relação entre entidades e atributos:
###### Entidade: Cliente
###### Atributos:
###### Nome
###### Sobrenome
###### Endereço
###### Número de telefone
###### Endereço de e-mail
###### Data de registro
###### Número de cliente (identificador único)
###### Neste exemplo, a entidade "Cliente" é definida pelos atributos que a descrevem. Cada cliente tem um nome, sobrenome, endereço e assim por diante. O número de cliente é um atributo especial que atua como um identificador único para cada cliente, garantindo que não haja duplicatas na tabela de clientes.

### 2.2 Chaves Primárias e Chaves Estrangeiras

###### Chave Primária: Uma chave primária é um atributo (ou conjunto de atributos) que identifica exclusivamente cada registro em uma tabela. Em nosso exemplo, o "número de cliente" pode ser uma chave primária na tabela de clientes.

###### Chave Estrangeira: Uma chave estrangeira é um atributo em uma tabela que estabelece uma relação com a chave primária de outra tabela. Por exemplo, em uma tabela de pedidos, poderíamos ter uma chave estrangeira cliente_id que se relaciona com a chave primária "número de cliente" na tabela de clientes.

#   Aula - Tipos de Dados

### 1 Introdução
######  Nesta aula, vamos explorar os tipos de dados em bancos de dados e como eles são fundamentais para definir a estrutura e o comportamento das informações armazenadas. Os tipos de dados desempenham um papel crucial na garantia da precisão e consistência dos dados em um banco de dados.

### 2 O Que São Tipos de Dados
######  Tipos de dados em bancos de dados são categorias que especificam que tipo de informação pode ser armazenada em um campo ou coluna. Cada tipo de dado possui um conjunto de valores possíveis e regras para seu uso. A escolha do tipo de dado apropriado é essencial para garantir a integridade dos dados e otimizar o armazenamento.

### 2.1 Tipos de Dados Comuns
######  Texto (String):
######  CHAR(n): Armazena uma string de tamanho fixo de comprimento n.
######  VARCHAR(n): Armazena uma string de tamanho variável com comprimento máximo n.
######  TEXT: Armazena texto longo, sem limite específico de tamanho.
######  Numérico:  
######  INTEGER: Armazena números inteiros.
######  NUMERIC(p, s): Armazena números decimais com precisão p e escala s (pode ser usado para valores monetários).
######  FLOAT(n): Armazena números de ponto flutuante com n dígitos de precisão.
######  Data e Hora:
######  DATE: Armazena uma data (ano, mês, dia).
######  TIME: Armazena um horário do dia (hora, minuto, segundo).
######  TIMESTAMP: Armazena data e hora.
######  Booleano:
######  BOOLEAN: Armazena valores verdadeiro (true) ou falso (false).
######  Binário:
######  BLOB: Armazena dados binários, como imagens ou arquivos.
######  Chave Primária e Chave Estrangeira:
######  SERIAL: Um tipo especial usado para criar chaves primárias autoincrementadas.
######  INTEGER ou BIGINT: Usados para chaves primárias ou chaves estrangeiras, dependendo do tamanho necessário.

### 2.2 Escolhendo o Tipo de Dado Adequado
######  A escolha do tipo de dado adequado é importante para economizar espaço de armazenamento e garantir a precisão dos cálculos. Por exemplo, armazenar números inteiros em vez de números de ponto flutuante quando não é necessário precisão decimal economiza espaço. Além disso, usar tipos de dados apropriados ajuda a evitar erros de conversão.

### 2.3 Normalização de Dados e Tipos de Dados
######  Ao projetar um banco de dados, os tipos de dados desempenham um papel na normalização de dados, o processo de organizar os dados para eliminar redundâncias e manter a integridade referencial. Tipos de dados apropriados ajudam a definir as relações entre tabelas e a otimizar a estrutura do banco de dados.

#   Aula - Chaves Primárias e Chaves Estrangeiras
### 1 Introdução
######  Nesta aula, abordaremos dois conceitos fundamentais em bancos de dados relacionais: chaves primárias e chaves estrangeiras. Esses conceitos desempenham um papel crucial na organização e na manutenção da integridade dos dados em bancos de dados.

### 2 Chave Primária - Definição
######  Uma chave primária é um atributo ou conjunto de atributos em uma tabela de banco de dados que serve como identificador exclusivo para cada registro. Isso significa que nenhum valor na chave primária pode se repetir na tabela, garantindo que cada linha tenha uma identificação única. As chaves primárias são usadas para indexar e buscar registros de forma eficiente.

### 2.1 Chave Primária - Características
###### Deve conter valores exclusivos: Cada valor na chave primária deve ser único em relação a todas as outras linhas da tabela.
###### Deve ser não nulo: Não é permitido ter valores nulos na chave primária, pois o objetivo é identificar exclusivamente cada registro.
###### Pode ser composta: Uma chave primária pode ser composta por vários atributos, desde que a combinação deles seja única.

### 3 Chave Estrangeira - Definição
######  Uma chave estrangeira é um atributo em uma tabela que estabelece uma relação com a chave primária de outra tabela. Essa relação é usada para conectar dados relacionados entre diferentes tabelas. As chaves estrangeiras ajudam a manter a integridade referencial, garantindo que os dados relacionados sejam consistentes e precisos.

### 3.1 Chave Estrangeira - Características
###### Deve corresponder a uma chave primária: A chave estrangeira deve se referir a uma chave primária em outra tabela.
###### Pode ser nula: Em algumas situações, uma chave estrangeira pode ter valores nulos, indicando a ausência de uma relação.

### 3.2 Exemplo de Uso
###### Vamos considerar um exemplo de banco de dados de uma biblioteca:
###### Tabela "Livros" (com chave primária):
###### ID_Livro (Chave Primária)
###### Título
###### Autor
###### Ano de Publicação
###### Tabela "Empréstimos" (com chave estrangeira):
###### ID_Empréstimo (Chave Primária)
###### ID_Livro (Chave Estrangeira)
###### Data do Empréstimo
###### Data de Devolução
###### ID_Usuário (Chave Estrangeira)
###### Neste exemplo, a tabela "Empréstimos" utiliza chaves estrangeiras (ID_Livro e ID_Usuário) para se relacionar com as chaves primárias nas tabelas "Livros" e "Usuários". Isso permite que cada empréstimo seja associado a um livro específico e a um usuário específico.
###### 4 Importância das Chaves Primárias e Chaves Estrangeiras
###### Mantêm a integridade dos dados: As chaves primárias garantem que cada registro seja único, enquanto as chaves estrangeiras mantêm a consistência dos dados relacionados.
###### Facilitam a consulta: As chaves primárias e estrangeiras simplificam a busca e a recuperação de dados relacionados entre tabelas.

#   Aula - Normalização
### 1 Introdução
######  Nesta aula, vamos explorar um conceito essencial no projeto de bancos de dados relacionais: a normalização de dados. A normalização é um processo que visa organizar eficientemente os dados em tabelas, eliminando redundâncias e reduzindo a probabilidade de erros nos bancos de dados. Entender a normalização é fundamental para projetar sistemas de banco de dados que sejam eficientes, flexíveis e confiáveis.

### 2 Por que a Normalização é Importante
######  A normalização de dados tem vários objetivos fundamentais:

######  Reduzir a Redundância: Evitar a duplicação de dados em várias tabelas, economizando espaço de armazenamento e mantendo a consistência dos dados.

######  Minimizar Atualizações Anômalas: Evitar situações em que a atualização de um valor em uma tabela afeta incorretamente outros valores em outras tabelas.

######  Facilitar a Manutenção: Tornar mais simples a inserção, atualização e exclusão de dados sem comprometer a integridade dos dados.

######  Melhorar o Desempenho: Ajudar a otimizar a velocidade de recuperação de dados e consultas.

### 3 Formas Normais
######  A normalização segue uma série de regras chamadas formas normais. As formas normais são níveis progressivos de organização de dados, desde a primeira forma normal (1NF) até a quinta forma normal (5NF). Vamos dar uma olhada nas três primeiras formas normais:

######  Primeira Forma Normal (1NF):
######  Cada coluna em uma tabela deve conter apenas valores atômicos (indivisíveis).
######  Cada registro deve ser único e identificado por uma chave primária.
######  Segunda Forma Normal (2NF):
######  Deve atender à 1NF.
######  Todos os atributos não chave devem depender completamente da chave primária.
######  Se uma tabela tiver uma chave primária composta, cada atributo não chave deve depender da chave primária completa, não de parte dela.
######  Terceira Forma Normal (3NF):
######  Deve atender à 2NF.
######  A eliminação transitiva deve ser eliminada. Isso significa que não deve haver dependências entre atributos não chave. Se um atributo não chave depende de outro atributo não chave, ele deve ser movido para uma tabela separada.

### 4 Exemplo de Normalização
######  Considere uma tabela de pedidos em um sistema de comércio eletrônico:

######  Tabela "Pedidos":
######  ID_Pedido (Chave Primária)
######  Data_Pedido
######  ID_Cliente
######  Nome_Cliente
######  Endereço_Cliente
######  Essa tabela não está normalizada, pois informações do cliente (Nome_Cliente e Endereço_Cliente) são repetidas em cada registro de pedido. Para normalizá-la, criaríamos uma tabela separada para clientes, mantendo apenas a referência (ID_Cliente) na tabela de pedidos.

#    Aula - Banco de Dados: PostgreSQL

### 1 Introdução
######  Nesta aula, introduziremos o banco de dados que iremos trabalhar a partir das próximas aulas, o PostgreSQL.

### 2 Sobre o Postgres
######  O PostgreSQL, muitas vezes chamado de Postgres, é um sistema de gerenciamento de banco de dados relacional de código aberto. Ele é conhecido por sua confiabilidade, escalabilidade e recursos avançados de extensibilidade. O PostgreSQL foi originalmente desenvolvido na Universidade da Califórnia, em Berkeley, nos Estados Unidos, na década de 1980, e desde então tem sido mantido por uma comunidade de desenvolvedores em todo o mundo.

### 2.1 Características Principais
######  Modelo Relacional: O PostgreSQL segue o modelo relacional de banco de dados, o que significa que os dados são organizados em tabelas com linhas e colunas.

######  Compatibilidade SQL: Ele oferece suporte ao SQL padrão, tornando-o compatível com muitas aplicações e ferramentas que utilizam a linguagem SQL.

######  Extensibilidade: O PostgreSQL permite a criação de tipos de dados personalizados, funções e operadores, o que o torna altamente extensível e adaptável a necessidades específicas.

######  Integridade de Dados: Oferece suporte a restrições de integridade referencial, gatilhos ######    (triggers) e verificações para manter a integridade dos dados.

######  Recursos Avançados de Indexação: Oferece várias opções de indexação, incluindo índices ###### B-tree, GIN, GiST e SP-GiST, que podem ser úteis em diferentes cenários de busca e consulta.

######  Transações ACID: O PostgreSQL segue o modelo ACID (Atomicidade, Consistência, Isolamento e ###### Durabilidade) para garantir a integridade e confiabilidade dos dados.

######  Suporte a Geoespacial: Possui recursos avançados para manipulação de dados geoespaciais, tornando-o uma escolha popular em aplicações de geolocalização.

######  Replicação e Balanceamento de Carga: Oferece suporte a replicação e balanceamento de carga para criar ambientes de alta disponibilidade e escalabilidade.

######  Suporte a JSON e NoSQL: Além de seu suporte a dados relacionais, o PostgreSQL também oferece recursos para trabalhar com dados semi-estruturados, como JSON.

######  Segurança: Fornece recursos avançados de segurança, incluindo controle de acesso baseado em funções (RBAC), criptografia e autenticação.

### 2.2 Porque PostgreSQL
######  O PostgreSQL é uma escolha popular para uma ampla variedade de aplicativos, desde pequenos projetos pessoais até sistemas empresariais de missão crítica, devido à sua flexibilidade, desempenho e confiabilidade. Além disso, como é uma solução de código aberto, é amplamente adotado e mantido por uma comunidade ativa de desenvolvedores, o que resulta em atualizações frequentes e suporte contínuo.

#   Aula - Criando, selecionando e excluindo banco de dados

### 1 Introdução
######  Nesta aula, aprenderemos a criar, selecionar e excluir bancos de dados PostgreSQL utilizando o psql.

### 2 Criando o banco de dados
######  Para criar um banco de dados, após o login de usuário, podemos criar um banco rodando o comando abaixo:
    CREATE DATABASE nome_do_banco;

### 3 Listando banco de dados
######  Após criar o banco, você pode visualizar a lista de bancos de dados no psql executando o comando:
    \l

### 4 Selecionando um banco de dados
######  Para trabalhar diretamente com um banco de dados pelo terminal, é fundamental selecionar o banco desejado. Use o seguinte comando:
    \c nome_do_banco

### 5 Excluir banco de dados
######  É possível excluir bancos de dados utilizando o seguinte comando SQL:
    DROP DATABASE m4_books_api;

#   Aula - Criando e excluindo tabelas
### 1 Introdução
######  Nesta aula, vamos abordar a criação e exclusão de tabelas em bancos de dados.

### 2 Criando tabelas
######  Para criar tabelas, utilizaremos o comando CREATE TABLE. Abaixo, apresentamos um exemplo de código SQL:
    CREATE TABLE nome_da_tabela (
        /* Colunas */
    );

######  Durante o comando de criação, você deve especificar o nome da tabela e, ao abrir os parênteses, descrever cada uma das colunas da tabela. Vamos conferir um exemplo prático:
    CREATE TABLE products (
        "id" SERIAL PRIMARY KEY,
        "name" VARCHAR(250) NOT NULL,
        "description" TEXT,
        "price" INTEGER NOT NULL,
        "createdAt" TIMESTAMP NOT NULL,
        "updatedAt" TIMESTAMP NOT NULL
    );
###### No exemplo acima, estamos criando uma tabela chamada "products" com as colunas "id," "name," "description," "price," "createdAt," e "updatedAt."

### 2.1 SERIAL PRIMARY KEY
######  Observe que a coluna "id" foi definida como SERIAL, o que fará com que ela seja autoincrementada pelo banco de dados. Além disso, a marca PRIMARY KEY define a coluna como chave primária dos registros na tabela, o que será fundamental ao trabalhar com relacionamentos entre tabelas.
### 2.2 NOT NULL
######  Uma novidade introduzida neste exemplo é a instrução NOT NULL, que torna a coluna obrigatória. Sem ela, por padrão, o SQL cria colunas opcionais.
### 2.3 Aspas duplas (")
######  No exemplo acima, o nome de cada coluna foi envolto em aspas duplas. Isso é uma boa prática, pois, se as aspas duplas estiverem ausentes, o PostgreSQL não fará distinção entre letras maiúsculas e minúsculas.
    "createdAt" TIMESTAMP NOT NULL
### 2.4 Excluindo tabelas
######  Caso seja necessário excluir uma tabela, seja por erro na criação ou para efetuar alterações na estrutura, você pode usar o comando DROP TABLE. Confira o exemplo abaixo:
    DROP TABLE products; 

# Aula - Inserindo dados

### 1 Introdução
######  Nesta aula, exploraremos a inserção de dados em tabelas do PostgreSQL.

### 2 Inserindo recursos
######  Para inserir dados em tabelas, utilizaremos o comando INSERT INTO. O formato padrão deste comando é ilustrado a seguir:
    INSERT INTO (colunas) VALUES (valores);
######  Vamos examinar um exemplo prático:
    INSERT INTO products ("name", "description", "price", "createdAt", "updatedAt")
    VALUES ('Computador', 'Computador bonito', 250000, '2023-10-16', '2023-10-16');

######  Neste exemplo, inserimos um novo produto na tabela "products," e observe que não foi necessário fornecer um valor para a coluna "id," pois ela é autoincrementada pelo banco de dados.

### 2.1 Inserção múltipla
######  O comando INSERT não se limita a inserir um recurso de cada vez; ele permite a inserção de vários recursos de uma só vez. Veja o exemplo de código a seguir:

    INSERT INTO products ("name", "description", "price", "createdAt", "updatedAt")
    VALUES ('Notebook', 'Notebook bonito', 350000, '2023-10-16', '2023-10-16'),
    ('Mouse', 'Mouse bonito', 25000, '2023-10-16', '2023-10-16');

### 2.2 RETURNING
######  Ao adicionar um ou mais recursos, é possível recuperar os valores inseridos usando a cláusula RETURNING. Confira o exemplo abaixo:
    INSERT INTO products ("name", "description", "price", "createdAt", "updatedAt")
    VALUES ('Computador Gamer', 'Computador gamer bonito', 550000, '2023-10-16', '2023-10-16')
    RETURNING *;

#   Aula - Lendo Dados

### 1 Introdução
######  Nesta aula, vamos abordar a leitura de dados em tabelas do PostgreSQL.

### 2 Leitura de dados
######  Para realizar a leitura de dados em tabelas, utilizaremos o comando SELECT. O formato padrão deste comando é ilustrado a seguir:
    SELECT colunas FROM nome_da_tabela;

######  Vamos analisar um exemplo prático:
    /* todas as colunas */
    SELECT * FROM products;
    /* colunas específicas */
    SELECT "name", "description" from products;

######  No exemplo acima, estamos realizando uma consulta na tabela "products". No primeiro exemplo, estamos trazendo todas as colunas representadas pelo "*", e no segundo, somente as colunas "name" e "description."

### 2.1 WHERE
######  Podemos fazer leituras filtradas em nosso banco de dados usando a cláusula WHERE, o que nos permite fornecer uma condição para a consulta. Confira os exemplos abaixo:
    SELECT * FROM products WHERE id = 1;

    SELECT * FROM products WHERE price < 300000;

######  Nos exemplos acima, estamos realizando duas consultas:
######  Busca de um recurso específico com id igual 1.
######  Busca de recursos com preços inferiores a 3000,00.

### 2.2 LIKE
######  Além de utilizar operadores relacionais para criar nossas regras de filtragem, podemos comparar valores de texto usando o LIKE. Ao combinar o LIKE com o '%', é possível filtrar texto de forma parcial. Veja o exemplo abaixo:
    SELECT * FROM products WHERE name LIKE '%Computador%';

### 2.3 ILIKE
######  Mesmo sendo uma ferramenta flexível, o LIKE é sensível a variações entre maiúsculas e minúsculas. Se desejarmos ignorar essa diferenciação na filtragem, podemos usar o ILIKE. Confira o exemplo abaixo:
    SELECT * FROM products WHERE name ILIKE '%computador%';

#   Aula - Atualizando dados
### 1 Introdução
######  Nesta aula, vamos aprender sobre atualização com PostgreSQL.
### 2 Atualização de dados
######  Para realizar a atualização de dados em uma tabela, utilizaremos o comando UPDATE. O formato padrão deste comando é ilustrado abaixo:
    UPDATE nome_da_tabela SET coluna = valores WHERE filtro;
######  Vamos analisar o exemplo contextualizado:
    UPDATE products SET price = 320000 WHERE id = 1;
######  Neste exemplo, estamos atualizando a coluna "price" na tabela de produtos, no recurso com "id" igual a 1.

### 2.1 Atualizando múltiplas colunas
######  Podemos usar a sintaxe padrão para atualizar múltiplas colunas. No entanto, dependendo da quantidade, ela pode se tornar muito extensa. Confira o exemplo abaixo:
    UPDATE products SET name = "Computador X", price = 320000 WHERE id = 1;
######  Portanto, temos uma alternativa sintática interessante:
    UPDATE products SET ("name", "price") = ROW ('Computador X', 300000) WHERE id = 1;
######  Dessa forma, conseguimos atualizar múltiplas colunas e obter uma consulta semelhante à inserção de dados.

### 2.2 RETURNING
######  Assim como na inserção de dados, é possível utilizar a claúsula RETURNING para obter os recursos atualizados. Exemplo:
    UPDATE products SET price = 360000 WHERE id = 2 RETURNING *;

#   Aula - Exclusão de dados
### 1 Introdução
######  Nesta aula, vamos abordar a exclusão de dados em tabelas no PostgreSQL.

### 2 Exclusão de dados
######  Para remover registros de tabelas, podemos utilizar o comando DELETE FROM. O formato padrão deste comando é ilustrado abaixo:
    DELETE FROM nome_da_tabela WHERE filtro;
######  Vamos analisar um exemplo contextualizado:
    DELETE FROM products WHERE id = 1;
######  Estamos excluindo na tabela "products" o recurso com "id" igual a 1.

### 2.1 Exclusão em massa
######  Para excluir recursos em massa, sem a necessidade de especificar um filtro, podemos usar o comando TRUNCATE. Confira o exemplo abaixo:
    TRUNCATE TABLE products;
######  Com este comando, estaremos limpando completamente a tabela "products".

#    Aula - Funções de Agregação

### 1 Introdução
######  Nesta aula, exploraremos as funções de agregação em SQL, usadas para resumir e calcular informações estatísticas sobre os dados em uma tabela. As funções de agregação são fundamentais para realizar análises e obter insights a partir de grandes conjuntos de dados.

### 2 Funções de Agregação Comuns
######  Existem várias funções de agregação comuns em SQL, incluindo:

######  COUNT: Calcula o número de registros em uma coluna. 
######  SUM: Calcula a soma dos valores em uma coluna numérica.
######  AVG: Calcula a média dos valores em uma coluna numérica.
######  MIN: Retorna o valor mínimo em uma coluna.
######  MAX: Retorna o valor máximo em uma coluna.

### 2.1 COUNT
    SELECT COUNT(*) AS TotalPedidos FROM Pedidos;
######  Neste exemplo, COUNT(*) retorna o número total de registros na tabela "Pedidos," que é o número total de pedidos feitos.

### 2.2 SUM
######  Suponha que queremos calcular o valor total de todos os pedidos:
    SELECT SUM(Valor) AS TotalValorPedidos FROM Pedidos;
######  Aqui, SUM(Valor) soma todos os valores dos pedidos na coluna "Valor" e nos retorna o valor total.

### 2.3 AVG
######  Suponha que queremos calcular a média de idade dos clientes em uma tabela "Clientes":
    SELECT AVG(Idade) AS MediaIdadeClientes FROM Clientes;
######  A função AVG(Idade) calcula a média das idades dos clientes na tabela "Clientes."

### 2.4 MIN e MAX
######  Vamos encontrar o cliente mais novo e o mais velho em uma tabela "Clientes":
    SELECT MIN(Idade) AS MenorIdade, MAX(Idade) AS MaiorIdade FROM Clientes;

######  As funções MIN(Idade) e MAX(Idade) nos retornam a idade do cliente mais novo e do cliente mais velho, respectivamente.

#   Aula - Group By e Having
### 1 Introdução
###### Nesta aula, exploraremos as cláusulas GROUP BY e HAVING em SQL. Essas cláusulas são fundamentais para a agregação de dados e a realização de consultas mais complexas em um banco de dados.

### 2 GROUP BY

######  A cláusula GROUP BY é usada para agrupar registros com base em valores semelhantes em uma ou mais colunas. Ela permite criar grupos de registros que compartilham características comuns em uma coluna específica e, em seguida, realizar operações de agregação, como COUNT, SUM, AVG, etc., nos grupos criados.

######  Exemplo de GROUP BY:

######  Suponha que temos uma tabela "Vendas" com informações sobre vendas de produtos. Queremos calcular o total de vendas por categoria de produto:
    SELECT Categoria, SUM(Valor) AS TotalVendas
    FROM Vendas
    GROUP BY Categoria;
######  Neste exemplo, usamos GROUP BY para agrupar as vendas por categoria e, em seguida, calculamos a soma dos valores de cada categoria.
### 3 HAVING
######  A cláusula HAVING é usada para filtrar grupos resultantes de uma cláusula GROUP BY. Ela permite aplicar condições aos grupos, de forma semelhante à cláusula WHERE, mas funciona após o GROUP BY e se aplica aos grupos em vez de registros individuais.

#####   Exemplo de HAVING:

######  Suponha que queremos encontrar as categorias de produtos com vendas totais superiores a $1.000:
    SELECT Categoria, SUM(Valor) AS TotalVendas
    FROM Vendas
    GROUP BY Categoria
    HAVING SUM(Valor) > 1000;
######  Neste exemplo, usamos HAVING para filtrar apenas as categorias com vendas totais superiores a $1.000 após o GROUP BY.
 