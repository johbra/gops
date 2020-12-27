// Compiled by ClojureScript 1.10.773 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__18055 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__18056 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__18056);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___18089 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___18089)){
var new_db_18090 = temp__5735__auto___18089;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_18090);
} else {
}

var seq__18057 = cljs.core.seq.call(null,effects_without_db);
var chunk__18058 = null;
var count__18059 = (0);
var i__18060 = (0);
while(true){
if((i__18060 < count__18059)){
var vec__18067 = cljs.core._nth.call(null,chunk__18058,i__18060);
var effect_key = cljs.core.nth.call(null,vec__18067,(0),null);
var effect_value = cljs.core.nth.call(null,vec__18067,(1),null);
var temp__5733__auto___18091 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___18091)){
var effect_fn_18092 = temp__5733__auto___18091;
effect_fn_18092.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__18093 = seq__18057;
var G__18094 = chunk__18058;
var G__18095 = count__18059;
var G__18096 = (i__18060 + (1));
seq__18057 = G__18093;
chunk__18058 = G__18094;
count__18059 = G__18095;
i__18060 = G__18096;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__18057);
if(temp__5735__auto__){
var seq__18057__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18057__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__18057__$1);
var G__18097 = cljs.core.chunk_rest.call(null,seq__18057__$1);
var G__18098 = c__4556__auto__;
var G__18099 = cljs.core.count.call(null,c__4556__auto__);
var G__18100 = (0);
seq__18057 = G__18097;
chunk__18058 = G__18098;
count__18059 = G__18099;
i__18060 = G__18100;
continue;
} else {
var vec__18070 = cljs.core.first.call(null,seq__18057__$1);
var effect_key = cljs.core.nth.call(null,vec__18070,(0),null);
var effect_value = cljs.core.nth.call(null,vec__18070,(1),null);
var temp__5733__auto___18101 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___18101)){
var effect_fn_18102 = temp__5733__auto___18101;
effect_fn_18102.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__18103 = cljs.core.next.call(null,seq__18057__$1);
var G__18104 = null;
var G__18105 = (0);
var G__18106 = (0);
seq__18057 = G__18103;
chunk__18058 = G__18104;
count__18059 = G__18105;
i__18060 = G__18106;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__17861__auto___18107 = re_frame.interop.now.call(null);
var duration__17862__auto___18108 = (end__17861__auto___18107 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__17862__auto___18108,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__17861__auto___18107);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__18055);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___18109 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___18109)){
var new_db_18110 = temp__5735__auto___18109;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_18110);
} else {
}

