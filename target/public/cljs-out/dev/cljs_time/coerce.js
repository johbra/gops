// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs_time.coerce');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('goog.date.UtcDateTime');

/**
 * @interface
 */
cljs_time.coerce.ICoerce = function(){};

var cljs_time$coerce$ICoerce$to_date_time$dyn_20647 = (function (obj){
var x__4428__auto__ = (((obj == null))?null:obj);
var m__4429__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,obj);
} else {
var m__4426__auto__ = (cljs_time.coerce.to_date_time["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,obj);
} else {
throw cljs.core.missing_protocol.call(null,"ICoerce.to-date-time",obj);
}
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance.
 */
cljs_time.coerce.to_date_time = (function cljs_time$coerce$to_date_time(obj){
if((((!((obj == null)))) && ((!((obj.cljs_time$coerce$ICoerce$to_date_time$arity$1 == null)))))){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else {
return cljs_time$coerce$ICoerce$to_date_time$dyn_20647.call(null,obj);
}
});

/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.from_long = (function cljs_time$coerce$from_long(millis){
var G__20648 = millis;
if((G__20648 == null)){
return null;
} else {
return goog.date.UtcDateTime.fromTimestamp.call(null,G__20648);
}
});
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 *   returning first which parses
 */
cljs_time.coerce.from_string = (function cljs_time$coerce$from_string(s){
if(cljs.core.truth_(s)){
return cljs.core.first.call(null,(function (){var iter__4529__auto__ = (function cljs_time$coerce$from_string_$_iter__20649(s__20650){
return (new cljs.core.LazySeq(null,(function (){
var s__20650__$1 = s__20650;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__20650__$1);
if(temp__5735__auto__){
var s__20650__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20650__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__20650__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__20652 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__20651 = (0);
while(true){
if((i__20651 < size__4528__auto__)){
var f = cljs.core._nth.call(null,c__4527__auto__,i__20651);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e20653){if((e20653 instanceof Error)){
var _ = e20653;
return null;
} else {
throw e20653;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append.call(null,b__20652,d);

var G__20655 = (i__20651 + (1));
i__20651 = G__20655;
continue;
} else {
var G__20656 = (i__20651 + (1));
i__20651 = G__20656;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20652),cljs_time$coerce$from_string_$_iter__20649.call(null,cljs.core.chunk_rest.call(null,s__20650__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20652),null);
}
} else {
var f = cljs.core.first.call(null,s__20650__$2);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e20654){if((e20654 instanceof Error)){
var _ = e20654;
return null;
} else {
throw e20654;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons.call(null,d,cljs_time$coerce$from_string_$_iter__20649.call(null,cljs.core.rest.call(null,s__20650__$2)));
} else {
var G__20657 = cljs.core.rest.call(null,s__20650__$2);
s__20650__$1 = G__20657;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.vals.call(null,cljs_time.format.formatters));
})());
} else {
return null;
}
});
/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   js Date object.
 */
cljs_time.coerce.from_date = (function cljs_time$coerce$from_date(date){
var G__20658 = date;
var G__20658__$1 = (((G__20658 == null))?null:G__20658.getTime());
if((G__20658__$1 == null)){
return null;
} else {
return cljs_time.coerce.from_long.call(null,G__20658__$1);
}
});
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.to_long = (function cljs_time$coerce$to_long(obj){
var G__20659 = obj;
var G__20659__$1 = (((G__20659 == null))?null:cljs_time.coerce.to_date_time.call(null,G__20659));
if((G__20659__$1 == null)){
return null;
} else {
return G__20659__$1.getTime();
}
});
/**
 * Convert `obj` to Unix epoch.
 */
cljs_time.coerce.to_epoch = (function cljs_time$coerce$to_epoch(obj){
var millis = cljs_time.coerce.to_long.call(null,obj);
var and__4115__auto__ = millis;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.quot.call(null,millis,(1000));
} else {
return and__4115__auto__;
}
});
/**
 * Convert `obj` to a JavaScript Date instance.
 */
cljs_time.coerce.to_date = (function cljs_time$coerce$to_date(obj){
var G__20660 = obj;
var G__20660__$1 = (((G__20660 == null))?null:cljs_time.coerce.to_date_time.call(null,G__20660));
var G__20660__$2 = (((G__20660__$1 == null))?null:G__20660__$1.getTime());
if((G__20660__$2 == null)){
return null;
} else {
return (new Date(G__20660__$2));
}
});
/**
 * Returns a string representation of obj in UTC time-zone
 *   using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
cljs_time.coerce.to_string = (function cljs_time$coerce$to_string(obj){
var G__20661 = obj;
var G__20661__$1 = (((G__20661 == null))?null:cljs_time.coerce.to_date_time.call(null,G__20661));
if((G__20661__$1 == null)){
return null;
} else {
return cljs_time.format.unparse.call(null,new cljs.core.Keyword(null,"date-time","date-time",177938180).cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),G__20661__$1);
}
});
/**
 * Convert `obj` to a goog.date.Date instance
 */
cljs_time.coerce.to_local_date = (function cljs_time$coerce$to_local_date(obj){
if(cljs.core.truth_(obj)){
if(cljs.core._EQ_.call(null,goog.date.Date,cljs.core.type.call(null,obj))){
return obj;
} else {
var temp__5733__auto__ = cljs_time.coerce.to_date_time.call(null,obj);
if(cljs.core.truth_(temp__5733__auto__)){
var dt = temp__5733__auto__;
return (new goog.date.Date(dt.getYear(),dt.getMonth(),dt.getDate()));
} else {
return null;
}
}
} else {
return null;
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance
 */
cljs_time.coerce.to_local_date_time = (function cljs_time$coerce$to_local_date_time(obj){
if(cljs.core.truth_(obj)){
var temp__5733__auto__ = cljs_time.coerce.to_date_time.call(null,obj);
if(cljs.core.truth_(temp__5733__auto__)){
var dt = temp__5733__auto__;
var G__20662 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__20662.setHours(dt.getHours());

G__20662.setMinutes(dt.getMinutes());

G__20662.setSeconds(dt.getSeconds());

G__20662.setMilliseconds(dt.getMilliseconds());

return G__20662;
} else {
return null;
}
} else {
return null;
}
});
goog.object.set(cljs_time.coerce.ICoerce,"null",true);

goog.object.set(cljs_time.coerce.to_date_time,"null",(function (_){
return null;
}));

(Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.coerce.from_date.call(null,date__$1);
}));

(goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date){
var local_date__$1 = this;
if(cljs.core.truth_(local_date__$1)){
return cljs_time.core.to_utc_time_zone.call(null,local_date__$1);
} else {
return null;
}
}));

(goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date_time){
var local_date_time__$1 = this;
if(cljs.core.truth_(local_date_time__$1)){
return cljs_time.core.to_utc_time_zone.call(null,local_date_time__$1);
} else {
return null;
}
}));

(goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return date_time__$1;
}));

goog.object.set(cljs_time.coerce.ICoerce,"number",true);

goog.object.set(cljs_time.coerce.to_date_time,"number",(function (long$){
return cljs_time.coerce.from_long.call(null,long$);
}));

goog.object.set(cljs_time.coerce.ICoerce,"string",true);

goog.object.set(cljs_time.coerce.to_date_time,"string",(function (string){
return cljs_time.coerce.from_string.call(null,string);
}));

//# sourceMappingURL=coerce.js.map
