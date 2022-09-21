import NavBar from "../Components/PagesWeb/NavBar/NavBar";

type Props = {
  children: React.ReactNode;
};

const WebLayout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
};

export default WebLayout;
