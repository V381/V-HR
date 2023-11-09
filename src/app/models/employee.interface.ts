export interface Item {
  id: number;
  typeOfVacation?: VacationType[]
}

export interface VacationItem {
  dateFrom: string;
  dateTo: string;
  typeOfVacation: string;
  daysTaken: number;
  comment: string;
}

export interface VacationType {
  type: string;
  items: VacationItem[];
}

export interface Employee {
  id: number;
  name: string;
  address: string;
  typeOfVacation?: VacationType[]; 
  isFiltered?: boolean;
}
