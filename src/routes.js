import {
  BILLS_URL,
  BUS_URL,
  ELECTRICITY_URL,
  LOGIN_URL,
  MAIN_URL,
  NEWS_URL,
  ROADMAP_URL,
  TRAIN_URL,
} from "./utils/consts";
import Bills from "./pages/bills/bills";
import Bus from "./pages/bus/bus";
import Electricity from "./pages/electricity/electricity";
import { Login } from "./pages/login/login";
import Main from "./pages/main/main";
import { News } from "./pages/news/news";
import { Roadmap } from "./pages/roadmap/roadmap";
import Train from "./pages/train/train";

export const authRoutes = [];

export const publicRoutes = [
  {
    path: BILLS_URL,
    component: <Bills />,
  },
  {
    path: BUS_URL,
    component: <Bus />,
  },
  {
    path: ELECTRICITY_URL,
    component: <Electricity />,
  },
  {
    path: LOGIN_URL,
    component: <Login />,
  },
  {
    path: MAIN_URL,
    component: <Main />,
  },
  {
    path: NEWS_URL,
    component: <News />,
  },
  {
    path: ROADMAP_URL,
    component: <Roadmap />,
  },
  {
    path: TRAIN_URL,
    component: <Train />,
  },
  {
    path: "*",
    component: <Main />,
  },
];
