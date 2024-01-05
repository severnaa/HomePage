import axios from 'axios';
import config from '../../config.json';

export const getReadme = async () => {
  const { data } = await axios.get(config.readmeUrl);
  return data;
};

export const getWeather = async (city: string) => {
  try {
    const { data } = await axios.get(`https://wttr.in/${city}?ATm`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getQuote = async () => {
  const { data } = await axios.get('https://api.quotable.io/random');
  return {
    quote: `“${data.content}” — ${data.author}`,
  };
};

export const getFunFact = async () => {
  const { data } = await axios.get(
    'https://uselessfacts.jsph.pl/api/v2/facts/random',
  );
  return data;
};
