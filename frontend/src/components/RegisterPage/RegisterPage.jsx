import React from "react";

import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Container, InputAdornment, TextField } from "@material-ui/core";
import { withNamespaces } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  paper: {
    color: "white",
  },
  avatar: {
    backgroundColor: "#DE48D5",
  },
  form: {
    marginTop: theme.spacing(2),
    "& label.MuiInputLabel-root": {
      color: "white",
    },
    "& label.Mui-focused": {
      color: "#DE48D5",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "2px solid #c719f5",
    },
    "& .MuiInput-underline:before": {
      borderBottom: "2px solid white",
    },
    "& .MuiInput-root": {
      color: "white",
    },
  },
  checkBoxStyle: {
    color: "#CA15AB",
  },
  inputRootStyle: { marginTop: theme.spacing(2), color: "white" },
  buttonRoot: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    height: "50px",
    border: "none",
    outline: "none",
    color: "#fff",
    background: "#111",
    cursor: "pointer",
    position: "relative",
    zIndex: "0",
    borderRadius: "10px",
    "&:before": {
      content: '" "',
      background:
        "linear-gradient(45deg, #b1d6ff, #4994e8,#b365ef, #c706c5, #a503a1,#ec05e6,#f582f2, #9bc6f7, #b1d6ff)",
      position: "absolute",
      top: "-2px",
      left: "-2px",
      backgroundSize: "400%",
      zIndex: "-1",
      filter: "blur(5px)",
      width: "calc(100% + 4px)",
      height: "calc(100% + 4px)",
      animation: `$glowing 20s linear infinite`,
      opacity: "1",
      transition: "opacity .3s ease-in-out",
      borderRadius: "10px",
    },
    "&:after": {
      content: '" "',
      zIndex: "-1",
      position: "absolute",
      background: "#110e2b",
      top: "0",
      left: "0",
      borderRadius: "10px",
      width: "100%",
      height: "100%",
    },
    "&:active:after": { background: "transparent" },
  },
  "@keyframes glowing": {
    "0%": { backgroundPosition: "0 0" },
    "50%": { backgroundPosition: "400% 0" },
    "100%": { backgroundPosition: "0 0" },
  },
}));

const RegisterPage = ({ t }) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    login: "",
    email: "",
    password: "",
    password2: "",
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className={classes.paper}>
      <form className={classes.form}>
        <Grid container spacing={1} direction="column" alignItems="center">
          <Grid item>
            <Avatar className={classes.avatar} />
          </Grid>
          <Grid item>
            <Typography component="h1" variant="h5">
              {t("register.signUp")}
            </Typography>
          </Grid>
          <Grid item xs md={6} lg={6}>
            <TextField
              id="input-login"
              classes={{ root: classes.inputRootStyle }}
              fullWidth
              label={t("register.login")}
            />
            <TextField
              id="input-email"
              classes={{ root: classes.inputRootStyle }}
              type={"email"}
              fullWidth
              label={t("register.email")}
            />

            <TextField
              id="input-password"
              classes={{ root: classes.inputRootStyle }}
              type={values.showPassword ? "text" : "password"}
              fullWidth
              required
              onChange={handleChange("password")}
              value={values.password}
              label={t("register.password")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      classes={{ root: classes.inputRootStyle }}
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              id="input-password2"
              classes={{ root: classes.inputRootStyle }}
              type={values.showPassword ? "text" : "password"}
              fullWidth
              required
              onChange={handleChange("password2")}
              value={values.password2}
              label={t("register.password2")}
            />

            <FormControlLabel
              control={
                <Checkbox
                  classes={{ root: classes.checkBoxStyle }}
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleIcon />}
                  name="agreeLicense"
                />
              }
              label={t("register.agree")}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.buttonRoot}
            >
              {t("register.signUp")}
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
export default withNamespaces()(RegisterPage);
