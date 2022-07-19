"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const repositories_service_1 = __importDefault(require("../services/repositories.service"));
const Api_1 = require("../challenge/Api");
const helpers_1 = require("../utils/helpers");
const enums_1 = __importDefault(require("../utils/enums"));
const getAll = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield repositories_service_1.default.getAll();
        return res.status(enums_1.default.OK).json(data);
    }
    catch (error) {
        (0, helpers_1.handleError)(error, res);
    }
});
const getByLanguage = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield repositories_service_1.default.getByLanguage(Api_1.language);
        return res.status(enums_1.default.OK).json(data);
    }
    catch (error) {
        (0, helpers_1.handleError)(error, res);
    }
});
exports.default = { getAll, getByLanguage };
