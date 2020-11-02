import { createApp } from "vue";
import App from "./layouts/Default";
import router from './router'




const app = createApp(App)
    .use(router)


app.mount("#app");
