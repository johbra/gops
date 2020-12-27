// Compiled by ClojureScript 1.10.773 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__15149__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__15149 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15150__i = 0, G__15150__a = new Array(arguments.length -  0);
while (G__15150__i < G__15150__a.length) {G__15150__a[G__15150__i] = arguments[G__15150__i + 0]; ++G__15150__i;}
  args = new cljs.core.IndexedSeq(G__15150__a,0,null);
} 
return G__15149__delegate.call(this,args);};
G__15149.cljs$lang$maxFixedArity = 0;
G__15149.cljs$lang$applyTo = (function (arglist__15151){
var args = cljs.core.seq(arglist__15151);
return G__15149__delegate(args);
});
G__15149.cljs$core$IFn$_invoke$arity$variadic = G__15149__delegate;
return G__15149;
})()
);

(o.error = (function() { 
var G__15152__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__15152 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15153__i = 0, G__15153__a = new Array(arguments.length -  0);
while (G__15153__i < G__15153__a.length) {G__15153__a[G__15153__i] = arguments[G__15153__i + 0]; ++G__15153__i;}
  args = new cljs.core.IndexedSeq(G__15153__a,0,null);
} 
return G__15152__delegate.call(this,args);};
G__15152.cljs$lang$maxFixedArity = 0;
G__15152.cljs$lang$applyTo = (function (arglist__15154){
var args = cljs.core.seq(arglist__15154);
return G__15152__delegate(args);
});
G__15152.cljs$core$IFn$_invoke$arity$variadic = G__15152__delegate;
return G__15152;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
