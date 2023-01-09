export class User {
  public id: number;
  public firstName: string;
  public lastName: string;
  public maidenName: string;
  public age: number;
  public gender: string;
  public email: string;
  public phone: string;
  public username: string;
  public password: string;
  public birthDate: string;
  public image: string;

  constructor(id: number, 
    firstName: string, 
    lastName: string, 
    maidenName: string,
    age: number,
    gender: string,
    email: string,
    phone: string,
    username: string,
    password: string,
    birthDate: string,
    image: string){

    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.maidenName = maidenName;
    this.age = age;
    this.gender = gender;
    this.email = email;
    this.phone = phone;
    this.username = username;    
    this.password = password;
    this.birthDate = birthDate
    this.image = image    
  }
}