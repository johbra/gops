// Compiled by ClojureScript 1.10.773 {}
goog.provide('gops.events');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"inc-turn","inc-turn",1659394933),(function (db,p__20337){
var vec__20338 = p__20337;
var _ = cljs.core.nth.call(null,vec__20338,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__20338,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"turn","turn",75759344),cljs.core.inc);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"new-score","new-score",678671115),(function (db,p__20341){
var vec__20342 = p__20341;
var _ = cljs.core.nth.call(null,vec__20342,(0),null);
var new_score = cljs.core.nth.call(null,vec__20342,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"player-scores","player-scores",-61106882),new_score),new cljs.core.Keyword(null,"prize-cards","prize-cards",-1774780312),cljs.core.subvec,(1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-cards","player-cards",-869111088),(0)], null),cljs.core.subvec,(1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-cards","player-cards",-869111088),(1)], null),cljs.core.subvec,(1));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialise-db","initialise-db",-533872578),(function (db,p__20345){
var vec__20346 = p__20345;
var _ = cljs.core.nth.call(null,vec__20346,(0),null);
var item = cljs.core.nth.call(null,vec__20346,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"turn","turn",75759344),(0),new cljs.core.Keyword(null,"prize-cards","prize-cards",-1774780312),cljs.core.shuffle.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8)], null)),new cljs.core.Keyword(null,"player-cards","player-cards",-869111088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.shuffle.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8)], null)),cljs.core.shuffle.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8)], null))], null),new cljs.core.Keyword(null,"player-scores","player-scores",-61106882),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
}));

//# sourceMappingURL=events.js.map
