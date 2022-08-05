import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'

export default function Home() {
  return (
   <Container>
     <Content>
      <Infos>
      <Name> WESLEY MIRANDA </Name>
        <Function> FRONT END </Function>
        <Intro>
        <h3>TEM ALGO EM MENTE JÁ?</h3>
            CONHEÇA AGORA MEUS PROJETOS E ALGUMAS CURIOSIDADES SOBRE MEUS ESTUDOS.
        </Intro>
        <Link href="projects">
          <LinkProjects>CLIQUE AQUI PARA SE AVENTURAR NOS CODIGOS<FaArrowRight /></LinkProjects>
        </Link>
      </Infos>
      <Logo>
        <Img src="/images/logo.png" alt="logo" />
      </Logo>
     </Content>
   </Container>
  )
}
