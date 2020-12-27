// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__18072 = arguments.length;
switch (G__18072) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18073 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18073 = (function (f,blockable,meta18074){
this.f = f;
this.blockable = blockable;
this.meta18074 = meta18074;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18075,meta18074__$1){
var self__ = this;
var _18075__$1 = this;
return (new cljs.core.async.t_cljs$core$async18073(self__.f,self__.blockable,meta18074__$1));
}));

(cljs.core.async.t_cljs$core$async18073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18075){
var self__ = this;
var _18075__$1 = this;
return self__.meta18074;
}));

(cljs.core.async.t_cljs$core$async18073.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18073.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18073.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async18073.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async18073.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta18074","meta18074",-1147137642,null)], null);
}));

(cljs.core.async.t_cljs$core$async18073.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18073.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18073");

(cljs.core.async.t_cljs$core$async18073.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async18073");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18073.
 */
cljs.core.async.__GT_t_cljs$core$async18073 = (function cljs$core$async$__GT_t_cljs$core$async18073(f__$1,blockable__$1,meta18074){
return (new cljs.core.async.t_cljs$core$async18073(f__$1,blockable__$1,meta18074));
});

}

return (new cljs.core.async.t_cljs$core$async18073(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__18079 = arguments.length;
switch (G__18079) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__18082 = arguments.length;
switch (G__18082) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__18085 = arguments.length;
switch (G__18085) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_18087 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_18087);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_18087);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__18089 = arguments.length;
switch (G__18089) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___18091 = n;
var x_18092 = (0);
while(true){
if((x_18092 < n__4613__auto___18091)){
(a[x_18092] = x_18092);

var G__18093 = (x_18092 + (1));
x_18092 = G__18093;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18094 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18094 = (function (flag,meta18095){
this.flag = flag;
this.meta18095 = meta18095;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18096,meta18095__$1){
var self__ = this;
var _18096__$1 = this;
return (new cljs.core.async.t_cljs$core$async18094(self__.flag,meta18095__$1));
}));

(cljs.core.async.t_cljs$core$async18094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18096){
var self__ = this;
var _18096__$1 = this;
return self__.meta18095;
}));

(cljs.core.async.t_cljs$core$async18094.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18094.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async18094.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18094.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async18094.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18095","meta18095",1309172465,null)], null);
}));

(cljs.core.async.t_cljs$core$async18094.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18094.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18094");

(cljs.core.async.t_cljs$core$async18094.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async18094");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18094.
 */
cljs.core.async.__GT_t_cljs$core$async18094 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18094(flag__$1,meta18095){
return (new cljs.core.async.t_cljs$core$async18094(flag__$1,meta18095));
});

}

return (new cljs.core.async.t_cljs$core$async18094(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18097 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18097 = (function (flag,cb,meta18098){
this.flag = flag;
this.cb = cb;
this.meta18098 = meta18098;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18099,meta18098__$1){
var self__ = this;
var _18099__$1 = this;
return (new cljs.core.async.t_cljs$core$async18097(self__.flag,self__.cb,meta18098__$1));
}));

(cljs.core.async.t_cljs$core$async18097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18099){
var self__ = this;
var _18099__$1 = this;
return self__.meta18098;
}));

(cljs.core.async.t_cljs$core$async18097.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18097.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async18097.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18097.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async18097.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18098","meta18098",979436655,null)], null);
}));

(cljs.core.async.t_cljs$core$async18097.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18097.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18097");

(cljs.core.async.t_cljs$core$async18097.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async18097");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18097.
 */
cljs.core.async.__GT_t_cljs$core$async18097 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18097(flag__$1,cb__$1,meta18098){
return (new cljs.core.async.t_cljs$core$async18097(flag__$1,cb__$1,meta18098));
});

}

