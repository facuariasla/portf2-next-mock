import { Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Cover from '../components/homecomp/Cover'
import Header from '../components/homecomp/Header'
import Layout from '../components/Layout'
// amarillo #FFC700

const Home: NextPage = () => {
  return (
    <Layout>
      <Stack h='620' w='100%' maxW='1280px' p={30}>
        <Header/>
        <Cover/>
      </Stack>
    </Layout>
  )
}

export default Home
