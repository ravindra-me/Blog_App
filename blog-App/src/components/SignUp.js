import React from "react";
import { Link } from "react-router-dom";
export default class SignUp extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    error: {
      email: "",
      password: "",
      username: "",
    },
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    const error = { ...this.state.error };
    console.log(error);
    switch (name) {
      case "email":
        error.email =
          value.indexOf("@") === -1 ? "Email does not contain @" : "";
        break;
      case "password":
        let vr =
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        if (!vr.test(value)) {
          error.password =
            "password must be include 8 characters, at least one letter, one number and one special character";
        }
        break;
      case "username":
        error.username =
          value.length < 4 ? "username must be includes 5 characters" : "";
        break;
      default:
        break;
    }

    this.setState({
      [name]: value,
      error,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    const { email, password, username, error } = this.state;
    return (
      <section className="py-16">
        <div class="container flex justify-center items-center ">
          <form action="" className="p-8 shadow-lg border rounded-xl width-40">
            <legend className="text-4xl text-center mb-4">Sign Up</legend>
            <Link to="/login">
              <p className="text-center text-green-500">Have a account?</p>
            </Link>
            <div className="mt-16">
              <div className="mb-4">
                <input
                  type="text"
                  name="username"
                  id=""
                  placeholder="Username"
                  className="block border-2 py-2 px-4 rounded  w-full"
                  value={username}
                  onChange={this.handleChange}
                />
                <span className="mb-4 text-red-500">{error.username}</span>
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Email"
                  className="block border-2 py-2 px-4 rounded  w-full"
                  value={email}
                  onChange={this.handleChange}
                />
                <span className="mb-4 text-red-500">{error.email}</span>
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  name="password"
                  id=""
                  placeholder="Password"
                  className="block border-2 py-2 px-4 rounded w-full "
                  value={password}
                  onChange={this.handleChange}
                />
                <span className="text-red-500">{error.password}</span>
              </div>
              <div className="text-right">
                {error.email || error.password ? (
                  ""
                ) : (
                  <input
                    type="submit"
                    value="Sign Up"
                    className="bg-green-500 px-4 py-2 rounded"
                  />
                )}
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
