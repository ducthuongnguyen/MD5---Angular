export class SignUpForm {
  name: string;
  username: string;
  email: string;
  password: string;
  avatar: string;
  constructor(name: string, username: string, email: string, password: string, avatar: string) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.avatar = avatar;
  }
}
