// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__16992){
var map__16993 = p__16992;
var map__16993__$1 = (((((!((map__16993 == null))))?(((((map__16993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16993):map__16993);
var m = map__16993__$1;
var n = cljs.core.get.call(null,map__16993__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__16993__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__16995_17027 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16996_17028 = null;
var count__16997_17029 = (0);
var i__16998_17030 = (0);
while(true){
if((i__16998_17030 < count__16997_17029)){
var f_17031 = cljs.core._nth.call(null,chunk__16996_17028,i__16998_17030);
cljs.core.println.call(null,"  ",f_17031);


var G__17032 = seq__16995_17027;
var G__17033 = chunk__16996_17028;
var G__17034 = count__16997_17029;
var G__17035 = (i__16998_17030 + (1));
seq__16995_17027 = G__17032;
chunk__16996_17028 = G__17033;
count__16997_17029 = G__17034;
i__16998_17030 = G__17035;
continue;
} else {
var temp__5735__auto___17036 = cljs.core.seq.call(null,seq__16995_17027);
if(temp__5735__auto___17036){
var seq__16995_17037__$1 = temp__5735__auto___17036;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16995_17037__$1)){
var c__4556__auto___17038 = cljs.core.chunk_first.call(null,seq__16995_17037__$1);
var G__17039 = cljs.core.chunk_rest.call(null,seq__16995_17037__$1);
var G__17040 = c__4556__auto___17038;
var G__17041 = cljs.core.count.call(null,c__4556__auto___17038);
var G__17042 = (0);
seq__16995_17027 = G__17039;
chunk__16996_17028 = G__17040;
count__16997_17029 = G__17041;
i__16998_17030 = G__17042;
continue;
} else {
var f_17043 = cljs.core.first.call(null,seq__16995_17037__$1);
cljs.core.println.call(null,"  ",f_17043);


var G__17044 = cljs.core.next.call(null,seq__16995_17037__$1);
var G__17045 = null;
var G__17046 = (0);
var G__17047 = (0);
seq__16995_17027 = G__17044;
chunk__16996_17028 = G__17045;
count__16997_17029 = G__17046;
i__16998_17030 = G__17047;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_17048 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_17048);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_17048)))?cljs.core.second.call(null,arglists_17048):arglists_17048));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__16999_17049 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17000_17050 = null;
var count__17001_17051 = (0);
var i__17002_17052 = (0);
while(true){
if((i__17002_17052 < count__17001_17051)){
var vec__17013_17053 = cljs.core._nth.call(null,chunk__17000_17050,i__17002_17052);
var name_17054 = cljs.core.nth.call(null,vec__17013_17053,(0),null);
var map__17016_17055 = cljs.core.nth.call(null,vec__17013_17053,(1),null);
var map__17016_17056__$1 = (((((!((map__17016_17055 == null))))?(((((map__17016_17055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17016_17055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17016_17055):map__17016_17055);
var doc_17057 = cljs.core.get.call(null,map__17016_17056__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17058 = cljs.core.get.call(null,map__17016_17056__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_17054);

cljs.core.println.call(null," ",arglists_17058);

if(cljs.core.truth_(doc_17057)){
cljs.core.println.call(null," ",doc_17057);
} else {
}


var G__17059 = seq__16999_17049;
var G__17060 = chunk__17000_17050;
var G__17061 = count__17001_17051;
var G__17062 = (i__17002_17052 + (1));
seq__16999_17049 = G__17059;
chunk__17000_17050 = G__17060;
count__17001_17051 = G__17061;
i__17002_17052 = G__17062;
continue;
} else {
var temp__5735__auto___17063 = cljs.core.seq.call(null,seq__16999_17049);
if(temp__5735__auto___17063){
var seq__16999_17064__$1 = temp__5735__auto___17063;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16999_17064__$1)){
var c__4556__auto___17065 = cljs.core.chunk_first.call(null,seq__16999_17064__$1);
var G__17066 = cljs.core.chunk_rest.call(null,seq__16999_17064__$1);
var G__17067 = c__4556__auto___17065;
var G__17068 = cljs.core.count.call(null,c__4556__auto___17065);
var G__17069 = (0);
seq__16999_17049 = G__17066;
chunk__17000_17050 = G__17067;
count__17001_17051 = G__17068;
i__17002_17052 = G__17069;
continue;
} else {
var vec__17018_17070 = cljs.core.first.call(null,seq__16999_17064__$1);
var name_17071 = cljs.core.nth.call(null,vec__17018_17070,(0),null);
var map__17021_17072 = cljs.core.nth.call(null,vec__17018_17070,(1),null);
var map__17021_17073__$1 = (((((!((map__17021_17072 == null))))?(((((map__17021_17072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17021_17072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17021_17072):map__17021_17072);
var doc_17074 = cljs.core.get.call(null,map__17021_17073__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17075 = cljs.core.get.call(null,map__17021_17073__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_17071);

cljs.core.println.call(null," ",arglists_17075);

if(cljs.core.truth_(doc_17074)){
cljs.core.println.call(null," ",doc_17074);
} else {
}


var G__17076 = cljs.core.next.call(null,seq__16999_17064__$1);
var G__17077 = null;
var G__17078 = (0);
var G__17079 = (0);
seq__16999_17049 = G__17076;
chunk__17000_17050 = G__17077;
count__17001_17051 = G__17078;
i__17002_17052 = G__17079;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__17023 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__17024 = null;
var count__17025 = (0);
var i__17026 = (0);
while(true){
if((i__17026 < count__17025)){
var role = cljs.core._nth.call(null,chunk__17024,i__17026);
var temp__5735__auto___17080__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___17080__$1)){
var spec_17081 = temp__5735__auto___17080__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_17081));
} else {
}


var G__17082 = seq__17023;
var G__17083 = chunk__17024;
var G__17084 = count__17025;
var G__17085 = (i__17026 + (1));
seq__17023 = G__17082;
chunk__17024 = G__17083;
count__17025 = G__17084;
i__17026 = G__17085;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__17023);
if(temp__5735__auto____$1){
var seq__17023__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17023__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__17023__$1);
var G__17086 = cljs.core.chunk_rest.call(null,seq__17023__$1);
var G__17087 = c__4556__auto__;
var G__17088 = cljs.core.count.call(null,c__4556__auto__);
var G__17089 = (0);
seq__17023 = G__17086;
chunk__17024 = G__17087;
count__17025 = G__17088;
i__17026 = G__17089;
continue;
} else {
var role = cljs.core.first.call(null,seq__17023__$1);
var temp__5735__auto___17090__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___17090__$2)){
var spec_17091 = temp__5735__auto___17090__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_17091));
} else {
}


var G__17092 = cljs.core.next.call(null,seq__17023__$1);
var G__17093 = null;
var G__17094 = (0);
var G__17095 = (0);
seq__17023 = G__17092;
chunk__17024 = G__17093;
count__17025 = G__17094;
i__17026 = G__17095;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__17096 = cljs.core.conj.call(null,via,t);
var G__17097 = cljs.core.ex_cause.call(null,t);
via = G__17096;
t = G__17097;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__17100 = datafied_throwable;
var map__17100__$1 = (((((!((map__17100 == null))))?(((((map__17100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17100):map__17100);
var via = cljs.core.get.call(null,map__17100__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__17100__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__17100__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__17101 = cljs.core.last.call(null,via);
var map__17101__$1 = (((((!((map__17101 == null))))?(((((map__17101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17101):map__17101);
var type = cljs.core.get.call(null,map__17101__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__17101__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__17101__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__17102 = data;
var map__17102__$1 = (((((!((map__17102 == null))))?(((((map__17102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17102):map__17102);
var problems = cljs.core.get.call(null,map__17102__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__17102__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__17102__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__17103 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__17103__$1 = (((((!((map__17103 == null))))?(((((map__17103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17103):map__17103);
var top_data = map__17103__$1;
var source = cljs.core.get.call(null,map__17103__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__17108 = phase;
var G__17108__$1 = (((G__17108 instanceof cljs.core.Keyword))?G__17108.fqn:null);
switch (G__17108__$1) {
case "read-source":
var map__17109 = data;
var map__17109__$1 = (((((!((map__17109 == null))))?(((((map__17109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17109):map__17109);
var line = cljs.core.get.call(null,map__17109__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__17109__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__17111 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__17111__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__17111,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__17111);
var G__17111__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__17111__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__17111__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__17111__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__17111__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__17112 = top_data;
var G__17112__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__17112,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__17112);
var G__17112__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__17112__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__17112__$1);
var G__17112__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__17112__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__17112__$2);
var G__17112__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__17112__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__17112__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__17112__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__17112__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__17113 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__17113,(0),null);
var method = cljs.core.nth.call(null,vec__17113,(1),null);
var file = cljs.core.nth.call(null,vec__17113,(2),null);
var line = cljs.core.nth.call(null,vec__17113,(3),null);
var G__17116 = top_data;
var G__17116__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__17116,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__17116);
var G__17116__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__17116__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__17116__$1);
var G__17116__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__17116__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__17116__$2);
var G__17116__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__17116__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__17116__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__17116__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__17116__$4;
}

break;
case "execution":
var vec__17117 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__17117,(0),null);
var method = cljs.core.nth.call(null,vec__17117,(1),null);
var file = cljs.core.nth.call(null,vec__17117,(2),null);
var line = cljs.core.nth.call(null,vec__17117,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__17099_SHARP_){
var or__4126__auto__ = (p1__17099_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__17099_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__17120 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__17120__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__17120,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__17120);
var G__17120__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__17120__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__17120__$1);
var G__17120__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__17120__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__17120__$2);
var G__17120__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__17120__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__17120__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__17120__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__17120__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17108__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__17124){
var map__17125 = p__17124;
var map__17125__$1 = (((((!((map__17125 == null))))?(((((map__17125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17125):map__17125);
var triage_data = map__17125__$1;
var phase = cljs.core.get.call(null,map__17125__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__17125__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__17125__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__17125__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__17125__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__17125__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__17125__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__17125__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__17127 = phase;
var G__17127__$1 = (((G__17127 instanceof cljs.core.Keyword))?G__17127.fqn:null);
switch (G__17127__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17128_17137 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17129_17138 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17130_17139 = true;
var _STAR_print_fn_STAR__temp_val__17131_17140 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17130_17139);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17131_17140);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__17122_SHARP_){
return cljs.core.dissoc.call(null,p1__17122_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17129_17138);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17128_17137);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17132_17141 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17133_17142 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17134_17143 = true;
var _STAR_print_fn_STAR__temp_val__17135_17144 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17134_17143);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17135_17144);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__17123_SHARP_){
return cljs.core.dissoc.call(null,p1__17123_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17133_17142);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17132_17141);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17127__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
