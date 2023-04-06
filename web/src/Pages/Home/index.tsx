import { useContext, useEffect, useState } from "react";
import { EmptyList } from "../../components/EmptyList";
import { List } from "../../components/List";
import {
  Content,
  Title,
  FileInput,
  Button,
  FileInputLabel,
  LogOutButton,
} from "./styles";
import { api } from "../../utils/Api";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

interface MetaData {
  current_page?: number;
  last_page?: number;
  first_pag?: number;
}

export function Home() {
  const { singOut } = useContext(AuthContext);
  const [transactions, setTransactions] = useState([]);
  const [metaData, setMetadata] = useState<MetaData>();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalValue, setTotalValue] = useState<string | null>(null);
  const [isDisable, setIsDisabled] = useState(!!totalValue);
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    handleList();
  }, [currentPage]);

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
    const { data } = await api.get("transactions", {
      params: { page: currentPage },
    });

    setTransactions(data.data);
    setMetadata(data.meta);
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

  async function handleLogout() {
    await singOut();
  }

  return (
    <>
      <Content>
        <Title>Dados de transação</Title>
        <LogOutButton id="logout" onClick={handleLogout}>
          Desconectar
        </LogOutButton>
        <FileInputLabel htmlFor="fileInput">
          <span>Importar dados...</span>
          <FileInput id="fileInput" type="file" onChange={handleImportFiles} />
        </FileInputLabel>
        {transactions && transactions.length ? (
          <div>
            <Button disabled={isDisable} onClick={handleTotalValue}>
              {!totalValue
                ? "Emitir Valor Total"
                : `Valor total: ${totalValue}`}
            </Button>
            <List
              transactions={transactions}
              metaData={metaData}
              setCurrentPage={setCurrentPage}
            />
          </div>
        ) : (
          <EmptyList />
        )}
      </Content>
    </>
  );
}
