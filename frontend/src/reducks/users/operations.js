import { signInAction } from "./actions";
import { push } from "connected-react-router";

export const signIn = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const isSignedIn = state.users.isSignedIn;

    if (!isSignedIn) {
      const url = "https://api.github.com/users/phuoclv";

      const response = await fetch(url)
        .then((response) => response.json())
        .catch(() => null);
      const username = response.login;

      dispatch(
        signInAction({
          isSignedIn: true,
          uid: "0001",
          username: username,
        })
      );
      dispatch(push("/"));
    }
  };
};

export const signUp = (username, email, password, confirmPassword) => {
  return async (dispatch) => {
    // Validation
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("必須項目が未入力です");
      return false;
    }

    if (password !== confirmPassword) {
      alert("パースワードが一致しません。もう１度お試しください。");
      return false;
    }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    };
    await fetch("/api/create-user", requestOptions)
      .then((response) => {
        response.json();
      })
      .then(() => {
        dispatch(push("/"));
      });
    //   .then((data) => {console.log(data)});

    // return auth
    //   .createUserWidthEmailAndPassword(email, password)
    //   .then((result) => {
    //     const user = result.user;

    //     if (user) {
    //       const uid = user.uid;
    //       const timestamp = FirebaseTimestamp.now();

    //       const userInitialData = {
    //         created_at: timestamp,
    //         email: email,
    //         role: "customer",
    //         uid: uid,
    //         updated_at: timestamp,
    //         username: username,
    //       };

    //       db.collection("users")
    //         .doc(uid)
    //         .set(userInitialData)
    //         .then(() => {
    //           dispatch(push("/"));
    //         });
    //     }
    //   });
  };
};
