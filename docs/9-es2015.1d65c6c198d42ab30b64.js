(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Wsvk:function(e,t,a){"use strict";a.r(t),a.d(t,"EquipmentModule",function(){return E});var i=a("ofXK"),n=a("3Pt+"),o=a("PCNd"),r=a("tyNb"),c=a("Z8VL"),s=a("tKlY"),d=a("6WvD"),l=a("9UZh"),u=a("1dbt"),b=a("b5aZ"),p=a("82i/"),m=a("9QbX"),w=a("fXoL"),h=a("jhN1"),v=a("ZzPI"),f=a("6t9p");let T=(()=>{class e extends c.a{constructor(e,t,a,i,n){super(e,a,i),this.raceService=t,this.titleService=n}ngOnInit(){this.titleService.setTitle(`${m.a} - Equipment`),this.sizes=p.a.values(d.a),this.equipmentTypes=p.a.values(u.a),this.equipmentClasses=p.a.values(b.a),this.races=this.raceService.getEntities(),super.ngOnInit()}onRowSelect(e){if("data"==e.rowType)return this.router.navigate([e.row.data.id],{relativeTo:this.route})}}return e.\u0275fac=function(t){return new(t||e)(w.Pb(s.a),w.Pb(l.a),w.Pb(r.c),w.Pb(r.a),w.Pb(h.c))},e.\u0275cmp=w.Jb({type:e,selectors:[["ng-component"]],features:[w.zb],decls:22,vars:14,consts:function(){let e;return e=$localize`:@@equipment␟30613b1bc8b3724c655a1baab7ee3d2b3d0d3f9a␟7481681753363035881: Equipment `,[[1,"row","content-row"],[1,"col-md-12"],[1,"card","shadow"],[1,"card-header","shadow-sm"],e,[1,"card-body"],["keyExpr","id",3,"dataSource","allowColumnReordering","allowColumnResizing","showBorders","hoverStateEnabled","onCellClick"],[3,"showPageSizeSelector","showNavigationButtons"],["mode","multiple"],[3,"applyFilter","visible"],[3,"visible"],["dataField","name","caption","Name"],["dataField","size","caption","Size"],[3,"dataSource"],["dataField","race.id","caption","Race"],["valueExpr","id","displayExpr","name",3,"dataSource"],["dataField","type","caption","Type"],["dataField","equipmentClass","caption","Class"],["column","name","summaryType","count"]]},template:function(e,t){1&e&&(w.Ub(0,"div",0),w.Ub(1,"div",1),w.Ub(2,"div",2),w.Ub(3,"div",3),w.Yb(4,4),w.Tb(),w.Ub(5,"div",5),w.Ub(6,"dx-data-grid",6),w.hc("onCellClick",function(e){return t.onRowSelect(e)}),w.Qb(7,"dxo-pager",7),w.Qb(8,"dxo-sorting",8),w.Qb(9,"dxo-filter-row",9),w.Qb(10,"dxo-filter-panel",10),w.Qb(11,"dxi-column",11),w.Ub(12,"dxi-column",12),w.Qb(13,"dxo-lookup",13),w.Tb(),w.Ub(14,"dxi-column",14),w.Qb(15,"dxo-lookup",15),w.Tb(),w.Ub(16,"dxi-column",16),w.Qb(17,"dxo-lookup",13),w.Tb(),w.Ub(18,"dxi-column",17),w.Qb(19,"dxo-lookup",13),w.Tb(),w.Ub(20,"dxo-summary"),w.Qb(21,"dxi-total-item",18),w.Tb(),w.Tb(),w.Tb(),w.Tb(),w.Tb(),w.Tb()),2&e&&(w.Cb(6),w.pc("dataSource",t.entities)("allowColumnReordering",!0)("allowColumnResizing",!0)("showBorders",!0)("hoverStateEnabled",!0),w.Cb(1),w.pc("showPageSizeSelector",!0)("showNavigationButtons",!0),w.Cb(2),w.pc("applyFilter",t.currentFilter)("visible",!0),w.Cb(1),w.pc("visible",!0),w.Cb(3),w.pc("dataSource",t.sizes),w.Cb(2),w.pc("dataSource",t.races),w.Cb(2),w.pc("dataSource",t.equipmentTypes),w.Cb(2),w.pc("dataSource",t.equipmentClasses))},directives:[v.a,f.Y,f.jb,f.E,f.C,f.b,f.S,f.mb,f.l],encapsulation:2}),e})();var g=a("6mEA"),C=a("Lswn");function S(e,t){if(1&e&&(w.Ub(0,"div",3),w.Ub(1,"div",4),w.Ub(2,"a",5),w.Ec(3,"Equipment"),w.Tb(),w.Ec(4),w.Tb(),w.Ub(5,"div",6),w.Ec(6," Coming soon "),w.Tb(),w.Tb()),2&e){const e=w.jc();w.Cb(4),w.Gc(" - ",e.entity.name," ")}}let y=(()=>{class e extends g.a{constructor(e,t,a,i){super(e,a),this.wareService=t,this.titleService=i}ngOnInit(){this.titleService.setTitle(`${m.a} - Equipment`),super.ngOnInit()}onEntityLoaded(e){this.titleService.setTitle(`${m.a} - ${e.name}`),this.entityProduction=e.production.map(e=>({amount:e.amount,effects:e.effects,method:e.method,name:e.name,time:e.time,wares:e.wares.map(e=>({ware:this.wareService.getEntity(e.ware),amount:e.amount}))}))}getTotalMin(e){let t=0;return e.wares.forEach(e=>{t+=e.amount*e.ware.price.min}),t}getTotalMax(e){let t=0;return e.wares.forEach(e=>{t+=e.amount*e.ware.price.max}),t}getTotalAvg(e){let t=0;return e.wares.forEach(e=>{t+=e.amount*e.ware.price.avg}),t}getProductionTime(e){const t=Math.trunc(e/60),a=e-60*t;let i="";return t>0&&(i+=t+(1===t?" minute":" minutes")),a>0&&(t>0&&(i+=" "),i+=a+(1===a?" second":" seconds")),i}}return e.\u0275fac=function(t){return new(t||e)(w.Pb(s.a),w.Pb(C.a),w.Pb(r.a),w.Pb(h.c))},e.\u0275cmp=w.Jb({type:e,selectors:[["ng-component"]],features:[w.zb],decls:3,vars:1,consts:[[1,"row","content-row"],[1,"col-md-12"],["class","card shadow",4,"ngIf"],[1,"card","shadow"],[1,"card-header","shadow-sm"],["routerLink","/races"],[1,"card-body","small"]],template:function(e,t){1&e&&(w.Ub(0,"div",0),w.Ub(1,"div",1),w.Cc(2,S,7,1,"div",2),w.Tb(),w.Tb()),2&e&&(w.Cb(2),w.pc("ngIf",t.entity))},directives:[i.l,r.e],encapsulation:2}),e})(),x=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=w.Nb({type:e}),e.\u0275inj=w.Mb({imports:[[r.f.forChild([{path:"",component:T},{path:":id",component:y}])],r.f]}),e})(),E=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=w.Nb({type:e}),e.\u0275inj=w.Mb({imports:[[i.b,n.c,o.a,x,v.b]]}),e})()}}]);