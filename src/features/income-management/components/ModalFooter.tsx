import { Flex, Box, Image, Text, Stack, Divider } from '@mantine/core';
import { IconPhoneFilled, IconWorld, IconInfoCircleFilled } from '@tabler/icons-react';

const ModalFooter = () => {
  return (
    <>
    <Divider my='sm' color='gray.3' />
    <Flex align="center" justify="space-between" w="100%" p="md" bg="white">
      {/* Left: Address and Contact Info */}
      <Stack gap={0} align="flex-start" justify="center" style={{ flex: 1 }} className="">
        <Text fz={14} fw={500} style={{ letterSpacing: 1 }}>
          4th Floor, Administration Building, MWSS Complex,
        </Text>
        <Text fz={14} fw={500} style={{ letterSpacing: 1 }}>
          489 Katipunan Ave., Balara, Quezon City 1105 Philippines
        </Text>
        <Text fz={14} fw={700} style={{ letterSpacing: 1, marginTop: 8, display: 'flex', alignItems: 'center' }}>
          <IconPhoneFilled size={18} style={{ marginRight: 8 }} />
          +63(2)922-3757/922-2969  /  +63(2)921-2887
        </Text>
        <Text fz={14} fw={500} style={{ letterSpacing: 1, marginTop: 8, display: 'flex', alignItems: 'center' }}>
          <IconWorld size={18} style={{ marginRight: 8 }} />
          www.mwss.gov.ph
        </Text>
        <Text fz={14} fw={500} style={{ letterSpacing: 1, display: 'flex', alignItems: 'center' }}>
          <IconInfoCircleFilled size={18} style={{ marginRight: 8 }} />
          info@mwss.gov.ph
        </Text>
      </Stack>
      {/* Right: Logo */}
      <Box ml={32}>
        <Image src="/tuv-logo.svg" alt="TUV Logo" height={56} width={56} fit="contain" />
      </Box>
    </Flex>
    </>

  );
};

export default ModalFooter;