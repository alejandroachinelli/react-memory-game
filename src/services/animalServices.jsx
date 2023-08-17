import axiosModyoInstance from '../config/apiModyoConfig';

export const fetchAnimalService = async (numberCards) => {
  try {
    const response = await axiosModyoInstance.get('', {
      params: {per_page: numberCards},
    });

    const duplicatedCards = [...response.data.entries, ...response.data.entries];
    return duplicatedCards;
  } catch (error) {
    throw error;
  }
};