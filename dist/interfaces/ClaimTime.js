"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typegoose_1 = require("typegoose");
const index_1 = require("./index");
class ClaimTime extends typegoose_1.Typegoose {
}
__decorate([
    typegoose_1.prop({ ref: index_1.Profile }),
    __metadata("design:type", Object)
], ClaimTime.prototype, "prof", void 0);
__decorate([
    typegoose_1.prop({ ref: index_1.Org }),
    __metadata("design:type", Object)
], ClaimTime.prototype, "org", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Number)
], ClaimTime.prototype, "minutes", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], ClaimTime.prototype, "notes", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], ClaimTime.prototype, "transactionId", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Object)
], ClaimTime.prototype, "reward", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], ClaimTime.prototype, "blockTime", void 0);
exports.ClaimTime = ClaimTime;
