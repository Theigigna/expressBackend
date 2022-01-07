/**
 * User object to store in database and identify who stores a film
 */
export interface User {
  _id?: string;
  userName: string;
  password: string;
  name: string;
  surname?: string;
  permission: permission;
}

enum permission {
  root = "root",
  user = "user",
}
