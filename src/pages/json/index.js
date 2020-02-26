import React from "react"
import { graphql } from "gatsby"
import { Content, Title, Subtitle, Paragraph } from "../styles"
import Iframes from "../../components/iframes/"
import SEO from "../../components/seo"

export default function Json({ data }) {
  const {
    title,
    subtitle
  } = data.markdownRemark.frontmatter
  return (
    <Content>
        <SEO
          title={title}
          description={subtitle}
        />
        <Title>{title}</Title>
        <Paragraph>{subtitle}</Paragraph>
        <Subtitle>Sintaxe</Subtitle>
        <Paragraph>
            A sintaxe do JSON é bastante simples e muito semelhante aos objetos do Javascript, com facil implementação;
            para implementar um JSON, será implementado um array de objetos, que para cada posição atribuida ao JSON irá conter um nome/rótulo conhecido como chave,
             que irá descrever seu significado(escrito entre aspas) e será utilizado na hora de referenciar-mos este valor,<br />
            logo após a chave irá conter o seu valor referente separado por " : ".<br />
        </Paragraph>
        <Iframes
            description="iframe JSON Basic Example"
            url="https://jsfiddle.net/RenanSchmitt/4zLkpg0o/23/embedded/js/"
        />
        <Subtitle>Tipo de dados</Subtitle>
        <Paragraph>
            Um JSON pode conter multiplas chaves e multiplos valores, onde os mesmos serão separados por virgula, <br />
            este valores poderão ser do tipo simples: strings, boolean e numérico; porém também pode ser utilizado valores do tipo: array, objetos e vazio
             (lembrando que para representar valores nulos será necessário utilizar a palavra-chave " null ") <br />  
        </Paragraph>
        <Iframes
            description="iframe JSON Types Example"
            url="https://jsfiddle.net/RenanSchmitt/t4Lgky92/15/embedded/js/"
        />
        <Subtitle>Multiplos objetos</Subtitle>
        <Paragraph>
            O JSON oferece a possibilidade de trabalhar com multiplos objetos dentro do mesmo, para fazer o uso de multiplos objetos é bastante simples, basta apenas você criar um novo jogo de chaves, separando cada novo objeto por virgula ","; para cada novo objeto criado o mesmo pode conter todas ou mesmo nenhuma das chaves do objeto anterior.  
        </Paragraph>
        <Iframes
            description="iframe JSON Example"
            url="https://jsfiddle.net/RenanSchmitt/xkhfgo9s/4/embedded/js/"
        />
        <Subtitle>Trabalhando com JSON</Subtitle>
        <Paragraph>
          Trabalhar com o JSON é extramente simples, devido sua facil sintaxe, podemos ter acesso aos seus componentes utilizando suas chave, trabalhando com ele como um objeto Javascript, utilizando os códigos de exemplo logo acima, poderiamos acessar o conteudo de montadora da posição 0 do array de veiculos utilizando: " [0]["modelo"]";<br />
          ou também podemos adicionar este JSON em uma variavel, criando assim um objeto Javascript que pode ser acessado através do seu "nome[ indice].suaChave",
           facilitando assim ainda mais o seu uso.
        </Paragraph>
        <Iframes
            description="iframe JSON Example"
            url="https://jsfiddle.net/RenanSchmitt/1r06p7ye/5/embedded/js/"
        />
        <Subtitle>Exemplo prático</Subtitle>
        <Paragraph>
          Logo abaixo temos um exemplo prático de como utilizar um JSON para preencher o valor de uma tag <b>&lt;li&gt;</b> do HTML através da manipulação do DOM.
        </Paragraph>
        <Iframes
            description="iframe JSON Example"
            url="https://jsfiddle.net/RenanSchmitt/4fp7xz0w/38/embedded/js,html,result/"
        />
    </Content>
  )
}

export const jsonQuery = graphql`
  query JsonQuery {
    markdownRemark(fileAbsolutePath: { regex: "/json.md/" }) {
      frontmatter {
        title
        subtitle
        explanation
      }
    }
  }
`
