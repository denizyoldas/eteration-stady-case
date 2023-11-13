import { Container, Grid } from "@mui/material";
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
          pb: 2,
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={9}>
            {children}
          </Grid>
          <Grid item xs={12} sm={3}>
            <Basket />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default MainLayout;
