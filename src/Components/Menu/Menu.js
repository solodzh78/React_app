import styled from "styled-components";
import { useContext } from "react";
import { Context } from "../Functions/context";
import { ListItem } from "./ListItem";
import { Banner } from "./Banner";
import { useFetch } from "../Hooks/useFetch";

const MenuStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px;
  margin-left: 380px;
`;

const SectionMenu = styled.section`
  padding: 30px;
`;

const PreloaderMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 210px - 80px);
`;

export const Menu = () => {
  const { openItem: { setOpenItem } } = useContext(Context);
  const res = useFetch();
  const dbMenu = res.response;
  
  return (
    <MenuStyled>
      <Banner/>
      {res.response
        ? 
          <>
            <SectionMenu>
              <h2>Бургеры</h2>
              <ListItem
                itemList={dbMenu.burger}
                setOpenItem={setOpenItem}
              />
            </SectionMenu>

            <SectionMenu>
              <h2>Закуски / Напитки</h2>
              <ListItem
                itemList={dbMenu.other}
                setOpenItem={setOpenItem}
              />
            </SectionMenu>
          </>
        : res.error
          ? <PreloaderMenu>Sorry, we will fix it soon...</PreloaderMenu>
          : <PreloaderMenu>Loading...</PreloaderMenu>
      }
    </MenuStyled>
  );
};