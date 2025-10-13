import { LoginForm } from "./components/LoginForm";
import { RegisterForm } from "./components/RegisterForm";
import useForm from "./hooks/useForm";
import "./App.css";

//
function App() {
  //
  const loginData = useForm({});
  const registerData = useForm({});

  const handleSubmit = (e, formType) => {
    e.preventDefault();
    if (formType === "login") {
      console.log("Данные авторизации:", loginData.formData);
    } else if (formType === "password") {
      console.log("Данные регистрации:", registerData.formData);
    }
  };

  //
  //
  return (
    <div>
      <h2>Авторизация</h2>
      <LoginForm
        handleChange={loginData.handleChange}
        handleSubmit={(e) => handleSubmit(e, "login")}
        formData={loginData.formData}
      />

      <h2>Регистрация</h2>
      <RegisterForm
        handleChange={registerData.handleChange}
        handleSubmit={(e) => handleSubmit(e, "password")}
        formData={registerData.formData}
      />
    </div>
  );
}

export default App;
