import { Footer, Header } from "@/components";
import { Theme } from "@/types/global";
import { FC } from "react";
import { Outlet } from "react-router-dom";

type MainLayoutProps = {
  headerTheme?: Theme
}

const MainLayout: FC<MainLayoutProps> = ({headerTheme = 'dark'}) => {
  return (
    <>
      <Header theme={headerTheme}/>
      <Outlet />
      <Footer />
    </>
  );
};
export default MainLayout
