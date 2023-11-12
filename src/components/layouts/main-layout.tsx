import { Container } from "@mui/material";
import Header from "../header";
import Basket from "../basket";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      asdads
      <Container
        sx={{
          mt: 10,
          mx: { sm: "140px" },
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {children}
        <Basket />
      </Container>
    </>
  );
};

export default MainLayout;
