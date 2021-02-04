import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
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
import { InputAdornment, TextField } from "@material-ui/core";
import { withNamespaces } from "react-i18next";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#DE48D5",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
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
  dialog: {
    boxShadow: "0px 0px 16px 2px #ca0cec",
    backgroundColor: "#04021fc4",
    color: "azure",
  },
  inputRootStyle: { color: "white" },
  buttonRoot: {
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

const Copyright = () => {
  return (
    <Typography variant="body2" color="secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        The Wolf Castle
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const LoginModal = ({ t, open, setOpen }) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    login: "",
    password: "",
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
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      classes={{ paper: classes.dialog }}
    >
      <DialogTitle id="alert-dialog-slide-title" onClose={handleClose} />
      <DialogContent>
        <div className={classes.paper}>
          <Avatar className={classes.avatar} />
          <Typography component="h1" variant="h5">
            {t("signIn.signIn")}
          </Typography>
          <form id="loginModal" className={classes.form}>
            <Grid
              container
              spacing={2}
              direction="column"
              justify="center"
              alignItems="stretch"
            >
              <Grid item>
                <TextField
                  id="input-login"
                  classes={{ root: classes.inputRootStyle }}
                  fullWidth
                  label={t("signIn.login")}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="input-password"
                  classes={{ root: classes.inputRootStyle }}
                  type={values.showPassword ? "text" : "password"}
                  fullWidth
                  required
                  onChange={handleChange("password")}
                  value={values.password}
                  label={t("signIn.password")}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          classes={{ root: classes.inputRootStyle }}
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      classes={{ root: classes.checkBoxStyle }}
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<CheckCircleIcon />}
                      name="remember"
                    />
                  }
                  label={t("signIn.remember")}
                />
              </Grid>
              <Grid item>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className={classes.buttonRoot}
                >
                  {t("signIn.signIn")}
                </Button>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs>
                <Link href="#" variant="body2">
                  {t("signIn.forgot")}
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {t("signIn.signUp")}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </DialogContent>
    </Dialog>
  );
};
export default withNamespaces()(LoginModal);
