// // List of commands that require API calls

import { getQuote } from '../api';
import { getReadme } from '../api';
import { getWeather } from '../api';
import { getFunFact } from '../api';

export const projects = async (args: string[]): Promise<string> => {
  return `
Progress Blue-Collar - <a class="text-light-blue dark:text-dark-blue underline" href="https://www.progressbluecollar.com/" target="_blank">https://www.progressbluecollar.com/</a>
Coffe Index - Under Construction
Open Source 'everything' clone - Under Construction
`;
};

export const quote = async (args: string[]): Promise<string> => {
  const data = await getQuote();
  return data.quote;
};

export const funFact = async (args: string[]): Promise<string> => {
  const data = await getFunFact();
  return data.text;
};

export const readme = async (args: string[]): Promise<string> => {
  const readme = await getReadme();
  return `Opening GitHub README...\n
  ${readme}`;
};

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');
  if (!city) {
    return 'Usage: weather [city]. Example: weather casablanca';
  }
  const weather = await getWeather(city);
  return weather;
};
