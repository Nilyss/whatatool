// hooks | library
import {
  ChangeEvent,
  ReactElement,
  useContext,
  MouseEvent,
  useEffect,
} from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

// context
import { UserContext } from "../../context/user/UserContext.tsx";
import { IUserCredentials } from "../../utils/types/user.types.ts";

// custom types
interface ISignInFormProps {
  email: string;
  password: string;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
}

export default function SignInForm({
  email,
  password,
  setEmail,
  setPassword,
}: Readonly<ISignInFormProps>): ReactElement {
  const navigate: NavigateFunction = useNavigate();
  const { getUser, user } = useContext(UserContext);

  const handleSubmit = async (
    event: MouseEvent<HTMLButtonElement>,
  ): Promise<void> => {
    event.preventDefault();
    const credentials: IUserCredentials = {
      email,
      password,
    };
    await getUser(credentials);
  };

  useEffect((): void => {
    if (user) {
      console.log("user =>", user);
      navigate("/home");
    }
  });

  return (
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
        <button
          onClick={(event: MouseEvent<HTMLButtonElement>): Promise<void> =>
            handleSubmit(event)
          }
        >
          Connexion
        </button>
      </div>
    </form>
  );
}
