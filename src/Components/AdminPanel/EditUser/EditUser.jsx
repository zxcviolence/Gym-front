import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../../features/usersSlice";
import Admin from "../Admin";
import styles from "./EditUser.module.scss";

const EditUser = () => {
  const users = useSelector((state) => state.users.users);
  const id = users._id;

  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [patronymic, setPatronymic] = React.useState("");
  const [role, setRole] = React.useState("");
  const [image, setImage] = React.useState("");
  const upload = React.createRef("uploadForm");

  const dispatch = useDispatch();

  const handleSetRole = (e) => {
    setRole(e.target.value);
  };

  const handleSetName = (e) => {
    setName(e.target.value);
  };
  const handleSetSurname = (e) => {
    setSurname(e.target.value);
  };
  const handleSetPatronymic = (e) => {
    setPatronymic(e.target.value);
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    dispatch(
      editUser({
        id,
        name,
        surname,
        patronymic,
        role,
        image: image.split("").splice(12).join(""),
      })
    );
  };

  return (
    <div className={styles.main}>
      <Admin />
      <div className={styles.panel2}>
        <div className={styles.userHeading}>
          <div className={styles.avatarBlock}>
            <img
              className={styles.responsive}
              src={`/assets/images/avatars/${users.image}`}
              alt="avatar"
            />
            <h6>{users.login}</h6>
            <span>{users.role}</span>
          </div>
        </div>
        <div className={styles.panel}>
          <div className={styles.panelHeading}>
            Редактирование пользователя{" "}
            <span style={{ fontWeight: "500" }}>{users.login}</span>
          </div>
          <div className={styles.panelBody}>
            <form onSubmit={handleEdit} action="submit">
              {users.role === "Администратор" ? (
                <div className={styles.formGroup}>
                  <label>Группа:</label>
                  <div>
                    <input
                      className={styles.formControl}
                      type="text"
                      onChange={handleSetRole}
                      value={role}
                      maxLength="40"
                      placeholder={users.role}
                      name="editrole"
                    />
                  </div>
                </div>
              ) : null}
              <div className={styles.divider}></div>
              <div className={styles.formGroup}>
                <label>Имя:</label>
                <div>
                  <input
                    className={styles.formControl}
                    type="text"
                    onChange={handleSetName}
                    value={name}
                    placeholder={users.name}
                    maxLength="40"
                    name="editname"
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label>Фамилия:</label>
                <div>
                  <input
                    className={styles.formControl}
                    type="text"
                    onChange={handleSetSurname}
                    value={surname}
                    placeholder={users.surname}
                    maxLength="40"
                    name="editfam"
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label>Отчество</label>
                <div>
                  <input
                    className={styles.formControl}
                    type="text"
                    maxLength="40"
                    onChange={handleSetPatronymic}
                    value={patronymic}
                    placeholder={users.patronymic}
                    name="editdad"
                  />
                </div>
              </div>
            </form>
            <label>Аватарка:</label>
            <form
              ref={upload}
              id="uploadForm"
              action={`http://localhost:4000/upload/${users.image}`}
              method="post"
              target="_blank"
              encType="multipart/form-data"
            >
              <input
                value={image}
                onChange={(e) => {
                  setImage(e.target.value);
                }}
                type="file"
                name="sampleFile"
              />
              <input type="submit" value="Загрузить" />
              <button
                className={styles.edit}
                type="submit"
                onClick={() => window.location.reload()}
              >
                Изменить
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
