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
  avatar: ICustomImage | any;
}
interface ITestimonial {
  id: number;
  description: string;
  icon: ICustomImage | any;
  user: IUser;
}
interface ISolution {
  id: number;
  image: ICustomImage | any;
  title: string;
  description: string;
}
interface ILinks {
  id: number;
  title: string;
  path: string;
  icon?: ICustomImage | any;
}
interface IFooterLink {
  id: number;
  title: string;
  links: ILinks[];
}
