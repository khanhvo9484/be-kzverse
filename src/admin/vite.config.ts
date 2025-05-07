import { mergeConfig, type UserConfig } from "vite";

export default (config: UserConfig) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    server: {
      allowedHosts: ["grub-rapid-raccoon.ngrok-free.app"],
    },
  });
};
