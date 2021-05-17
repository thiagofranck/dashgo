import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true}: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Thiago Henrique</Text>
          <Text color="gray.300" fontSize="small">
            thiagofranck@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Thiago Henrique"
        src="https://github.com/thiagofranck.png"
      />
    </Flex>
  );
}