return (new cljs.core.async.t_cljs$core$async18097(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18100_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18100_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18101_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18101_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18102 = (i + (1));
i = G__18102;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18108 = arguments.length;
var i__4737__auto___18109 = (0);
while(true){
if((i__4737__auto___18109 < len__4736__auto___18108)){
args__4742__auto__.push((arguments[i__4737__auto___18109]));

var G__18110 = (i__4737__auto___18109 + (1));
i__4737__auto___18109 = G__18110;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18105){
var map__18106 = p__18105;
var map__18106__$1 = (((((!((map__18106 == null))))?(((((map__18106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18106):map__18106);
var opts = map__18106__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18103){
var G__18104 = cljs.core.first.call(null,seq18103);
var seq18103__$1 = cljs.core.next.call(null,seq18103);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18104,seq18103__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__18112 = arguments.length;
switch (G__18112) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18012__auto___18159 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18013__auto__ = (function (){var switch__17975__auto__ = (function (state_18136){
var state_val_18137 = (state_18136[(1)]);
if((state_val_18137 === (7))){
var inst_18132 = (state_18136[(2)]);
var state_18136__$1 = state_18136;
var statearr_18138_18160 = state_18136__$1;
(statearr_18138_18160[(2)] = inst_18132);

(statearr_18138_18160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18137 === (1))){
var state_18136__$1 = state_18136;
var statearr_18139_18161 = state_18136__$1;
(statearr_18139_18161[(2)] = null);

(statearr_18139_18161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18137 === (4))){
var inst_18115 = (state_18136[(7)]);
var inst_18115__$1 = (state_18136[(2)]);
var inst_18116 = (inst_18115__$1 == null);
var state_18136__$1 = (function (){var statearr_18140 = state_18136;
(statearr_18140[(7)] = inst_18115__$1);

return statearr_18140;
})();
if(cljs.core.truth_(inst_18116)){
var statearr_18141_18162 = state_18136__$1;
(statearr_18141_18162[(1)] = (5));

} else {
var statearr_18142_18163 = state_18136__$1;
(statearr_18142_18163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18137 === (13))){
var state_18136__$1 = state_18136;
var statearr_18143_18164 = state_18136__$1;
(statearr_18143_18164[(2)] = null);

(statearr_18143_18164[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18137 === (6))){
var inst_18115 = (state_18136[(7)]);
var state_18136__$1 = state_18136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18136__$1,(11),to,inst_18115);
} else {
if((state_val_18137 === (3))){
var inst_18134 = (state_18136[(2)]);
var state_18136__$1 = state_18136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18136__$1,inst_18134);
} else {
if((state_val_18137 === (12))){
var state_18136__$1 = state_18136;
var statearr_18144_18165 = state_18136__$1;
(statearr_18144_18165[(2)] = null);

(statearr_18144_18165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18137 === (2))){
var state_18136__$1 = state_18136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18136__$1,(4),from);
} else {
if((state_val_18137 === (11))){
var inst_18125 = (state_18136[(2)]);
var state_18136__$1 = state_18136;
if(cljs.core.truth_(inst_18125)){
var statearr_18145_18166 = state_18136__$1;
(statearr_18145_18166[(1)] = (12));

} else {
var statearr_18146_18167 = state_18136__$1;
(statearr_18146_18167[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18137 === (9))){
var state_18136__$1 = state_18136;
var statearr_18147_18168 = state_18136__$1;
(statearr_18147_18168[(2)] = null);

(statearr_18147_18168[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18137 === (5))){
var state_18136__$1 = state_18136;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18148_18169 = state_18136__$1;
(statearr_18148_18169[(1)] = (8));

} else {
var statearr_18149_18170 = state_18136__$1;
(statearr_18149_18170[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18137 === (14))){
var inst_18130 = (state_18136[(2)]);
var state_18136__$1 = state_18136;
var statearr_18150_18171 = state_18136__$1;
(statearr_18150_18171[(2)] = inst_18130);

(statearr_18150_18171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18137 === (10))){
var inst_18122 = (state_18136[(2)]);
var state_18136__$1 = state_18136;
var statearr_18151_18172 = state_18136__$1;
(statearr_18151_18172[(2)] = inst_18122);

(statearr_18151_18172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18137 === (8))){
var inst_18119 = cljs.core.async.close_BANG_.call(null,to);
var state_18136__$1 = state_18136;
var statearr_18152_18173 = state_18136__$1;
(statearr_18152_18173[(2)] = inst_18119);

(statearr_18152_18173[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17976__auto__ = null;
var cljs$core$async$state_machine__17976__auto____0 = (function (){
var statearr_18153 = [null,null,null,null,null,null,null,null];
(statearr_18153[(0)] = cljs$core$async$state_machine__17976__auto__);

(statearr_18153[(1)] = (1));

return statearr_18153;
});
var cljs$core$async$state_machine__17976__auto____1 = (function (state_18136){
while(true){
var ret_value__17977__auto__ = (function (){try{while(true){
var result__17978__auto__ = switch__17975__auto__.call(null,state_18136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17978__auto__;
}
break;
}
}catch (e18154){var ex__17979__auto__ = e18154;
var statearr_18155_18174 = state_18136;
(statearr_18155_18174[(2)] = ex__17979__auto__);


if(cljs.core.seq.call(null,(state_18136[(4)]))){
var statearr_18156_18175 = state_18136;
(statearr_18156_18175[(1)] = cljs.core.first.call(null,(state_18136[(4)])));

} else {
throw ex__17979__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18176 = state_18136;
state_18136 = G__18176;
continue;
} else {
return ret_value__17977__auto__;
}
break;
}
});
cljs$core$async$state_machine__17976__auto__ = function(state_18136){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17976__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17976__auto____1.call(this,state_18136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17976__auto____0;
cljs$core$async$state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17976__auto____1;
return cljs$core$async$state_machine__17976__auto__;
})()
})();
var state__18014__auto__ = (function (){var statearr_18157 = f__18013__auto__.call(null);
(statearr_18157[(6)] = c__18012__auto___18159);

return statearr_18157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18014__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__18177){
var vec__18178 = p__18177;
var v = cljs.core.nth.call(null,vec__18178,(0),null);
var p = cljs.core.nth.call(null,vec__18178,(1),null);
var job = vec__18178;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18012__auto___18354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18013__auto__ = (function (){var switch__17975__auto__ = (function (state_18185){
var state_val_18186 = (state_18185[(1)]);
if((state_val_18186 === (1))){
var state_18185__$1 = state_18185;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18185__$1,(2),res,v);
} else {
if((state_val_18186 === (2))){
var inst_18182 = (state_18185[(2)]);
var inst_18183 = cljs.core.async.close_BANG_.call(null,res);
var state_18185__$1 = (function (){var statearr_18187 = state_18185;
(statearr_18187[(7)] = inst_18182);

return statearr_18187;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18185__$1,inst_18183);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17976__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17976__auto____0 = (function (){
var statearr_18188 = [null,null,null,null,null,null,null,null];
(statearr_18188[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17976__auto__);

(statearr_18188[(1)] = (1));

return statearr_18188;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17976__auto____1 = (function (state_18185){
while(true){
var ret_value__17977__auto__ = (function (){try{while(true){
var result__17978__auto__ = switch__17975__auto__.call(null,state_18185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17978__auto__;
}
break;
}
}catch (e18189){var ex__17979__auto__ = e18189;
var statearr_18190_18355 = state_18185;
(statearr_18190_18355[(2)] = ex__17979__auto__);


if(cljs.core.seq.call(null,(state_18185[(4)]))){
var statearr_18191_18356 = state_18185;
(statearr_18191_18356[(1)] = cljs.core.first.call(null,(state_18185[(4)])));

} else {
throw ex__17979__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18357 = state_18185;
state_18185 = G__18357;
continue;
} else {
return ret_value__17977__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17976__auto__ = function(state_18185){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17976__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17976__auto____1.call(this,state_18185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17976__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17976__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17976__auto__;
})()
})();
var state__18014__auto__ = (function (){var statearr_18192 = f__18013__auto__.call(null);
(statearr_18192[(6)] = c__18012__auto___18354);

return statearr_18192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18014__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__18193){
var vec__18194 = p__18193;
var v = cljs.core.nth.call(null,vec__18194,(0),null);
var p = cljs.core.nth.call(null,vec__18194,(1),null);
var job = vec__18194;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4613__auto___18358 = n;
var __18359 = (0);
while(true){
if((__18359 < n__4613__auto___18358)){
var G__18197_18360 = type;
var G__18197_18361__$1 = (((G__18197_18360 instanceof cljs.core.Keyword))?G__18197_18360.fqn:null);
switch (G__18197_18361__$1) {
case "compute":
var c__18012__auto___18363 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18359,c__18012__auto___18363,G__18197_18360,G__18197_18361__$1,n__4613__auto___18358,jobs,results,process,async){
return (function (){
var f__18013__auto__ = (function (){var switch__17975__auto__ = ((function (__18359,c__18012__auto___18363,G__18197_18360,G__18197_18361__$1,n__4613__auto___18358,jobs,results,process,async){
return (function (state_18210){
var state_val_18211 = (state_18210[(1)]);
if((state_val_18211 === (1))){
var state_18210__$1 = state_18210;
var statearr_18212_18364 = state_18210__$1;
(statearr_18212_18364[(2)] = null);

(statearr_18212_18364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18211 === (2))){
var state_18210__$1 = state_18210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18210__$1,(4),jobs);
} else {
if((state_val_18211 === (3))){
var inst_18208 = (state_18210[(2)]);
var state_18210__$1 = state_18210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18210__$1,inst_18208);
} else {
if((state_val_18211 === (4))){
var inst_18200 = (state_18210[(2)]);
var inst_18201 = process.call(null,inst_18200);
var state_18210__$1 = state_18210;
if(cljs.core.truth_(inst_18201)){
var statearr_18213_18365 = state_18210__$1;
(statearr_18213_18365[(1)] = (5));

} else {
var statearr_18214_18366 = state_18210__$1;
(statearr_18214_18366[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18211 === (5))){
var state_18210__$1 = state_18210;
var statearr_18215_18367 = state_18210__$1;
(statearr_18215_18367[(2)] = null);

(statearr_18215_18367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18211 === (6))){
var state_18210__$1 = state_18210;
var statearr_18216_18368 = state_18210__$1;
(statearr_18216_18368[(2)] = null);

(statearr_18216_18368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18211 === (7))){
var inst_18206 = (state_18210[(2)]);
var state_18210__$1 = state_18210;
var statearr_18217_18369 = state_18210__$1;
(statearr_18217_18369[(2)] = inst_18206);

(statearr_18217_18369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18359,c__18012__auto___18363,G__18197_18360,G__18197_18361__$1,n__4613__auto___18358,jobs,results,process,async))
;
return ((function (__18359,switch__17975__auto__,c__18012__auto___18363,G__18197_18360,G__18197_18361__$1,n__4613__auto___18358,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17976__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17976__auto____0 = (function (){
var statearr_18218 = [null,null,null,null,null,null,null];
(statearr_18218[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17976__auto__);

(statearr_18218[(1)] = (1));

return statearr_18218;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17976__auto____1 = (function (state_18210){
while(true){
var ret_value__17977__auto__ = (function (){try{while(true){
var result__17978__auto__ = switch__17975__auto__.call(null,state_18210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17978__auto__;
}
break;
}
}catch (e18219){var ex__17979__auto__ = e18219;
var statearr_18220_18370 = state_18210;
(statearr_18220_18370[(2)] = ex__17979__auto__);


if(cljs.core.seq.call(null,(state_18210[(4)]))){
var statearr_18221_18371 = state_18210;
(statearr_18221_18371[(1)] = cljs.core.first.call(null,(state_18210[(4)])));

} else {
throw ex__17979__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18372 = state_18210;
state_18210 = G__18372;
continue;
} else {
return ret_value__17977__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17976__auto__ = function(state_18210){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17976__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17976__auto____1.call(this,state_18210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17976__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17976__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17976__auto__;
})()
;})(__18359,switch__17975__auto__,c__18012__auto___18363,G__18197_18360,G__18197_18361__$1,n__4613__auto___18358,jobs,results,process,async))
})();
var state__18014__auto__ = (function (){var statearr_18222 = f__18013__auto__.call(null);
(statearr_18222[(6)] = c__18012__auto___18363);

return statearr_18222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18014__auto__);
});})(__18359,c__18012__auto___18363,G__18197_18360,G__18197_18361__$1,n__4613__auto___18358,jobs,results,process,async))
);


break;
case "async":
var c__18012__auto___18373 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18359,c__18012__auto___18373,G__18197_18360,G__18197_18361__$1,n__4613__auto___18358,jobs,results,process,async){
return (function (){
var f__18013__auto__ = (function (){var switch__17975__auto__ = ((function (__18359,c__18012__auto___18373,G__18197_18360,G__18197_18361__$1,n__4613__auto___18358,jobs,results,process,async){
return (function (state_18235){
var state_val_18236 = (state_18235[(1)]);
if((state_val_18236 === (1))){
var state_18235__$1 = state_18235;
var statearr_18237_18374 = state_18235__$1;
(statearr_18237_18374[(2)] = null);

(statearr_18237_18374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18236 === (2))){
var state_18235__$1 = state_18235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18235__$1,(4),jobs);
} else {
if((state_val_18236 === (3))){
var inst_18233 = (state_18235[(2)]);
var state_18235__$1 = state_18235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18235__$1,inst_18233);
} else {
if((state_val_18236 === (4))){
var inst_18225 = (state_18235[(2)]);
var inst_18226 = async.call(null,inst_18225);
var state_18235__$1 = state_18235;
if(cljs.core.truth_(inst_18226)){
var statearr_18238_18375 = state_18235__$1;
(statearr_18238_18375[(1)] = (5));

} else {
var statearr_18239_18376 = state_18235__$1;
(statearr_18239_18376[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18236 === (5))){
var state_18235__$1 = state_18235;
var statearr_18240_18377 = state_18235__$1;
(statearr_18240_18377[(2)] = null);

(statearr_18240_18377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18236 === (6))){
var state_18235__$1 = state_18235;
var statearr_18241_18378 = state_18235__$1;
(statearr_18241_18378[(2)] = null);

(statearr_18241_18378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18236 === (7))){
var inst_18231 = (state_18235[(2)]);
var state_18235__$1 = state_18235;
var statearr_18242_18379 = state_18235__$1;
(statearr_18242_18379[(2)] = inst_18231);

(statearr_18242_18379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18359,c__18012__auto___18373,G__18197_18360,G__18197_18361__$1,n__4613__auto___18358,jobs,results,process,async))
;
return ((function (__18359,switch__17975__auto__,c__18012__auto___18373,G__18197_18360,G__18197_18361__$1,n__4613__auto___18358,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17976__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17976__auto____0 = (function (){
var statearr_18243 = [null,null,null,null,null,null,null];
(statearr_18243[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17976__auto__);

(statearr_18243[(1)] = (1));

return statearr_18243;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17976__auto____1 = (function (state_18235){
while(true){
var ret_value__17977__auto__ = (function (){try{while(true){
var result__17978__auto__ = switch__17975__auto__.call(null,state_18235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17978__auto__;
}
break;
}
}catch (e18244){var ex__17979__auto__ = e18244;
var statearr_18245_18380 = state_18235;
(statearr_18245_18380[(2)] = ex__17979__auto__);


if(cljs.core.seq.call(null,(state_18235[(4)]))){
var statearr_18246_18381 = state_18235;
(statearr_18246_18381[(1)] = cljs.core.first.call(null,(state_18235[(4)])));

} else {
throw ex__17979__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18382 = state_18235;
state_18235 = G__18382;
continue;
} else {
return ret_value__17977__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17976__auto__ = function(state_18235){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17976__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17976__auto____1.call(this,state_18235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17976__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17976__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17976__auto__;
})()
;})(__18359,switch__17975__auto__,c__18012__auto___18373,G__18197_18360,G__18197_18361__$1,n__4613__auto___18358,jobs,results,process,async))
})();
var state__18014__auto__ = (function (){var statearr_18247 = f__18013__auto__.call(null);
(statearr_18247[(6)] = c__18012__auto___18373);

return statearr_18247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18014__auto__);
});})(__18359,c__18012__auto___18373,G__18197_18360,G__18197_18361__$1,n__4613__auto___18358,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18197_18361__$1)].join('')));

}

var G__18383 = (__18359 + (1));
__18359 = G__18383;
continue;
} else {
}
break;
}

var c__18012__auto___18384 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18013__auto__ = (function (){var switch__17975__auto__ = (function (state_18269){
var state_val_18270 = (state_18269[(1)]);
if((state_val_18270 === (7))){
var inst_18265 = (state_18269[(2)]);
var state_18269__$1 = state_18269;
var statearr_18271_18385 = state_18269__$1;
(statearr_18271_18385[(2)] = inst_18265);

(statearr_18271_18385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18270 === (1))){
var state_18269__$1 = state_18269;
var statearr_18272_18386 = state_18269__$1;
(statearr_18272_18386[(2)] = null);

(statearr_18272_18386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18270 === (4))){
var inst_18250 = (state_18269[(7)]);
var inst_18250__$1 = (state_18269[(2)]);
var inst_18251 = (inst_18250__$1 == null);
var state_18269__$1 = (function (){var statearr_18273 = state_18269;
(statearr_18273[(7)] = inst_18250__$1);

return statearr_18273;
})();
if(cljs.core.truth_(inst_18251)){
var statearr_18274_18387 = state_18269__$1;
(statearr_18274_18387[(1)] = (5));

} else {
var statearr_18275_18388 = state_18269__$1;
(statearr_18275_18388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18270 === (6))){
var inst_18250 = (state_18269[(7)]);
var inst_18255 = (state_18269[(8)]);
var inst_18255__$1 = cljs.core.async.chan.call(null,(1));
var inst_18256 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18257 = [inst_18250,inst_18255__$1];
var inst_18258 = (new cljs.core.PersistentVector(null,2,(5),inst_18256,inst_18257,null));
var state_18269__$1 = (function (){var statearr_18276 = state_18269;
(statearr_18276[(8)] = inst_18255__$1);

return statearr_18276;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18269__$1,(8),jobs,inst_18258);
} else {
if((state_val_18270 === (3))){
var inst_18267 = (state_18269[(2)]);
var state_18269__$1 = state_18269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18269__$1,inst_18267);
} else {
if((state_val_18270 === (2))){
var state_18269__$1 = state_18269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18269__$1,(4),from);
} else {
if((state_val_18270 === (9))){
var inst_18262 = (state_18269[(2)]);
var state_18269__$1 = (function (){var statearr_18277 = state_18269;
(statearr_18277[(9)] = inst_18262);

return statearr_18277;
})();
var statearr_18278_18389 = state_18269__$1;
(statearr_18278_18389[(2)] = null);

(statearr_18278_18389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18270 === (5))){
var inst_18253 = cljs.core.async.close_BANG_.call(null,jobs);
var state_18269__$1 = state_18269;
var statearr_18279_18390 = state_18269__$1;
(statearr_18279_18390[(2)] = inst_18253);

(statearr_18279_18390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18270 === (8))){
var inst_18255 = (state_18269[(8)]);
var inst_18260 = (state_18269[(2)]);
var state_18269__$1 = (function (){var statearr_18280 = state_18269;
(statearr_18280[(10)] = inst_18260);

return statearr_18280;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18269__$1,(9),results,inst_18255);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17976__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17976__auto____0 = (function (){
var statearr_18281 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18281[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17976__auto__);

(statearr_18281[(1)] = (1));

return statearr_18281;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17976__auto____1 = (function (state_18269){
while(true){
var ret_value__17977__auto__ = (function (){try{while(true){
var result__17978__auto__ = switch__17975__auto__.call(null,state_18269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17978__auto__;
}
break;
}
}catch (e18282){var ex__17979__auto__ = e18282;
var statearr_18283_18391 = state_18269;
(statearr_18283_18391[(2)] = ex__17979__auto__);


if(cljs.core.seq.call(null,(state_18269[(4)]))){
var statearr_18284_18392 = state_18269;
(statearr_18284_18392[(1)] = cljs.core.first.call(null,(state_18269[(4)])));

} else {
throw ex__17979__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18393 = state_18269;
state_18269 = G__18393;
continue;
} else {
return ret_value__17977__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17976__auto__ = function(state_18269){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17976__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17976__auto____1.call(this,state_18269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17976__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17976__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17976__auto__;
})()
})();
var state__18014__auto__ = (function (){var statearr_18285 = f__18013__auto__.call(null);
(statearr_18285[(6)] = c__18012__auto___18384);

return statearr_18285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18014__auto__);
}));


var c__18012__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18013__auto__ = (function (){var switch__17975__auto__ = (function (state_18323){
var state_val_18324 = (state_18323[(1)]);
if((state_val_18324 === (7))){
var inst_18319 = (state_18323[(2)]);
var state_18323__$1 = state_18323;
var statearr_18325_18394 = state_18323__$1;
(statearr_18325_18394[(2)] = inst_18319);

(statearr_18325_18394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18324 === (20))){
var state_18323__$1 = state_18323;
var statearr_18326_18395 = state_18323__$1;
(statearr_18326_18395[(2)] = null);

(statearr_18326_18395[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18324 === (1))){
var state_18323__$1 = state_18323;
var statearr_18327_18396 = state_18323__$1;
(statearr_18327_18396[(2)] = null);

(statearr_18327_18396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18324 === (4))){
var inst_18288 = (state_18323[(7)]);
var inst_18288__$1 = (state_18323[(2)]);
var inst_18289 = (inst_18288__$1 == null);
var state_18323__$1 = (function (){var statearr_18328 = state_18323;
(statearr_18328[(7)] = inst_18288__$1);

return statearr_18328;
})();
if(cljs.core.truth_(inst_18289)){
var statearr_18329_18397 = state_18323__$1;
(statearr_18329_18397[(1)] = (5));

} else {
var statearr_18330_18398 = state_18323__$1;
(statearr_18330_18398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18324 === (15))){
var inst_18301 = (state_18323[(8)]);
var state_18323__$1 = state_18323;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18323__$1,(18),to,inst_18301);
} else {
if((state_val_18324 === (21))){
var inst_18314 = (state_18323[(2)]);
var state_18323__$1 = state_18323;
var statearr_18331_18399 = state_18323__$1;
(statearr_18331_18399[(2)] = inst_18314);

(statearr_18331_18399[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18324 === (13))){
var inst_18316 = (state_18323[(2)]);
var state_18323__$1 = (function (){var statearr_18332 = state_18323;
(statearr_18332[(9)] = inst_18316);

return statearr_18332;
})();
var statearr_18333_18400 = state_18323__$1;
(statearr_18333_18400[(2)] = null);

(statearr_18333_18400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18324 === (6))){
var inst_18288 = (state_18323[(7)]);
var state_18323__$1 = state_18323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18323__$1,(11),inst_18288);
} else {
if((state_val_18324 === (17))){
var inst_18309 = (state_18323[(2)]);
var state_18323__$1 = state_18323;
if(cljs.core.truth_(inst_18309)){
var statearr_18334_18401 = state_18323__$1;
(statearr_18334_18401[(1)] = (19));

} else {
var statearr_18335_18402 = state_18323__$1;
(statearr_18335_18402[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18324 === (3))){
var inst_18321 = (state_18323[(2)]);
var state_18323__$1 = state_18323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18323__$1,inst_18321);
} else {
if((state_val_18324 === (12))){
var inst_18298 = (state_18323[(10)]);
var state_18323__$1 = state_18323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18323__$1,(14),inst_18298);
} else {
if((state_val_18324 === (2))){
var state_18323__$1 = state_18323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18323__$1,(4),results);
} else {
if((state_val_18324 === (19))){
var state_18323__$1 = state_18323;
var statearr_18336_18403 = state_18323__$1;
(statearr_18336_18403[(2)] = null);

(statearr_18336_18403[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18324 === (11))){
var inst_18298 = (state_18323[(2)]);
var state_18323__$1 = (function (){var statearr_18337 = state_18323;
(statearr_18337[(10)] = inst_18298);

return statearr_18337;
})();
var statearr_18338_18404 = state_18323__$1;
(statearr_18338_18404[(2)] = null);

(statearr_18338_18404[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18324 === (9))){
var state_18323__$1 = state_18323;
var statearr_18339_18405 = state_18323__$1;
(statearr_18339_18405[(2)] = null);

(statearr_18339_18405[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18324 === (5))){
var state_18323__$1 = state_18323;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18340_18406 = state_18323__$1;
(statearr_18340_18406[(1)] = (8));

} else {
var statearr_18341_18407 = state_18323__$1;
(statearr_18341_18407[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18324 === (14))){
var inst_18301 = (state_18323[(8)]);
var inst_18301__$1 = (state_18323[(2)]);
var inst_18302 = (inst_18301__$1 == null);
var inst_18303 = cljs.core.not.call(null,inst_18302);
var state_18323__$1 = (function (){var statearr_18342 = state_18323;
(statearr_18342[(8)] = inst_18301__$1);

return statearr_18342;
})();
if(inst_18303){
var statearr_18343_18408 = state_18323__$1;
(statearr_18343_18408[(1)] = (15));

} else {
var statearr_18344_18409 = state_18323__$1;
(statearr_18344_18409[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18324 === (16))){
var state_18323__$1 = state_18323;
var statearr_18345_18410 = state_18323__$1;
(statearr_18345_18410[(2)] = false);

(statearr_18345_18410[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18324 === (10))){
var inst_18295 = (state_18323[(2)]);
var state_18323__$1 = state_18323;
var statearr_18346_18411 = state_18323__$1;
(statearr_18346_18411[(2)] = inst_18295);

(statearr_18346_18411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18324 === (18))){
var inst_18306 = (state_18323[(2)]);
var state_18323__$1 = state_18323;
var statearr_18347_18412 = state_18323__$1;
(statearr_18347_18412[(2)] = inst_18306);

(statearr_18347_18412[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18324 === (8))){
var inst_18292 = cljs.core.async.close_BANG_.call(null,to);
var state_18323__$1 = state_18323;
var statearr_18348_18413 = state_18323__$1;
(statearr_18348_18413[(2)] = inst_18292);

(statearr_18348_18413[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17976__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17976__auto____0 = (function (){
var statearr_18349 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18349[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17976__auto__);

(statearr_18349[(1)] = (1));

return statearr_18349;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17976__auto____1 = (function (state_18323){
while(true){
var ret_value__17977__auto__ = (function (){try{while(true){
var result__17978__auto__ = switch__17975__auto__.call(null,state_18323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17978__auto__;
}
break;
}
}catch (e18350){var ex__17979__auto__ = e18350;
var statearr_18351_18414 = state_18323;
(statearr_18351_18414[(2)] = ex__17979__auto__);


if(cljs.core.seq.call(null,(state_18323[(4)]))){
var statearr_18352_18415 = state_18323;
(statearr_18352_18415[(1)] = cljs.core.first.call(null,(state_18323[(4)])));

} else {
throw ex__17979__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18416 = state_18323;
state_18323 = G__18416;
continue;
} else {
return ret_value__17977__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17976__auto__ = function(state_18323){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17976__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17976__auto____1.call(this,state_18323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17976__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17976__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17976__auto__;
})()
})();
var state__18014__auto__ = (function (){var statearr_18353 = f__18013__auto__.call(null);
(statearr_18353[(6)] = c__18012__auto__);

return statearr_18353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18014__auto__);
}));

return c__18012__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__18418 = arguments.length;
switch (G__18418) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__18421 = arguments.length;
switch (G__18421) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__18424 = arguments.length;
switch (G__18424) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18012__auto___18474 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18013__auto__ = (function (){var switch__17975__auto__ = (function (state_18450){
var state_val_18451 = (state_18450[(1)]);
if((state_val_18451 === (7))){
var inst_18446 = (state_18450[(2)]);
var state_18450__$1 = state_18450;
var statearr_18452_18475 = state_18450__$1;
(statearr_18452_18475[(2)] = inst_18446);

(statearr_18452_18475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18451 === (1))){
var state_18450__$1 = state_18450;
var statearr_18453_18476 = state_18450__$1;
(statearr_18453_18476[(2)] = null);

(statearr_18453_18476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18451 === (4))){
var inst_18427 = (state_18450[(7)]);
var inst_18427__$1 = (state_18450[(2)]);
var inst_18428 = (inst_18427__$1 == null);
var state_18450__$1 = (function (){var statearr_18454 = state_18450;
(statearr_18454[(7)] = inst_18427__$1);

return statearr_18454;
})();
if(cljs.core.truth_(inst_18428)){
var statearr_18455_18477 = state_18450__$1;
(statearr_18455_18477[(1)] = (5));

} else {
var statearr_18456_18478 = state_18450__$1;
(statearr_18456_18478[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18451 === (13))){
var state_18450__$1 = state_18450;
var statearr_18457_18479 = state_18450__$1;
(statearr_18457_18479[(2)] = null);

(statearr_18457_18479[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18451 === (6))){
var inst_18427 = (state_18450[(7)]);
var inst_18433 = p.call(null,inst_18427);
var state_18450__$1 = state_18450;
if(cljs.core.truth_(inst_18433)){
var statearr_18458_18480 = state_18450__$1;
(statearr_18458_18480[(1)] = (9));

} else {
var statearr_18459_18481 = state_18450__$1;
(statearr_18459_18481[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18451 === (3))){
var inst_18448 = (state_18450[(2)]);
var state_18450__$1 = state_18450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18450__$1,inst_18448);
} else {
if((state_val_18451 === (12))){
var state_18450__$1 = state_18450;
var statearr_18460_18482 = state_18450__$1;
(statearr_18460_18482[(2)] = null);

(statearr_18460_18482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18451 === (2))){
var state_18450__$1 = state_18450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18450__$1,(4),ch);
} else {
if((state_val_18451 === (11))){
var inst_18427 = (state_18450[(7)]);
var inst_18437 = (state_18450[(2)]);
var state_18450__$1 = state_18450;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18450__$1,(8),inst_18437,inst_18427);
} else {
if((state_val_18451 === (9))){
var state_18450__$1 = state_18450;
var statearr_18461_18483 = state_18450__$1;
(statearr_18461_18483[(2)] = tc);

(statearr_18461_18483[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18451 === (5))){
var inst_18430 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18431 = cljs.core.async.close_BANG_.call(null,fc);
var state_18450__$1 = (function (){var statearr_18462 = state_18450;
(statearr_18462[(8)] = inst_18430);

return statearr_18462;
})();
var statearr_18463_18484 = state_18450__$1;
(statearr_18463_18484[(2)] = inst_18431);

(statearr_18463_18484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18451 === (14))){
var inst_18444 = (state_18450[(2)]);
var state_18450__$1 = state_18450;
var statearr_18464_18485 = state_18450__$1;
(statearr_18464_18485[(2)] = inst_18444);

(statearr_18464_18485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18451 === (10))){
var state_18450__$1 = state_18450;
var statearr_18465_18486 = state_18450__$1;
(statearr_18465_18486[(2)] = fc);

(statearr_18465_18486[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18451 === (8))){
var inst_18439 = (state_18450[(2)]);
var state_18450__$1 = state_18450;
if(cljs.core.truth_(inst_18439)){
var statearr_18466_18487 = state_18450__$1;
(statearr_18466_18487[(1)] = (12));

} else {
var statearr_18467_18488 = state_18450__$1;
(statearr_18467_18488[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17976__auto__ = null;
var cljs$core$async$state_machine__17976__auto____0 = (function (){
var statearr_18468 = [null,null,null,null,null,null,null,null,null];
(statearr_18468[(0)] = cljs$core$async$state_machine__17976__auto__);

(statearr_18468[(1)] = (1));

return statearr_18468;
});
var cljs$core$async$state_machine__17976__auto____1 = (function (state_18450){
while(true){
var ret_value__17977__auto__ = (function (){try{while(true){
var result__17978__auto__ = switch__17975__auto__.call(null,state_18450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17978__auto__;
}
break;
}
}catch (e18469){var ex__17979__auto__ = e18469;
var statearr_18470_18489 = state_18450;
(statearr_18470_18489[(2)] = ex__17979__auto__);


if(cljs.core.seq.call(null,(state_18450[(4)]))){
var statearr_18471_18490 = state_18450;
(statearr_18471_18490[(1)] = cljs.core.first.call(null,(state_18450[(4)])));

} else {
throw ex__17979__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18491 = state_18450;
state_18450 = G__18491;
continue;
} else {
return ret_value__17977__auto__;
}
break;
}
});
cljs$core$async$state_machine__17976__auto__ = function(state_18450){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17976__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17976__auto____1.call(this,state_18450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17976__auto____0;
cljs$core$async$state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17976__auto____1;
return cljs$core$async$state_machine__17976__auto__;
})()
})();
var state__18014__auto__ = (function (){var statearr_18472 = f__18013__auto__.call(null);
(statearr_18472[(6)] = c__18012__auto___18474);

return statearr_18472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18014__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__18012__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18013__auto__ = (function (){var switch__17975__auto__ = (function (state_18513){
var state_val_18514 = (state_18513[(1)]);
if((state_val_18514 === (7))){
var inst_18509 = (state_18513[(2)]);
var state_18513__$1 = state_18513;
var statearr_18515_18534 = state_18513__$1;
(statearr_18515_18534[(2)] = inst_18509);

(statearr_18515_18534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18514 === (1))){
var inst_18492 = init;
var inst_18493 = inst_18492;
var state_18513__$1 = (function (){var statearr_18516 = state_18513;
(statearr_18516[(7)] = inst_18493);

return statearr_18516;
})();
var statearr_18517_18535 = state_18513__$1;
(statearr_18517_18535[(2)] = null);

(statearr_18517_18535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18514 === (4))){
var inst_18496 = (state_18513[(8)]);
var inst_18496__$1 = (state_18513[(2)]);
var inst_18497 = (inst_18496__$1 == null);
var state_18513__$1 = (function (){var statearr_18518 = state_18513;
(statearr_18518[(8)] = inst_18496__$1);

return statearr_18518;
})();
if(cljs.core.truth_(inst_18497)){
var statearr_18519_18536 = state_18513__$1;
(statearr_18519_18536[(1)] = (5));

} else {
var statearr_18520_18537 = state_18513__$1;
(statearr_18520_18537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18514 === (6))){
var inst_18493 = (state_18513[(7)]);
var inst_18500 = (state_18513[(9)]);
var inst_18496 = (state_18513[(8)]);
var inst_18500__$1 = f.call(null,inst_18493,inst_18496);
var inst_18501 = cljs.core.reduced_QMARK_.call(null,inst_18500__$1);
var state_18513__$1 = (function (){var statearr_18521 = state_18513;
(statearr_18521[(9)] = inst_18500__$1);

return statearr_18521;
})();
if(inst_18501){
var statearr_18522_18538 = state_18513__$1;
(statearr_18522_18538[(1)] = (8));

} else {
var statearr_18523_18539 = state_18513__$1;
(statearr_18523_18539[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18514 === (3))){
var inst_18511 = (state_18513[(2)]);
var state_18513__$1 = state_18513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18513__$1,inst_18511);
} else {
if((state_val_18514 === (2))){
var state_18513__$1 = state_18513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18513__$1,(4),ch);
} else {
if((state_val_18514 === (9))){
var inst_18500 = (state_18513[(9)]);
var inst_18493 = inst_18500;
var state_18513__$1 = (function (){var statearr_18524 = state_18513;
(statearr_18524[(7)] = inst_18493);

return statearr_18524;
})();
var statearr_18525_18540 = state_18513__$1;
(statearr_18525_18540[(2)] = null);

(statearr_18525_18540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18514 === (5))){
var inst_18493 = (state_18513[(7)]);
var state_18513__$1 = state_18513;
var statearr_18526_18541 = state_18513__$1;
(statearr_18526_18541[(2)] = inst_18493);

(statearr_18526_18541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18514 === (10))){
var inst_18507 = (state_18513[(2)]);
var state_18513__$1 = state_18513;
var statearr_18527_18542 = state_18513__$1;
(statearr_18527_18542[(2)] = inst_18507);

(statearr_18527_18542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18514 === (8))){
var inst_18500 = (state_18513[(9)]);
var inst_18503 = cljs.core.deref.call(null,inst_18500);
var state_18513__$1 = state_18513;
var statearr_18528_18543 = state_18513__$1;
(statearr_18528_18543[(2)] = inst_18503);

(statearr_18528_18543[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__17976__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17976__auto____0 = (function (){
var statearr_18529 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18529[(0)] = cljs$core$async$reduce_$_state_machine__17976__auto__);

(statearr_18529[(1)] = (1));

return statearr_18529;
});
var cljs$core$async$reduce_$_state_machine__17976__auto____1 = (function (state_18513){
while(true){
var ret_value__17977__auto__ = (function (){try{while(true){
var result__17978__auto__ = switch__17975__auto__.call(null,state_18513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17978__auto__;
}
break;
}
}catch (e18530){var ex__17979__auto__ = e18530;
var statearr_18531_18544 = state_18513;
(statearr_18531_18544[(2)] = ex__17979__auto__);


if(cljs.core.seq.call(null,(state_18513[(4)]))){
var statearr_18532_18545 = state_18513;
(statearr_18532_18545[(1)] = cljs.core.first.call(null,(state_18513[(4)])));

} else {
throw ex__17979__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18546 = state_18513;
state_18513 = G__18546;
continue;
} else {
return ret_value__17977__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17976__auto__ = function(state_18513){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17976__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17976__auto____1.call(this,state_18513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17976__auto____0;
cljs$core$async$reduce_$_state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17976__auto____1;
return cljs$core$async$reduce_$_state_machine__17976__auto__;
})()
})();
var state__18014__auto__ = (function (){var statearr_18533 = f__18013__auto__.call(null);
(statearr_18533[(6)] = c__18012__auto__);

return statearr_18533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18014__auto__);
}));

return c__18012__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__18012__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18013__auto__ = (function (){var switch__17975__auto__ = (function (state_18552){
var state_val_18553 = (state_18552[(1)]);
if((state_val_18553 === (1))){
var inst_18547 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_18552__$1 = state_18552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18552__$1,(2),inst_18547);
} else {
if((state_val_18553 === (2))){
var inst_18549 = (state_18552[(2)]);
var inst_18550 = f__$1.call(null,inst_18549);
var state_18552__$1 = state_18552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18552__$1,inst_18550);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__17976__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17976__auto____0 = (function (){
var statearr_18554 = [null,null,null,null,null,null,null];
(statearr_18554[(0)] = cljs$core$async$transduce_$_state_machine__17976__auto__);

(statearr_18554[(1)] = (1));

return statearr_18554;
});
var cljs$core$async$transduce_$_state_machine__17976__auto____1 = (function (state_18552){
while(true){
var ret_value__17977__auto__ = (function (){try{while(true){
var result__17978__auto__ = switch__17975__auto__.call(null,state_18552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17978__auto__;
}
break;
}
}catch (e18555){var ex__17979__auto__ = e18555;
var statearr_18556_18559 = state_18552;
(statearr_18556_18559[(2)] = ex__17979__auto__);


if(cljs.core.seq.call(null,(state_18552[(4)]))){
var statearr_18557_18560 = state_18552;
(statearr_18557_18560[(1)] = cljs.core.first.call(null,(state_18552[(4)])));

} else {
throw ex__17979__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18561 = state_18552;
state_18552 = G__18561;
continue;
} else {
return ret_value__17977__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17976__auto__ = function(state_18552){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17976__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17976__auto____1.call(this,state_18552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17976__auto____0;
cljs$core$async$transduce_$_state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17976__auto____1;
return cljs$core$async$transduce_$_state_machine__17976__auto__;
})()
})();
var state__18014__auto__ = (function (){var statearr_18558 = f__18013__auto__.call(null);
(statearr_18558[(6)] = c__18012__auto__);

return statearr_18558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18014__auto__);
}));

return c__18012__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__18563 = arguments.length;
switch (G__18563) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18012__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18013__auto__ = (function (){var switch__17975__auto__ = (function (state_18588){
var state_val_18589 = (state_18588[(1)]);
if((state_val_18589 === (7))){
var inst_18570 = (state_18588[(2)]);
var state_18588__$1 = state_18588;
var statearr_18590_18612 = state_18588__$1;
(statearr_18590_18612[(2)] = inst_18570);

(statearr_18590_18612[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18589 === (1))){
var inst_18564 = cljs.core.seq.call(null,coll);
var inst_18565 = inst_18564;
var state_18588__$1 = (function (){var statearr_18591 = state_18588;
(statearr_18591[(7)] = inst_18565);

return statearr_18591;
})();
var statearr_18592_18613 = state_18588__$1;
(statearr_18592_18613[(2)] = null);

(statearr_18592_18613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18589 === (4))){
var inst_18565 = (state_18588[(7)]);
var inst_18568 = cljs.core.first.call(null,inst_18565);
var state_18588__$1 = state_18588;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18588__$1,(7),ch,inst_18568);
} else {
if((state_val_18589 === (13))){
var inst_18582 = (state_18588[(2)]);
var state_18588__$1 = state_18588;
var statearr_18593_18614 = state_18588__$1;
(statearr_18593_18614[(2)] = inst_18582);

(statearr_18593_18614[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18589 === (6))){
var inst_18573 = (state_18588[(2)]);
var state_18588__$1 = state_18588;
if(cljs.core.truth_(inst_18573)){
var statearr_18594_18615 = state_18588__$1;
(statearr_18594_18615[(1)] = (8));

} else {
var statearr_18595_18616 = state_18588__$1;
(statearr_18595_18616[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18589 === (3))){
var inst_18586 = (state_18588[(2)]);
var state_18588__$1 = state_18588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18588__$1,inst_18586);
} else {
if((state_val_18589 === (12))){
var state_18588__$1 = state_18588;
var statearr_18596_18617 = state_18588__$1;
(statearr_18596_18617[(2)] = null);

(statearr_18596_18617[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18589 === (2))){
var inst_18565 = (state_18588[(7)]);
var state_18588__$1 = state_18588;
if(cljs.core.truth_(inst_18565)){
var statearr_18597_18618 = state_18588__$1;
(statearr_18597_18618[(1)] = (4));

} else {
var statearr_18598_18619 = state_18588__$1;
(statearr_18598_18619[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18589 === (11))){
var inst_18579 = cljs.core.async.close_BANG_.call(null,ch);
var state_18588__$1 = state_18588;
var statearr_18599_18620 = state_18588__$1;
(statearr_18599_18620[(2)] = inst_18579);

(statearr_18599_18620[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18589 === (9))){
var state_18588__$1 = state_18588;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18600_18621 = state_18588__$1;
(statearr_18600_18621[(1)] = (11));

} else {
var statearr_18601_18622 = state_18588__$1;
(statearr_18601_18622[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18589 === (5))){
var inst_18565 = (state_18588[(7)]);
var state_18588__$1 = state_18588;
var statearr_18602_18623 = state_18588__$1;
(statearr_18602_18623[(2)] = inst_18565);

(statearr_18602_18623[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18589 === (10))){
var inst_18584 = (state_18588[(2)]);
var state_18588__$1 = state_18588;
var statearr_18603_18624 = state_18588__$1;
(statearr_18603_18624[(2)] = inst_18584);

(statearr_18603_18624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18589 === (8))){
var inst_18565 = (state_18588[(7)]);
var inst_18575 = cljs.core.next.call(null,inst_18565);
var inst_18565__$1 = inst_18575;
var state_18588__$1 = (function (){var statearr_18604 = state_18588;
(statearr_18604[(7)] = inst_18565__$1);

return statearr_18604;
})();
var statearr_18605_18625 = state_18588__$1;
(statearr_18605_18625[(2)] = null);

(statearr_18605_18625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17976__auto__ = null;
var cljs$core$async$state_machine__17976__auto____0 = (function (){
var statearr_18606 = [null,null,null,null,null,null,null,null];
(statearr_18606[(0)] = cljs$core$async$state_machine__17976__auto__);

(statearr_18606[(1)] = (1));

return statearr_18606;
});
var cljs$core$async$state_machine__17976__auto____1 = (function (state_18588){
while(true){
var ret_value__17977__auto__ = (function (){try{while(true){
var result__17978__auto__ = switch__17975__auto__.call(null,state_18588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17978__auto__;
}
break;
}
}catch (e18607){var ex__17979__auto__ = e18607;
var statearr_18608_18626 = state_18588;
(statearr_18608_18626[(2)] = ex__17979__auto__);


if(cljs.core.seq.call(null,(state_18588[(4)]))){
var statearr_18609_18627 = state_18588;
(statearr_18609_18627[(1)] = cljs.core.first.call(null,(state_18588[(4)])));

} else {
throw ex__17979__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18628 = state_18588;
state_18588 = G__18628;
continue;
} else {
return ret_value__17977__auto__;
}
break;
}
});
cljs$core$async$state_machine__17976__auto__ = function(state_18588){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17976__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17976__auto____1.call(this,state_18588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17976__auto____0;
cljs$core$async$state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17976__auto____1;
return cljs$core$async$state_machine__17976__auto__;
})()
})();
var state__18014__auto__ = (function (){var statearr_18610 = f__18013__auto__.call(null);
(statearr_18610[(6)] = c__18012__auto__);

return statearr_18610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18014__auto__);
}));

return c__18012__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan_BANG_.call(null,ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__18630 = arguments.length;
switch (G__18630) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_.call(null,coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18632 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18632.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18633 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18633.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18634 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18634.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18635 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18635.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18636 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18636 = (function (ch,cs,meta18637){
this.ch = ch;
this.cs = cs;
this.meta18637 = meta18637;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18638,meta18637__$1){
var self__ = this;
var _18638__$1 = this;
return (new cljs.core.async.t_cljs$core$async18636(self__.ch,self__.cs,meta18637__$1));
}));

(cljs.core.async.t_cljs$core$async18636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18638){
var self__ = this;
var _18638__$1 = this;
return self__.meta18637;
}));

(cljs.core.async.t_cljs$core$async18636.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18636.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18636.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18636.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async18636.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async18636.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async18636.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18637","meta18637",-721526024,null)], null);
}));

(cljs.core.async.t_cljs$core$async18636.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18636.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18636");

(cljs.core.async.t_cljs$core$async18636.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async18636");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18636.
 */
cljs.core.async.__GT_t_cljs$core$async18636 = (function cljs$core$async$mult_$___GT_t_cljs$core$async18636(ch__$1,cs__$1,meta18637){
return (new cljs.core.async.t_cljs$core$async18636(ch__$1,cs__$1,meta18637));
});

}

return (new cljs.core.async.t_cljs$core$async18636(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__18012__auto___18855 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18013__auto__ = (function (){var switch__17975__auto__ = (function (state_18771){
var state_val_18772 = (state_18771[(1)]);
if((state_val_18772 === (7))){
var inst_18767 = (state_18771[(2)]);
var state_18771__$1 = state_18771;
var statearr_18773_18856 = state_18771__$1;
(statearr_18773_18856[(2)] = inst_18767);

(statearr_18773_18856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (20))){
var inst_18672 = (state_18771[(7)]);
var inst_18684 = cljs.core.first.call(null,inst_18672);
var inst_18685 = cljs.core.nth.call(null,inst_18684,(0),null);
var inst_18686 = cljs.core.nth.call(null,inst_18684,(1),null);
var state_18771__$1 = (function (){var statearr_18774 = state_18771;
(statearr_18774[(8)] = inst_18685);

return statearr_18774;
})();
if(cljs.core.truth_(inst_18686)){
var statearr_18775_18857 = state_18771__$1;
(statearr_18775_18857[(1)] = (22));

} else {
var statearr_18776_18858 = state_18771__$1;
(statearr_18776_18858[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (27))){
var inst_18641 = (state_18771[(9)]);
var inst_18716 = (state_18771[(10)]);
var inst_18714 = (state_18771[(11)]);
var inst_18721 = (state_18771[(12)]);
var inst_18721__$1 = cljs.core._nth.call(null,inst_18714,inst_18716);
var inst_18722 = cljs.core.async.put_BANG_.call(null,inst_18721__$1,inst_18641,done);
var state_18771__$1 = (function (){var statearr_18777 = state_18771;
(statearr_18777[(12)] = inst_18721__$1);

return statearr_18777;
})();
if(cljs.core.truth_(inst_18722)){
var statearr_18778_18859 = state_18771__$1;
(statearr_18778_18859[(1)] = (30));

} else {
var statearr_18779_18860 = state_18771__$1;
(statearr_18779_18860[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (1))){
var state_18771__$1 = state_18771;
var statearr_18780_18861 = state_18771__$1;
(statearr_18780_18861[(2)] = null);

(statearr_18780_18861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (24))){
var inst_18672 = (state_18771[(7)]);
var inst_18691 = (state_18771[(2)]);
var inst_18692 = cljs.core.next.call(null,inst_18672);
var inst_18650 = inst_18692;
var inst_18651 = null;
var inst_18652 = (0);
var inst_18653 = (0);
var state_18771__$1 = (function (){var statearr_18781 = state_18771;
(statearr_18781[(13)] = inst_18652);

(statearr_18781[(14)] = inst_18691);

(statearr_18781[(15)] = inst_18651);

(statearr_18781[(16)] = inst_18653);

(statearr_18781[(17)] = inst_18650);

return statearr_18781;
})();
var statearr_18782_18862 = state_18771__$1;
(statearr_18782_18862[(2)] = null);

(statearr_18782_18862[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (39))){
var state_18771__$1 = state_18771;
var statearr_18786_18863 = state_18771__$1;
(statearr_18786_18863[(2)] = null);

(statearr_18786_18863[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (4))){
var inst_18641 = (state_18771[(9)]);
var inst_18641__$1 = (state_18771[(2)]);
var inst_18642 = (inst_18641__$1 == null);
var state_18771__$1 = (function (){var statearr_18787 = state_18771;
(statearr_18787[(9)] = inst_18641__$1);

return statearr_18787;
})();
if(cljs.core.truth_(inst_18642)){
var statearr_18788_18864 = state_18771__$1;
(statearr_18788_18864[(1)] = (5));

} else {
var statearr_18789_18865 = state_18771__$1;
(statearr_18789_18865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (15))){
var inst_18652 = (state_18771[(13)]);
var inst_18651 = (state_18771[(15)]);
var inst_18653 = (state_18771[(16)]);
var inst_18650 = (state_18771[(17)]);
var inst_18668 = (state_18771[(2)]);
var inst_18669 = (inst_18653 + (1));
var tmp18783 = inst_18652;
var tmp18784 = inst_18651;
var tmp18785 = inst_18650;
var inst_18650__$1 = tmp18785;
var inst_18651__$1 = tmp18784;
var inst_18652__$1 = tmp18783;
var inst_18653__$1 = inst_18669;
var state_18771__$1 = (function (){var statearr_18790 = state_18771;
(statearr_18790[(13)] = inst_18652__$1);

(statearr_18790[(15)] = inst_18651__$1);

(statearr_18790[(18)] = inst_18668);

(statearr_18790[(16)] = inst_18653__$1);

(statearr_18790[(17)] = inst_18650__$1);

return statearr_18790;
})();
var statearr_18791_18866 = state_18771__$1;
(statearr_18791_18866[(2)] = null);

(statearr_18791_18866[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (21))){
var inst_18695 = (state_18771[(2)]);
var state_18771__$1 = state_18771;
var statearr_18795_18867 = state_18771__$1;
(statearr_18795_18867[(2)] = inst_18695);

(statearr_18795_18867[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (31))){
var inst_18721 = (state_18771[(12)]);
var inst_18725 = cljs.core.async.untap_STAR_.call(null,m,inst_18721);
var state_18771__$1 = state_18771;
var statearr_18796_18868 = state_18771__$1;
(statearr_18796_18868[(2)] = inst_18725);

(statearr_18796_18868[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (32))){
var inst_18716 = (state_18771[(10)]);
var inst_18714 = (state_18771[(11)]);
var inst_18713 = (state_18771[(19)]);
var inst_18715 = (state_18771[(20)]);
var inst_18727 = (state_18771[(2)]);
var inst_18728 = (inst_18716 + (1));
var tmp18792 = inst_18714;
var tmp18793 = inst_18713;
var tmp18794 = inst_18715;
var inst_18713__$1 = tmp18793;
var inst_18714__$1 = tmp18792;
var inst_18715__$1 = tmp18794;
var inst_18716__$1 = inst_18728;
var state_18771__$1 = (function (){var statearr_18797 = state_18771;
(statearr_18797[(10)] = inst_18716__$1);

(statearr_18797[(11)] = inst_18714__$1);

(statearr_18797[(19)] = inst_18713__$1);

(statearr_18797[(20)] = inst_18715__$1);

(statearr_18797[(21)] = inst_18727);

return statearr_18797;
})();
var statearr_18798_18869 = state_18771__$1;
(statearr_18798_18869[(2)] = null);

(statearr_18798_18869[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (40))){
var inst_18740 = (state_18771[(22)]);
var inst_18744 = cljs.core.async.untap_STAR_.call(null,m,inst_18740);
var state_18771__$1 = state_18771;
var statearr_18799_18870 = state_18771__$1;
(statearr_18799_18870[(2)] = inst_18744);

(statearr_18799_18870[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (33))){
var inst_18731 = (state_18771[(23)]);
var inst_18733 = cljs.core.chunked_seq_QMARK_.call(null,inst_18731);
var state_18771__$1 = state_18771;
if(inst_18733){
var statearr_18800_18871 = state_18771__$1;
(statearr_18800_18871[(1)] = (36));

} else {
var statearr_18801_18872 = state_18771__$1;
(statearr_18801_18872[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (13))){
var inst_18662 = (state_18771[(24)]);
var inst_18665 = cljs.core.async.close_BANG_.call(null,inst_18662);
var state_18771__$1 = state_18771;
var statearr_18802_18873 = state_18771__$1;
(statearr_18802_18873[(2)] = inst_18665);

(statearr_18802_18873[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (22))){
var inst_18685 = (state_18771[(8)]);
var inst_18688 = cljs.core.async.close_BANG_.call(null,inst_18685);
var state_18771__$1 = state_18771;
var statearr_18803_18874 = state_18771__$1;
(statearr_18803_18874[(2)] = inst_18688);

(statearr_18803_18874[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (36))){
var inst_18731 = (state_18771[(23)]);
var inst_18735 = cljs.core.chunk_first.call(null,inst_18731);
var inst_18736 = cljs.core.chunk_rest.call(null,inst_18731);
var inst_18737 = cljs.core.count.call(null,inst_18735);
var inst_18713 = inst_18736;
var inst_18714 = inst_18735;
var inst_18715 = inst_18737;
var inst_18716 = (0);
var state_18771__$1 = (function (){var statearr_18804 = state_18771;
(statearr_18804[(10)] = inst_18716);

(statearr_18804[(11)] = inst_18714);

(statearr_18804[(19)] = inst_18713);

(statearr_18804[(20)] = inst_18715);

return statearr_18804;
})();
var statearr_18805_18875 = state_18771__$1;
(statearr_18805_18875[(2)] = null);

(statearr_18805_18875[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (41))){
var inst_18731 = (state_18771[(23)]);
var inst_18746 = (state_18771[(2)]);
var inst_18747 = cljs.core.next.call(null,inst_18731);
var inst_18713 = inst_18747;
var inst_18714 = null;
var inst_18715 = (0);
var inst_18716 = (0);
var state_18771__$1 = (function (){var statearr_18806 = state_18771;
(statearr_18806[(10)] = inst_18716);

(statearr_18806[(11)] = inst_18714);

(statearr_18806[(19)] = inst_18713);

(statearr_18806[(25)] = inst_18746);

(statearr_18806[(20)] = inst_18715);

return statearr_18806;
})();
var statearr_18807_18876 = state_18771__$1;
(statearr_18807_18876[(2)] = null);

(statearr_18807_18876[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (43))){
var state_18771__$1 = state_18771;
var statearr_18808_18877 = state_18771__$1;
(statearr_18808_18877[(2)] = null);

(statearr_18808_18877[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (29))){
var inst_18755 = (state_18771[(2)]);
var state_18771__$1 = state_18771;
var statearr_18809_18878 = state_18771__$1;
(statearr_18809_18878[(2)] = inst_18755);

(statearr_18809_18878[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (44))){
var inst_18764 = (state_18771[(2)]);
var state_18771__$1 = (function (){var statearr_18810 = state_18771;
(statearr_18810[(26)] = inst_18764);

return statearr_18810;
})();
var statearr_18811_18879 = state_18771__$1;
(statearr_18811_18879[(2)] = null);

(statearr_18811_18879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (6))){
var inst_18705 = (state_18771[(27)]);
var inst_18704 = cljs.core.deref.call(null,cs);
var inst_18705__$1 = cljs.core.keys.call(null,inst_18704);
var inst_18706 = cljs.core.count.call(null,inst_18705__$1);
var inst_18707 = cljs.core.reset_BANG_.call(null,dctr,inst_18706);
var inst_18712 = cljs.core.seq.call(null,inst_18705__$1);
var inst_18713 = inst_18712;
var inst_18714 = null;
var inst_18715 = (0);
var inst_18716 = (0);
var state_18771__$1 = (function (){var statearr_18812 = state_18771;
(statearr_18812[(10)] = inst_18716);

(statearr_18812[(11)] = inst_18714);

(statearr_18812[(19)] = inst_18713);

(statearr_18812[(28)] = inst_18707);

(statearr_18812[(20)] = inst_18715);

(statearr_18812[(27)] = inst_18705__$1);

return statearr_18812;
})();
var statearr_18813_18880 = state_18771__$1;
(statearr_18813_18880[(2)] = null);

(statearr_18813_18880[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (28))){
var inst_18731 = (state_18771[(23)]);
var inst_18713 = (state_18771[(19)]);
var inst_18731__$1 = cljs.core.seq.call(null,inst_18713);
var state_18771__$1 = (function (){var statearr_18814 = state_18771;
(statearr_18814[(23)] = inst_18731__$1);

return statearr_18814;
})();
if(inst_18731__$1){
var statearr_18815_18881 = state_18771__$1;
(statearr_18815_18881[(1)] = (33));

} else {
var statearr_18816_18882 = state_18771__$1;
(statearr_18816_18882[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (25))){
var inst_18716 = (state_18771[(10)]);
var inst_18715 = (state_18771[(20)]);
var inst_18718 = (inst_18716 < inst_18715);
var inst_18719 = inst_18718;
var state_18771__$1 = state_18771;
if(cljs.core.truth_(inst_18719)){
var statearr_18817_18883 = state_18771__$1;
(statearr_18817_18883[(1)] = (27));

} else {
var statearr_18818_18884 = state_18771__$1;
(statearr_18818_18884[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (34))){
var state_18771__$1 = state_18771;
var statearr_18819_18885 = state_18771__$1;
(statearr_18819_18885[(2)] = null);

(statearr_18819_18885[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (17))){
var state_18771__$1 = state_18771;
var statearr_18820_18886 = state_18771__$1;
(statearr_18820_18886[(2)] = null);

(statearr_18820_18886[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (3))){
var inst_18769 = (state_18771[(2)]);
var state_18771__$1 = state_18771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18771__$1,inst_18769);
} else {
if((state_val_18772 === (12))){
var inst_18700 = (state_18771[(2)]);
var state_18771__$1 = state_18771;
var statearr_18821_18887 = state_18771__$1;
(statearr_18821_18887[(2)] = inst_18700);

(statearr_18821_18887[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (2))){
var state_18771__$1 = state_18771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18771__$1,(4),ch);
} else {
if((state_val_18772 === (23))){
var state_18771__$1 = state_18771;
var statearr_18822_18888 = state_18771__$1;
(statearr_18822_18888[(2)] = null);

(statearr_18822_18888[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (35))){
var inst_18753 = (state_18771[(2)]);
var state_18771__$1 = state_18771;
var statearr_18823_18889 = state_18771__$1;
(statearr_18823_18889[(2)] = inst_18753);

(statearr_18823_18889[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (19))){
var inst_18672 = (state_18771[(7)]);
var inst_18676 = cljs.core.chunk_first.call(null,inst_18672);
var inst_18677 = cljs.core.chunk_rest.call(null,inst_18672);
var inst_18678 = cljs.core.count.call(null,inst_18676);
var inst_18650 = inst_18677;
var inst_18651 = inst_18676;
var inst_18652 = inst_18678;
var inst_18653 = (0);
var state_18771__$1 = (function (){var statearr_18824 = state_18771;
(statearr_18824[(13)] = inst_18652);

(statearr_18824[(15)] = inst_18651);

(statearr_18824[(16)] = inst_18653);

(statearr_18824[(17)] = inst_18650);

return statearr_18824;
})();
var statearr_18825_18890 = state_18771__$1;
(statearr_18825_18890[(2)] = null);

(statearr_18825_18890[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (11))){
var inst_18672 = (state_18771[(7)]);
var inst_18650 = (state_18771[(17)]);
var inst_18672__$1 = cljs.core.seq.call(null,inst_18650);
var state_18771__$1 = (function (){var statearr_18826 = state_18771;
(statearr_18826[(7)] = inst_18672__$1);

return statearr_18826;
})();
if(inst_18672__$1){
var statearr_18827_18891 = state_18771__$1;
(statearr_18827_18891[(1)] = (16));

} else {
var statearr_18828_18892 = state_18771__$1;
(statearr_18828_18892[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (9))){
var inst_18702 = (state_18771[(2)]);
var state_18771__$1 = state_18771;
var statearr_18829_18893 = state_18771__$1;
(statearr_18829_18893[(2)] = inst_18702);

(statearr_18829_18893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (5))){
var inst_18648 = cljs.core.deref.call(null,cs);
var inst_18649 = cljs.core.seq.call(null,inst_18648);
var inst_18650 = inst_18649;
var inst_18651 = null;
var inst_18652 = (0);
var inst_18653 = (0);
var state_18771__$1 = (function (){var statearr_18830 = state_18771;
(statearr_18830[(13)] = inst_18652);

(statearr_18830[(15)] = inst_18651);

(statearr_18830[(16)] = inst_18653);

(statearr_18830[(17)] = inst_18650);

return statearr_18830;
})();
var statearr_18831_18894 = state_18771__$1;
(statearr_18831_18894[(2)] = null);

(statearr_18831_18894[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (14))){
var state_18771__$1 = state_18771;
var statearr_18832_18895 = state_18771__$1;
(statearr_18832_18895[(2)] = null);

(statearr_18832_18895[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (45))){
var inst_18761 = (state_18771[(2)]);
var state_18771__$1 = state_18771;
var statearr_18833_18896 = state_18771__$1;
(statearr_18833_18896[(2)] = inst_18761);

(statearr_18833_18896[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (26))){
var inst_18705 = (state_18771[(27)]);
var inst_18757 = (state_18771[(2)]);
var inst_18758 = cljs.core.seq.call(null,inst_18705);
var state_18771__$1 = (function (){var statearr_18834 = state_18771;
(statearr_18834[(29)] = inst_18757);

return statearr_18834;
})();
if(inst_18758){
var statearr_18835_18897 = state_18771__$1;
(statearr_18835_18897[(1)] = (42));

} else {
var statearr_18836_18898 = state_18771__$1;
(statearr_18836_18898[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (16))){
var inst_18672 = (state_18771[(7)]);
var inst_18674 = cljs.core.chunked_seq_QMARK_.call(null,inst_18672);
var state_18771__$1 = state_18771;
if(inst_18674){
var statearr_18837_18899 = state_18771__$1;
(statearr_18837_18899[(1)] = (19));

} else {
var statearr_18838_18900 = state_18771__$1;
(statearr_18838_18900[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (38))){
var inst_18750 = (state_18771[(2)]);
var state_18771__$1 = state_18771;
var statearr_18839_18901 = state_18771__$1;
(statearr_18839_18901[(2)] = inst_18750);

(statearr_18839_18901[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (30))){
var state_18771__$1 = state_18771;
var statearr_18840_18902 = state_18771__$1;
(statearr_18840_18902[(2)] = null);

(statearr_18840_18902[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (10))){
var inst_18651 = (state_18771[(15)]);
var inst_18653 = (state_18771[(16)]);
var inst_18661 = cljs.core._nth.call(null,inst_18651,inst_18653);
var inst_18662 = cljs.core.nth.call(null,inst_18661,(0),null);
var inst_18663 = cljs.core.nth.call(null,inst_18661,(1),null);
var state_18771__$1 = (function (){var statearr_18841 = state_18771;
(statearr_18841[(24)] = inst_18662);

return statearr_18841;
})();
if(cljs.core.truth_(inst_18663)){
var statearr_18842_18903 = state_18771__$1;
(statearr_18842_18903[(1)] = (13));

} else {
var statearr_18843_18904 = state_18771__$1;
(statearr_18843_18904[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (18))){
var inst_18698 = (state_18771[(2)]);
var state_18771__$1 = state_18771;
var statearr_18844_18905 = state_18771__$1;
(statearr_18844_18905[(2)] = inst_18698);

(statearr_18844_18905[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (42))){
var state_18771__$1 = state_18771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18771__$1,(45),dchan);
} else {
if((state_val_18772 === (37))){
var inst_18641 = (state_18771[(9)]);
var inst_18731 = (state_18771[(23)]);
var inst_18740 = (state_18771[(22)]);
var inst_18740__$1 = cljs.core.first.call(null,inst_18731);
var inst_18741 = cljs.core.async.put_BANG_.call(null,inst_18740__$1,inst_18641,done);
var state_18771__$1 = (function (){var statearr_18845 = state_18771;
(statearr_18845[(22)] = inst_18740__$1);

return statearr_18845;
})();
if(cljs.core.truth_(inst_18741)){
var statearr_18846_18906 = state_18771__$1;
(statearr_18846_18906[(1)] = (39));

} else {
var statearr_18847_18907 = state_18771__$1;
(statearr_18847_18907[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (8))){
var inst_18652 = (state_18771[(13)]);
var inst_18653 = (state_18771[(16)]);
var inst_18655 = (inst_18653 < inst_18652);
var inst_18656 = inst_18655;
var state_18771__$1 = state_18771;
if(cljs.core.truth_(inst_18656)){
var statearr_18848_18908 = state_18771__$1;
(statearr_18848_18908[(1)] = (10));

} else {
var statearr_18849_18909 = state_18771__$1;
(statearr_18849_18909[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__17976__auto__ = null;
var cljs$core$async$mult_$_state_machine__17976__auto____0 = (function (){
var statearr_18850 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18850[(0)] = cljs$core$async$mult_$_state_machine__17976__auto__);

(statearr_18850[(1)] = (1));

return statearr_18850;
});
var cljs$core$async$mult_$_state_machine__17976__auto____1 = (function (state_18771){
while(true){
var ret_value__17977__auto__ = (function (){try{while(true){
var result__17978__auto__ = switch__17975__auto__.call(null,state_18771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17978__auto__;
}
break;
}
}catch (e18851){var ex__17979__auto__ = e18851;
var statearr_18852_18910 = state_18771;
(statearr_18852_18910[(2)] = ex__17979__auto__);


if(cljs.core.seq.call(null,(state_18771[(4)]))){
var statearr_18853_18911 = state_18771;
(statearr_18853_18911[(1)] = cljs.core.first.call(null,(state_18771[(4)])));

} else {
throw ex__17979__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18912 = state_18771;
state_18771 = G__18912;
continue;
} else {
return ret_value__17977__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17976__auto__ = function(state_18771){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17976__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17976__auto____1.call(this,state_18771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17976__auto____0;
cljs$core$async$mult_$_state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17976__auto____1;
return cljs$core$async$mult_$_state_machine__17976__auto__;
})()
})();
var state__18014__auto__ = (function (){var statearr_18854 = f__18013__auto__.call(null);
(statearr_18854[(6)] = c__18012__auto___18855);

return statearr_18854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18014__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__18914 = arguments.length;
switch (G__18914) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18916 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18916.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18917 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18917.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18918 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18918.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18919 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,state_map);
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18919.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18920 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,mode);
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18920.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18931 = arguments.length;
var i__4737__auto___18932 = (0);
while(true){
if((i__4737__auto___18932 < len__4736__auto___18931)){
args__4742__auto__.push((arguments[i__4737__auto___18932]));

var G__18933 = (i__4737__auto___18932 + (1));
i__4737__auto___18932 = G__18933;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18925){
var map__18926 = p__18925;
var map__18926__$1 = (((((!((map__18926 == null))))?(((((map__18926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18926):map__18926);
var opts = map__18926__$1;
var statearr_18928_18934 = state;
(statearr_18928_18934[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_18929_18935 = state;
(statearr_18929_18935[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_18930_18936 = state;
(statearr_18930_18936[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18921){
var G__18922 = cljs.core.first.call(null,seq18921);
var seq18921__$1 = cljs.core.next.call(null,seq18921);
var G__18923 = cljs.core.first.call(null,seq18921__$1);
var seq18921__$2 = cljs.core.next.call(null,seq18921__$1);
var G__18924 = cljs.core.first.call(null,seq18921__$2);
var seq18921__$3 = cljs.core.next.call(null,seq18921__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18922,G__18923,G__18924,seq18921__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18937 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18937 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18938){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18938 = meta18938;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18939,meta18938__$1){
var self__ = this;
var _18939__$1 = this;
return (new cljs.core.async.t_cljs$core$async18937(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18938__$1));
}));

(cljs.core.async.t_cljs$core$async18937.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18939){
var self__ = this;
var _18939__$1 = this;
return self__.meta18938;
}));

(cljs.core.async.t_cljs$core$async18937.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18937.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async18937.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18937.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18937.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18937.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18937.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18937.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18937.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18938","meta18938",-461600074,null)], null);
}));

(cljs.core.async.t_cljs$core$async18937.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18937.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18937");

(cljs.core.async.t_cljs$core$async18937.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async18937");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18937.
 */
cljs.core.async.__GT_t_cljs$core$async18937 = (function cljs$core$async$mix_$___GT_t_cljs$core$async18937(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18938){
return (new cljs.core.async.t_cljs$core$async18937(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18938));
});

}

return (new cljs.core.async.t_cljs$core$async18937(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18012__auto___19102 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18013__auto__ = (function (){var switch__17975__auto__ = (function (state_19041){
var state_val_19042 = (state_19041[(1)]);
if((state_val_19042 === (7))){
var inst_18956 = (state_19041[(2)]);
var state_19041__$1 = state_19041;
var statearr_19043_19103 = state_19041__$1;
(statearr_19043_19103[(2)] = inst_18956);

(statearr_19043_19103[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (20))){
var inst_18968 = (state_19041[(7)]);
var state_19041__$1 = state_19041;
var statearr_19044_19104 = state_19041__$1;
(statearr_19044_19104[(2)] = inst_18968);

(statearr_19044_19104[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (27))){
var state_19041__$1 = state_19041;
var statearr_19045_19105 = state_19041__$1;
(statearr_19045_19105[(2)] = null);

(statearr_19045_19105[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (1))){
var inst_18943 = (state_19041[(8)]);
var inst_18943__$1 = calc_state.call(null);
var inst_18945 = (inst_18943__$1 == null);
var inst_18946 = cljs.core.not.call(null,inst_18945);
var state_19041__$1 = (function (){var statearr_19046 = state_19041;
(statearr_19046[(8)] = inst_18943__$1);

return statearr_19046;
})();
if(inst_18946){
var statearr_19047_19106 = state_19041__$1;
(statearr_19047_19106[(1)] = (2));

} else {
var statearr_19048_19107 = state_19041__$1;
(statearr_19048_19107[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (24))){
var inst_19015 = (state_19041[(9)]);
var inst_19001 = (state_19041[(10)]);
var inst_18992 = (state_19041[(11)]);
var inst_19015__$1 = inst_18992.call(null,inst_19001);
var state_19041__$1 = (function (){var statearr_19049 = state_19041;
(statearr_19049[(9)] = inst_19015__$1);

return statearr_19049;
})();
if(cljs.core.truth_(inst_19015__$1)){
var statearr_19050_19108 = state_19041__$1;
(statearr_19050_19108[(1)] = (29));

} else {
var statearr_19051_19109 = state_19041__$1;
(statearr_19051_19109[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (4))){
var inst_18959 = (state_19041[(2)]);
var state_19041__$1 = state_19041;
if(cljs.core.truth_(inst_18959)){
var statearr_19052_19110 = state_19041__$1;
(statearr_19052_19110[(1)] = (8));

} else {
var statearr_19053_19111 = state_19041__$1;
(statearr_19053_19111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (15))){
var inst_18986 = (state_19041[(2)]);
var state_19041__$1 = state_19041;
if(cljs.core.truth_(inst_18986)){
var statearr_19054_19112 = state_19041__$1;
(statearr_19054_19112[(1)] = (19));

} else {
var statearr_19055_19113 = state_19041__$1;
(statearr_19055_19113[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (21))){
var inst_18991 = (state_19041[(12)]);
var inst_18991__$1 = (state_19041[(2)]);
var inst_18992 = cljs.core.get.call(null,inst_18991__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18993 = cljs.core.get.call(null,inst_18991__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18994 = cljs.core.get.call(null,inst_18991__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19041__$1 = (function (){var statearr_19056 = state_19041;
(statearr_19056[(13)] = inst_18993);

(statearr_19056[(12)] = inst_18991__$1);

(statearr_19056[(11)] = inst_18992);

return statearr_19056;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19041__$1,(22),inst_18994);
} else {
if((state_val_19042 === (31))){
var inst_19023 = (state_19041[(2)]);
var state_19041__$1 = state_19041;
if(cljs.core.truth_(inst_19023)){
var statearr_19057_19114 = state_19041__$1;
(statearr_19057_19114[(1)] = (32));

} else {
var statearr_19058_19115 = state_19041__$1;
(statearr_19058_19115[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (32))){
var inst_19000 = (state_19041[(14)]);
var state_19041__$1 = state_19041;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19041__$1,(35),out,inst_19000);
} else {
if((state_val_19042 === (33))){
var inst_18991 = (state_19041[(12)]);
var inst_18968 = inst_18991;
var state_19041__$1 = (function (){var statearr_19059 = state_19041;
(statearr_19059[(7)] = inst_18968);

return statearr_19059;
})();
var statearr_19060_19116 = state_19041__$1;
(statearr_19060_19116[(2)] = null);

(statearr_19060_19116[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (13))){
var inst_18968 = (state_19041[(7)]);
var inst_18975 = inst_18968.cljs$lang$protocol_mask$partition0$;
var inst_18976 = (inst_18975 & (64));
var inst_18977 = inst_18968.cljs$core$ISeq$;
var inst_18978 = (cljs.core.PROTOCOL_SENTINEL === inst_18977);
var inst_18979 = ((inst_18976) || (inst_18978));
var state_19041__$1 = state_19041;
if(cljs.core.truth_(inst_18979)){
var statearr_19061_19117 = state_19041__$1;
(statearr_19061_19117[(1)] = (16));

} else {
var statearr_19062_19118 = state_19041__$1;
(statearr_19062_19118[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (22))){
var inst_19000 = (state_19041[(14)]);
var inst_19001 = (state_19041[(10)]);
var inst_18999 = (state_19041[(2)]);
var inst_19000__$1 = cljs.core.nth.call(null,inst_18999,(0),null);
var inst_19001__$1 = cljs.core.nth.call(null,inst_18999,(1),null);
var inst_19002 = (inst_19000__$1 == null);
var inst_19003 = cljs.core._EQ_.call(null,inst_19001__$1,change);
var inst_19004 = ((inst_19002) || (inst_19003));
var state_19041__$1 = (function (){var statearr_19063 = state_19041;
(statearr_19063[(14)] = inst_19000__$1);

(statearr_19063[(10)] = inst_19001__$1);

return statearr_19063;
})();
if(cljs.core.truth_(inst_19004)){
var statearr_19064_19119 = state_19041__$1;
(statearr_19064_19119[(1)] = (23));

} else {
var statearr_19065_19120 = state_19041__$1;
(statearr_19065_19120[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (36))){
var inst_18991 = (state_19041[(12)]);
var inst_18968 = inst_18991;
var state_19041__$1 = (function (){var statearr_19066 = state_19041;
(statearr_19066[(7)] = inst_18968);

return statearr_19066;
})();
var statearr_19067_19121 = state_19041__$1;
(statearr_19067_19121[(2)] = null);

(statearr_19067_19121[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (29))){
var inst_19015 = (state_19041[(9)]);
var state_19041__$1 = state_19041;
var statearr_19068_19122 = state_19041__$1;
(statearr_19068_19122[(2)] = inst_19015);

(statearr_19068_19122[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (6))){
var state_19041__$1 = state_19041;
var statearr_19069_19123 = state_19041__$1;
(statearr_19069_19123[(2)] = false);

(statearr_19069_19123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (28))){
var inst_19011 = (state_19041[(2)]);
var inst_19012 = calc_state.call(null);
var inst_18968 = inst_19012;
var state_19041__$1 = (function (){var statearr_19070 = state_19041;
(statearr_19070[(15)] = inst_19011);

(statearr_19070[(7)] = inst_18968);

return statearr_19070;
})();
var statearr_19071_19124 = state_19041__$1;
(statearr_19071_19124[(2)] = null);

(statearr_19071_19124[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (25))){
var inst_19037 = (state_19041[(2)]);
var state_19041__$1 = state_19041;
var statearr_19072_19125 = state_19041__$1;
(statearr_19072_19125[(2)] = inst_19037);

(statearr_19072_19125[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (34))){
var inst_19035 = (state_19041[(2)]);
var state_19041__$1 = state_19041;
var statearr_19073_19126 = state_19041__$1;
(statearr_19073_19126[(2)] = inst_19035);

(statearr_19073_19126[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (17))){
var state_19041__$1 = state_19041;
var statearr_19074_19127 = state_19041__$1;
(statearr_19074_19127[(2)] = false);

(statearr_19074_19127[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (3))){
var state_19041__$1 = state_19041;
var statearr_19075_19128 = state_19041__$1;
(statearr_19075_19128[(2)] = false);

(statearr_19075_19128[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (12))){
var inst_19039 = (state_19041[(2)]);
var state_19041__$1 = state_19041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19041__$1,inst_19039);
} else {
if((state_val_19042 === (2))){
var inst_18943 = (state_19041[(8)]);
var inst_18948 = inst_18943.cljs$lang$protocol_mask$partition0$;
var inst_18949 = (inst_18948 & (64));
var inst_18950 = inst_18943.cljs$core$ISeq$;
var inst_18951 = (cljs.core.PROTOCOL_SENTINEL === inst_18950);
var inst_18952 = ((inst_18949) || (inst_18951));
var state_19041__$1 = state_19041;
if(cljs.core.truth_(inst_18952)){
var statearr_19076_19129 = state_19041__$1;
(statearr_19076_19129[(1)] = (5));

} else {
var statearr_19077_19130 = state_19041__$1;
(statearr_19077_19130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (23))){
var inst_19000 = (state_19041[(14)]);
var inst_19006 = (inst_19000 == null);
var state_19041__$1 = state_19041;
if(cljs.core.truth_(inst_19006)){
var statearr_19078_19131 = state_19041__$1;
(statearr_19078_19131[(1)] = (26));

} else {
var statearr_19079_19132 = state_19041__$1;
(statearr_19079_19132[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (35))){
var inst_19026 = (state_19041[(2)]);
var state_19041__$1 = state_19041;
if(cljs.core.truth_(inst_19026)){
var statearr_19080_19133 = state_19041__$1;
(statearr_19080_19133[(1)] = (36));

} else {
var statearr_19081_19134 = state_19041__$1;
(statearr_19081_19134[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (19))){
var inst_18968 = (state_19041[(7)]);
var inst_18988 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18968);
var state_19041__$1 = state_19041;
var statearr_19082_19135 = state_19041__$1;
(statearr_19082_19135[(2)] = inst_18988);

(statearr_19082_19135[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (11))){
var inst_18968 = (state_19041[(7)]);
var inst_18972 = (inst_18968 == null);
var inst_18973 = cljs.core.not.call(null,inst_18972);
var state_19041__$1 = state_19041;
if(inst_18973){
var statearr_19083_19136 = state_19041__$1;
(statearr_19083_19136[(1)] = (13));

} else {
var statearr_19084_19137 = state_19041__$1;
(statearr_19084_19137[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (9))){
var inst_18943 = (state_19041[(8)]);
var state_19041__$1 = state_19041;
var statearr_19085_19138 = state_19041__$1;
(statearr_19085_19138[(2)] = inst_18943);

(statearr_19085_19138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (5))){
var state_19041__$1 = state_19041;
var statearr_19086_19139 = state_19041__$1;
(statearr_19086_19139[(2)] = true);

(statearr_19086_19139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (14))){
var state_19041__$1 = state_19041;
var statearr_19087_19140 = state_19041__$1;
(statearr_19087_19140[(2)] = false);

(statearr_19087_19140[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (26))){
var inst_19001 = (state_19041[(10)]);
var inst_19008 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19001);
var state_19041__$1 = state_19041;
var statearr_19088_19141 = state_19041__$1;
(statearr_19088_19141[(2)] = inst_19008);

(statearr_19088_19141[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (16))){
var state_19041__$1 = state_19041;
var statearr_19089_19142 = state_19041__$1;
(statearr_19089_19142[(2)] = true);

(statearr_19089_19142[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (38))){
var inst_19031 = (state_19041[(2)]);
var state_19041__$1 = state_19041;
var statearr_19090_19143 = state_19041__$1;
(statearr_19090_19143[(2)] = inst_19031);

(statearr_19090_19143[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (30))){
var inst_19001 = (state_19041[(10)]);
var inst_18993 = (state_19041[(13)]);
var inst_18992 = (state_19041[(11)]);
var inst_19018 = cljs.core.empty_QMARK_.call(null,inst_18992);
var inst_19019 = inst_18993.call(null,inst_19001);
var inst_19020 = cljs.core.not.call(null,inst_19019);
var inst_19021 = ((inst_19018) && (inst_19020));
var state_19041__$1 = state_19041;
var statearr_19091_19144 = state_19041__$1;
(statearr_19091_19144[(2)] = inst_19021);

(statearr_19091_19144[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (10))){
var inst_18943 = (state_19041[(8)]);
var inst_18964 = (state_19041[(2)]);
var inst_18965 = cljs.core.get.call(null,inst_18964,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18966 = cljs.core.get.call(null,inst_18964,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18967 = cljs.core.get.call(null,inst_18964,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18968 = inst_18943;
var state_19041__$1 = (function (){var statearr_19092 = state_19041;
(statearr_19092[(16)] = inst_18966);

(statearr_19092[(17)] = inst_18967);

(statearr_19092[(7)] = inst_18968);

(statearr_19092[(18)] = inst_18965);

return statearr_19092;
})();
var statearr_19093_19145 = state_19041__$1;
(statearr_19093_19145[(2)] = null);

(statearr_19093_19145[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (18))){
var inst_18983 = (state_19041[(2)]);
var state_19041__$1 = state_19041;
var statearr_19094_19146 = state_19041__$1;
(statearr_19094_19146[(2)] = inst_18983);

(statearr_19094_19146[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (37))){
var state_19041__$1 = state_19041;
var statearr_19095_19147 = state_19041__$1;
(statearr_19095_19147[(2)] = null);

(statearr_19095_19147[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (8))){
var inst_18943 = (state_19041[(8)]);
var inst_18961 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18943);
var state_19041__$1 = state_19041;
var statearr_19096_19148 = state_19041__$1;
(statearr_19096_19148[(2)] = inst_18961);

(statearr_19096_19148[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__17976__auto__ = null;
var cljs$core$async$mix_$_state_machine__17976__auto____0 = (function (){
var statearr_19097 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19097[(0)] = cljs$core$async$mix_$_state_machine__17976__auto__);

(statearr_19097[(1)] = (1));

return statearr_19097;
});
var cljs$core$async$mix_$_state_machine__17976__auto____1 = (function (state_19041){
while(true){
var ret_value__17977__auto__ = (function (){try{while(true){
var result__17978__auto__ = switch__17975__auto__.call(null,state_19041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17978__auto__;
}
break;
}
}catch (e19098){var ex__17979__auto__ = e19098;
var statearr_19099_19149 = state_19041;
(statearr_19099_19149[(2)] = ex__17979__auto__);


if(cljs.core.seq.call(null,(state_19041[(4)]))){
var statearr_19100_19150 = state_19041;
(statearr_19100_19150[(1)] = cljs.core.first.call(null,(state_19041[(4)])));

} else {
throw ex__17979__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19151 = state_19041;
state_19041 = G__19151;
continue;
} else {
return ret_value__17977__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17976__auto__ = function(state_19041){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17976__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17976__auto____1.call(this,state_19041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17976__auto____0;
cljs$core$async$mix_$_state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17976__auto____1;
return cljs$core$async$mix_$_state_machine__17976__auto__;
})()
})();
var state__18014__auto__ = (function (){var statearr_19101 = f__18013__auto__.call(null);
(statearr_19101[(6)] = c__18012__auto___19102);

return statearr_19101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18014__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_19154 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_19154.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_19155 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_19155.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_19156 = (function() {
var G__19157 = null;
var G__19157__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__19157__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__19157 = function(p,v){
switch(arguments.length){
case 1:
return G__19157__1.call(this,p);
case 2:
return G__19157__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19157.cljs$core$IFn$_invoke$arity$1 = G__19157__1;
G__19157.cljs$core$IFn$_invoke$arity$2 = G__19157__2;
return G__19157;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__19153 = arguments.length;
switch (G__19153) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19156.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19156.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__19161 = arguments.length;
switch (G__19161) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__19159_SHARP_){
if(cljs.core.truth_(p1__19159_SHARP_.call(null,topic))){
return p1__19159_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19159_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19162 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19162 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19163){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19163 = meta19163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19164,meta19163__$1){
var self__ = this;
var _19164__$1 = this;
return (new cljs.core.async.t_cljs$core$async19162(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19163__$1));
}));

(cljs.core.async.t_cljs$core$async19162.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19164){
var self__ = this;
var _19164__$1 = this;
return self__.meta19163;
}));

(cljs.core.async.t_cljs$core$async19162.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19162.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19162.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19162.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async19162.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async19162.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async19162.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async19162.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19163","meta19163",1873916511,null)], null);
}));

(cljs.core.async.t_cljs$core$async19162.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19162.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19162");

(cljs.core.async.t_cljs$core$async19162.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async19162");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19162.
 */
cljs.core.async.__GT_t_cljs$core$async19162 = (function cljs$core$async$__GT_t_cljs$core$async19162(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19163){
return (new cljs.core.async.t_cljs$core$async19162(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19163));
});

}

return (new cljs.core.async.t_cljs$core$async19162(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18012__auto___19283 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18013__auto__ = (function (){var switch__17975__auto__ = (function (state_19236){
var state_val_19237 = (state_19236[(1)]);
if((state_val_19237 === (7))){
var inst_19232 = (state_19236[(2)]);
var state_19236__$1 = state_19236;
var statearr_19238_19284 = state_19236__$1;
(statearr_19238_19284[(2)] = inst_19232);

(statearr_19238_19284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (20))){
var state_19236__$1 = state_19236;
var statearr_19239_19285 = state_19236__$1;
(statearr_19239_19285[(2)] = null);

(statearr_19239_19285[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (1))){
var state_19236__$1 = state_19236;
var statearr_19240_19286 = state_19236__$1;
(statearr_19240_19286[(2)] = null);

(statearr_19240_19286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (24))){
var inst_19215 = (state_19236[(7)]);
var inst_19224 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19215);
var state_19236__$1 = state_19236;
var statearr_19241_19287 = state_19236__$1;
(statearr_19241_19287[(2)] = inst_19224);

(statearr_19241_19287[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (4))){
var inst_19167 = (state_19236[(8)]);
var inst_19167__$1 = (state_19236[(2)]);
var inst_19168 = (inst_19167__$1 == null);
var state_19236__$1 = (function (){var statearr_19242 = state_19236;
(statearr_19242[(8)] = inst_19167__$1);

return statearr_19242;
})();
if(cljs.core.truth_(inst_19168)){
var statearr_19243_19288 = state_19236__$1;
(statearr_19243_19288[(1)] = (5));

} else {
var statearr_19244_19289 = state_19236__$1;
(statearr_19244_19289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (15))){
var inst_19209 = (state_19236[(2)]);
var state_19236__$1 = state_19236;
var statearr_19245_19290 = state_19236__$1;
(statearr_19245_19290[(2)] = inst_19209);

(statearr_19245_19290[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (21))){
var inst_19229 = (state_19236[(2)]);
var state_19236__$1 = (function (){var statearr_19246 = state_19236;
(statearr_19246[(9)] = inst_19229);

return statearr_19246;
})();
var statearr_19247_19291 = state_19236__$1;
(statearr_19247_19291[(2)] = null);

(statearr_19247_19291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (13))){
var inst_19191 = (state_19236[(10)]);
var inst_19193 = cljs.core.chunked_seq_QMARK_.call(null,inst_19191);
var state_19236__$1 = state_19236;
if(inst_19193){
var statearr_19248_19292 = state_19236__$1;
(statearr_19248_19292[(1)] = (16));

} else {
var statearr_19249_19293 = state_19236__$1;
(statearr_19249_19293[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (22))){
var inst_19221 = (state_19236[(2)]);
var state_19236__$1 = state_19236;
if(cljs.core.truth_(inst_19221)){
var statearr_19250_19294 = state_19236__$1;
(statearr_19250_19294[(1)] = (23));

} else {
var statearr_19251_19295 = state_19236__$1;
(statearr_19251_19295[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (6))){
var inst_19167 = (state_19236[(8)]);
var inst_19215 = (state_19236[(7)]);
var inst_19217 = (state_19236[(11)]);
var inst_19215__$1 = topic_fn.call(null,inst_19167);
var inst_19216 = cljs.core.deref.call(null,mults);
var inst_19217__$1 = cljs.core.get.call(null,inst_19216,inst_19215__$1);
var state_19236__$1 = (function (){var statearr_19252 = state_19236;
(statearr_19252[(7)] = inst_19215__$1);

(statearr_19252[(11)] = inst_19217__$1);

return statearr_19252;
})();
if(cljs.core.truth_(inst_19217__$1)){
var statearr_19253_19296 = state_19236__$1;
(statearr_19253_19296[(1)] = (19));

} else {
var statearr_19254_19297 = state_19236__$1;
(statearr_19254_19297[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (25))){
var inst_19226 = (state_19236[(2)]);
var state_19236__$1 = state_19236;
var statearr_19255_19298 = state_19236__$1;
(statearr_19255_19298[(2)] = inst_19226);

(statearr_19255_19298[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (17))){
var inst_19191 = (state_19236[(10)]);
var inst_19200 = cljs.core.first.call(null,inst_19191);
var inst_19201 = cljs.core.async.muxch_STAR_.call(null,inst_19200);
var inst_19202 = cljs.core.async.close_BANG_.call(null,inst_19201);
var inst_19203 = cljs.core.next.call(null,inst_19191);
var inst_19177 = inst_19203;
var inst_19178 = null;
var inst_19179 = (0);
var inst_19180 = (0);
var state_19236__$1 = (function (){var statearr_19256 = state_19236;
(statearr_19256[(12)] = inst_19177);

(statearr_19256[(13)] = inst_19179);

(statearr_19256[(14)] = inst_19178);

(statearr_19256[(15)] = inst_19202);

(statearr_19256[(16)] = inst_19180);

return statearr_19256;
})();
var statearr_19257_19299 = state_19236__$1;
(statearr_19257_19299[(2)] = null);

(statearr_19257_19299[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (3))){
var inst_19234 = (state_19236[(2)]);
var state_19236__$1 = state_19236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19236__$1,inst_19234);
} else {
if((state_val_19237 === (12))){
var inst_19211 = (state_19236[(2)]);
var state_19236__$1 = state_19236;
var statearr_19258_19300 = state_19236__$1;
(statearr_19258_19300[(2)] = inst_19211);

(statearr_19258_19300[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (2))){
var state_19236__$1 = state_19236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19236__$1,(4),ch);
} else {
if((state_val_19237 === (23))){
var state_19236__$1 = state_19236;
var statearr_19259_19301 = state_19236__$1;
(statearr_19259_19301[(2)] = null);

(statearr_19259_19301[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (19))){
var inst_19167 = (state_19236[(8)]);
var inst_19217 = (state_19236[(11)]);
var inst_19219 = cljs.core.async.muxch_STAR_.call(null,inst_19217);
var state_19236__$1 = state_19236;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19236__$1,(22),inst_19219,inst_19167);
} else {
if((state_val_19237 === (11))){
var inst_19191 = (state_19236[(10)]);
var inst_19177 = (state_19236[(12)]);
var inst_19191__$1 = cljs.core.seq.call(null,inst_19177);
var state_19236__$1 = (function (){var statearr_19260 = state_19236;
(statearr_19260[(10)] = inst_19191__$1);

return statearr_19260;
})();
if(inst_19191__$1){
var statearr_19261_19302 = state_19236__$1;
(statearr_19261_19302[(1)] = (13));

} else {
var statearr_19262_19303 = state_19236__$1;
(statearr_19262_19303[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (9))){
var inst_19213 = (state_19236[(2)]);
var state_19236__$1 = state_19236;
var statearr_19263_19304 = state_19236__$1;
(statearr_19263_19304[(2)] = inst_19213);

(statearr_19263_19304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (5))){
var inst_19174 = cljs.core.deref.call(null,mults);
var inst_19175 = cljs.core.vals.call(null,inst_19174);
var inst_19176 = cljs.core.seq.call(null,inst_19175);
var inst_19177 = inst_19176;
var inst_19178 = null;
var inst_19179 = (0);
var inst_19180 = (0);
var state_19236__$1 = (function (){var statearr_19264 = state_19236;
(statearr_19264[(12)] = inst_19177);

(statearr_19264[(13)] = inst_19179);

(statearr_19264[(14)] = inst_19178);

(statearr_19264[(16)] = inst_19180);

return statearr_19264;
})();
var statearr_19265_19305 = state_19236__$1;
(statearr_19265_19305[(2)] = null);

(statearr_19265_19305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (14))){
var state_19236__$1 = state_19236;
var statearr_19269_19306 = state_19236__$1;
(statearr_19269_19306[(2)] = null);

(statearr_19269_19306[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (16))){
var inst_19191 = (state_19236[(10)]);
var inst_19195 = cljs.core.chunk_first.call(null,inst_19191);
var inst_19196 = cljs.core.chunk_rest.call(null,inst_19191);
var inst_19197 = cljs.core.count.call(null,inst_19195);
var inst_19177 = inst_19196;
var inst_19178 = inst_19195;
var inst_19179 = inst_19197;
var inst_19180 = (0);
var state_19236__$1 = (function (){var statearr_19270 = state_19236;
(statearr_19270[(12)] = inst_19177);

(statearr_19270[(13)] = inst_19179);

(statearr_19270[(14)] = inst_19178);

(statearr_19270[(16)] = inst_19180);

return statearr_19270;
})();
var statearr_19271_19307 = state_19236__$1;
(statearr_19271_19307[(2)] = null);

(statearr_19271_19307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (10))){
var inst_19177 = (state_19236[(12)]);
var inst_19179 = (state_19236[(13)]);
var inst_19178 = (state_19236[(14)]);
var inst_19180 = (state_19236[(16)]);
var inst_19185 = cljs.core._nth.call(null,inst_19178,inst_19180);
var inst_19186 = cljs.core.async.muxch_STAR_.call(null,inst_19185);
var inst_19187 = cljs.core.async.close_BANG_.call(null,inst_19186);
var inst_19188 = (inst_19180 + (1));
var tmp19266 = inst_19177;
var tmp19267 = inst_19179;
var tmp19268 = inst_19178;
var inst_19177__$1 = tmp19266;
var inst_19178__$1 = tmp19268;
var inst_19179__$1 = tmp19267;
var inst_19180__$1 = inst_19188;
var state_19236__$1 = (function (){var statearr_19272 = state_19236;
(statearr_19272[(12)] = inst_19177__$1);

(statearr_19272[(13)] = inst_19179__$1);

(statearr_19272[(14)] = inst_19178__$1);

(statearr_19272[(17)] = inst_19187);

(statearr_19272[(16)] = inst_19180__$1);

return statearr_19272;
})();
var statearr_19273_19308 = state_19236__$1;
(statearr_19273_19308[(2)] = null);

(statearr_19273_19308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (18))){
var inst_19206 = (state_19236[(2)]);
var state_19236__$1 = state_19236;
var statearr_19274_19309 = state_19236__$1;
(statearr_19274_19309[(2)] = inst_19206);

(statearr_19274_19309[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (8))){
var inst_19179 = (state_19236[(13)]);
var inst_19180 = (state_19236[(16)]);
var inst_19182 = (inst_19180 < inst_19179);
var inst_19183 = inst_19182;
var state_19236__$1 = state_19236;
if(cljs.core.truth_(inst_19183)){
var statearr_19275_19310 = state_19236__$1;
(statearr_19275_19310[(1)] = (10));

} else {
var statearr_19276_19311 = state_19236__$1;
(statearr_19276_19311[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17976__auto__ = null;
var cljs$core$async$state_machine__17976__auto____0 = (function (){
var statearr_19277 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19277[(0)] = cljs$core$async$state_machine__17976__auto__);

(statearr_19277[(1)] = (1));

return statearr_19277;
});
var cljs$core$async$state_machine__17976__auto____1 = (function (state_19236){
while(true){
var ret_value__17977__auto__ = (function (){try{while(true){
var result__17978__auto__ = switch__17975__auto__.call(null,state_19236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17978__auto__;
}
break;
}
}catch (e19278){var ex__17979__auto__ = e19278;
var statearr_19279_19312 = state_19236;
(statearr_19279_19312[(2)] = ex__17979__auto__);


if(cljs.core.seq.call(null,(state_19236[(4)]))){
var statearr_19280_19313 = state_19236;
(statearr_19280_19313[(1)] = cljs.core.first.call(null,(state_19236[(4)])));

} else {
throw ex__17979__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19314 = state_19236;
state_19236 = G__19314;
continue;
} else {
return ret_value__17977__auto__;
}
break;
}
});
cljs$core$async$state_machine__17976__auto__ = function(state_19236){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17976__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17976__auto____1.call(this,state_19236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17976__auto____0;
cljs$core$async$state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17976__auto____1;
return cljs$core$async$state_machine__17976__auto__;
})()
})();
var state__18014__auto__ = (function (){var statearr_19281 = f__18013__auto__.call(null);
(statearr_19281[(6)] = c__18012__auto___19283);

return statearr_19281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18014__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__19316 = arguments.length;
switch (G__19316) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__19319 = arguments.length;
switch (G__19319) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__19322 = arguments.length;
switch (G__19322) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__18012__auto___19400 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18013__auto__ = (function (){var switch__17975__auto__ = (function (state_19365){
var state_val_19366 = (state_19365[(1)]);
if((state_val_19366 === (7))){
var state_19365__$1 = state_19365;
var statearr_19367_19401 = state_19365__$1;
(statearr_19367_19401[(2)] = null);

(statearr_19367_19401[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19366 === (1))){
var state_19365__$1 = state_19365;
var statearr_19368_19402 = state_19365__$1;
(statearr_19368_19402[(2)] = null);

(statearr_19368_19402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19366 === (4))){
var inst_19326 = (state_19365[(7)]);
var inst_19325 = (state_19365[(8)]);
var inst_19328 = (inst_19326 < inst_19325);
var state_19365__$1 = state_19365;
if(cljs.core.truth_(inst_19328)){
var statearr_19369_19403 = state_19365__$1;
(statearr_19369_19403[(1)] = (6));

} else {
var statearr_19370_19404 = state_19365__$1;
(statearr_19370_19404[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19366 === (15))){
var inst_19351 = (state_19365[(9)]);
var inst_19356 = cljs.core.apply.call(null,f,inst_19351);
var state_19365__$1 = state_19365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19365__$1,(17),out,inst_19356);
} else {
if((state_val_19366 === (13))){
var inst_19351 = (state_19365[(9)]);
var inst_19351__$1 = (state_19365[(2)]);
var inst_19352 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19351__$1);
var state_19365__$1 = (function (){var statearr_19371 = state_19365;
(statearr_19371[(9)] = inst_19351__$1);

return statearr_19371;
})();
if(cljs.core.truth_(inst_19352)){
var statearr_19372_19405 = state_19365__$1;
(statearr_19372_19405[(1)] = (14));

} else {
var statearr_19373_19406 = state_19365__$1;
(statearr_19373_19406[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19366 === (6))){
var state_19365__$1 = state_19365;
var statearr_19374_19407 = state_19365__$1;
(statearr_19374_19407[(2)] = null);

(statearr_19374_19407[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19366 === (17))){
var inst_19358 = (state_19365[(2)]);
var state_19365__$1 = (function (){var statearr_19376 = state_19365;
(statearr_19376[(10)] = inst_19358);

return statearr_19376;
})();
var statearr_19377_19408 = state_19365__$1;
(statearr_19377_19408[(2)] = null);

(statearr_19377_19408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19366 === (3))){
var inst_19363 = (state_19365[(2)]);
var state_19365__$1 = state_19365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19365__$1,inst_19363);
} else {
if((state_val_19366 === (12))){
var _ = (function (){var statearr_19378 = state_19365;
(statearr_19378[(4)] = cljs.core.rest.call(null,(state_19365[(4)])));

return statearr_19378;
})();
var state_19365__$1 = state_19365;
var ex19375 = (state_19365__$1[(2)]);
var statearr_19379_19409 = state_19365__$1;
(statearr_19379_19409[(5)] = ex19375);


if((ex19375 instanceof Object)){
var statearr_19380_19410 = state_19365__$1;
(statearr_19380_19410[(1)] = (11));

(statearr_19380_19410[(5)] = null);

} else {
throw ex19375;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19366 === (2))){
var inst_19324 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19325 = cnt;
var inst_19326 = (0);
var state_19365__$1 = (function (){var statearr_19381 = state_19365;
(statearr_19381[(11)] = inst_19324);

(statearr_19381[(7)] = inst_19326);

(statearr_19381[(8)] = inst_19325);

return statearr_19381;
})();
var statearr_19382_19411 = state_19365__$1;
(statearr_19382_19411[(2)] = null);

(statearr_19382_19411[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19366 === (11))){
var inst_19330 = (state_19365[(2)]);
var inst_19331 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19365__$1 = (function (){var statearr_19383 = state_19365;
(statearr_19383[(12)] = inst_19330);

return statearr_19383;
})();
var statearr_19384_19412 = state_19365__$1;
(statearr_19384_19412[(2)] = inst_19331);

(statearr_19384_19412[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19366 === (9))){
var inst_19326 = (state_19365[(7)]);
var _ = (function (){var statearr_19385 = state_19365;
(statearr_19385[(4)] = cljs.core.cons.call(null,(12),(state_19365[(4)])));

return statearr_19385;
})();
var inst_19337 = chs__$1.call(null,inst_19326);
var inst_19338 = done.call(null,inst_19326);
var inst_19339 = cljs.core.async.take_BANG_.call(null,inst_19337,inst_19338);
var ___$1 = (function (){var statearr_19386 = state_19365;
(statearr_19386[(4)] = cljs.core.rest.call(null,(state_19365[(4)])));

return statearr_19386;
})();
var state_19365__$1 = state_19365;
var statearr_19387_19413 = state_19365__$1;
(statearr_19387_19413[(2)] = inst_19339);

(statearr_19387_19413[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19366 === (5))){
var inst_19349 = (state_19365[(2)]);
var state_19365__$1 = (function (){var statearr_19388 = state_19365;
(statearr_19388[(13)] = inst_19349);

return statearr_19388;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19365__$1,(13),dchan);
} else {
if((state_val_19366 === (14))){
var inst_19354 = cljs.core.async.close_BANG_.call(null,out);
var state_19365__$1 = state_19365;
var statearr_19389_19414 = state_19365__$1;
(statearr_19389_19414[(2)] = inst_19354);

(statearr_19389_19414[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19366 === (16))){
var inst_19361 = (state_19365[(2)]);
var state_19365__$1 = state_19365;
var statearr_19390_19415 = state_19365__$1;
(statearr_19390_19415[(2)] = inst_19361);

(statearr_19390_19415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19366 === (10))){
var inst_19326 = (state_19365[(7)]);
var inst_19342 = (state_19365[(2)]);
var inst_19343 = (inst_19326 + (1));
var inst_19326__$1 = inst_19343;
var state_19365__$1 = (function (){var statearr_19391 = state_19365;
(statearr_19391[(7)] = inst_19326__$1);

(statearr_19391[(14)] = inst_19342);

return statearr_19391;
})();
var statearr_19392_19416 = state_19365__$1;
(statearr_19392_19416[(2)] = null);

(statearr_19392_19416[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19366 === (8))){
var inst_19347 = (state_19365[(2)]);
var state_19365__$1 = state_19365;
var statearr_19393_19417 = state_19365__$1;
(statearr_19393_19417[(2)] = inst_19347);

(statearr_19393_19417[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17976__auto__ = null;
var cljs$core$async$state_machine__17976__auto____0 = (function (){
var statearr_19394 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19394[(0)] = cljs$core$async$state_machine__17976__auto__);

(statearr_19394[(1)] = (1));

return statearr_19394;
});
var cljs$core$async$state_machine__17976__auto____1 = (function (state_19365){
while(true){
var ret_value__17977__auto__ = (function (){try{while(true){
var result__17978__auto__ = switch__17975__auto__.call(null,state_19365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17978__auto__;
}
break;
}
}catch (e19395){var ex__17979__auto__ = e19395;
var statearr_19396_19418 = state_19365;
(statearr_19396_19418[(2)] = ex__17979__auto__);


if(cljs.core.seq.call(null,(state_19365[(4)]))){
var statearr_19397_19419 = state_19365;
(statearr_19397_19419[(1)] = cljs.core.first.call(null,(state_19365[(4)])));

} else {
throw ex__17979__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19420 = state_19365;
state_19365 = G__19420;
continue;
} else {
return ret_value__17977__auto__;
}
break;
}
});
cljs$core$async$state_machine__17976__auto__ = function(state_19365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17976__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17976__auto____1.call(this,state_19365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17976__auto____0;
cljs$core$async$state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17976__auto____1;
return cljs$core$async$state_machine__17976__auto__;
})()
})();
var state__18014__auto__ = (function (){var statearr_19398 = f__18013__auto__.call(null);
(statearr_19398[(6)] = c__18012__auto___19400);

return statearr_19398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18014__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__19423 = arguments.length;
switch (G__19423) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18012__auto___19478 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18013__auto__ = (function (){var switch__17975__auto__ = (function (state_19455){
var state_val_19456 = (state_19455[(1)]);
if((state_val_19456 === (7))){
var inst_19435 = (state_19455[(7)]);
var inst_19434 = (state_19455[(8)]);
var inst_19434__$1 = (state_19455[(2)]);
var inst_19435__$1 = cljs.core.nth.call(null,inst_19434__$1,(0),null);
var inst_19436 = cljs.core.nth.call(null,inst_19434__$1,(1),null);
var inst_19437 = (inst_19435__$1 == null);
var state_19455__$1 = (function (){var statearr_19457 = state_19455;
(statearr_19457[(9)] = inst_19436);

(statearr_19457[(7)] = inst_19435__$1);

(statearr_19457[(8)] = inst_19434__$1);

return statearr_19457;
})();
if(cljs.core.truth_(inst_19437)){
var statearr_19458_19479 = state_19455__$1;
(statearr_19458_19479[(1)] = (8));

} else {
var statearr_19459_19480 = state_19455__$1;
(statearr_19459_19480[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19456 === (1))){
var inst_19424 = cljs.core.vec.call(null,chs);
var inst_19425 = inst_19424;
var state_19455__$1 = (function (){var statearr_19460 = state_19455;
(statearr_19460[(10)] = inst_19425);

return statearr_19460;
})();
var statearr_19461_19481 = state_19455__$1;
(statearr_19461_19481[(2)] = null);

(statearr_19461_19481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19456 === (4))){
var inst_19425 = (state_19455[(10)]);
var state_19455__$1 = state_19455;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19455__$1,(7),inst_19425);
} else {
if((state_val_19456 === (6))){
var inst_19451 = (state_19455[(2)]);
var state_19455__$1 = state_19455;
var statearr_19462_19482 = state_19455__$1;
(statearr_19462_19482[(2)] = inst_19451);

(statearr_19462_19482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19456 === (3))){
var inst_19453 = (state_19455[(2)]);
var state_19455__$1 = state_19455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19455__$1,inst_19453);
} else {
if((state_val_19456 === (2))){
var inst_19425 = (state_19455[(10)]);
var inst_19427 = cljs.core.count.call(null,inst_19425);
var inst_19428 = (inst_19427 > (0));
var state_19455__$1 = state_19455;
if(cljs.core.truth_(inst_19428)){
var statearr_19464_19483 = state_19455__$1;
(statearr_19464_19483[(1)] = (4));

} else {
var statearr_19465_19484 = state_19455__$1;
(statearr_19465_19484[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19456 === (11))){
var inst_19425 = (state_19455[(10)]);
var inst_19444 = (state_19455[(2)]);
var tmp19463 = inst_19425;
var inst_19425__$1 = tmp19463;
var state_19455__$1 = (function (){var statearr_19466 = state_19455;
(statearr_19466[(10)] = inst_19425__$1);

(statearr_19466[(11)] = inst_19444);

return statearr_19466;
})();
var statearr_19467_19485 = state_19455__$1;
(statearr_19467_19485[(2)] = null);

(statearr_19467_19485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19456 === (9))){
var inst_19435 = (state_19455[(7)]);
var state_19455__$1 = state_19455;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19455__$1,(11),out,inst_19435);
} else {
if((state_val_19456 === (5))){
var inst_19449 = cljs.core.async.close_BANG_.call(null,out);
var state_19455__$1 = state_19455;
var statearr_19468_19486 = state_19455__$1;
(statearr_19468_19486[(2)] = inst_19449);

(statearr_19468_19486[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19456 === (10))){
var inst_19447 = (state_19455[(2)]);
var state_19455__$1 = state_19455;
var statearr_19469_19487 = state_19455__$1;
(statearr_19469_19487[(2)] = inst_19447);

(statearr_19469_19487[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19456 === (8))){
var inst_19436 = (state_19455[(9)]);
var inst_19425 = (state_19455[(10)]);
var inst_19435 = (state_19455[(7)]);
var inst_19434 = (state_19455[(8)]);
var inst_19439 = (function (){var cs = inst_19425;
var vec__19430 = inst_19434;
var v = inst_19435;
var c = inst_19436;
return (function (p1__19421_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19421_SHARP_);
});
})();
var inst_19440 = cljs.core.filterv.call(null,inst_19439,inst_19425);
var inst_19425__$1 = inst_19440;
var state_19455__$1 = (function (){var statearr_19470 = state_19455;
(statearr_19470[(10)] = inst_19425__$1);

return statearr_19470;
})();
var statearr_19471_19488 = state_19455__$1;
(statearr_19471_19488[(2)] = null);

(statearr_19471_19488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17976__auto__ = null;
var cljs$core$async$state_machine__17976__auto____0 = (function (){
var statearr_19472 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19472[(0)] = cljs$core$async$state_machine__17976__auto__);

(statearr_19472[(1)] = (1));

return statearr_19472;
});
var cljs$core$async$state_machine__17976__auto____1 = (function (state_19455){
while(true){
var ret_value__17977__auto__ = (function (){try{while(true){
var result__17978__auto__ = switch__17975__auto__.call(null,state_19455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17978__auto__;
}
break;
}
}catch (e19473){var ex__17979__auto__ = e19473;
var statearr_19474_19489 = state_19455;
(statearr_19474_19489[(2)] = ex__17979__auto__);


if(cljs.core.seq.call(null,(state_19455[(4)]))){
var statearr_19475_19490 = state_19455;
(statearr_19475_19490[(1)] = cljs.core.first.call(null,(state_19455[(4)])));

} else {
throw ex__17979__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19491 = state_19455;
state_19455 = G__19491;
continue;
} else {
return ret_value__17977__auto__;
}
break;
}
});
cljs$core$async$state_machine__17976__auto__ = function(state_19455){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17976__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17976__auto____1.call(this,state_19455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17976__auto____0;
cljs$core$async$state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17976__auto____1;
return cljs$core$async$state_machine__17976__auto__;
})()
})();
var state__18014__auto__ = (function (){var statearr_19476 = f__18013__auto__.call(null);
(statearr_19476[(6)] = c__18012__auto___19478);

return statearr_19476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18014__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__19493 = arguments.length;
switch (G__19493) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18012__auto___19539 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18013__auto__ = (function (){var switch__17975__auto__ = (function (state_19517){
var state_val_19518 = (state_19517[(1)]);
if((state_val_19518 === (7))){
var inst_19499 = (state_19517[(7)]);
var inst_19499__$1 = (state_19517[(2)]);
var inst_19500 = (inst_19499__$1 == null);
var inst_19501 = cljs.core.not.call(null,inst_19500);
var state_19517__$1 = (function (){var statearr_19519 = state_19517;
(statearr_19519[(7)] = inst_19499__$1);

return statearr_19519;
})();
if(inst_19501){
var statearr_19520_19540 = state_19517__$1;
(statearr_19520_19540[(1)] = (8));

} else {
var statearr_19521_19541 = state_19517__$1;
(statearr_19521_19541[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19518 === (1))){
var inst_19494 = (0);
var state_19517__$1 = (function (){var statearr_19522 = state_19517;
(statearr_19522[(8)] = inst_19494);

return statearr_19522;
})();
var statearr_19523_19542 = state_19517__$1;
(statearr_19523_19542[(2)] = null);

(statearr_19523_19542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19518 === (4))){
var state_19517__$1 = state_19517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19517__$1,(7),ch);
} else {
if((state_val_19518 === (6))){
var inst_19512 = (state_19517[(2)]);
var state_19517__$1 = state_19517;
var statearr_19524_19543 = state_19517__$1;
(statearr_19524_19543[(2)] = inst_19512);

(statearr_19524_19543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19518 === (3))){
var inst_19514 = (state_19517[(2)]);
var inst_19515 = cljs.core.async.close_BANG_.call(null,out);
var state_19517__$1 = (function (){var statearr_19525 = state_19517;
(statearr_19525[(9)] = inst_19514);

return statearr_19525;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19517__$1,inst_19515);
} else {
if((state_val_19518 === (2))){
var inst_19494 = (state_19517[(8)]);
var inst_19496 = (inst_19494 < n);
var state_19517__$1 = state_19517;
if(cljs.core.truth_(inst_19496)){
var statearr_19526_19544 = state_19517__$1;
(statearr_19526_19544[(1)] = (4));

} else {
var statearr_19527_19545 = state_19517__$1;
(statearr_19527_19545[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19518 === (11))){
var inst_19494 = (state_19517[(8)]);
var inst_19504 = (state_19517[(2)]);
var inst_19505 = (inst_19494 + (1));
var inst_19494__$1 = inst_19505;
var state_19517__$1 = (function (){var statearr_19528 = state_19517;
(statearr_19528[(10)] = inst_19504);

(statearr_19528[(8)] = inst_19494__$1);

return statearr_19528;
})();
var statearr_19529_19546 = state_19517__$1;
(statearr_19529_19546[(2)] = null);

(statearr_19529_19546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19518 === (9))){
var state_19517__$1 = state_19517;
var statearr_19530_19547 = state_19517__$1;
(statearr_19530_19547[(2)] = null);

(statearr_19530_19547[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19518 === (5))){
var state_19517__$1 = state_19517;
var statearr_19531_19548 = state_19517__$1;
(statearr_19531_19548[(2)] = null);

(statearr_19531_19548[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19518 === (10))){
var inst_19509 = (state_19517[(2)]);
var state_19517__$1 = state_19517;
var statearr_19532_19549 = state_19517__$1;
(statearr_19532_19549[(2)] = inst_19509);

(statearr_19532_19549[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19518 === (8))){
var inst_19499 = (state_19517[(7)]);
var state_19517__$1 = state_19517;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19517__$1,(11),out,inst_19499);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17976__auto__ = null;
var cljs$core$async$state_machine__17976__auto____0 = (function (){
var statearr_19533 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19533[(0)] = cljs$core$async$state_machine__17976__auto__);

(statearr_19533[(1)] = (1));

return statearr_19533;
});
var cljs$core$async$state_machine__17976__auto____1 = (function (state_19517){
while(true){
var ret_value__17977__auto__ = (function (){try{while(true){
var result__17978__auto__ = switch__17975__auto__.call(null,state_19517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17978__auto__;
}
break;
}
}catch (e19534){var ex__17979__auto__ = e19534;
var statearr_19535_19550 = state_19517;
(statearr_19535_19550[(2)] = ex__17979__auto__);


if(cljs.core.seq.call(null,(state_19517[(4)]))){
var statearr_19536_19551 = state_19517;
(statearr_19536_19551[(1)] = cljs.core.first.call(null,(state_19517[(4)])));

} else {
throw ex__17979__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19552 = state_19517;
state_19517 = G__19552;
continue;
} else {
return ret_value__17977__auto__;
}
break;
}
});
cljs$core$async$state_machine__17976__auto__ = function(state_19517){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17976__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17976__auto____1.call(this,state_19517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17976__auto____0;
cljs$core$async$state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17976__auto____1;
return cljs$core$async$state_machine__17976__auto__;
})()
})();
var state__18014__auto__ = (function (){var statearr_19537 = f__18013__auto__.call(null);
(statearr_19537[(6)] = c__18012__auto___19539);

return statearr_19537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18014__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19554 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19554 = (function (f,ch,meta19555){
this.f = f;
this.ch = ch;
this.meta19555 = meta19555;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19556,meta19555__$1){
var self__ = this;
var _19556__$1 = this;
return (new cljs.core.async.t_cljs$core$async19554(self__.f,self__.ch,meta19555__$1));
}));

(cljs.core.async.t_cljs$core$async19554.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19556){
var self__ = this;
var _19556__$1 = this;
return self__.meta19555;
}));

(cljs.core.async.t_cljs$core$async19554.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19554.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async19554.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async19554.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19554.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19557 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19557 = (function (f,ch,meta19555,_,fn1,meta19558){
this.f = f;
this.ch = ch;
this.meta19555 = meta19555;
this._ = _;
this.fn1 = fn1;
this.meta19558 = meta19558;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19559,meta19558__$1){
var self__ = this;
var _19559__$1 = this;
return (new cljs.core.async.t_cljs$core$async19557(self__.f,self__.ch,self__.meta19555,self__._,self__.fn1,meta19558__$1));
}));

(cljs.core.async.t_cljs$core$async19557.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19559){
var self__ = this;
var _19559__$1 = this;
return self__.meta19558;
}));

(cljs.core.async.t_cljs$core$async19557.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19557.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async19557.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19557.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__19553_SHARP_){
return f1.call(null,(((p1__19553_SHARP_ == null))?null:self__.f.call(null,p1__19553_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async19557.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19555","meta19555",1195456797,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19554","cljs.core.async/t_cljs$core$async19554",1089326216,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19558","meta19558",424983197,null)], null);
}));

(cljs.core.async.t_cljs$core$async19557.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19557.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19557");

(cljs.core.async.t_cljs$core$async19557.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async19557");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19557.
 */
cljs.core.async.__GT_t_cljs$core$async19557 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19557(f__$1,ch__$1,meta19555__$1,___$2,fn1__$1,meta19558){
return (new cljs.core.async.t_cljs$core$async19557(f__$1,ch__$1,meta19555__$1,___$2,fn1__$1,meta19558));
});

}

return (new cljs.core.async.t_cljs$core$async19557(self__.f,self__.ch,self__.meta19555,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async19554.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19554.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async19554.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19555","meta19555",1195456797,null)], null);
}));

(cljs.core.async.t_cljs$core$async19554.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19554.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19554");

(cljs.core.async.t_cljs$core$async19554.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async19554");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19554.
 */
cljs.core.async.__GT_t_cljs$core$async19554 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19554(f__$1,ch__$1,meta19555){
return (new cljs.core.async.t_cljs$core$async19554(f__$1,ch__$1,meta19555));
});

}

return (new cljs.core.async.t_cljs$core$async19554(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19560 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19560 = (function (f,ch,meta19561){
this.f = f;
this.ch = ch;
this.meta19561 = meta19561;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19562,meta19561__$1){
var self__ = this;
var _19562__$1 = this;
return (new cljs.core.async.t_cljs$core$async19560(self__.f,self__.ch,meta19561__$1));
}));

(cljs.core.async.t_cljs$core$async19560.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19562){
var self__ = this;
var _19562__$1 = this;
return self__.meta19561;
}));

(cljs.core.async.t_cljs$core$async19560.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19560.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async19560.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19560.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19560.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19560.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async19560.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19561","meta19561",2071612884,null)], null);
}));

(cljs.core.async.t_cljs$core$async19560.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19560.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19560");

(cljs.core.async.t_cljs$core$async19560.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async19560");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19560.
 */
cljs.core.async.__GT_t_cljs$core$async19560 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19560(f__$1,ch__$1,meta19561){
return (new cljs.core.async.t_cljs$core$async19560(f__$1,ch__$1,meta19561));
});

}

return (new cljs.core.async.t_cljs$core$async19560(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19563 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19563 = (function (p,ch,meta19564){
this.p = p;
this.ch = ch;
this.meta19564 = meta19564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19565,meta19564__$1){
var self__ = this;
var _19565__$1 = this;
return (new cljs.core.async.t_cljs$core$async19563(self__.p,self__.ch,meta19564__$1));
}));

(cljs.core.async.t_cljs$core$async19563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19565){
var self__ = this;
var _19565__$1 = this;
return self__.meta19564;
}));

(cljs.core.async.t_cljs$core$async19563.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19563.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async19563.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async19563.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19563.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19563.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19563.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async19563.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19564","meta19564",-1306881682,null)], null);
}));

(cljs.core.async.t_cljs$core$async19563.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19563.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19563");

(cljs.core.async.t_cljs$core$async19563.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async19563");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19563.
 */
cljs.core.async.__GT_t_cljs$core$async19563 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19563(p__$1,ch__$1,meta19564){
return (new cljs.core.async.t_cljs$core$async19563(p__$1,ch__$1,meta19564));
});

}

return (new cljs.core.async.t_cljs$core$async19563(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__19567 = arguments.length;
switch (G__19567) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18012__auto___19608 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18013__auto__ = (function (){var switch__17975__auto__ = (function (state_19588){
var state_val_19589 = (state_19588[(1)]);
if((state_val_19589 === (7))){
var inst_19584 = (state_19588[(2)]);
var state_19588__$1 = state_19588;
var statearr_19590_19609 = state_19588__$1;
(statearr_19590_19609[(2)] = inst_19584);

(statearr_19590_19609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19589 === (1))){
var state_19588__$1 = state_19588;
var statearr_19591_19610 = state_19588__$1;
(statearr_19591_19610[(2)] = null);

(statearr_19591_19610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19589 === (4))){
var inst_19570 = (state_19588[(7)]);
var inst_19570__$1 = (state_19588[(2)]);
var inst_19571 = (inst_19570__$1 == null);
var state_19588__$1 = (function (){var statearr_19592 = state_19588;
(statearr_19592[(7)] = inst_19570__$1);

return statearr_19592;
})();
if(cljs.core.truth_(inst_19571)){
var statearr_19593_19611 = state_19588__$1;
(statearr_19593_19611[(1)] = (5));

} else {
var statearr_19594_19612 = state_19588__$1;
(statearr_19594_19612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19589 === (6))){
var inst_19570 = (state_19588[(7)]);
var inst_19575 = p.call(null,inst_19570);
var state_19588__$1 = state_19588;
if(cljs.core.truth_(inst_19575)){
var statearr_19595_19613 = state_19588__$1;
(statearr_19595_19613[(1)] = (8));

} else {
var statearr_19596_19614 = state_19588__$1;
(statearr_19596_19614[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19589 === (3))){
var inst_19586 = (state_19588[(2)]);
var state_19588__$1 = state_19588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19588__$1,inst_19586);
} else {
if((state_val_19589 === (2))){
var state_19588__$1 = state_19588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19588__$1,(4),ch);
} else {
if((state_val_19589 === (11))){
var inst_19578 = (state_19588[(2)]);
var state_19588__$1 = state_19588;
var statearr_19597_19615 = state_19588__$1;
(statearr_19597_19615[(2)] = inst_19578);

(statearr_19597_19615[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19589 === (9))){
var state_19588__$1 = state_19588;
var statearr_19598_19616 = state_19588__$1;
(statearr_19598_19616[(2)] = null);

(statearr_19598_19616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19589 === (5))){
var inst_19573 = cljs.core.async.close_BANG_.call(null,out);
var state_19588__$1 = state_19588;
var statearr_19599_19617 = state_19588__$1;
(statearr_19599_19617[(2)] = inst_19573);

(statearr_19599_19617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19589 === (10))){
var inst_19581 = (state_19588[(2)]);
var state_19588__$1 = (function (){var statearr_19600 = state_19588;
(statearr_19600[(8)] = inst_19581);

return statearr_19600;
})();
var statearr_19601_19618 = state_19588__$1;
(statearr_19601_19618[(2)] = null);

(statearr_19601_19618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19589 === (8))){
var inst_19570 = (state_19588[(7)]);
var state_19588__$1 = state_19588;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19588__$1,(11),out,inst_19570);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17976__auto__ = null;
var cljs$core$async$state_machine__17976__auto____0 = (function (){
var statearr_19602 = [null,null,null,null,null,null,null,null,null];
(statearr_19602[(0)] = cljs$core$async$state_machine__17976__auto__);

(statearr_19602[(1)] = (1));

return statearr_19602;
});
var cljs$core$async$state_machine__17976__auto____1 = (function (state_19588){
while(true){
var ret_value__17977__auto__ = (function (){try{while(true){
var result__17978__auto__ = switch__17975__auto__.call(null,state_19588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17978__auto__;
}
break;
}
}catch (e19603){var ex__17979__auto__ = e19603;
var statearr_19604_19619 = state_19588;
(statearr_19604_19619[(2)] = ex__17979__auto__);


if(cljs.core.seq.call(null,(state_19588[(4)]))){
var statearr_19605_19620 = state_19588;
(statearr_19605_19620[(1)] = cljs.core.first.call(null,(state_19588[(4)])));

} else {
throw ex__17979__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19621 = state_19588;
state_19588 = G__19621;
continue;
} else {
return ret_value__17977__auto__;
}
break;
}
});
cljs$core$async$state_machine__17976__auto__ = function(state_19588){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17976__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17976__auto____1.call(this,state_19588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17976__auto____0;
cljs$core$async$state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17976__auto____1;
return cljs$core$async$state_machine__17976__auto__;
})()
})();
var state__18014__auto__ = (function (){var statearr_19606 = f__18013__auto__.call(null);
(statearr_19606[(6)] = c__18012__auto___19608);

return statearr_19606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18014__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19623 = arguments.length;
switch (G__19623) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__18012__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18013__auto__ = (function (){var switch__17975__auto__ = (function (state_19686){
var state_val_19687 = (state_19686[(1)]);
if((state_val_19687 === (7))){
var inst_19682 = (state_19686[(2)]);
var state_19686__$1 = state_19686;
var statearr_19688_19727 = state_19686__$1;
(statearr_19688_19727[(2)] = inst_19682);

(statearr_19688_19727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19687 === (20))){
var inst_19652 = (state_19686[(7)]);
var inst_19663 = (state_19686[(2)]);
var inst_19664 = cljs.core.next.call(null,inst_19652);
var inst_19638 = inst_19664;
var inst_19639 = null;
var inst_19640 = (0);
var inst_19641 = (0);
var state_19686__$1 = (function (){var statearr_19689 = state_19686;
(statearr_19689[(8)] = inst_19640);

(statearr_19689[(9)] = inst_19663);

(statearr_19689[(10)] = inst_19638);

(statearr_19689[(11)] = inst_19639);

(statearr_19689[(12)] = inst_19641);

return statearr_19689;
})();
var statearr_19690_19728 = state_19686__$1;
(statearr_19690_19728[(2)] = null);

(statearr_19690_19728[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19687 === (1))){
var state_19686__$1 = state_19686;
var statearr_19691_19729 = state_19686__$1;
(statearr_19691_19729[(2)] = null);

(statearr_19691_19729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19687 === (4))){
var inst_19627 = (state_19686[(13)]);
var inst_19627__$1 = (state_19686[(2)]);
var inst_19628 = (inst_19627__$1 == null);
var state_19686__$1 = (function (){var statearr_19692 = state_19686;
(statearr_19692[(13)] = inst_19627__$1);

return statearr_19692;
})();
if(cljs.core.truth_(inst_19628)){
var statearr_19693_19730 = state_19686__$1;
(statearr_19693_19730[(1)] = (5));

} else {
var statearr_19694_19731 = state_19686__$1;
(statearr_19694_19731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19687 === (15))){
var state_19686__$1 = state_19686;
var statearr_19698_19732 = state_19686__$1;
(statearr_19698_19732[(2)] = null);

(statearr_19698_19732[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19687 === (21))){
var state_19686__$1 = state_19686;
var statearr_19699_19733 = state_19686__$1;
(statearr_19699_19733[(2)] = null);

(statearr_19699_19733[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19687 === (13))){
var inst_19640 = (state_19686[(8)]);
var inst_19638 = (state_19686[(10)]);
var inst_19639 = (state_19686[(11)]);
var inst_19641 = (state_19686[(12)]);
var inst_19648 = (state_19686[(2)]);
var inst_19649 = (inst_19641 + (1));
var tmp19695 = inst_19640;
var tmp19696 = inst_19638;
var tmp19697 = inst_19639;
var inst_19638__$1 = tmp19696;
var inst_19639__$1 = tmp19697;
var inst_19640__$1 = tmp19695;
var inst_19641__$1 = inst_19649;
var state_19686__$1 = (function (){var statearr_19700 = state_19686;
(statearr_19700[(8)] = inst_19640__$1);

(statearr_19700[(10)] = inst_19638__$1);

(statearr_19700[(11)] = inst_19639__$1);

(statearr_19700[(14)] = inst_19648);

(statearr_19700[(12)] = inst_19641__$1);

return statearr_19700;
})();
var statearr_19701_19734 = state_19686__$1;
(statearr_19701_19734[(2)] = null);

(statearr_19701_19734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19687 === (22))){
var state_19686__$1 = state_19686;
var statearr_19702_19735 = state_19686__$1;
(statearr_19702_19735[(2)] = null);

(statearr_19702_19735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19687 === (6))){
var inst_19627 = (state_19686[(13)]);
var inst_19636 = f.call(null,inst_19627);
var inst_19637 = cljs.core.seq.call(null,inst_19636);
var inst_19638 = inst_19637;
var inst_19639 = null;
var inst_19640 = (0);
var inst_19641 = (0);
var state_19686__$1 = (function (){var statearr_19703 = state_19686;
(statearr_19703[(8)] = inst_19640);

(statearr_19703[(10)] = inst_19638);

(statearr_19703[(11)] = inst_19639);

(statearr_19703[(12)] = inst_19641);

return statearr_19703;
})();
var statearr_19704_19736 = state_19686__$1;
(statearr_19704_19736[(2)] = null);

(statearr_19704_19736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19687 === (17))){
var inst_19652 = (state_19686[(7)]);
var inst_19656 = cljs.core.chunk_first.call(null,inst_19652);
var inst_19657 = cljs.core.chunk_rest.call(null,inst_19652);
var inst_19658 = cljs.core.count.call(null,inst_19656);
var inst_19638 = inst_19657;
var inst_19639 = inst_19656;
var inst_19640 = inst_19658;
var inst_19641 = (0);
var state_19686__$1 = (function (){var statearr_19705 = state_19686;
(statearr_19705[(8)] = inst_19640);

(statearr_19705[(10)] = inst_19638);

(statearr_19705[(11)] = inst_19639);

(statearr_19705[(12)] = inst_19641);

return statearr_19705;
})();
var statearr_19706_19737 = state_19686__$1;
(statearr_19706_19737[(2)] = null);

(statearr_19706_19737[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19687 === (3))){
var inst_19684 = (state_19686[(2)]);
var state_19686__$1 = state_19686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19686__$1,inst_19684);
} else {
if((state_val_19687 === (12))){
var inst_19672 = (state_19686[(2)]);
var state_19686__$1 = state_19686;
var statearr_19707_19738 = state_19686__$1;
(statearr_19707_19738[(2)] = inst_19672);

(statearr_19707_19738[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19687 === (2))){
var state_19686__$1 = state_19686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19686__$1,(4),in$);
} else {
if((state_val_19687 === (23))){
var inst_19680 = (state_19686[(2)]);
var state_19686__$1 = state_19686;
var statearr_19708_19739 = state_19686__$1;
(statearr_19708_19739[(2)] = inst_19680);

(statearr_19708_19739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19687 === (19))){
var inst_19667 = (state_19686[(2)]);
var state_19686__$1 = state_19686;
var statearr_19709_19740 = state_19686__$1;
(statearr_19709_19740[(2)] = inst_19667);

(statearr_19709_19740[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19687 === (11))){
var inst_19638 = (state_19686[(10)]);
var inst_19652 = (state_19686[(7)]);
var inst_19652__$1 = cljs.core.seq.call(null,inst_19638);
var state_19686__$1 = (function (){var statearr_19710 = state_19686;
(statearr_19710[(7)] = inst_19652__$1);

return statearr_19710;
})();
if(inst_19652__$1){
var statearr_19711_19741 = state_19686__$1;
(statearr_19711_19741[(1)] = (14));

} else {
var statearr_19712_19742 = state_19686__$1;
(statearr_19712_19742[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19687 === (9))){
var inst_19674 = (state_19686[(2)]);
var inst_19675 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19686__$1 = (function (){var statearr_19713 = state_19686;
(statearr_19713[(15)] = inst_19674);

return statearr_19713;
})();
if(cljs.core.truth_(inst_19675)){
var statearr_19714_19743 = state_19686__$1;
(statearr_19714_19743[(1)] = (21));

} else {
var statearr_19715_19744 = state_19686__$1;
(statearr_19715_19744[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19687 === (5))){
var inst_19630 = cljs.core.async.close_BANG_.call(null,out);
var state_19686__$1 = state_19686;
var statearr_19716_19745 = state_19686__$1;
(statearr_19716_19745[(2)] = inst_19630);

(statearr_19716_19745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19687 === (14))){
var inst_19652 = (state_19686[(7)]);
var inst_19654 = cljs.core.chunked_seq_QMARK_.call(null,inst_19652);
var state_19686__$1 = state_19686;
if(inst_19654){
var statearr_19717_19746 = state_19686__$1;
(statearr_19717_19746[(1)] = (17));

} else {
var statearr_19718_19747 = state_19686__$1;
(statearr_19718_19747[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19687 === (16))){
var inst_19670 = (state_19686[(2)]);
var state_19686__$1 = state_19686;
var statearr_19719_19748 = state_19686__$1;
(statearr_19719_19748[(2)] = inst_19670);

(statearr_19719_19748[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19687 === (10))){
var inst_19639 = (state_19686[(11)]);
var inst_19641 = (state_19686[(12)]);
var inst_19646 = cljs.core._nth.call(null,inst_19639,inst_19641);
var state_19686__$1 = state_19686;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19686__$1,(13),out,inst_19646);
} else {
if((state_val_19687 === (18))){
var inst_19652 = (state_19686[(7)]);
var inst_19661 = cljs.core.first.call(null,inst_19652);
var state_19686__$1 = state_19686;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19686__$1,(20),out,inst_19661);
} else {
if((state_val_19687 === (8))){
var inst_19640 = (state_19686[(8)]);
var inst_19641 = (state_19686[(12)]);
var inst_19643 = (inst_19641 < inst_19640);
var inst_19644 = inst_19643;
var state_19686__$1 = state_19686;
if(cljs.core.truth_(inst_19644)){
var statearr_19720_19749 = state_19686__$1;
(statearr_19720_19749[(1)] = (10));

} else {
var statearr_19721_19750 = state_19686__$1;
(statearr_19721_19750[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17976__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17976__auto____0 = (function (){
var statearr_19722 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19722[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17976__auto__);

(statearr_19722[(1)] = (1));

return statearr_19722;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17976__auto____1 = (function (state_19686){
while(true){
var ret_value__17977__auto__ = (function (){try{while(true){
var result__17978__auto__ = switch__17975__auto__.call(null,state_19686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17978__auto__;
}
break;
}
}catch (e19723){var ex__17979__auto__ = e19723;
var statearr_19724_19751 = state_19686;
(statearr_19724_19751[(2)] = ex__17979__auto__);


if(cljs.core.seq.call(null,(state_19686[(4)]))){
var statearr_19725_19752 = state_19686;
(statearr_19725_19752[(1)] = cljs.core.first.call(null,(state_19686[(4)])));

} else {
throw ex__17979__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19753 = state_19686;
state_19686 = G__19753;
continue;
} else {
return ret_value__17977__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17976__auto__ = function(state_19686){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17976__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17976__auto____1.call(this,state_19686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17976__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17976__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17976__auto__;
})()
})();
var state__18014__auto__ = (function (){var statearr_19726 = f__18013__auto__.call(null);
(statearr_19726[(6)] = c__18012__auto__);

return statearr_19726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18014__auto__);
}));

return c__18012__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19755 = arguments.length;
switch (G__19755) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19758 = arguments.length;
switch (G__19758) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19761 = arguments.length;
switch (G__19761) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18012__auto___19809 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18013__auto__ = (function (){var switch__17975__auto__ = (function (state_19785){
var state_val_19786 = (state_19785[(1)]);
if((state_val_19786 === (7))){
var inst_19780 = (state_19785[(2)]);
var state_19785__$1 = state_19785;
var statearr_19787_19810 = state_19785__$1;
(statearr_19787_19810[(2)] = inst_19780);

(statearr_19787_19810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19786 === (1))){
var inst_19762 = null;
var state_19785__$1 = (function (){var statearr_19788 = state_19785;
(statearr_19788[(7)] = inst_19762);

return statearr_19788;
})();
var statearr_19789_19811 = state_19785__$1;
(statearr_19789_19811[(2)] = null);

(statearr_19789_19811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19786 === (4))){
var inst_19765 = (state_19785[(8)]);
var inst_19765__$1 = (state_19785[(2)]);
var inst_19766 = (inst_19765__$1 == null);
var inst_19767 = cljs.core.not.call(null,inst_19766);
var state_19785__$1 = (function (){var statearr_19790 = state_19785;
(statearr_19790[(8)] = inst_19765__$1);

return statearr_19790;
})();
if(inst_19767){
var statearr_19791_19812 = state_19785__$1;
(statearr_19791_19812[(1)] = (5));

} else {
var statearr_19792_19813 = state_19785__$1;
(statearr_19792_19813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19786 === (6))){
var state_19785__$1 = state_19785;
var statearr_19793_19814 = state_19785__$1;
(statearr_19793_19814[(2)] = null);

(statearr_19793_19814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19786 === (3))){
var inst_19782 = (state_19785[(2)]);
var inst_19783 = cljs.core.async.close_BANG_.call(null,out);
var state_19785__$1 = (function (){var statearr_19794 = state_19785;
(statearr_19794[(9)] = inst_19782);

return statearr_19794;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19785__$1,inst_19783);
} else {
if((state_val_19786 === (2))){
var state_19785__$1 = state_19785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19785__$1,(4),ch);
} else {
if((state_val_19786 === (11))){
var inst_19765 = (state_19785[(8)]);
var inst_19774 = (state_19785[(2)]);
var inst_19762 = inst_19765;
var state_19785__$1 = (function (){var statearr_19795 = state_19785;
(statearr_19795[(7)] = inst_19762);

(statearr_19795[(10)] = inst_19774);

return statearr_19795;
})();
var statearr_19796_19815 = state_19785__$1;
(statearr_19796_19815[(2)] = null);

(statearr_19796_19815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19786 === (9))){
var inst_19765 = (state_19785[(8)]);
var state_19785__$1 = state_19785;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19785__$1,(11),out,inst_19765);
} else {
if((state_val_19786 === (5))){
var inst_19765 = (state_19785[(8)]);
var inst_19762 = (state_19785[(7)]);
var inst_19769 = cljs.core._EQ_.call(null,inst_19765,inst_19762);
var state_19785__$1 = state_19785;
if(inst_19769){
var statearr_19798_19816 = state_19785__$1;
(statearr_19798_19816[(1)] = (8));

} else {
var statearr_19799_19817 = state_19785__$1;
(statearr_19799_19817[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19786 === (10))){
var inst_19777 = (state_19785[(2)]);
var state_19785__$1 = state_19785;
var statearr_19800_19818 = state_19785__$1;
(statearr_19800_19818[(2)] = inst_19777);

(statearr_19800_19818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19786 === (8))){
var inst_19762 = (state_19785[(7)]);
var tmp19797 = inst_19762;
var inst_19762__$1 = tmp19797;
var state_19785__$1 = (function (){var statearr_19801 = state_19785;
(statearr_19801[(7)] = inst_19762__$1);

return statearr_19801;
})();
var statearr_19802_19819 = state_19785__$1;
(statearr_19802_19819[(2)] = null);

(statearr_19802_19819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17976__auto__ = null;
var cljs$core$async$state_machine__17976__auto____0 = (function (){
var statearr_19803 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19803[(0)] = cljs$core$async$state_machine__17976__auto__);

(statearr_19803[(1)] = (1));

return statearr_19803;
});
var cljs$core$async$state_machine__17976__auto____1 = (function (state_19785){
while(true){
var ret_value__17977__auto__ = (function (){try{while(true){
var result__17978__auto__ = switch__17975__auto__.call(null,state_19785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17978__auto__;
}
break;
}
}catch (e19804){var ex__17979__auto__ = e19804;
var statearr_19805_19820 = state_19785;
(statearr_19805_19820[(2)] = ex__17979__auto__);


if(cljs.core.seq.call(null,(state_19785[(4)]))){
var statearr_19806_19821 = state_19785;
(statearr_19806_19821[(1)] = cljs.core.first.call(null,(state_19785[(4)])));

} else {
throw ex__17979__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19822 = state_19785;
state_19785 = G__19822;
continue;
} else {
return ret_value__17977__auto__;
}
break;
}
});
cljs$core$async$state_machine__17976__auto__ = function(state_19785){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17976__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17976__auto____1.call(this,state_19785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17976__auto____0;
cljs$core$async$state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17976__auto____1;
return cljs$core$async$state_machine__17976__auto__;
})()
})();
var state__18014__auto__ = (function (){var statearr_19807 = f__18013__auto__.call(null);
(statearr_19807[(6)] = c__18012__auto___19809);

return statearr_19807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18014__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19824 = arguments.length;
switch (G__19824) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18012__auto___19891 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18013__auto__ = (function (){var switch__17975__auto__ = (function (state_19862){
var state_val_19863 = (state_19862[(1)]);
if((state_val_19863 === (7))){
var inst_19858 = (state_19862[(2)]);
var state_19862__$1 = state_19862;
var statearr_19864_19892 = state_19862__$1;
(statearr_19864_19892[(2)] = inst_19858);

(statearr_19864_19892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19863 === (1))){
var inst_19825 = (new Array(n));
var inst_19826 = inst_19825;
var inst_19827 = (0);
var state_19862__$1 = (function (){var statearr_19865 = state_19862;
(statearr_19865[(7)] = inst_19826);

(statearr_19865[(8)] = inst_19827);

return statearr_19865;
})();
var statearr_19866_19893 = state_19862__$1;
(statearr_19866_19893[(2)] = null);

(statearr_19866_19893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19863 === (4))){
var inst_19830 = (state_19862[(9)]);
var inst_19830__$1 = (state_19862[(2)]);
var inst_19831 = (inst_19830__$1 == null);
var inst_19832 = cljs.core.not.call(null,inst_19831);
var state_19862__$1 = (function (){var statearr_19867 = state_19862;
(statearr_19867[(9)] = inst_19830__$1);

return statearr_19867;
})();
if(inst_19832){
var statearr_19868_19894 = state_19862__$1;
(statearr_19868_19894[(1)] = (5));

} else {
var statearr_19869_19895 = state_19862__$1;
(statearr_19869_19895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19863 === (15))){
var inst_19852 = (state_19862[(2)]);
var state_19862__$1 = state_19862;
var statearr_19870_19896 = state_19862__$1;
(statearr_19870_19896[(2)] = inst_19852);

(statearr_19870_19896[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19863 === (13))){
var state_19862__$1 = state_19862;
var statearr_19871_19897 = state_19862__$1;
(statearr_19871_19897[(2)] = null);

(statearr_19871_19897[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19863 === (6))){
var inst_19827 = (state_19862[(8)]);
var inst_19848 = (inst_19827 > (0));
var state_19862__$1 = state_19862;
if(cljs.core.truth_(inst_19848)){
var statearr_19872_19898 = state_19862__$1;
(statearr_19872_19898[(1)] = (12));

} else {
var statearr_19873_19899 = state_19862__$1;
(statearr_19873_19899[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19863 === (3))){
var inst_19860 = (state_19862[(2)]);
var state_19862__$1 = state_19862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19862__$1,inst_19860);
} else {
if((state_val_19863 === (12))){
var inst_19826 = (state_19862[(7)]);
var inst_19850 = cljs.core.vec.call(null,inst_19826);
var state_19862__$1 = state_19862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19862__$1,(15),out,inst_19850);
} else {
if((state_val_19863 === (2))){
var state_19862__$1 = state_19862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19862__$1,(4),ch);
} else {
if((state_val_19863 === (11))){
var inst_19842 = (state_19862[(2)]);
var inst_19843 = (new Array(n));
var inst_19826 = inst_19843;
var inst_19827 = (0);
var state_19862__$1 = (function (){var statearr_19874 = state_19862;
(statearr_19874[(7)] = inst_19826);

(statearr_19874[(10)] = inst_19842);

(statearr_19874[(8)] = inst_19827);

return statearr_19874;
})();
var statearr_19875_19900 = state_19862__$1;
(statearr_19875_19900[(2)] = null);

(statearr_19875_19900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19863 === (9))){
var inst_19826 = (state_19862[(7)]);
var inst_19840 = cljs.core.vec.call(null,inst_19826);
var state_19862__$1 = state_19862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19862__$1,(11),out,inst_19840);
} else {
if((state_val_19863 === (5))){
var inst_19826 = (state_19862[(7)]);
var inst_19835 = (state_19862[(11)]);
var inst_19827 = (state_19862[(8)]);
var inst_19830 = (state_19862[(9)]);
var inst_19834 = (inst_19826[inst_19827] = inst_19830);
var inst_19835__$1 = (inst_19827 + (1));
var inst_19836 = (inst_19835__$1 < n);
var state_19862__$1 = (function (){var statearr_19876 = state_19862;
(statearr_19876[(12)] = inst_19834);

(statearr_19876[(11)] = inst_19835__$1);

return statearr_19876;
})();
if(cljs.core.truth_(inst_19836)){
var statearr_19877_19901 = state_19862__$1;
(statearr_19877_19901[(1)] = (8));

} else {
var statearr_19878_19902 = state_19862__$1;
(statearr_19878_19902[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19863 === (14))){
var inst_19855 = (state_19862[(2)]);
var inst_19856 = cljs.core.async.close_BANG_.call(null,out);
var state_19862__$1 = (function (){var statearr_19880 = state_19862;
(statearr_19880[(13)] = inst_19855);

return statearr_19880;
})();
var statearr_19881_19903 = state_19862__$1;
(statearr_19881_19903[(2)] = inst_19856);

(statearr_19881_19903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19863 === (10))){
var inst_19846 = (state_19862[(2)]);
var state_19862__$1 = state_19862;
var statearr_19882_19904 = state_19862__$1;
(statearr_19882_19904[(2)] = inst_19846);

(statearr_19882_19904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19863 === (8))){
var inst_19826 = (state_19862[(7)]);
var inst_19835 = (state_19862[(11)]);
var tmp19879 = inst_19826;
var inst_19826__$1 = tmp19879;
var inst_19827 = inst_19835;
var state_19862__$1 = (function (){var statearr_19883 = state_19862;
(statearr_19883[(7)] = inst_19826__$1);

(statearr_19883[(8)] = inst_19827);

return statearr_19883;
})();
var statearr_19884_19905 = state_19862__$1;
(statearr_19884_19905[(2)] = null);

(statearr_19884_19905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17976__auto__ = null;
var cljs$core$async$state_machine__17976__auto____0 = (function (){
var statearr_19885 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19885[(0)] = cljs$core$async$state_machine__17976__auto__);

(statearr_19885[(1)] = (1));

return statearr_19885;
});
var cljs$core$async$state_machine__17976__auto____1 = (function (state_19862){
while(true){
var ret_value__17977__auto__ = (function (){try{while(true){
var result__17978__auto__ = switch__17975__auto__.call(null,state_19862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17978__auto__;
}
break;
}
}catch (e19886){var ex__17979__auto__ = e19886;
var statearr_19887_19906 = state_19862;
(statearr_19887_19906[(2)] = ex__17979__auto__);


if(cljs.core.seq.call(null,(state_19862[(4)]))){
var statearr_19888_19907 = state_19862;
(statearr_19888_19907[(1)] = cljs.core.first.call(null,(state_19862[(4)])));

} else {
throw ex__17979__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19908 = state_19862;
state_19862 = G__19908;
continue;
} else {
return ret_value__17977__auto__;
}
break;
}
});
cljs$core$async$state_machine__17976__auto__ = function(state_19862){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17976__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17976__auto____1.call(this,state_19862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17976__auto____0;
cljs$core$async$state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17976__auto____1;
return cljs$core$async$state_machine__17976__auto__;
})()
})();
var state__18014__auto__ = (function (){var statearr_19889 = f__18013__auto__.call(null);
(statearr_19889[(6)] = c__18012__auto___19891);

return statearr_19889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18014__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19910 = arguments.length;
switch (G__19910) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18012__auto___19981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18013__auto__ = (function (){var switch__17975__auto__ = (function (state_19952){
var state_val_19953 = (state_19952[(1)]);
if((state_val_19953 === (7))){
var inst_19948 = (state_19952[(2)]);
var state_19952__$1 = state_19952;
var statearr_19954_19982 = state_19952__$1;
(statearr_19954_19982[(2)] = inst_19948);

(statearr_19954_19982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19953 === (1))){
var inst_19911 = [];
var inst_19912 = inst_19911;
var inst_19913 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19952__$1 = (function (){var statearr_19955 = state_19952;
(statearr_19955[(7)] = inst_19912);

(statearr_19955[(8)] = inst_19913);

return statearr_19955;
})();
var statearr_19956_19983 = state_19952__$1;
(statearr_19956_19983[(2)] = null);

(statearr_19956_19983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19953 === (4))){
var inst_19916 = (state_19952[(9)]);
var inst_19916__$1 = (state_19952[(2)]);
var inst_19917 = (inst_19916__$1 == null);
var inst_19918 = cljs.core.not.call(null,inst_19917);
var state_19952__$1 = (function (){var statearr_19957 = state_19952;
(statearr_19957[(9)] = inst_19916__$1);

return statearr_19957;
})();
if(inst_19918){
var statearr_19958_19984 = state_19952__$1;
(statearr_19958_19984[(1)] = (5));

} else {
var statearr_19959_19985 = state_19952__$1;
(statearr_19959_19985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19953 === (15))){
var inst_19942 = (state_19952[(2)]);
var state_19952__$1 = state_19952;
var statearr_19960_19986 = state_19952__$1;
(statearr_19960_19986[(2)] = inst_19942);

(statearr_19960_19986[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19953 === (13))){
var state_19952__$1 = state_19952;
var statearr_19961_19987 = state_19952__$1;
(statearr_19961_19987[(2)] = null);

(statearr_19961_19987[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19953 === (6))){
var inst_19912 = (state_19952[(7)]);
var inst_19937 = inst_19912.length;
var inst_19938 = (inst_19937 > (0));
var state_19952__$1 = state_19952;
if(cljs.core.truth_(inst_19938)){
var statearr_19962_19988 = state_19952__$1;
(statearr_19962_19988[(1)] = (12));

} else {
var statearr_19963_19989 = state_19952__$1;
(statearr_19963_19989[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19953 === (3))){
var inst_19950 = (state_19952[(2)]);
var state_19952__$1 = state_19952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19952__$1,inst_19950);
} else {
if((state_val_19953 === (12))){
var inst_19912 = (state_19952[(7)]);
var inst_19940 = cljs.core.vec.call(null,inst_19912);
var state_19952__$1 = state_19952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19952__$1,(15),out,inst_19940);
} else {
if((state_val_19953 === (2))){
var state_19952__$1 = state_19952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19952__$1,(4),ch);
} else {
if((state_val_19953 === (11))){
var inst_19916 = (state_19952[(9)]);
var inst_19920 = (state_19952[(10)]);
var inst_19930 = (state_19952[(2)]);
var inst_19931 = [];
var inst_19932 = inst_19931.push(inst_19916);
var inst_19912 = inst_19931;
var inst_19913 = inst_19920;
var state_19952__$1 = (function (){var statearr_19964 = state_19952;
(statearr_19964[(7)] = inst_19912);

(statearr_19964[(8)] = inst_19913);

(statearr_19964[(11)] = inst_19930);

(statearr_19964[(12)] = inst_19932);

return statearr_19964;
})();
var statearr_19965_19990 = state_19952__$1;
(statearr_19965_19990[(2)] = null);

(statearr_19965_19990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19953 === (9))){
var inst_19912 = (state_19952[(7)]);
var inst_19928 = cljs.core.vec.call(null,inst_19912);
var state_19952__$1 = state_19952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19952__$1,(11),out,inst_19928);
} else {
if((state_val_19953 === (5))){
var inst_19916 = (state_19952[(9)]);
var inst_19913 = (state_19952[(8)]);
var inst_19920 = (state_19952[(10)]);
var inst_19920__$1 = f.call(null,inst_19916);
var inst_19921 = cljs.core._EQ_.call(null,inst_19920__$1,inst_19913);
var inst_19922 = cljs.core.keyword_identical_QMARK_.call(null,inst_19913,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_19923 = ((inst_19921) || (inst_19922));
var state_19952__$1 = (function (){var statearr_19966 = state_19952;
(statearr_19966[(10)] = inst_19920__$1);

return statearr_19966;
})();
if(cljs.core.truth_(inst_19923)){
var statearr_19967_19991 = state_19952__$1;
(statearr_19967_19991[(1)] = (8));

} else {
var statearr_19968_19992 = state_19952__$1;
(statearr_19968_19992[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19953 === (14))){
var inst_19945 = (state_19952[(2)]);
var inst_19946 = cljs.core.async.close_BANG_.call(null,out);
var state_19952__$1 = (function (){var statearr_19970 = state_19952;
(statearr_19970[(13)] = inst_19945);

return statearr_19970;
})();
var statearr_19971_19993 = state_19952__$1;
(statearr_19971_19993[(2)] = inst_19946);

(statearr_19971_19993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19953 === (10))){
var inst_19935 = (state_19952[(2)]);
var state_19952__$1 = state_19952;
var statearr_19972_19994 = state_19952__$1;
(statearr_19972_19994[(2)] = inst_19935);

(statearr_19972_19994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19953 === (8))){
var inst_19912 = (state_19952[(7)]);
var inst_19916 = (state_19952[(9)]);
var inst_19920 = (state_19952[(10)]);
var inst_19925 = inst_19912.push(inst_19916);
var tmp19969 = inst_19912;
var inst_19912__$1 = tmp19969;
var inst_19913 = inst_19920;
var state_19952__$1 = (function (){var statearr_19973 = state_19952;
(statearr_19973[(7)] = inst_19912__$1);

(statearr_19973[(14)] = inst_19925);

(statearr_19973[(8)] = inst_19913);

return statearr_19973;
})();
var statearr_19974_19995 = state_19952__$1;
(statearr_19974_19995[(2)] = null);

(statearr_19974_19995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17976__auto__ = null;
var cljs$core$async$state_machine__17976__auto____0 = (function (){
var statearr_19975 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19975[(0)] = cljs$core$async$state_machine__17976__auto__);

(statearr_19975[(1)] = (1));

return statearr_19975;
});
var cljs$core$async$state_machine__17976__auto____1 = (function (state_19952){
while(true){
var ret_value__17977__auto__ = (function (){try{while(true){
var result__17978__auto__ = switch__17975__auto__.call(null,state_19952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17978__auto__;
}
break;
}
}catch (e19976){var ex__17979__auto__ = e19976;
var statearr_19977_19996 = state_19952;
(statearr_19977_19996[(2)] = ex__17979__auto__);


if(cljs.core.seq.call(null,(state_19952[(4)]))){
var statearr_19978_19997 = state_19952;
(statearr_19978_19997[(1)] = cljs.core.first.call(null,(state_19952[(4)])));

} else {
throw ex__17979__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19998 = state_19952;
state_19952 = G__19998;
continue;
} else {
return ret_value__17977__auto__;
}
break;
}
});
cljs$core$async$state_machine__17976__auto__ = function(state_19952){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17976__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17976__auto____1.call(this,state_19952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17976__auto____0;
cljs$core$async$state_machine__17976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17976__auto____1;
return cljs$core$async$state_machine__17976__auto__;
})()
})();
var state__18014__auto__ = (function (){var statearr_19979 = f__18013__auto__.call(null);
(statearr_19979[(6)] = c__18012__auto___19981);

return statearr_19979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18014__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
