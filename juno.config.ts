import { defineConfig } from "@junobuild/config";

export default defineConfig({
  satellite: {
    id: "ocg54-jiaaa-aaaal-asama-cai",
    source: "out",
    predeploy: ["npm run build"],
  },
});
