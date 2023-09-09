# Instruções para executar o projeto:

## Installation
### 1.1 Clone ou baixe o zip do diretório no GitHub;
### 1.2 Abrar o Terminal e execute o comando;
npm install

### 1.3 Entre na pasta api;
### 1.4 Entre no arquivo datab.js;

### 1.5 Faça as modificações dos parâmetros de conexão com o banco de dados;

    host: "localhost",
    user: "root",
    password: "54321",
    database: "shopper"

### 1.6 Para criar seu schema no banco e dados MySQL e suas respectivas tabelas, execute os comandos listados dentro do Schema escolhido;

```bash
-- nome do SchemaExemplo

use SchemaExemplo; 

CREATE TABLE products 
( 
	code bigint PRIMARY KEY, # CODIGO DO PRODUTO 
	name varchar(100) NOT NULL, # NOME DO PRODUTO
	cost_price decimal(9,2) NOT NULL, # CUSTO DO PRODUTO
	sales_price decimal(9,2) NOT NULL # PREÇO DE VENDA DO PRODUTO

INSERT INTO products VALUES (16,'AZEITE  PORTUGUÊS  EXTRA VIRGEM GALLO 500ML',18.44,20.49);
INSERT INTO products VALUES (18,'BEBIDA ENERGÉTICA VIBE 2L',8.09,8.99);
INSERT INTO products VALUES (19,'ENERGÉTICO  RED BULL ENERGY DRINK 250ML',6.56,7.29);
INSERT INTO products VALUES (20,'ENERGÉTICO RED BULL ENERGY DRINK 355ML',9.71,10.79);
INSERT INTO products VALUES (21,'BEBIDA ENERGÉTICA RED BULL RED EDITION 250ML',10.71,11.71);
INSERT INTO products VALUES (22,'ENERGÉTICO  RED BULL ENERGY DRINK SEM AÇÚCAR 250ML',6.74,7.49);
INSERT INTO products VALUES (23,'ÁGUA MINERAL BONAFONT SEM GÁS 1,5L',2.15,2.39);
INSERT INTO products VALUES (24,'FILME DE PVC WYDA 28CMX15M',3.59,3.99);
INSERT INTO products VALUES (26,'ROLO DE PAPEL ALUMÍNIO WYDA 30CMX7,5M',5.21,5.79);
INSERT INTO products VALUES (1000,'BEBIDA ENERGÉTICA VIBE 2L - 6 UNIDADES',48.54,53.94);
INSERT INTO products VALUES (1010,'KIT ROLO DE ALUMINIO + FILME PVC WYDA',8.80,9.78);
INSERT INTO products VALUES (1020,'SUPER PACK RED BULL VARIADOS - 6 UNIDADES',51.81,57.00);

CREATE TABLE packs 
(
  id bigint AUTO_INCREMENT PRIMARY KEY, # id primario da tabela
  pack_id bigint NOT NULL,  # id do produto pack 
  product_id bigint NOT NULL, # id do produto componente
  qty bigint NOT NULL, # quantidade do produto componente no pack
  CONSTRAINT FOREIGN KEY (pack_id) REFERENCES products(code),
  CONSTRAINT FOREIGN KEY (product_id) REFERENCES products(code)
);

INSERT INTO packs (pack_id,product_id, qty) VALUES (1000,18,6);
INSERT INTO packs (pack_id,product_id, qty) VALUES (1010,24,1);
INSERT INTO packs (pack_id,product_id, qty) VALUES (1010,26,1);
INSERT INTO packs (pack_id,product_id, qty) VALUES (1020,19,3);
INSERT INTO packs (pack_id,product_id, qty) VALUES (1020,21,3);
);
```

### 1.7 Abrar o terminal e execute o comando:
```
npm start
```
## Ao executar o comando acima, uma mensagem similar a esta irá aparecer no canto inferior da tela: 
![image](https://github.com/alissonas3/shoppertest/assets/92827772/5991729d-2c57-4dae-9f9d-2460bd35b4da)

## 2º Passo
### 2.1 Entre na pasta frontend;
### 2.2 Abrir o terminal e execute o comando:
```
npm start
```
### Uma página do navegador será aberta para visualização do projeto.
