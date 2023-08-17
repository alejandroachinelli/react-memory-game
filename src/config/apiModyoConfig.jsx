import axios from 'axios';

const API_MODYO_URL = 'https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries';

const axiosModyoInstance = axios.create({
  baseURL: API_MODYO_URL,
});

export default axiosModyoInstance;