import '../style/SobreNosotros.css'
import { Box, Text } from "@chakra-ui/react";

export function SobreNosotros(){

    return <Box>
        <Text backgroundColor={'transparent'} 
            textAlign="center" 
            fontSize={35} 
            color="rgb(220, 220, 220)" 
            p={10} 
            w={600}
            mt="3vh">
            Un poco sobre la App
        </Text>

        <Text fontSize={25} color="rgb(220, 220, 220)" p={10}  w={600} mt="5vh">
            En esta app podras crear tareas, editarlas, agregarles una descripción o dejarlas sin descripcion si asi los deseas, eliminarlas y marcarlas como listas si ya las cumpliste, todo esto para tener un control de lo que tienes pendiente.
        </Text>
    </Box>    
    
    
    
}