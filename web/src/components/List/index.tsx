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
import { useEffect } from "react";
import chakraTheme from "../../theme/chakraTheme";
import moment from "moment";

export function List({ transactions }: any) {
  const types = [
    "Venda Produtor",
    "Venda Afiliado",
    "Comissão Paga",
    "Comissão Recebida",
  ];

  const fomatedNumber = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value / 100);
  };

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
                <Th color={"#FBD38D"}>Valor</Th>
                <Th color={"#FBD38D"}>Vendendor</Th>
              </Tr>
            </Thead>
            <Tbody>
              {transactions.map((transaction: any) => (
                <Tr key={transaction.id}>
                  <Td>{types[transaction.type]}</Td>
                  <Td>
                    {moment(transaction.date).format("DD/MM/YYYY HH:mm:ss")}
                  </Td>
                  <Td>{transaction.product}</Td>
                  <Td>{fomatedNumber(transaction.value)}</Td>
                  <Td>{transaction.seller}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </ChakraProvider>
    </div>
  );
}
