/**
 * Film object format to store in database
 */
export interface Film {
  _id?: string;
  userName: string;
  title: string;
  year: number;
  viewingDay?: number;
  viewingMonth?: number;
  viewingYear?: number;
  duration?: number;
  link?: string;
  score?: number;
}
