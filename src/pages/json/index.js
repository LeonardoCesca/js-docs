import React from "react"
import { graphql } from "gatsby"
import { Content, Title, Subtitle, Paragraph, Links, ContentInfos } from "../styles"
import Iframes from "../../components/iframes/"

export default function Json({ data }) {
  const {
    title,
    subtitle,
  } = data.markdownRemark.frontmatter
  return (
    <Content>
        <Title>{title}</Title>
        <Paragraph>{subtitle}</Paragraph>
        <Subtitle>Sintaxe</Subtitle>
        <Paragraph>
            A sintaxe do JSON é bastante simples e muito semelhante aos objetos do Javascript, com facil implementação;
            para implementar um JSON, será implementado um array de objetos, que para cada posição atribuida ao JSON irá conter um nome/rótulo conhecido como chave, que irá descrever seu significado(escrito entre aspas) e será utilizado na hora de referenciar-mos este valor,<br />
            logo após a chave irá conter o seu valor referente separado por " : ".<br />
        </Paragraph>
        <Iframes
            description="iframe JSON Basic Example"
            url="https://jsfiddle.net/RenanSchmitt/4zLkpg0o/23/embedded/js/"
        />
        <Subtitle>Tipo de dados</Subtitle>
        <Paragraph>
            Um JSON pode conter multiplas chaves e multiplos valores, onde os mesmos serão separados por virgula, <br />
            este valores poderão ser do tipo simples: strings, boolean e numérico; porém também pode ser utilizado valores do tipo: array, objetos e vazio (lembrando que para representar valores nulos será necessário utilizar a palavra-chave " null ") <br />  
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
        infos
      }
    }
  }
`
