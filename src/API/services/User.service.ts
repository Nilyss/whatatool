import { isOnProduction } from "../../utils/scripts/utils.ts";
import { postRequest } from "../APICalls.ts";

// custom types
import { AxiosResponse } from "axios";
import { IUser, IUserCredentials } from "../../utils/types/user.types.ts";

// model
import { userModel } from "../models/user.model.ts";

export const getUserService = async (
  credentials: IUserCredentials,
  userID?: IUser["id"],
): Promise<IUser> => {
  const endpoint: string = isOnProduction()
    ? `/users/${userID}`
    : "/userMock.JSON";

  const response: AxiosResponse<IUser | IUser[]> = await postRequest<
    IUserCredentials,
    IUser | IUser[]
  >(endpoint, credentials);

  if (!isOnProduction()) {
    const users = response.data as IUser[];
    const foundUser: IUser | undefined = users.find(
      (user: IUser): boolean => user.email === credentials.email,
    );

    if (!foundUser) {
      throw new Error(
        `The user ${credentials.email} is not found inside the mockup.`,
      );
    }

    return userModel(foundUser);
  }
  return userModel(response.data as IUser);
};