var seq__18073 = cljs.core.seq.call(null,effects_without_db);
var chunk__18074 = null;
var count__18075 = (0);
var i__18076 = (0);
while(true){
if((i__18076 < count__18075)){
var vec__18083 = cljs.core._nth.call(null,chunk__18074,i__18076);
var effect_key = cljs.core.nth.call(null,vec__18083,(0),null);
var effect_value = cljs.core.nth.call(null,vec__18083,(1),null);
var temp__5733__auto___18111 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___18111)){
var effect_fn_18112 = temp__5733__auto___18111;
effect_fn_18112.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__18113 = seq__18073;
var G__18114 = chunk__18074;
var G__18115 = count__18075;
var G__18116 = (i__18076 + (1));
seq__18073 = G__18113;
chunk__18074 = G__18114;
count__18075 = G__18115;
i__18076 = G__18116;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__18073);
if(temp__5735__auto__){
var seq__18073__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18073__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__18073__$1);
var G__18117 = cljs.core.chunk_rest.call(null,seq__18073__$1);
var G__18118 = c__4556__auto__;
var G__18119 = cljs.core.count.call(null,c__4556__auto__);
var G__18120 = (0);
seq__18073 = G__18117;
chunk__18074 = G__18118;
count__18075 = G__18119;
i__18076 = G__18120;
continue;
} else {
var vec__18086 = cljs.core.first.call(null,seq__18073__$1);
var effect_key = cljs.core.nth.call(null,vec__18086,(0),null);
var effect_value = cljs.core.nth.call(null,vec__18086,(1),null);
var temp__5733__auto___18121 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___18121)){
var effect_fn_18122 = temp__5733__auto___18121;
effect_fn_18122.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__18123 = cljs.core.next.call(null,seq__18073__$1);
var G__18124 = null;
var G__18125 = (0);
var G__18126 = (0);
seq__18073 = G__18123;
chunk__18074 = G__18124;
count__18075 = G__18125;
i__18076 = G__18126;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__18127){
var map__18128 = p__18127;
var map__18128__$1 = (((((!((map__18128 == null))))?(((((map__18128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18128):map__18128);
var effect = map__18128__$1;
var ms = cljs.core.get.call(null,map__18128__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__18128__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
return re_frame.interop.set_timeout_BANG_.call(null,(function (){
return re_frame.router.dispatch.call(null,dispatch);
}),ms);
}
});
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_.call(null,value)){
return re_frame.fx.dispatch_later.call(null,value);
} else {
var seq__18130 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__18131 = null;
var count__18132 = (0);
var i__18133 = (0);
while(true){
if((i__18133 < count__18132)){
var effect = cljs.core._nth.call(null,chunk__18131,i__18133);
re_frame.fx.dispatch_later.call(null,effect);


var G__18134 = seq__18130;
var G__18135 = chunk__18131;
var G__18136 = count__18132;
var G__18137 = (i__18133 + (1));
seq__18130 = G__18134;
chunk__18131 = G__18135;
count__18132 = G__18136;
i__18133 = G__18137;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__18130);
if(temp__5735__auto__){
var seq__18130__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18130__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__18130__$1);
var G__18138 = cljs.core.chunk_rest.call(null,seq__18130__$1);
var G__18139 = c__4556__auto__;
var G__18140 = cljs.core.count.call(null,c__4556__auto__);
var G__18141 = (0);
seq__18130 = G__18138;
chunk__18131 = G__18139;
count__18132 = G__18140;
i__18133 = G__18141;
continue;
} else {
var effect = cljs.core.first.call(null,seq__18130__$1);
re_frame.fx.dispatch_later.call(null,effect);


var G__18142 = cljs.core.next.call(null,seq__18130__$1);
var G__18143 = null;
var G__18144 = (0);
var G__18145 = (0);
seq__18130 = G__18142;
chunk__18131 = G__18143;
count__18132 = G__18144;
i__18133 = G__18145;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_.call(null,seq_of_effects)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type.call(null,seq_of_effects));
} else {
var seq__18146 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,seq_of_effects));
var chunk__18147 = null;
var count__18148 = (0);
var i__18149 = (0);
while(true){
if((i__18149 < count__18148)){
var vec__18156 = cljs.core._nth.call(null,chunk__18147,i__18149);
var effect_key = cljs.core.nth.call(null,vec__18156,(0),null);
var effect_value = cljs.core.nth.call(null,vec__18156,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5733__auto___18162 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___18162)){
var effect_fn_18163 = temp__5733__auto___18162;
effect_fn_18163.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__18164 = seq__18146;
var G__18165 = chunk__18147;
var G__18166 = count__18148;
var G__18167 = (i__18149 + (1));
seq__18146 = G__18164;
chunk__18147 = G__18165;
count__18148 = G__18166;
i__18149 = G__18167;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__18146);
if(temp__5735__auto__){
var seq__18146__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18146__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__18146__$1);
var G__18168 = cljs.core.chunk_rest.call(null,seq__18146__$1);
var G__18169 = c__4556__auto__;
var G__18170 = cljs.core.count.call(null,c__4556__auto__);
var G__18171 = (0);
seq__18146 = G__18168;
chunk__18147 = G__18169;
count__18148 = G__18170;
i__18149 = G__18171;
continue;
} else {
var vec__18159 = cljs.core.first.call(null,seq__18146__$1);
var effect_key = cljs.core.nth.call(null,vec__18159,(0),null);
var effect_value = cljs.core.nth.call(null,vec__18159,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5733__auto___18172 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___18172)){
var effect_fn_18173 = temp__5733__auto___18172;
effect_fn_18173.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__18174 = cljs.core.next.call(null,seq__18146__$1);
var G__18175 = null;
var G__18176 = (0);
var G__18177 = (0);
seq__18146 = G__18174;
chunk__18147 = G__18175;
count__18148 = G__18176;
i__18149 = G__18177;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__18178 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__18179 = null;
var count__18180 = (0);
var i__18181 = (0);
while(true){
if((i__18181 < count__18180)){
var event = cljs.core._nth.call(null,chunk__18179,i__18181);
re_frame.router.dispatch.call(null,event);


var G__18182 = seq__18178;
var G__18183 = chunk__18179;
var G__18184 = count__18180;
var G__18185 = (i__18181 + (1));
seq__18178 = G__18182;
chunk__18179 = G__18183;
count__18180 = G__18184;
i__18181 = G__18185;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__18178);
if(temp__5735__auto__){
var seq__18178__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18178__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__18178__$1);
var G__18186 = cljs.core.chunk_rest.call(null,seq__18178__$1);
var G__18187 = c__4556__auto__;
var G__18188 = cljs.core.count.call(null,c__4556__auto__);
var G__18189 = (0);
seq__18178 = G__18186;
chunk__18179 = G__18187;
count__18180 = G__18188;
i__18181 = G__18189;
continue;
} else {
var event = cljs.core.first.call(null,seq__18178__$1);
re_frame.router.dispatch.call(null,event);


var G__18190 = cljs.core.next.call(null,seq__18178__$1);
var G__18191 = null;
var G__18192 = (0);
var G__18193 = (0);
seq__18178 = G__18190;
chunk__18179 = G__18191;
count__18180 = G__18192;
i__18181 = G__18193;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__18194 = cljs.core.seq.call(null,value);
var chunk__18195 = null;
var count__18196 = (0);
var i__18197 = (0);
while(true){
if((i__18197 < count__18196)){
var event = cljs.core._nth.call(null,chunk__18195,i__18197);
clear_event.call(null,event);


var G__18198 = seq__18194;
var G__18199 = chunk__18195;
var G__18200 = count__18196;
var G__18201 = (i__18197 + (1));
seq__18194 = G__18198;
chunk__18195 = G__18199;
count__18196 = G__18200;
i__18197 = G__18201;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__18194);
if(temp__5735__auto__){
var seq__18194__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18194__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__18194__$1);
var G__18202 = cljs.core.chunk_rest.call(null,seq__18194__$1);
var G__18203 = c__4556__auto__;
var G__18204 = cljs.core.count.call(null,c__4556__auto__);
var G__18205 = (0);
seq__18194 = G__18202;
chunk__18195 = G__18203;
count__18196 = G__18204;
i__18197 = G__18205;
continue;
} else {
var event = cljs.core.first.call(null,seq__18194__$1);
clear_event.call(null,event);


var G__18206 = cljs.core.next.call(null,seq__18194__$1);
var G__18207 = null;
var G__18208 = (0);
var G__18209 = (0);
seq__18194 = G__18206;
chunk__18195 = G__18207;
count__18196 = G__18208;
i__18197 = G__18209;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
