interface ICustomLink {
  id: number;
  title: string;
  path: string;
}
interface ICustomImage {
  src: string;
  height: number;
  width: number;
  blurDataURL: string | undefined;
  blurWidth: number;
  blurHeight: number;
}
interface IAboutCard {
  id: number;
  title: string;
  description: string;
  image: ICustomImage | any;
}
interface IUser {
  name: string;
  profession: string;
  avatar: ICustomImage;
}
interface ITestimonial {
  id: number;
  description: string;
  icon: ICustomImage;
  user: IUser;
}
