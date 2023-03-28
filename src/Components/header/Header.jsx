import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BalansUp, fetchUser } from "../../features/usersSlice";
import styles from "./Header.module.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PaymentForm from "./Cards";
import { FiLogOut } from "react-icons/fi";
import { IoWallet } from "react-icons/io5";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

const Header = () => {
  const [show, setShow] = React.useState(false);
  const [balance, setBalance] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleOpen = () => setOpen(true);
  const HandleClose = () => setOpen(false);

  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  const login = useSelector((state) => state.users.login);
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (token) {
      dispatch(fetchUser());
    }
  }, [dispatch, token]);

  const UpBalanc = async (e) => {
    e.preventDefault();
    dispatch(BalansUp({ balance, id }));
  };

  const handleSetBalance = (e) => {
    setBalance(e.target.value);
  };

  const clearToken = () => {
    localStorage.clear(token);
    window.location.reload();
  };

  const handleClick = () => {
    setShow(false);
    window.location.href = "/login";
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 900,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <header>
      <div className={styles.logo}>
        <Link to="/">
          <svg
            width="429.00000000000006"
            height="64.93266831580694"
            viewBox="0 0 370.00000000000006 56.00253444486845"
            className="css-1j8o68f"
          >
            <defs id="SvgjsDefs2606"></defs>
            <g
              id="SvgjsG2607"
              featurekey="symbolFeature-0"
              transform="matrix(3.496786924170077,0,0,3.496786924170077,-6.929314832838593,-13.933205705931032)"
              fill="#960018"
            >
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M13.9,10.8c-0.8-1.8,0.5-4.4,4.3-4.4c2.7,0,3.8,2.1,3.8,4.1c0,3-3.2,4.2-3.2,4.2S17.2,20,12.3,20c-1.7,0-2.7-0.2-3.4-0.3  c-0.7,0-1.3,0.3-1.7,0.3c-0.4,0-2.9-1.7-3.7-3.9C2.2,12.9,2.1,10.4,2,9.1C1.9,7.3,2.2,6.1,3.1,5.3C3.7,4.8,4.4,4.1,5.2,4  c0.9-0.1,1.3,0.3,1.9,0.8c0.5,0.4,1,1,1.3,1.4c0.1,0.2,0.1,0.5-0.1,0.6C6.9,8.1,5.8,8.1,5.5,7.9C5,7.4,4.5,7.7,4.7,8.2  c0.2,0.4,0.5,1.9,1.7,3c1.4,1.2,1.8,2.3,2.2,3.2C8.8,13.5,9.5,10.2,13.9,10.8z"
              ></path>
            </g>
            <g
              id="SvgjsG2608"
              featurekey="nameFeature-0"
              transform="matrix(1.0200809990813198,0,0,1.0200809990813198,87.51100230387208,-1.9967930127368945)"
              fill="#eeeeee"
            >
              <path d="M2.44 16.08 c0 -3.48 2.8 -6.28 6.28 -6.28 l13.64 0 l0 1.28 c0 0.24 -0.2 0.44 -0.44 0.44 l-13.2 0 c-2.32 0 -4.2 1.88 -4.2 4.2 l0 18.52 c0 2.32 1.88 4.2 4.2 4.2 l8.8 0 c2.32 0 4.2 -1.88 4.2 -4.2 l0 -8.64 l-7.48 0 c-0.24 0 -0.44 -0.2 -0.44 -0.44 l0 -1.32 l9.6 0 c0.24 0 0.4 0.2 0.4 0.44 l0 9.64 c0 3.44 -2.8 6.28 -6.28 6.28 l-8.8 0 c-3.48 0 -6.28 -2.84 -6.28 -6.28 l0 -17.84 z  M35.232 20 l1.8 0 l0 1.32 s0.8 -1.32 3.52 -1.32 l4.56 0 l0 1.24 c0 0.24 -0.2 0.4 -0.44 0.4 l-4.92 0 c-2.8 0 -2.72 2.88 -2.72 2.88 l0 15.48 l-1.8 0 l0 -20 z M66.384 40.28 l-6.04 0 c-2.76 0 -4.96 -2.24 -4.96 -5 l0 -10.52 c0 -2.76 2.2 -5.04 4.96 -5.04 l6.04 0 c2.72 0 4.92 2.28 4.92 5.04 l0 10.52 c0 2.76 -2.2 5 -4.92 5 z M66.384 21.4 l-6.04 0 c-1.76 0 -3.16 1.44 -3.16 3.2 l0 10.84 c0 1.76 1.4 3.16 3.16 3.16 l6.04 0 c1.72 0 3.12 -1.4 3.12 -3.16 l0 -10.84 c0 -1.76 -1.4 -3.2 -3.12 -3.2 z M94.536 22.16 c0 -0.2 -0.16 -0.4 -0.36 -0.4 l-11.68 0 l0 -1.36 c0 -0.24 0.2 -0.4 0.44 -0.4 l13.08 0 c0.24 0 0.4 0.16 0.4 0.4 l0 1.44 c0 0.52 -0.08 1 -0.4 1.4 l-11.96 14.36 c-0.04 0.08 -0.08 0.16 -0.08 0.28 c0 0.2 0.16 0.36 0.36 0.36 l12.48 0 l0 1.32 c0 0.24 -0.16 0.44 -0.4 0.44 l-14.32 0 c-0.24 0 -0.44 -0.2 -0.44 -0.44 l0 -0.76 c0 -0.52 0.12 -1 0.44 -1.4 l12.36 -15 c0.04 -0.08 0.08 -0.16 0.08 -0.24 z M121.328 39.56 l0 -14.72 c0 -1.76 -1.44 -3.2 -3.16 -3.2 l-8.76 0 c-0.24 0 -0.44 0.2 -0.44 0.44 l0 17.48 c0 0.24 -0.2 0.44 -0.44 0.44 l-1.36 0 l0 -18.24 c0 -0.96 0.8 -1.8 1.76 -1.8 l9.24 0 c2.72 0 4.96 2.28 4.96 5.04 l0 15 l-1.4 0 c-0.2 0 -0.4 -0.2 -0.4 -0.44 z M149.92000000000002 20 c0.24 0 0.44 0.16 0.44 0.4 l0 24.32 c0 2.8 -2.2 5.04 -4.96 5.04 l-10 0 l0 -1.24 c0 -0.24 0.2 -0.44 0.4 -0.44 l9.6 0 c1.76 0 3.16 -1.4 3.16 -3.16 l0 -5.52 c-0.16 0.36 -0.56 0.56 -1.08 0.56 l-7.84 0.04 c-3.36 0 -4.92 -2.28 -4.92 -5.04 l0 -14.96 l1.36 0 c0.24 0 0.44 0.16 0.44 0.4 l0 14.6 c0 1.76 0.76 3.32 3.12 3.32 l8.2 0 c0.4 0 0.72 -0.32 0.72 -0.72 l0 -17.6 l1.36 0 z M182.704 16.08 c0 -3.48 2.8 -6.28 6.28 -6.28 l13.64 0 l0 1.28 c0 0.24 -0.2 0.44 -0.44 0.44 l-13.2 0 c-2.32 0 -4.2 1.88 -4.2 4.2 l0 18.52 c0 2.32 1.88 4.2 4.2 4.2 l8.8 0 c2.32 0 4.2 -1.88 4.2 -4.2 l0 -8.64 l-7.48 0 c-0.24 0 -0.44 -0.2 -0.44 -0.44 l0 -1.32 l9.6 0 c0.24 0 0.4 0.2 0.4 0.44 l0 9.64 c0 3.44 -2.8 6.28 -6.28 6.28 l-8.8 0 c-3.48 0 -6.28 -2.84 -6.28 -6.28 l0 -17.84 z  M225.096 27.08 l-2.68 -0.16 l-0.04 0 c-0.96 0 -2.08 -0.8 -2.44 -1.72 l-6 -15.2 l1.8 0 c0.24 0 0.48 0.16 0.6 0.4 l5.16 13.4 c0.28 0.8 1.12 1.36 1.96 1.36 l5.32 0 c0.84 0 1.68 -0.56 2 -1.36 l5.16 -13.4 c0.08 -0.24 0.36 -0.4 0.6 -0.4 l1.76 0 l-5.96 15.2 c-0.36 0.92 -1.52 1.72 -2.48 1.72 l-0.04 0 l-2.64 0.16 l0 12.92 l-2.08 0 l0 -12.92 z M274.048 10.2 c0.04 -0.08 0.24 -0.2 0.32 -0.2 l2.56 0 l0 30 l-1.64 0 c-0.24 0 -0.44 -0.2 -0.44 -0.44 l0 -26.88 s-9.2 16.44 -10.76 19.16 c-0.12 0.2 -0.4 0.36 -0.64 0.36 l-1.72 0 c-0.24 0 -0.56 -0.16 -0.68 -0.36 l-10.72 -19.16 l0 26.88 c0 0.24 -0.2 0.44 -0.44 0.44 l-1.64 0 l0 -30 l2.56 0 c0.08 0 0.28 0.12 0.32 0.2 l11.48 20.2 z"></path>
            </g>
          </svg>
        </Link>
      </div>
      <div className={styles.routes}>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "#960018" : "white",
              textDecoration: isActive ? "underline" : "none",
              textUnderlineOffset: "6px",
            };
          }}
          className={styles.navigationButton}
          to="/simulators"
        >
          Тренажёры
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "#960018" : "white",
              textDecoration: isActive ? "underline" : "none",
              textUnderlineOffset: "6px",
            };
          }}
          className={styles.navigationButton}
          to="/coaches"
        >
          Тренеры
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "#960018" : "white",
              textDecoration: isActive ? "underline" : "none",
              textUnderlineOffset: "6px",
            };
          }}
          className={styles.navigationButton}
          to="/massage"
        >
          Массаж
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "#960018" : "white",
              textDecoration: isActive ? "underline" : "none",
              textUnderlineOffset: "6px",
            };
          }}
          className={styles.navigationButton}
          to="/sports_bar"
        >
          Спорт-Бар
        </NavLink>
      </div>
      <div className={styles.burger} onClick={handleShow}>
        <GiHamburgerMenu />
      </div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        scroll="true"
        className={styles.offcanvas}
      >
        <Offcanvas.Header className={styles.offcanvas_header} closeButton>
          <Offcanvas.Title className={styles.offcanvas_title}>
            Профиль
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className={styles.offcanvas_body}>
          <div className={styles.auth}>
            <Link to="/login" hidden={token}>
              <button onClick={handleClick} className={styles.bottone1}>
                <strong>Личный кабинет</strong>
              </button>
            </Link>
          </div>
          {token && (
            <>
              <div className={styles.profilebox}>
                <div className={styles.avatar}>
                  <img
                    src={`assets/images/avatars/${users.image}`}
                    alt="тут должен быть аватар"
                  />
                </div>
                <div className={styles.nickname}>{login}</div>
                <div
                  onClick={() => window.location.reload()}
                  className={styles.profile}
                >
                  <Link to="/profile/edituser">Личный кабинет</Link>
                </div>
                <div className={styles.logoutbtn}>
                  <button onClick={clearToken}>
                    <FiLogOut />
                    Выйти
                  </button>
                </div>
              </div>
              <div className={styles.user_ca2sh}>
                <div>
                  <IoWallet /> Кошелек: {users.cash} ₽
                </div>
                <Button onClick={handleOpen}>Пополнить счет</Button>
                <Modal
                  open={open}
                  onClose={HandleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      color="#631b1b"
                      variant="h4"
                      component="h2"
                    >
                      Оплата банковской картой
                    </Typography>
                    <Typography
                      id="modal-modal-description"
                      sx={{ mt: 2 }}
                    ></Typography>
                    <Typography>
                      <form onSubmit={UpBalanc} action="submit">
                        <PaymentForm />
                        <FormControl fullWidth sx={{ m: 1 }}>
                          <InputLabel htmlFor="outlined-adornment-amount">
                            Amount
                          </InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-amount"
                            value={balance}
                            onChange={handleSetBalance}
                            startAdornment={
                              <InputAdornment position="start">
                                ₽
                              </InputAdornment>
                            }
                            label="Amount"
                          />
                          <Button
                            className={styles.payBTN}
                            color="error"
                            variant="outlined"
                            size="large"
                            type="submit"
                          >
                            PAY
                          </Button>
                        </FormControl>
                      </form>
                    </Typography>
                  </Box>
                </Modal>
              </div>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};

export default Header;
