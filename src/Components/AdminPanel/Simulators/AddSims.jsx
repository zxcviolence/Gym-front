import React from "react";
import { useDispatch } from "react-redux";
import { addSimulator } from "../../../features/simulatorsSlice";
import Admin from "../Admin";
import styles from "./AddSims.module.scss";

const AddSims = () => {
  const [image, setImage] = React.useState("");
  const [name, setName] = React.useState("");
  const upload = React.createRef("uploadForm");

  const dispatch = useDispatch();

  const handleSetName = (e) => {
    setName(e.target.value);
  };

  const handleAddSim = (e) => {
    e.preventDefault();
    dispatch(
      addSimulator({
        name,
        image: image.split("").splice(12).join(""),
      })
    );
  };

  return (
    <div className={styles.main}>
      <Admin />

      <div className={styles.panel}>
        <div className={styles.panelHeading}>Добавление тренажёров </div>
        <div className={styles.panelBody}>
          <form onSubmit={handleAddSim} action="submit">
            <div className={styles.formGroup}>
              <label>Название тренажёра:</label>
              <div>
                <input
                  className={styles.formControl}
                  type="text"
                  onChange={handleSetName}
                  value={name}
                  maxLength="40"
                  name="addsim"
                />
              </div>
            </div>
            <label>Постер:</label>
            <form
              ref={upload}
              id="uploadForm"
              action={`http://localhost:4000/upload/simulators/add/`}
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
            </form>
            <button
              className={styles.edit}
              type="submit"
              onClick={() => window.location.reload()}
            >
              Добавить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSims;
