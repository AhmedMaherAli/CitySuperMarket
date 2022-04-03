"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[106],{3106:(G,g,l)=>{l.r(g),l.d(g,{CheckoutModule:()=>j});var a=l(9808),p=l(0),e=l(4893);let Z=(()=>{class o{constructor(t){this.router=t;const n=this.router.getCurrentNavigation(),s=n&&n.extras&&n.extras.state;s&&(this.order=s)}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(p.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-checkout-success"]],decls:9,vars:0,consts:[[1,"container",2,"margin-left","45%","margin-top","10%"],[1,"fa","fa-check-circle","fa-5x",2,"color","green"],[1,"mt-2"],[1,"mb-4",2,"font-size","1.1em"],["routerLink","/orders",1,"btn","btn-outline-success",2,"width","50%"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div"),e._UZ(2,"i",1),e.qZA(),e.TgZ(3,"h2",2),e._uU(4,"Thank You. Your order is confirmed."),e.qZA(),e.TgZ(5,"p",3),e._uU(6,"Your order has not been shipped yet. Once it is, one of our customer service will call you."),e.qZA(),e.TgZ(7,"button",4),e._uU(8," View your orders"),e.qZA(),e.qZA())},directives:[p.rH],styles:[""]}),o})();var c=l(2382),h=l(9479),d=l(122),u=l(9492);function b(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"li",4),e.TgZ(1,"button",5),e.NdJ("click",function(){const i=e.CHM(t).index;return e.oxw().onClick(i)}),e.TgZ(2,"strong"),e._uU(3),e.qZA(),e.qZA(),e.qZA()}if(2&o){const t=r.$implicit,n=r.index,s=e.oxw();e.xp6(1),e.ekj("active",s.selectedIndex===n),e.xp6(2),e.hij(" ",t.label," ")}}function _(o,r){if(1&o&&e.GkF(0,6),2&o){const t=e.oxw();e.Q6J("ngTemplateOutlet",t.selected.content)}}let y=(()=>{class o extends u.B8{ngOnInit(){this.linear=this.linearModeSelected}onClick(t){this.selectedIndex=t}}return o.\u0275fac=function(){let r;return function(n){return(r||(r=e.n5z(o)))(n||o)}}(),o.\u0275cmp=e.Xpm({type:o,selectors:[["app-stepper"]],inputs:{linearModeSelected:"linearModeSelected"},features:[e._Bn([{provide:u.B8,useExisting:o}]),e.qOj],decls:5,vars:2,consts:[[1,"container"],[1,"nav","nav-pills","nav-justified"],["class","nav-item",4,"ngFor","ngForOf"],[3,"ngTemplateOutlet",4,"ngIf"],[1,"nav-item"],[1,"nav-link","py-3","text-uppercase","font-weight-bold","btn-block",3,"click"],[3,"ngTemplateOutlet"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"ul",1),e.YNc(2,b,4,3,"li",2),e.qZA(),e.TgZ(3,"div"),e.YNc(4,_,1,1,"ng-container",3),e.qZA(),e.qZA()),2&t&&(e.xp6(2),e.Q6J("ngForOf",n.steps),e.xp6(2),e.Q6J("ngIf",n.selected))},directives:[a.sg,a.O5,a.tP],styles:[".nav-link[_ngcontent-%COMP%]{text-decoration:none;border-radius:0%;color:#d1c0a1}.nav-link[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{color:#003312}.nav-link.focus[_ngcontent-%COMP%]{outline:none}.nav-link.active[_ngcontent-%COMP%]{color:#f5f5f5;background-color:#003312}.nav-link.active[_ngcontent-%COMP%]:hover{color:#f5f5f5}.nav-link.active[_ngcontent-%COMP%]:focus{outline:none}"]}),o})();var v=l(2290);function T(o,r){1&o&&(e.TgZ(0,"span",22),e.TgZ(1,"strong"),e._uU(2,"Street is required."),e.qZA(),e.qZA())}function A(o,r){1&o&&(e.TgZ(0,"span",22),e.TgZ(1,"strong"),e._uU(2,"City is required."),e.qZA(),e.qZA())}function F(o,r){1&o&&(e.TgZ(0,"span",22),e.TgZ(1,"strong"),e._uU(2,"State is required."),e.qZA(),e.qZA())}function x(o,r){1&o&&(e.TgZ(0,"span",22),e.TgZ(1,"strong"),e._uU(2,"Zipcode is required."),e.qZA(),e.qZA())}let O=(()=>{class o{constructor(t,n){this.accountService=t,this.toastr=n}ngOnInit(){}requiredInputInValid(t){var n,s,i;return(null===(n=this.checkoutForm.controls.addressForm.get(t))||void 0===n?void 0:n.invalid)&&(null===(s=this.checkoutForm.controls.addressForm.get(t))||void 0===s?void 0:s.touched)&&(null===(i=this.checkoutForm.controls.addressForm.get(t))||void 0===i?void 0:i.hasError("required"))}patternInputInvalid(t){var n,s,i;return(null===(n=this.checkoutForm.controls.addressForm.get(t))||void 0===n?void 0:n.invalid)&&(null===(s=this.checkoutForm.controls.addressForm.get(t))||void 0===s?void 0:s.touched)&&(null===(i=this.checkoutForm.controls.addressForm.get(t))||void 0===i?void 0:i.hasError("pattern"))}updateCurrentUserAddress(){var t;return this.accountService.updateAddress(null===(t=this.checkoutForm.get("addressForm"))||void 0===t?void 0:t.value).subscribe(()=>{this.toastr.success("Address Saved")},n=>{this.toastr.error(n.message),console.log(n)})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(h.B),e.Y36(v._W))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-checkout-address"]],inputs:{checkoutForm:"checkoutForm"},decls:37,vars:6,consts:[[1,"mt-5",3,"formGroup"],[1,"row","d-flex","justify-contient-center","me-1"],[1,"col-9"],[1,"col-3","btn","btn-outline-success",3,"disabled","click"],["formGroupName","addressForm",1,"row","mt-2"],[1,"form-group","col-12"],[1,"row"],[1,"form-label-group","col-6"],["formControlName","street","type","text","id","street","placeholder","Street",1,"form-control"],["for","street",2,"margin-left","10px"],["class","text-danger",4,"ngIf"],["formControlName","city","type","text","id","city","placeholder","City",1,"form-control"],["for","city",2,"margin-left","10px"],["formControlName","state","type","text","id","state","placeholder","State",1,"form-control"],["for","state",2,"margin-left","10px"],["formControlName","zipCode","type","text","id","zipCode","placeholder","ZipCode",1,"form-control"],["for","zipCode",2,"margin-left","10px"],[1,"float-none","d-flex","justify-content-between","flex-column","flex-lg-row","mb-5"],["routerLink","/basket",1,"btn","btn-outline-success"],[1,"fa","fa-angle-left"],["cdkStepperNext","",1,"btn","btn-success"],[1,"fa","fa-angle-right"],[1,"text-danger"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"p",2),e._uU(3,"Please fill the shipping address."),e.qZA(),e.TgZ(4,"button",3),e.NdJ("click",function(){return n.updateCurrentUserAddress()}),e._uU(5,"Save as default address."),e.qZA(),e.qZA(),e.TgZ(6,"div",4),e.TgZ(7,"div",5),e.TgZ(8,"div",6),e.TgZ(9,"div",7),e._UZ(10,"input",8),e.TgZ(11,"label",9),e._uU(12,"Street"),e.qZA(),e.YNc(13,T,3,0,"span",10),e.qZA(),e.TgZ(14,"div",7),e._UZ(15,"input",11),e.TgZ(16,"label",12),e._uU(17,"City"),e.qZA(),e.YNc(18,A,3,0,"span",10),e.qZA(),e.qZA(),e.TgZ(19,"div",6),e.TgZ(20,"div",7),e._UZ(21,"input",13),e.TgZ(22,"label",14),e._uU(23,"State"),e.qZA(),e.YNc(24,F,3,0,"span",10),e.qZA(),e.TgZ(25,"div",7),e._UZ(26,"input",15),e.TgZ(27,"label",16),e._uU(28,"ZipCode"),e.qZA(),e.YNc(29,x,3,0,"span",10),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(30,"div",17),e.TgZ(31,"button",18),e._UZ(32,"i",19),e._uU(33," Bask to bakset "),e.qZA(),e.TgZ(34,"button",20),e._uU(35," Go to deliery "),e._UZ(36,"i",21),e.qZA(),e.qZA()),2&t){let s;e.Q6J("formGroup",n.checkoutForm),e.xp6(4),e.Q6J("disabled",!(null!=(s=n.checkoutForm.get("addressForm"))&&s.valid&&null!=(s=n.checkoutForm.get("addressForm"))&&s.dirty)),e.xp6(9),e.Q6J("ngIf",n.requiredInputInValid("street")),e.xp6(5),e.Q6J("ngIf",n.requiredInputInValid("city")),e.xp6(6),e.Q6J("ngIf",n.requiredInputInValid("state")),e.xp6(5),e.Q6J("ngIf",n.requiredInputInValid("zipCode"))}},directives:[c.JL,c.sg,c.x0,c.Fj,c.JJ,c.u,a.O5,p.rH,u.st],styles:[".form-label-group[_ngcontent-%COMP%]{position:relative;margin-bottom:1rem}.form-label-group[_ngcontent-%COMP%] > input[_ngcontent-%COMP%], .form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{height:3.125rem;padding:.75rem}.form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{position:absolute;top:0;left:0;display:block;width:100%;margin-bottom:0;line-height:1.5;color:#495057;pointer-events:none;cursor:text;border:1px solid transparent;border-radius:.25rem;transition:all .1s ease-in-out}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:transparent}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown){padding-top:1.25rem;padding-bottom:.25rem}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown) ~ label[_ngcontent-%COMP%]{padding-top:.25rem;padding-bottom:.25rem;font-size:12px;color:#777}@supports (-ms-ime-align: auto){.form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{display:none}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{color:#777}}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{display:none}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder{color:#777}}"]}),o})();var q=l(2340),f=l(4004),S=l(520);let k=(()=>{class o{constructor(t){this.http=t,this.baseUrl=q.N.apiUrl}getDeliveryMethods(){return this.http.get(this.baseUrl+"order/deliveryMethods").pipe((0,f.U)(t=>{})),this.http.get(this.baseUrl+"order/deliveryMethods").pipe((0,f.U)(t=>t.sort((n,s)=>s.price-n.price)))}creatOrder(t){return this.http.post(this.baseUrl+"order",t)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(S.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function U(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"div",9),e.TgZ(1,"input",10),e.NdJ("click",function(){const i=e.CHM(t).$implicit;return e.oxw().onSelect(i.price)}),e.qZA(),e.TgZ(2,"label",11),e.TgZ(3,"strong"),e._uU(4),e.qZA(),e._UZ(5,"br"),e.TgZ(6,"span",12),e._uU(7),e.qZA(),e.qZA(),e.qZA()}if(2&o){const t=r.$implicit;e.xp6(1),e.s9C("id",t.id),e.s9C("value",t.id),e.xp6(1),e.s9C("for",t.id),e.xp6(2),e.AsE("",t.shortName," - ",t.price,"EGP "),e.xp6(3),e.Oqu(t.description)}}let M=(()=>{class o{constructor(t,n){this.checkoutService=t,this.basketService=n}ngOnInit(){this.loadDeliveryMethods()}loadDeliveryMethods(){this.checkoutService.getDeliveryMethods().subscribe(t=>{this.deliveryMethods=t},t=>{console.log(t)})}onSelect(t){console.log(t),this.basketService.setShippingPrice(t)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(k),e.Y36(d.v))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-checkout-delivery"]],inputs:{checkoutForm:"checkoutForm"},decls:12,vars:2,consts:[[1,"container","mt-3",3,"formGroup"],["formGroupName","deliveryForm",1,"row"],[2,"margin-left","15px","margin-top","20px","font-size","1.1em"],["class","col-6 form-group mt-1",4,"ngFor","ngForOf"],[1,"float-none","d-flex","justify-content-between","flex-column","flex-lg-row","mb-5","mt-5"],["cdkStepperPrevious","",1,"btn","btn-outline-success"],[1,"fa","fa-angle-left"],["cdkStepperNext","",1,"btn","btn-success"],[1,"fa","fa-angle-right"],[1,"col-6","form-group","mt-1"],["type","radio","formControlName","deliveryMethod",1,"custom-control-input",2,"margin-left","20px",3,"id","value","click"],[1,"custom-control-label",3,"for"],[1,"label-description",2,"margin-left","4px","font-size","1.1em"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"p",2),e._uU(3,"Choose your delivery method."),e.qZA(),e.YNc(4,U,8,6,"div",3),e.qZA(),e.qZA(),e.TgZ(5,"div",4),e.TgZ(6,"button",5),e._UZ(7,"i",6),e._uU(8," Bask to address "),e.qZA(),e.TgZ(9,"button",7),e._uU(10," Go to review "),e._UZ(11,"i",8),e.qZA(),e.qZA()),2&t&&(e.Q6J("formGroup",n.checkoutForm),e.xp6(4),e.Q6J("ngForOf",n.deliveryMethods))},directives:[c.JL,c.sg,c.x0,a.sg,c._,c.Fj,c.JJ,c.u,u.po,u.st],styles:[""]}),o})();var P=l(3449);function I(o,r){1&o&&e._UZ(0,"app-basket-summary",6),2&o&&e.Q6J("items",r.ngIf.items)("isBasket",!1)}let J=(()=>{class o{constructor(t){this.basketService=t}ngOnInit(){this.basket$=this.basketService.basket$}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(d.v))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-checkout-review"]],decls:9,vars:3,consts:[[3,"items","isBasket",4,"ngIf"],[1,"float-none","d-flex","justify-content-between","flex-column","flex-lg-row","mb-5","mt-5"],["cdkStepperPrevious","",1,"btn","btn-outline-success"],[1,"fa","fa-angle-left"],["cdkStepperNext","",1,"btn","btn-success"],[1,"fa","fa-angle-right"],[3,"items","isBasket"]],template:function(t,n){1&t&&(e.YNc(0,I,1,2,"app-basket-summary",0),e.ALo(1,"async"),e.TgZ(2,"div",1),e.TgZ(3,"button",2),e._UZ(4,"i",3),e._uU(5," Bask to delivery "),e.qZA(),e.TgZ(6,"button",4),e._uU(7," Go to payment "),e._UZ(8,"i",5),e.qZA(),e.qZA()),2&t&&e.Q6J("ngIf",e.lcZ(1,1,n.basket$))},directives:[a.O5,P.b,u.po,u.st],pipes:[a.Ov],styles:[""]}),o})(),w=(()=>{class o{constructor(t,n,s,i){this.router=t,this.basketService=n,this.toastrService=s,this.checkoutService=i}ngOnInit(){}submitOrder(){const t=this.basketService.getCurrentBasketValue(),n=this.getOrederToCreate(t);this.checkoutService.creatOrder(n).subscribe(()=>{this.toastrService.success("Order created succesfully."),this.basketService.deleteLocalBaset(),this.router.navigate(["checkout/success"],{state:n})},s=>{this.toastrService.error(s.title),console.log(s)})}getOrederToCreate(t){var n,s,i;return{basketId:t.id,shipToAddress:null===(n=this.checkoutForm.get("addressForm"))||void 0===n?void 0:n.value,deliveryMethod:null===(i=null===(s=this.checkoutForm.get("deliveryForm"))||void 0===s?void 0:s.get("deliveryMethod"))||void 0===i?void 0:i.value}}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(p.F0),e.Y36(d.v),e.Y36(v._W),e.Y36(k))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-checkout-payment"]],inputs:{checkoutForm:"checkoutForm"},decls:7,vars:0,consts:[[1,"float-none","d-flex","justify-content-between","flex-column","flex-lg-row","mb-5","mt-5"],["cdkStepperPrevious","",1,"btn","btn-outline-success"],[1,"fa","fa-angle-left"],[1,"btn","btn-success",3,"click"],[1,"fa","fa-angle-right"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"button",1),e._UZ(2,"i",2),e._uU(3," Bask to review "),e.qZA(),e.TgZ(4,"button",3),e.NdJ("click",function(){return n.submitOrder()}),e._uU(5," Submit Order "),e._UZ(6,"i",4),e.qZA(),e.qZA())},directives:[u.po],styles:[""]}),o})();var N=l(9281);function Y(o,r){if(1&o&&(e.TgZ(0,"div",8),e._UZ(1,"app-order-totals",9),e.qZA()),2&o){const t=r.ngIf;e.xp6(1),e.Q6J("shippingCost",t.shippingCost)("subtotal",t.subtotal)("total",t.total)}}const Q=[{path:"",component:(()=>{class o{constructor(t,n,s){this.fb=t,this.accountService=n,this.basketService=s}ngOnInit(){this.createCheckoutForm(),this.getCurrentUserAddress(),this.basketTotals$=this.basketService.basketTotal$}createCheckoutForm(){this.checkOutForm=this.fb.group({addressForm:this.fb.group({street:[null,c.kI.required],city:[null,c.kI.required],state:[null,c.kI.required],zipCode:[null,c.kI.required]}),deliveryForm:this.fb.group({deliveryMethod:[null,c.kI.required]}),paymentForm:this.fb.group({nameOnCard:[null,c.kI.required]})})}getCurrentUserAddress(){return this.accountService.getUserAddress().subscribe(t=>{var n;t&&(null===(n=this.checkOutForm.get("addressForm"))||void 0===n||n.patchValue(t))},t=>{console.log(t)})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(c.qu),e.Y36(h.B),e.Y36(d.v))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-checkout"]],decls:15,vars:15,consts:[[1,"container","mt-3",2,"margin-left","30%"],[1,"row"],[1,"col-8"],[3,"linearModeSelected"],["appStepper",""],[3,"label","completed"],[3,"checkoutForm"],["class","col-4",4,"ngIf"],[1,"col-4"],[3,"shippingCost","subtotal","total"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"app-stepper",3,4),e.TgZ(5,"cdk-step",5),e._UZ(6,"app-checkout-address",6),e.qZA(),e.TgZ(7,"cdk-step",5),e._UZ(8,"app-checkout-delivery",6),e.qZA(),e.TgZ(9,"cdk-step",5),e._UZ(10,"app-checkout-review"),e.qZA(),e.TgZ(11,"cdk-step",5),e._UZ(12,"app-checkout-payment",6),e.qZA(),e.qZA(),e.qZA(),e.YNc(13,Y,2,3,"div",7),e.ALo(14,"async"),e.qZA(),e.qZA()),2&t){let s,i,m,C;e.xp6(3),e.Q6J("linearModeSelected",!1),e.xp6(2),e.Q6J("label","Address")("completed",null==(s=n.checkOutForm.get("addressFrom"))?null:s.valid),e.xp6(1),e.Q6J("checkoutForm",n.checkOutForm),e.xp6(1),e.Q6J("label","Delivery")("completed",null==(i=n.checkOutForm.get("deliveryForm"))?null:i.valid),e.xp6(1),e.Q6J("checkoutForm",n.checkOutForm),e.xp6(1),e.Q6J("label","Review")("completed",null==(m=n.checkOutForm.get("reviewForm"))?null:m.valid),e.xp6(2),e.Q6J("label","Payment")("completed",null==(C=n.checkOutForm.get("paymentForm"))?null:C.valid),e.xp6(1),e.Q6J("checkoutForm",n.checkOutForm),e.xp6(1),e.Q6J("ngIf",e.lcZ(14,13,n.basketTotals$))}},directives:[y,u.be,O,M,J,w,a.O5,N.S],pipes:[a.Ov],styles:[".container[_ngcontent-%COMP%]{margin:0;padding:0}"]}),o})()},{path:"success",component:Z}];let B=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[p.Bz.forChild(Q)],p.Bz]}),o})();var z=l(4466);let j=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[a.ez,z.m,B]]}),o})()}}]);