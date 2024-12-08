// hooks | library
import { ChangeEvent, ReactElement } from "react";

// custom types
interface ISignInFormProps {
  email: string;
  password: string;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
}

export const SignInForm = ({
  email,
  password,
  setEmail,
  setPassword,
}: ISignInFormProps): ReactElement => (
  <form id={"authForm"}>
    <h2>Se connecter</h2>
    <div className={"inputContainer"}>
      <label htmlFor={"email"}>Identifiant</label>
      <input
        id={"email"}
        type={"email"}
        value={email}
        autoComplete={"on"}
        onChange={(e: ChangeEvent<HTMLInputElement>): void =>
          setEmail(e.target.value)
        }
      />
    </div>
    <div className={"inputContainer"}>
      <label htmlFor={"password"}>Mot de passe</label>
      <input
        id={"password"}
        type={"password"}
        value={password}
        autoComplete={"on"}
        onChange={(e: ChangeEvent<HTMLInputElement>): void =>
          setPassword(e.target.value)
        }
      />
    </div>
    <div className={"buttonContainer"}>
      <button>Connexion</button>
    </div>
  </form>
);
