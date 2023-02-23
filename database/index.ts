import { IAd } from "../interfaces/IAd";
import { IAddress, IUser } from "../interfaces/IUser";

export const address: IAddress = {
  id: "fc54f7f2-11d6-4987-b7d3-33444bd13958",
  cep: "36036-150",
  city: "Juiz de Fora",
  state: "MG",
  street: "Rua Pe. Frederico",
  complement: "n48, apt.503",
};

export const user: IUser = {
  name: "Laís Bomtempo Silveira Martins",
  email: "lais.bomtempo.sm@gmail.com",
  contact: "(32) 9 8412-4077",
  cpf: "016.395.364-66",
  isActive: true,
  userType: "advertiser",
  id: "d0b68e2f-17ed-4947-b45e-2dc2ed0c078d",
  createdAt: new Date(),
  updatedAt: new Date(),
  address: address,
};

export const advertisements: IAd[] = [
  {
    title: "TOYOTA Corolla Cross 2.0l xei cvt",
    id: "e65a9b1f-09f4-4c25-a483-f2d0ab131434",
    mileage: "10.000km",
    price: 190000,
    typeAd: "sale",
    vehicleType: "car",
    year: "2023",
    description:
      "Corolla Cross completo semi-novo, excelente estado! Apenas 10.000km rodados",
    coverImg:
      "https://garagem360.com.br/wp-content/uploads/2021/09/10.-Toyota-Corolla-Cross-Hybrid-2022-2-1.jpg",
    createdAt: new Date(),
    updatedAt: new Date(),
    user: user,
  },
  {
    title: "HONDA Civic sedan touring 1.5 turbo 16V AUT.4P",
    id: "19c127c6-b3ad-11ed-afa1-0242ac120002",
    mileage: "20.000km",
    price: 124900,
    typeAd: "sale",
    vehicleType: "car",
    year: "2017",
    description: "Honda Civic completo semi-novo, já revisado!",
    coverImg:
      "https://1.bp.blogspot.com/-UqD0YRGPCYE/WMupyHlWTaI/AAAAAAACixA/r-IQa_03N8EFtZ0IM4HP4H44o3bW7xyawCLcB/s1600/Honda-Civic-Touring-2017%2B%252812%2529.jpg",
    createdAt: new Date(),
    updatedAt: new Date(),
    user: user,
  },
  {
    title: "FORD EcoSport FreeStyle 1.6 16V Flex 5p",
    id: "22698350-b3ad-11ed-afa1-0242ac120002",
    mileage: "80.000km",
    price: 67900,
    typeAd: "sale",
    vehicleType: "car",
    year: "2017",
    description: "Ford EcoSport semi-novo, já revisado!",
    coverImg: "https://img2.icarros.com/dbimg/galeriaimgmodelo/2/48072_1.jpg",
    createdAt: new Date(),
    updatedAt: new Date(),
    user: user,
  },
  {
    title: "FORD EcoSport FreeStyle 1.6 16V Flex 5p",
    id: "a039e982-b3ad-11ed-afa1-0242ac12000",
    mileage: "80.000km",
    price: 67900,
    typeAd: "sale",
    vehicleType: "car",
    year: "2017",
    description: "Ford EcoSport semi-novo, já revisado!",
    coverImg: "https://img2.icarros.com/dbimg/galeriaimgmodelo/2/48072_1.jpg",
    createdAt: new Date(),
    updatedAt: new Date(),
    user: user,
  },
  {
    title: "TOYOTA Corolla Cross 2.0l xei cvt",
    id: "a7471588-b3ad-11ed-afa1-0242ac120002",
    mileage: "10.000km",
    price: 190000,
    typeAd: "sale",
    vehicleType: "car",
    year: "2023",
    description:
      "Corolla Cross completo semi-novo, excelente estado! Apenas 10.000km rodados",
    coverImg:
      "https://garagem360.com.br/wp-content/uploads/2021/09/10.-Toyota-Corolla-Cross-Hybrid-2022-2-1.jpg",
    createdAt: new Date(),
    updatedAt: new Date(),
    user: user,
  },
  {
    title: "HONDA Civic sedan touring 1.5 turbo 16V AUT.4P",
    id: "add51e40-b3ad-11ed-afa1-0242ac120002",
    mileage: "20.000km",
    price: 124900,
    typeAd: "sale",
    vehicleType: "car",
    year: "2017",
    description: "Honda Civic completo semi-novo, já revisado!",
    coverImg:
      "https://1.bp.blogspot.com/-UqD0YRGPCYE/WMupyHlWTaI/AAAAAAACixA/r-IQa_03N8EFtZ0IM4HP4H44o3bW7xyawCLcB/s1600/Honda-Civic-Touring-2017%2B%252812%2529.jpg",
    createdAt: new Date(),
    updatedAt: new Date(),
    user: user,
  },
  {
    title: "FORD EcoSport FreeStyle 1.6 16V Flex 5p",
    id: "b4b37996-b3ad-11ed-afa1-0242ac120002",
    mileage: "80.000km",
    price: 67900,
    typeAd: "sale",
    vehicleType: "car",
    year: "2017",
    description: "Ford EcoSport semi-novo, já revisado!",
    coverImg: "https://img2.icarros.com/dbimg/galeriaimgmodelo/2/48072_1.jpg",
    createdAt: new Date(),
    updatedAt: new Date(),
    user: user,
  },
];