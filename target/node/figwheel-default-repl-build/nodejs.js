// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__9228__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9228 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9229__i = 0, G__9229__a = new Array(arguments.length -  0);
while (G__9229__i < G__9229__a.length) {G__9229__a[G__9229__i] = arguments[G__9229__i + 0]; ++G__9229__i;}
  args = new cljs.core.IndexedSeq(G__9229__a,0,null);
} 
return G__9228__delegate.call(this,args);};
G__9228.cljs$lang$maxFixedArity = 0;
G__9228.cljs$lang$applyTo = (function (arglist__9230){
var args = cljs.core.seq(arglist__9230);
return G__9228__delegate(args);
});
G__9228.cljs$core$IFn$_invoke$arity$variadic = G__9228__delegate;
return G__9228;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__9231__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9231 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9232__i = 0, G__9232__a = new Array(arguments.length -  0);
while (G__9232__i < G__9232__a.length) {G__9232__a[G__9232__i] = arguments[G__9232__i + 0]; ++G__9232__i;}
  args = new cljs.core.IndexedSeq(G__9232__a,0,null);
} 
return G__9231__delegate.call(this,args);};
G__9231.cljs$lang$maxFixedArity = 0;
G__9231.cljs$lang$applyTo = (function (arglist__9233){
var args = cljs.core.seq(arglist__9233);
return G__9231__delegate(args);
});
G__9231.cljs$core$IFn$_invoke$arity$variadic = G__9231__delegate;
return G__9231;
})()
);

return null;
});

//# sourceMappingURL=nodejs.js.map
