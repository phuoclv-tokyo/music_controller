import React, { useCallback, useState } from "react";
import { Grid, Button, ButtonGroup, Typography } from "@material-ui/core";
import { PrimaryButton, TextInput } from "../components/UIkit";
import { signUp } from "../reducks/users/operations";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [confimPassword, setConfirmPassword] = useState("");

  const inputUsername = useCallback(
    (event) => {
      setUsername(event.target.value);
    },
    [setUsername]
  );

  const inputEmail = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );

  const inputPassword = useCallback(
    (event) => {
      setPassword(event.target.value);
    },
    [setPassword]
  );

  const inputConfirmPassword = useCallback(
    (event) => {
      setConfirmPassword(event.target.value);
    },
    [setConfirmPassword]
  );

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} align="center">
        <Typography variant="h4" compact="h4" color="inherit">
          アカウント
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <TextInput
          fullWidth={true}
          label={"ユーザー名"}
          multiline={false}
          required={true}
          rows={1}
          value={username}
          type={"text"}
          onChange={inputUsername}
        />
        <TextInput
          fullWidth={true}
          label={"メールアドレス"}
          multiline={false}
          required={true}
          rows={1}
          value={email}
          type={"email"}
          onChange={inputEmail}
        />
        <TextInput
          fullWidth={true}
          label={"パースワード"}
          multiline={false}
          required={true}
          rows={1}
          value={password}
          type={"password"}
          onChange={inputPassword}
        />
        <TextInput
          fullWidth={true}
          label={"パースワード（再確認）"}
          multiline={false}
          required={true}
          rows={1}
          value={confimPassword}
          type={"password"}
          onChange={inputConfirmPassword}
        />
      </Grid>
      <Grid item xs={12} align="center">
        <PrimaryButton
          label="SIGN UP"
          onClick={() =>
            dispatch(signUp(username, email, password, confimPassword))
          }
        />
      </Grid>
    </Grid>
  );
};

export default SignUp;
