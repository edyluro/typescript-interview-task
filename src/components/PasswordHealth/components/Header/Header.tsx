import {FC} from 'react';
import { useHistory } from 'react-router-dom';
import { Routes } from '~/constants';
import {IItem} from "~/services/getUserItems";
import logout from '../../../../services/logout';

import './header-style.scss';

interface IHeader {
  items: Array<IItem>;
  username: string;
}

const Header: FC<IHeader> = ({items, username}) => {
  const {replace} = useHistory();

  const handleLogout = async () => {
    try {
      await logout();
      replace(Routes.Root);
    } catch(error) {
      console.error(error.message);
    }
  }

  return (
    <div className="header">
      <div className="user-section">
        <button onClick={handleLogout}>{`Logout ${username}`}</button>
      </div>
      <h1>{`${items.length} Items are vulnerable`}</h1>
      <span>Create new complex passwords to protect your accounts</span>
    </div>
  )
};

export default Header;
