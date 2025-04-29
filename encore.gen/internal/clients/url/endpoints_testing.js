import { apiCall, streamIn, streamOut, streamInOut } from "encore.dev/internal/codegen/api";
import { registerTestHandler } from "encore.dev/internal/codegen/appinit";

export async function shorten(params) {
    const handler = (await import("../../../../url/url")).shorten;
    registerTestHandler({ service: "url", name: "shorten", raw: false, handler, streamingRequest: false, streamingResponse: false });

    return apiCall("url", "shorten", params);
}

export async function get(params) {
    const handler = (await import("../../../../url/url")).get;
    registerTestHandler({ service: "url", name: "get", raw: false, handler, streamingRequest: false, streamingResponse: false });

    return apiCall("url", "get", params);
}

export async function list(params) {
    const handler = (await import("../../../../url/url")).list;
    registerTestHandler({ service: "url", name: "list", raw: false, handler, streamingRequest: false, streamingResponse: false });

    return apiCall("url", "list", params);
}

