import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  ChakraProvider,
  TableContainer,
} from "@chakra-ui/react";
import chakraTheme from "../../theme/chakraTheme";
import moment from "moment";
import { PaginateButton, Pagination } from "./styles";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

export function List({ transactions, metaData, setCurrentPage }: any) {
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

  const leftClick = async (page: number) => {
    setCurrentPage(page - 1);
  };

  const rightClick = async (page: number) => {
    setCurrentPage(page + 1);
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
                <Th color={"#FBD38D"}>Vendedor</Th>
              </Tr>
            </Thead>
            <Tbody>
              {transactions.map((transaction: any) => (
                <Tr key={transaction.id}>
                  <Td>{types[transaction.type - 1]}</Td>
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
        <Pagination>
          {metaData.current_page === 1 ? (
            <PaginateButton disabled>
              <ArrowLeftIcon />
            </PaginateButton>
          ) : (
            <PaginateButton onClick={() => leftClick(metaData.current_page)}>
              <ArrowLeftIcon />
            </PaginateButton>
          )}
          {metaData.current_page === metaData.last_page ? (
            <PaginateButton disabled>
              <ArrowRightIcon />
            </PaginateButton>
          ) : (
            <PaginateButton onClick={() => rightClick(metaData.current_page)}>
              <ArrowRightIcon />
            </PaginateButton>
          )}
        </Pagination>
      </ChakraProvider>
    </div>
  );
}
