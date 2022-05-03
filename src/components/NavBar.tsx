import React, { FC } from "react";
import { Layout, Menu, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../App";
import { useAppSelector } from "../hooks/reduxHooks";
import { RootState } from "../redux/store";
import { useActions } from "../hooks/useActions";
import { Link } from "react-router-dom";

const stateAuth = (state: RootState) => state.auth;

const NavBar: FC = (): JSX.Element => {
  const { logout } = useActions();
  const { user } = useAppSelector(stateAuth);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logout();
    navigate(RouteNames.LOGIN);
  };

  const { isAuth } = useAppSelector((state) => state.auth);
  return (
    <Layout.Header>
      <Row justify={"end"}>
        {isAuth ? (
          <>
            <div style={{ color: "white", paddingRight: "10px" }}>
              {user.username}
            </div>
            <Menu theme={"dark"} mode={"horizontal"} selectable={false}>
              <Menu.Item onClick={handleLogOut} key={1}>
                Logout
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <>
            <Row>
              <Link className={"link"} to={RouteNames.LOGIN}>
                Login
              </Link>
              <Link className={"link"} to={RouteNames.REGISTRATION}>
                Registration
              </Link>
            </Row>
          </>
        )}
      </Row>
    </Layout.Header>
  );
};

export default NavBar;

function rot13(message: string): any {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
  const arrOfMessage = message.split("");
  const indexOfMessage: any = []
      arrOfMessage.forEach((letter) => {
        if (letter === letter.toUpperCase()) {
          alphabet.includes(letter.toLowerCase()) ? indexOfMessage.push(alphabet.indexOf(letter.toLowerCase())) : indexOfMessage.push(letter)
        } else {
          alphabet.includes(letter) ? indexOfMessage.push(alphabet.indexOf(letter)) : indexOfMessage.push(letter)
        }});
  const indexInAlphabet = indexOfMessage.map((num: any) => {
    if (typeof num !== 'number') {
      return num;
    } else if (num + 13 >= 26) {
      return num + 13 - 26;
    } else return num + 13;
  });
  const result: any = [];
  indexInAlphabet.forEach((num: any, i: any) =>
    arrOfMessage[i] === arrOfMessage[i].toUpperCase()
      ? result.push(typeof num !== 'number' ? num : alphabet[num].toUpperCase())
      : result.push(typeof num !== 'number' ? num : alphabet[num])
  );
  return result.join("");
}
console.log(rot13("nN"));


