import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  TableCaption,
  Tfoot,
  ChakraProvider,
} from "@chakra-ui/react";
import chakraTheme from "../../theme/chakraTheme";

export function List() {
  return (
    <div>
      <ChakraProvider theme={chakraTheme}>
        <TableContainer mt={"2rem"} w={"80rem"}>
          <Table variant="simple" colorScheme="orange">
            <Thead>
              <Tr>
                <Th color={"#FBD38D"}>Nome</Th>
                <Th color={"#FBD38D"}>Data</Th>
                <Th color={"#FBD38D"}>Produto</Th>
                <Th color={"#FBD38D"}>Valor (R$)</Th>
                <Th color={"#FBD38D"}>Vendendor</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td>25.4</Td>
                <Td>25.4</Td>
                <Td>25.4</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </ChakraProvider>
    </div>
  );
}
