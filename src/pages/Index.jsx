import { Box, Button, Container, Heading, Text, VStack, HStack, useClipboard, useToast, Image, useBoolean } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { FaCopy, FaDesktop, FaGamepad } from "react-icons/fa";

const Index = () => {
  const javaServerIP = "mazerclub.com";
  const bedrockServerIP = "mazerclub.com";
  const { hasCopied: hasCopiedJava, onCopy: onCopyJava } = useClipboard(javaServerIP);
  const { hasCopied: hasCopiedBedrock, onCopy: onCopyBedrock } = useClipboard(bedrockServerIP);
  const toast = useToast();

  const handleCopy = (ip, version) => {
    version === "Java" ? onCopyJava() : onCopyBedrock();
    toast({
      title: `${version} IP Copied!`,
      description: `You have copied the ${version} server IP: ${ip}`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <Container maxW="container.md" p={4} bgGradient="linear(to-br, pink.100, blue.100)">
        <VStack spacing={5} align="stretch">
          <Box bgGradient="linear(to-r, teal.300, green.400)" borderRadius="lg" p={4} color="white">
            <Heading mb={2} as="h1" size="xl">
              MazerClub Minecraft Server
            </Heading>
            <Text fontSize="lg">Join and explore the limitless world of MazerClub.</Text>
          </Box>
          <Image borderRadius="lg" src="https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtaW5lY3JhZnQlMjBzZXJ2ZXJ8ZW58MHx8fHwxNzA0NTU4MTY0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Minecraft Server" />
          <VStack spacing={4}>
            <Box p={5} shadow="xl" borderWidth="2px" borderRadius="lg" bg="blue.50" borderColor="blue.200">
              <HStack justifyContent="space-between">
                <VStack align="start">
                  <Heading size="md">Java Edition</Heading>
                  <Text>{javaServerIP}</Text>
                </VStack>
                <Button leftIcon={<FaCopy />} colorScheme="blue" variant="solid" _hover={{ bg: "blue.600", color: "white" }} onClick={() => handleCopy(javaServerIP, "Java")}>
                  {hasCopiedJava ? "Copied" : "Copy IP"}
                </Button>
              </HStack>
            </Box>
            <Box p={5} shadow="xl" borderWidth="2px" borderRadius="lg" bg="purple.50" borderColor="purple.200">
              <HStack justifyContent="space-between">
                <VStack align="start">
                  <Heading size="md">Bedrock Edition</Heading>
                  <Text>{bedrockServerIP}</Text>
                </VStack>
                <Button leftIcon={<FaCopy />} colorScheme="purple" variant="solid" _hover={{ bg: "purple.600", color: "white" }} onClick={() => handleCopy(bedrockServerIP, "Bedrock")}>
                  {hasCopiedBedrock ? "Copied" : "Copy IP"}
                </Button>
              </HStack>
            </Box>
          </VStack>
          <HStack justifyContent="center" spacing={4}>
            <Button leftIcon={<FaDesktop />} colorScheme="teal" variant="outline" _hover={{ bg: "teal.600", color: "white" }}>
              Play on Java
            </Button>
            <Button leftIcon={<FaGamepad />} colorScheme="purple" variant="outline" _hover={{ bg: "purple.600", color: "white" }}>
              Play on Bedrock
            </Button>
          </HStack>
        </VStack>
      </Container>
    </motion.div>
  );
};

export default Index;
