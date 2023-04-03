import { useEffect, useState } from "react";
import { EmptyList } from "../../components/EmptyList";
import { List } from "../../components/List";
import { Content, Title, FileInput, Button, FileInputLabel } from "./styles";
import { api } from "../../utils/Api";
import { useToast } from "@chakra-ui/react";

export function Home() {
  const [transactions, setTransactions] = useState([]);
  const [totalValue, setTotalValue] = useState<string | null>(null);
  const [isDisable, setIsDisabled] = useState(!!totalValue);
  const toast = useToast();

  useEffect(() => {
    handleList();
  }, []);

  const handleImportFiles = async (event: any) => {
    const data = new FormData();

    data.append("file", event.target.files[0]);

    await api.post("transactions", data).then(({ data }) => {
      return toast({
        title: data.message,
        status: "success",
        isClosable: true,
      });
    });

    handleList();
  };

  const handleList = async () => {
    const { data } = await api.get("transactions");
    setTransactions(data.data);
  };

  const handleTotalValue = async () => {
    const { data } = await api.get("total-transactions");

    setTotalValue(
      new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(data / 100)
    );
  };

  return (
    <>
      <Content>
        <Title>Dados de transação</Title>
        <FileInputLabel htmlFor="fileInput">
          <span>Importar dados...</span>
          <FileInput
            id="fileInput"
            type="file"
            placeholder=""
            onChange={handleImportFiles}
          />
        </FileInputLabel>
        <Button disabled={isDisable} onClick={handleTotalValue}>
          {!totalValue ? "Emitir Valor Total" : `Valor total: ${totalValue}`}
        </Button>

        {transactions && transactions.length ? (
          <List transactions={transactions} />
        ) : (
          <EmptyList />
        )}
      </Content>
    </>
  );
}
