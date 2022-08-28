import { Box } from "@mui/material";
import { Header } from "../components/Header"

const Layout = ({ children }) => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <Header />
      </Box>
      <Box sx={styles.body}>{children}</Box>
    </Box>
  );
};

export default Layout;


const styles = {
    container: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      },
    body: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
}
