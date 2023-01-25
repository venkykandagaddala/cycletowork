export class Auth{
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: Text;

  constructor(id: number,
    username: string,
    email: string,    
    firstName: string,
    lastName: string,
    gender: string,
    image: string,
    token: Text) {
      this.id = id;
      this.username = username;
      this.email = email;
      this.firstName = firstName;
      this.lastName = lastName;
      this.gender = gender;
      this.image = image;
      this.token = token;
    }
}