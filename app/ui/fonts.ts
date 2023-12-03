import {Roboto} from 'next/font/google';
import { Lusitana } from 'next/font/google';
import { Ubuntu } from 'next/font/google';

export const roboto = Roboto({weight: "400", subsets:['latin']});
export const lusitana = Lusitana({
  weight: "400",
  preload: true,
  subsets:['latin']
});

export const ubuntu = Ubuntu({ weight:"400",subsets:['latin']});
