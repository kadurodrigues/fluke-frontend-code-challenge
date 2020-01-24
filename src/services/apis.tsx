import { BASE_URL } from '../utils/constants';

export const eventsAPI = async (status: string) => {
  try {
    const response = await fetch(`${BASE_URL}/events?limit=25&days=365&status=${status}`);
    return await response.json();
  }
  catch (error) {
    return console.log(error);
  }
}

export const eventAPI = async (eventId: string) => {
  try {
    const response = await fetch(`${BASE_URL}/events/${eventId}`);
    return await response.json();
  }
  catch (error) {
    return console.log(error);
  }
}

export const categoriesAPI = async () => {
  try {
    const response = await fetch(`${BASE_URL}/categories`);
    return await response.json();
  }
  catch (error) {
    return console.log(error);
  }
}