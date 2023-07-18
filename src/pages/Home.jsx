import { Box, Center, Heading, Text } from "@chakra-ui/react";

export function Home() {
  return (
    <Center>
    <Box textAlign="center" p={4}>
      <Heading as="h1" size="xl" fontSize="50px" mb={4} color="rgb(220, 220, 220)">
        Bienvenido a TODO APP
      </Heading>
      <Text w={600} fontSize="25" textAlign="center" p={10} mt={30} color="rgb(220, 220, 220)">
        Aquí puedes comenzar a gestionar tus tareas de manera eficiente.
      </Text>
    </Box>
    </Center>
  );
}
