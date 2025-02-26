interface IUser {
  name: string;
  email: string;
  password: string;
  profileImage?: string;
  userType?: 'Admin';
}

export default IUser;
 