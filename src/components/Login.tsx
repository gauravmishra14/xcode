import React from "react";
import TextInput from "./form/TextInput";
import { isRequired } from "utils/FormValidation";
import { getMethod, login } from "utils/Apis";
import store from "store";
import { userLoggedIn } from "utils/ActionDispatcher";

interface IState {
  [key: string]: any;
}

interface IErrors {
  [key: string]: string;
}
class Login extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);

    const errors: IErrors = {};
    this.state = {
      errors,
    };
  }
  private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    this.setState({ [name]: value.trim() });
  };

  private haveErrors(errors: IErrors) {
    let haveError: boolean = false;
    Object.keys(errors).forEach((key: string) => {
      if (errors[key].length > 0) {
        haveError = true;
      }
    });
    return haveError;
  }

  private handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, password } = this.state;
    this.setState(
      {
        errorFromApi: "",
        errors: {
          ...this.state.errors,
          username: isRequired(username, "username"),
          password: isRequired(password, "password"),
        },
      },
      () => {
        if (!this.haveErrors(this.state.errors)) {
          const form = username.toLowerCase();
          this.submitCall(form);
        } else {
          console.log("have errors");
        }
      }
    );
  };

  postLogin = () => {
    this.setState({ submitted: true }, () => {
      setTimeout(() => {
        this.props.history.push("/dashboard");
      }, 1000);
    });
  };

  private submitCall = async (param: string): Promise<void> => {
    this.setState({ btnLoader: true });
    const url = `${login}${param}`;
    let res = await getMethod(url);

    if (res && res.status === 200) {
      let response = res.data[0];
      let user = {
        userID: response.id,
        fullName: response.fullName,
      };
      store.dispatch(userLoggedIn(user));
    }
    this.postLogin();
  };

  render() {
    const { errors, btnLoader } = this.state;
    return (
      <React.Fragment>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <TextInput
            placeholder="Username"
            type="text"
            onChange={this.handleChange}
            name="username"
            error={errors && this.state.errors["username"]}
            autoComplete="off"
          />
          <TextInput
            placeholder="Password"
            type={"password"}
            onChange={this.handleChange}
            error={errors && this.state.errors["password"]}
            name="password"
            autoComplete="off"
          />
          <button className="default-btn full-width">
            {btnLoader ? <span className="loader-btn"></span> : `Login`}
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
