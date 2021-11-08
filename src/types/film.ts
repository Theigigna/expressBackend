/**
 * Film object format to store in database
 */
export interface Film {
  user: string;
  title: string;
  year: number;
  viewingYear: number;
  duration?: number;
  link?: string;
}
