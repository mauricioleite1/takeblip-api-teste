"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const enums_1 = __importDefault(require("./enums"));
const handleError = (error, res) => {
    const { response: { status, data } } = error;
    if (status)
        return res.status(status).json({ message: data.message });
    const message = "Não foi possível concluir a requisição";
    return res.status(enums_1.default.INTERNAL_SERVER_ERROR).json({ message });
};
exports.handleError = handleError;
