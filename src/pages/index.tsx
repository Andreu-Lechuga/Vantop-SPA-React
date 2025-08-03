import Head from 'next/head';
import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Vehicle } from '../components/Vehicle';
import { Contact } from '../components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>VanTop - Servicio de Transporte Privado</title>
        <meta name="description" content="VanTop - Servicio de transporte privado de calidad en Santiago, Chile. Transporte aeropuerto, eventos, servicio por horas o días." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Hero />
        <Services />
        <Vehicle />
        <Contact />
      </Layout>
    </>
  );
}
