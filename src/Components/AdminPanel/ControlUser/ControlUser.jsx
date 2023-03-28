import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../features/usersSlice";
import Admin from "../Admin";
import styles from "./ControlUser.module.scss";

const ControlUser = () => {
  const users = useSelector((state) => state.users.getted);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className={styles.main}>
      <Admin />
      <div className={styles.users}>
        {users.map((user) => {
          return (
            <div className={styles.user} key={user._id}>
              <div className={styles.userLogin}>
                Логин : <div className={styles.userL}>{user.login}</div>
              </div>
              <div className={styles.userRole}>
                Роль : <div className={styles.userR}>{user.role}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ControlUser;
