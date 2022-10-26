import React, { useContext, useEffect } from "react";
import {
  experimentalStyled,
  useMediaQuery,
  Container,
  Box,
} from "@mui/material";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Footer from "./footer/Footer";
import { AdminContext } from "../../store/AdminState";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";

const MainWrapper = experimentalStyled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  overflow: "hidden",
  width: "100%",
}));

const PageWrapper = experimentalStyled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",

  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up("lg")]: {
    paddingTop: "64px",
  },
  [theme.breakpoints.down("lg")]: {
    paddingTop: "64px",
  },
}));

const FullLayout = ({ children }) => {
  const adminCtx = useContext(AdminContext);
  const router = useRouter();

  useEffect(() => {
    if (getCookie("isAdminLoggedIn") !== true) {
      router.push("/admin/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    adminCtx.fetchAdmin();
    if (getCookie("isAdminLoggedIn") !== adminCtx.isLoggedIn) {
      adminCtx.setIsLoggedIn(getCookie("isAdminLoggedIn"));
    }
    if (getCookie("isAdminLoggedIn") !== true) {
      router.push("/admin/login");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getCookie("isAdminLoggedIn"), router.asPath]);

  const [isSidebarOpen, setSidebarOpen] = React.useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = React.useState(false);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  return (
    <MainWrapper>
      <Header
        sx={{
          paddingLeft: isSidebarOpen && lgUp ? "265px" : "",
          backgroundColor: "#fbfbfb",
        }}
        toggleMobileSidebar={() => setMobileSidebarOpen(true)}
      />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        isMobileSidebarOpen={isMobileSidebarOpen}
        onSidebarClose={() => setMobileSidebarOpen(false)}
      />
      <PageWrapper>
        <Container
          maxWidth={false}
          sx={{
            paddingTop: "20px",
            paddingLeft: isSidebarOpen && lgUp ? "280px!important" : "",
          }}
        >
          <Box sx={{ minHeight: "calc(100vh - 170px)" }}>{children}</Box>
          <Footer />
        </Container>
      </PageWrapper>
    </MainWrapper>
  );
};

export default FullLayout;
