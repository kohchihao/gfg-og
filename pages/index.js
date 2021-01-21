import Head from 'next/head';
import WishMetaCard from '@components/wishes/WishMetaCard';
import { ChakraProvider, Flex } from '@chakra-ui/react';

export default function Home() {
  return (
    <ChakraProvider>
      <Flex
        justify="center"
        align="center"
        height="630px"
        width="1200px"
        backgroundColor="gray.50"
      ></Flex>
    </ChakraProvider>
  );
}
