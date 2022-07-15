import { useState } from 'react';
import { ISmartphone } from '../interfaces/ISmartphone';
import { useFetch } from './useFetch';

export const useSmartphones = () => {
  const [storage, setStorage] = useState<string>('');
  const [manufacturer, setManufacturer] = useState<string>('');

  const { response } = useFetch<ISmartphone[]>(
    `http://localhost:3333/smartphones${storage && `?storage=${storage}`}${
      manufacturer && `${storage ? '&' : '?'}manufacturer=${manufacturer}`
    }`
  );

  return { smartphones: response, setStorage, setManufacturer };
};
