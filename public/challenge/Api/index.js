"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.params = exports.listAllEndpoint = exports.language = exports.api = void 0;
const axios_1 = __importDefault(require("axios"));
require("dotenv/config");
const api = axios_1.default.create({
    baseURL: "https://api.github.com",
});
exports.api = api;
const language = "C#";
exports.language = language;
const org = process.env.ORG || "takenet";
const listAllEndpoint = `/orgs/${org}/repos`;
exports.listAllEndpoint = listAllEndpoint;
const settings = {
    sortBy: "created",
    direction: "asc",
};
const params = `?sort=${settings.sortBy}&direction=${settings.direction}`;
exports.params = params;
