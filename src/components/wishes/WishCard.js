import React from 'react';
import {
  Avatar,
  Flex,
  Text,
  Tag,
  TagLabel,
  Stack,
  Grid,
} from '@chakra-ui/react';

const WishCard = ({
  name,
  profileImageUrl,
  title,
  description,
  categoryTags,
}) => {
  return (
    <Grid
      borderRadius="5px"
      height="400px"
      width="345px"
      row="2fr 6fr 2fr"
      column="1fr"
      boxShadow="0px 0px 5px 0px rgba(37, 42, 49, 0.16), 0px 2px 8px 0px rgba(37, 42, 49, 0.12)"
      textAlign="left"
      as={Flex}
      flexDirection="column"
      fontFamily="Trebuchet MS"
    >
      <WishCardHeader name={name} profileImageUrl={profileImageUrl} />
      <WishCardContent title={title} description={description} />
      <WishCardFooter categoryTags={categoryTags} />
    </Grid>
  );
};

const WishCardHeader = ({ name, profileImageUrl }) => {
  return (
    <Flex
      paddingRight="20px"
      paddingLeft="20px"
      paddingTop="10px"
      paddingBottom="10px"
      flexDirection="row"
      alignItems="center"
      width="100%"
    >
      <Avatar
        float="left"
        height="40px"
        width="40px"
        name={name}
        src={profileImageUrl?.small || profileImageUrl?.raw}
      />
      <Text
        color="black"
        float="left"
        marginLeft="5px"
        fontSize="xs"
        fontFamily="Trebuchet MS"
        display="flex"
        fontSize="12px"
        fontWeight="normal"
        lineHeight="initial"
      >
        {name}
      </Text>
    </Flex>
  );
};

const WishCardContent = ({ title, description }) => {
  return (
    <Flex
      margin="10px"
      flexDirection="column"
      paddingLeft="10px"
      paddingRight="10px"
    >
      <Text
        noOfLines={3}
        wordBreak="break-word"
        overflow="hidden"
        fontWeight="bold"
        fontSize="14px"
        lineHeight="20px"
      >
        {title}
      </Text>

      <Text
        fontFamily="Trebuchet MS"
        whiteSpace="pre-wrap"
        marginTop="4px"
        noOfLines={8}
        wordBreak="break-word"
        overflow="hidden"
        fontSize="14px"
        as="pre"
      >
        {description}
      </Text>
    </Flex>
  );
};

const WishCardFooter = ({ categoryTags }) => {
  return (
    <Flex
      margin="14px"
      alignItems="center"
      paddingLeft="10px"
      paddingRight="10px"
    >
      <Stack direction="row" spacing="16px">
        {categoryTags.map((category) => (
          <Tag
            size="sm"
            borderRadius="full"
            backgroundColor="rgb(245, 247, 249)"
            border="1px solid rgb(232, 237, 241);"
            color="black"
            marginBottom="8px"
          >
            <TagLabel
              fontWeight="500"
              fontFamily={`Roboto, -apple-system, ".SFNSText-Regular", "San Francisco", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif`}
            >
              {category}
            </TagLabel>
          </Tag>
        ))}
      </Stack>
    </Flex>
  );
};

export default WishCard;
