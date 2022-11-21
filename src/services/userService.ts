// import axios from 'axios';
import { axiosPrivate } from '../axiosPrivate/axiosPrivate';



class UserService {
  async getUser(id: string) {
    return await axiosPrivate({
      method: 'GET',
      url: `/users/${id}`,
    });
  }
}

export default new UserService();
