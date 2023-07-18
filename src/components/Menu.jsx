import { Link } from "react-router-dom";
import { Box, Center } from "@chakra-ui/react";
import '../style/Menu.css';

export function Menu() {
  return (
    <Center>
      <Box as="nav" p={10} mt={0} mb={4}>
        <ul className="links">
          <li>
            <Link className="colorTexto" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="colorTexto" to="/sobre-nosotros">
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link className="colorTexto" to="/tareas">
              App Tareas
            </Link>
          </li>
        </ul>
      </Box>
    </Center>
  );
}
