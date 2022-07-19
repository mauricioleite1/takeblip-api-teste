"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const repositories_controller_1 = __importDefault(require("../controllers/repositories.controller"));
const repositoriesRouter = (0, express_1.Router)();
repositoriesRouter.get("/", repositories_controller_1.default.getAll);
repositoriesRouter.get("/challenge", repositories_controller_1.default.getByLanguage);
exports.default = repositoriesRouter;
