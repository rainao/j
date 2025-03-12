import { fileURLToPath } from "node:url";
import node from "@astrojs/node";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import { baremuxPath } from "@mercuryworkshop/bare-mux/node";
import { epoxyPath } from "@mercuryworkshop/epoxy-transport";
import { libcurlPath } from "@mercuryworkshop/libcurl-transport";
import playformCompress from "@playform/compress";
import { uvPath } from "@titaniumnetwork-dev/ultraviolet";
import { scramjetPath } from "@mercuryworkshop/scramjet";
import icon from "astro-icon";
import { defineConfig, envField } from "astro/config";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { version } from "./package.json";
import { parsedDoc } from "./server/config.js"; // importing parsedDoc from config.js
const workerwarePath = fileURLToPath(new URL("./workerware/src", import.meta.url));

// Check if parsedDoc and parsedDoc.seo are defined
if (!parsedDoc || !parsedDoc.seo || typeof parsedDoc.seo.enabled === "undefined") {
    throw new Error("parsedDoc or parsedDoc.seo is undefined or malformed.");
}

export default defineConfig({
    site: parsedDoc.seo.enabled ? parsedDoc.seo.domain || process.env.SITE : 'http://localhost:4321',
    env: {
        schema: {
            VERSION: envField.string({
                context: "client",
                access: "public",
                optional: true,
                default: version
            }),
            MARKETPLACE_ENABLED: envField.boolean({
                context: "client",
                access: "public",
                optional: true,
                default:
            }
