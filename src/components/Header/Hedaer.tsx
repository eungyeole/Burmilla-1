import React, { FC } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

import * as S from "./style";
import { logo } from "../../assets/header";
import { Button } from "../Common";
import { getAccessToken, clearStorage } from "../../utils/token";

const Header: FC = () => {
  const [checkUserTokenStatus, setCheckUserTokenStatus] =
    React.useState<boolean>(false);

  const location = useLocation();
  const history = useHistory();

  React.useEffect(() => {
    const token = getAccessToken();

    if (token !== null) {
      setCheckUserTokenStatus(true);
      // history.go(0);
    }
  }, []);

  const headerItems = [
    {
      link: "/",
      content: "일정",
    },
    {
      link: "/total",
      content: "접수 현황",
    },
    {
      link: "/applicant",
      content: "지원자 목록",
    },
  ];

  const handleButtonClick = React.useCallback(() => {
    alert("로그아웃됩니다.");
    clearStorage();
    history.go(0);
  }, []);

  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.HeaderLogo>
          <Link to="/">
            <S.Logo src={logo} alt="Entry_Logo" />
          </Link>
        </S.HeaderLogo>
        <S.HeaderButton>
          <S.HeaderItemsContainer>
            {checkUserTokenStatus &&
              headerItems.map((item) => (
                <S.HeaderItemBox>
                  <S.HeaderItem
                    key={item.content}
                    to={item.link}
                    className={location.pathname === item.link && "selected"}
                  >
                    {item.content}
                    {item.content === "일정" ? (
                      <div className="schedule" />
                    ) : null || item.content === "접수 현황" ? (
                      <div className="total" />
                    ) : null || item.content === "지원자 목록" ? (
                      <div className="applicant" />
                    ) : null}
                  </S.HeaderItem>
                </S.HeaderItemBox>
              ))}
            {checkUserTokenStatus && (
              <S.HeaderLogoutBox>
                <Button className="header_logout" onClick={handleButtonClick}>
                  로그아웃
                </Button>
              </S.HeaderLogoutBox>
            )}
          </S.HeaderItemsContainer>
        </S.HeaderButton>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};

export default Header;
