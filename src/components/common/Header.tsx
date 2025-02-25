import { theme } from "@/styles/theme";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import styled from "styled-components";
import NOSSR from "./NOSSR";

interface TabProps {
  selected: boolean;
}

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleTab = (path: string) => {
    router.push(path);
  };
  return (
    <NOSSR>
      <Container>
        <Image
          src="/assets/icons/logo.svg"
          width={143}
          height={32}
          alt="logo"
          onClick={() => router.push("/")}
        />
        {(pathname === "/classAnnouncement" || "/notification") && (
          <Div>
            <Tabbar>
              <Tab
                onClick={() => handleTab("/classAnnouncement")}
                selected={pathname === "/classAnnouncement"}
              >
                알림장
              </Tab>
              <Tab
                onClick={() => handleTab("/notification")}
                selected={pathname === "/notification"}
              >
                가정통신문
              </Tab>
            </Tabbar>
            <Info>서울양원숲초등학교 2학년 2반 오민지 교사</Info>
          </Div>
        )}
      </Container>
    </NOSSR>
  );
};

export default Header;
const Container = styled.div`
  width: 100%;
  height: 59px;
  display: flex;
  padding: 0px 80px;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  background: ${theme.colors.b800};
  position: fixed;
  top: 0;
  left: 0;
`;

const Tabbar = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;
const Tab = styled.div<TabProps>`
  width: 69px;
  height: 59px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ selected, theme }) =>
    selected ? theme.colors.primary500 : theme.colors.b200};
  ${({ selected }) => (selected ? theme.fonts.body3_b : theme.fonts.body3_r)};
  border-bottom: 4px solid
    ${({ selected, theme }) =>
      selected ? theme.colors.primary500 : "transparent"};
  cursor: pointer;
`;

const Info = styled.div`
  height: 29px;
  padding: 6px 16px;
  border-radius: 8px;
  background: ${theme.colors.black};
  color: ${theme.colors.b400};
  ${(props) => props.theme.fonts.caption1_m};
  white-space: nowrap;
`;
