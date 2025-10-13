import styles from "./Form.module.css";

export function RegisterForm({ formData, handleChange, handleSubmit }) {
  //

  //
  return (
    <form onSubmit={handleSubmit} className={styles.block}>
      <label>Логин</label>
      <input
        type="text"
        value={formData?.login || ""}
        onChange={(e) => handleChange("login", e.target.value)}
      />

      <label>email</label>
      <input
        type="text"
        value={formData?.email || ""}
        onChange={(e) => handleChange("email", e.target.value)}
      />

      <label>пароль</label>
      <input
        type="password"
        value={formData?.password || ""}
        onChange={(e) => handleChange("password", e.target.value)}
      />

      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}
