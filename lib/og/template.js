import WishMetaCard from '@components/wishes/WishMetaCard';
import { ChakraProvider, Flex } from '@chakra-ui/react';

export function getHtml(wish) {
  return (
    <ChakraProvider>
      <Flex justify="center" align="center" height="100vh">
        <WishMetaCard
          name={wish.organization.name}
          profileImageUrl={wish.user.profileImageUrl}
          title={wish.title}
          description={wish.description}
          categoryTags={wish.categories.map((category) => category.name)}
        />
      </Flex>
    </ChakraProvider>
  );
}
