import lume from "lume/mod.ts";
import sass from "lume/plugins/sass.ts";

const site = lume();

site.use(sass(/* Options */));

export default site;
