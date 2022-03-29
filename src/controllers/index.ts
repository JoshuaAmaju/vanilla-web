import { createRouter } from "../lib/route";
import * as About from "../pages/about/route";
import * as Home from "../pages/home/route";
import * as ReactSSR from "../pages/react-ssr/route";

const router = createRouter();

router.get("/", Home.get);
router.get("/about", About.get);
router.get("/react-ssr", ReactSSR.get);

export default router;
