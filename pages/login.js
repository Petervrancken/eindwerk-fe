import Link from "next/link";
import { useForm } from "react-hook-form";
import axios from "axios";
import router, { useRouter } from "next/router";
import { parseCookies, setCookie, destroyCookie } from "nookies";

// verander hier je URL endpoints
const URL = "https://wdev2.be/peter21/eindwerk"; // wdev url
//const URL = "https://127.0.0.1:8000";  // local url

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    axios
      .post(URL + "/api/login_check", {
        username: data.username,
        password: data.password,
      })
      .then(function (response) {
        console.log(response.data);
        setCookie(null, "cookieData", response.data.token);
        setCookie(null, "Id", response.data.data.id);
        router.push("/comment");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <div className="backgroundTableTheme">
        <div className="sloganTheme">
          <p className="sloganText">login</p>
          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("username", { required: true })}
              className="login-input"
              id="email"
              type="email"
              placeholder="email"
              required
            />
            <input
              {...register("password", { required: true })}
              className="login-input"
              id="password"
              type="password"
              placeholder="wachtwoord"
              required
            />
            {errors.exampleRequired && <span>This field is required</span>}
            <p className="infoRestauratie">
              Nog geen lid? Registreer{" "}
              <Link href="/registreer">
                <a className="login-register-link" href="#">
                  hier!
                </a>
              </Link>
            </p>
            <button className="button-submit" type="submit">
              verzenden
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
