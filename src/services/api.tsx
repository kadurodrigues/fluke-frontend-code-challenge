import { BASE_URL } from '../utils/constants';

const api = async (status: string) => {
  try {
    const response = await fetch(`${BASE_URL}/events?limit=25&days=365&status=${status}`);
    return await response.json();
  }
  catch (error) {
    return console.log(error);
  }
}

export default api;