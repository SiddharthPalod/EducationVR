import Intropg1 from "./Intropg1";
import About from "./About";
import Navbar1 from "./Navbar";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import { proxy } from "valtio";
import Navbar from "./Navbar";

const state = proxy({
    intro: true,
    pg1: false,
    about: false,
    pg2: false,
    pg3: false,
});

export { Intropg1, About, Navbar1,Page1, Page2, Page3, state };
