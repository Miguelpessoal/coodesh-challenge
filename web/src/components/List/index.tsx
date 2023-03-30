import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
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
                <Th color={"#FBD38D"}>Tipo</Th>
                <Th color={"#FBD38D"}>Data</Th>
                <Th color={"#FBD38D"}>Produto</Th>
                <Th color={"#FBD38D"}>Valor (R$)</Th>
                <Th color={"#FBD38D"}>Vendendor</Th>
              </Tr>
            </Thead>
            <Tbody>
              {/* transactions.map((transaction) => (
                <Tr key={transaction.id}>
                  <Td>{transaction.type}</Td>
                  <Td>{transaction.date}</Td>
                  <Td>{transaction.product}</Td>
                  <Td>{transaction.value}</Td>
                  <Td>{transaction.seller}</Td>
                </Tr>
              )) */}
            </Tbody>
          </Table>
        </TableContainer>
      </ChakraProvider>
    </div>
  );
}
