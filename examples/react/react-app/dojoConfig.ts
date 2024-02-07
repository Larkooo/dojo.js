import manifest from "../../dojo-starter/manifests/deployments/KATANA.json";
import { createDojoConfig } from "@dojoengine/core";

export const dojoConfig = createDojoConfig({
    manifest,
    relayUrl:
        "/ip4/127.0.0.1/udp/9091/webrtc-direct/certhash/uEiCAoeHQh49fCHDolECesXO0CPR7fpz0sv0PWVaIahzT4g",
});
