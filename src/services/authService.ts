import axios from "axios";
import { ISignInForm, ISignUpForm } from "../types/interfaces";

const baseUrl = 'https://final-task-backend-production-c179.up.railway.app';

class AuthService {
  registration = async (data: ISignUpForm) => {
    return await axios({
      method: 'POST',
      url: `${baseUrl}/auth/signup`,
      data,
    });
  };

  login = async (data: ISignInForm) => {
    return await axios({
      method: 'POST',
      url: `${baseUrl}/auth/signin`,
      data,
    });
  };
}

export default new AuthService();
