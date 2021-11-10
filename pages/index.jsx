import MyCard from '../components/Card';
import styled from 'styled-components';
import Image from 'next/image';
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Landing page</title>
      </Head>
      <MyCard title="Aprender next" img="/next.jpg">
        Aprender next de um jeito fácil vai te proporcionar muitas
        oportunidades.
      </MyCard>
      <MyCard title="Fazer freelances" img="/workana.jpg">
        Muita gente precisa de landing pages para vender seus produtos
      </MyCard>
      <MyCard title="Ter uma base sólida" img="/ReactJs.png">
        Ter uma base sólida é muito importante e por isso, sempre procure tempo
        para praticar o básico também
      </MyCard>
      <MyCard title="Fazer freelances" img="/linkedin.png">
        Compartilhe seu conhecimento no linkedin e amplie sua rede e com isso, faça seu nome na área
      </MyCard>
    </>
  );
}
