// Compiled by ClojureScript 1.10.773 {}
goog.provide('gops.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),(function (db,_){
return new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"prize-cards","prize-cards",-1774780312),(function (db,_){
return new cljs.core.Keyword(null,"prize-cards","prize-cards",-1774780312).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"prize-card","prize-card",-522161688),(function (db,_){
return cljs.core.first.call(null,new cljs.core.Keyword(null,"prize-cards","prize-cards",-1774780312).cljs$core$IFn$_invoke$arity$1(db));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"player-cards","player-cards",-869111088),(function (db,_){
return new cljs.core.Keyword(null,"player-cards","player-cards",-869111088).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"player1-card","player1-card",1612858644),(function (db,_){
return cljs.core.first.call(null,new cljs.core.Keyword(null,"player-cards","player-cards",-869111088).cljs$core$IFn$_invoke$arity$1(db).call(null,(0)));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"player2-card","player2-card",646900427),(function (db,_){
return cljs.core.first.call(null,new cljs.core.Keyword(null,"player-cards","player-cards",-869111088).cljs$core$IFn$_invoke$arity$1(db).call(null,(1)));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"player-scores","player-scores",-61106882),(function (db,_){
return new cljs.core.Keyword(null,"player-scores","player-scores",-61106882).cljs$core$IFn$_invoke$arity$1(db);
}));

//# sourceMappingURL=subs.js.map
