// import scss
import importAll from "./utils/importAll";

//import scss
importAll(require.context("./styles/", true, /scss/i));

// import ts
importAll(require.context("./components/", true, /ts/i));

//import image
importAll(require.context("./assets/images", false, /\.(gif|png|jpe?g|svg)$/i));
