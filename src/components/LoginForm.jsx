import styles from "./Form.module.css";

//
export function LoginForm({ formData, handleChange, handleSubmit }) {
  //

  //
  return (
    <form className={styles.block} onSubmit={handleSubmit}>
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

      <button type="submit">Войти</button>
    </form>
  );
}
