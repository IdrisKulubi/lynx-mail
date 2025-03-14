import { defineConfig } from '@lynx-js/rspeedy';
import { pluginQRCode } from '@lynx-js/qrcode-rsbuild-plugin';
import { pluginReactLynx } from '@lynx-js/react-rsbuild-plugin-canary';

export default defineConfig({
server: {
host: '192.168.100.18', // Ersetze dies mit deiner tatsächlichen IPv4-Adresse
port: 3000, // Standardport, kannst du ändern, falls nötig
},
plugins: [
pluginQRCode({
schema(url) {
return `${url}?fullscreen=true`;
},
}),
pluginReactLynx(),
],
});
