import { Dispatch, SetStateAction } from 'react';

export interface ControlProps {
  currentPages?: number;
  totalPages?: number;
  isLoading?: boolean;
  sorting?: string;
  setSearchValue?: Dispatch<SetStateAction<string>>;
  setCurrentPages?: Dispatch<SetStateAction<number>>;
  btnClick?: any;
  setSorting?: Dispatch<SetStateAction<string>>;
}
