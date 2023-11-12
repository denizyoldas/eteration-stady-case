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
      <Container
        maxWidth="xl"
        sx={{
          mt: 10,
          // mx: { xs: "20px", sm: "60px", md: "100px", lg: "100px" },
          display: "flex",
          justifyContent: "space-between",
          pb: 2,
        }}
      >
        {children}
        <Basket />
      </Container>
    </>
  );
};

export default MainLayout;
