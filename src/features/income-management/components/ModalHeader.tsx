import { Flex, Box, Image, Text, Stack } from '@mantine/core';

const ModalHeader = () => {
  return (
    <Flex align="center" justify="space-between" w="100%" p="md" bg="white">
      {/* Left: MWSS Logo */}
      <Box>
        <Image src="/mwss-logo.svg" alt="MWSS Logo" height={56} width={56} fit="contain"  />
      </Box>
      {/* Center: Text */}
      <Stack gap={0} align="center" justify="center" style={{ flex: 1 }}  className='flex ml-2 text-center text-blue-800' >
        <Text fz={24} fw={500} style={{ letterSpacing: 1 }}>
          Republic of the Philippines
        </Text>
        <Text fz={24} fw={700} style={{ letterSpacing: 1 }}>
          METROPOLITAN WATERWORKS AND SEWERAGE SYSTEM
        </Text>
        <Text fz={24} fw={500}  style={{ letterSpacing: 1 }}>
          Corporate Office
        </Text>
      </Stack>
      {/* Right: Bagong Pilipinas Logo */}
      <Box>
        <Image src="/bagong-pilipinas-logo.svg" alt="Bagong Pilipinas Logo" height={56} width={56} fit="contain" />
      </Box>
    </Flex>
  );
};

export default ModalHeader;