import { registerHandlers, run, type Handler } from "encore.dev/internal/codegen/appinit";
import { shorten as shortenImpl0 } from "../../../../../url/url";
import { get as getImpl1 } from "../../../../../url/url";
import { list as listImpl2 } from "../../../../../url/url";

const handlers: Handler[] = [
    {
        service:           "url",
        name:              "shorten",
        handler:           shortenImpl0,
        raw:               false,
        streamingRequest:  false,
        streamingResponse: false,
    },
    {
        service:           "url",
        name:              "get",
        handler:           getImpl1,
        raw:               false,
        streamingRequest:  false,
        streamingResponse: false,
    },
    {
        service:           "url",
        name:              "list",
        handler:           listImpl2,
        raw:               false,
        streamingRequest:  false,
        streamingResponse: false,
    },
];

registerHandlers(handlers);
await run();
