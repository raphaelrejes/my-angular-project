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
var core_1 = require("@angular/core");
var UserComponent = (function () {
    function UserComponent() {
        console.log();
        this.name = 'Rejes!';
        this.email = 'raphael.rejes@gmail.com';
        this.address = {
            street: 'avenida paulista!',
            number: 123,
            city: 'São paulo',
            state: 'SP',
        };
    }
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'user',
        template: "<h1>Hello {{name}}</h1>\n             <p>E-mail: {{email}}<p>\n             <p><strong>Adress: {{address.street}}, {{address.number}}, {{address.city}}, {{address.state}}<strong><p>",
    }),
    __metadata("design:paramtypes", [])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map