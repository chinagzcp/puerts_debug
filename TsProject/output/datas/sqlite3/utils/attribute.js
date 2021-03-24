"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaxLength = exports.DefaultValue = exports.NotNull = exports.Unique = exports.AutoInc = exports.PrimaryKey = exports.Column = exports.Table = void 0;
const decorator_1 = require("./decorator");
function Table(alias) {
    return (target) => {
        decorator_1.ClassMetadata.add(target, new decorator_1.Metadata(Table, alias));
    };
}
exports.Table = Table;
function Column(type, alias) {
    return (target, key) => {
        decorator_1.FieldMetadata.add(target.constructor, key, new decorator_1.Metadata(Column, { type, alias }));
    };
}
exports.Column = Column;
function PrimaryKey() {
    return (target, key) => {
        decorator_1.FieldMetadata.add(target.constructor, key, new decorator_1.Metadata(PrimaryKey));
    };
}
exports.PrimaryKey = PrimaryKey;
function AutoInc() {
    return (target, key) => {
        decorator_1.FieldMetadata.add(target.constructor, key, new decorator_1.Metadata(AutoInc));
    };
}
exports.AutoInc = AutoInc;
function Unique() {
    return (target, key) => {
        decorator_1.FieldMetadata.add(target.constructor, key, new decorator_1.Metadata(Unique));
    };
}
exports.Unique = Unique;
function NotNull() {
    return (target, key) => {
        decorator_1.FieldMetadata.add(target.constructor, key, new decorator_1.Metadata(NotNull));
    };
}
exports.NotNull = NotNull;
function DefaultValue(value) {
    return (target, key) => {
        decorator_1.FieldMetadata.add(target.constructor, key, new decorator_1.Metadata(DefaultValue, value));
    };
}
exports.DefaultValue = DefaultValue;
function MaxLength(value) {
    return (target, key) => {
        decorator_1.FieldMetadata.add(target.constructor, key, new decorator_1.Metadata(MaxLength, value));
    };
}
exports.MaxLength = MaxLength;
//# sourceMappingURL=attribute.js.map