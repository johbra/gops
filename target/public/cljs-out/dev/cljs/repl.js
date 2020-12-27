// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__14824){
var map__14825 = p__14824;
var map__14825__$1 = (((((!((map__14825 == null))))?(((((map__14825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14825):map__14825);
var m = map__14825__$1;
var n = cljs.core.get.call(null,map__14825__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__14825__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__14827_14859 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14828_14860 = null;
var count__14829_14861 = (0);
var i__14830_14862 = (0);
while(true){
if((i__14830_14862 < count__14829_14861)){
var f_14863 = cljs.core._nth.call(null,chunk__14828_14860,i__14830_14862);
cljs.core.println.call(null,"  ",f_14863);


var G__14864 = seq__14827_14859;
var G__14865 = chunk__14828_14860;
var G__14866 = count__14829_14861;
var G__14867 = (i__14830_14862 + (1));
seq__14827_14859 = G__14864;
chunk__14828_14860 = G__14865;
count__14829_14861 = G__14866;
i__14830_14862 = G__14867;
continue;
} else {
var temp__5735__auto___14868 = cljs.core.seq.call(null,seq__14827_14859);
if(temp__5735__auto___14868){
var seq__14827_14869__$1 = temp__5735__auto___14868;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14827_14869__$1)){
var c__4556__auto___14870 = cljs.core.chunk_first.call(null,seq__14827_14869__$1);
var G__14871 = cljs.core.chunk_rest.call(null,seq__14827_14869__$1);
var G__14872 = c__4556__auto___14870;
var G__14873 = cljs.core.count.call(null,c__4556__auto___14870);
var G__14874 = (0);
seq__14827_14859 = G__14871;
chunk__14828_14860 = G__14872;
count__14829_14861 = G__14873;
i__14830_14862 = G__14874;
continue;
} else {
var f_14875 = cljs.core.first.call(null,seq__14827_14869__$1);
cljs.core.println.call(null,"  ",f_14875);


var G__14876 = cljs.core.next.call(null,seq__14827_14869__$1);
var G__14877 = null;
var G__14878 = (0);
var G__14879 = (0);
seq__14827_14859 = G__14876;
chunk__14828_14860 = G__14877;
count__14829_14861 = G__14878;
i__14830_14862 = G__14879;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_14880 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_14880);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_14880)))?cljs.core.second.call(null,arglists_14880):arglists_14880));
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
var seq__14831_14881 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14832_14882 = null;
var count__14833_14883 = (0);
var i__14834_14884 = (0);
while(true){
if((i__14834_14884 < count__14833_14883)){
var vec__14845_14885 = cljs.core._nth.call(null,chunk__14832_14882,i__14834_14884);
var name_14886 = cljs.core.nth.call(null,vec__14845_14885,(0),null);
var map__14848_14887 = cljs.core.nth.call(null,vec__14845_14885,(1),null);
var map__14848_14888__$1 = (((((!((map__14848_14887 == null))))?(((((map__14848_14887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14848_14887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14848_14887):map__14848_14887);
var doc_14889 = cljs.core.get.call(null,map__14848_14888__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14890 = cljs.core.get.call(null,map__14848_14888__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_14886);

cljs.core.println.call(null," ",arglists_14890);

if(cljs.core.truth_(doc_14889)){
cljs.core.println.call(null," ",doc_14889);
} else {
}


var G__14891 = seq__14831_14881;
var G__14892 = chunk__14832_14882;
var G__14893 = count__14833_14883;
var G__14894 = (i__14834_14884 + (1));
seq__14831_14881 = G__14891;
chunk__14832_14882 = G__14892;
count__14833_14883 = G__14893;
i__14834_14884 = G__14894;
continue;
} else {
var temp__5735__auto___14895 = cljs.core.seq.call(null,seq__14831_14881);
if(temp__5735__auto___14895){
var seq__14831_14896__$1 = temp__5735__auto___14895;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14831_14896__$1)){
var c__4556__auto___14897 = cljs.core.chunk_first.call(null,seq__14831_14896__$1);
var G__14898 = cljs.core.chunk_rest.call(null,seq__14831_14896__$1);
var G__14899 = c__4556__auto___14897;
var G__14900 = cljs.core.count.call(null,c__4556__auto___14897);
var G__14901 = (0);
seq__14831_14881 = G__14898;
chunk__14832_14882 = G__14899;
count__14833_14883 = G__14900;
i__14834_14884 = G__14901;
continue;
} else {
var vec__14850_14902 = cljs.core.first.call(null,seq__14831_14896__$1);
var name_14903 = cljs.core.nth.call(null,vec__14850_14902,(0),null);
var map__14853_14904 = cljs.core.nth.call(null,vec__14850_14902,(1),null);
var map__14853_14905__$1 = (((((!((map__14853_14904 == null))))?(((((map__14853_14904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14853_14904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14853_14904):map__14853_14904);
var doc_14906 = cljs.core.get.call(null,map__14853_14905__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14907 = cljs.core.get.call(null,map__14853_14905__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_14903);

cljs.core.println.call(null," ",arglists_14907);

if(cljs.core.truth_(doc_14906)){
cljs.core.println.call(null," ",doc_14906);
} else {
}


var G__14908 = cljs.core.next.call(null,seq__14831_14896__$1);
var G__14909 = null;
var G__14910 = (0);
var G__14911 = (0);
seq__14831_14881 = G__14908;
chunk__14832_14882 = G__14909;
count__14833_14883 = G__14910;
i__14834_14884 = G__14911;
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

var seq__14855 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__14856 = null;
var count__14857 = (0);
var i__14858 = (0);
while(true){
if((i__14858 < count__14857)){
var role = cljs.core._nth.call(null,chunk__14856,i__14858);
var temp__5735__auto___14912__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___14912__$1)){
var spec_14913 = temp__5735__auto___14912__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_14913));
} else {
}


var G__14914 = seq__14855;
var G__14915 = chunk__14856;
var G__14916 = count__14857;
var G__14917 = (i__14858 + (1));
seq__14855 = G__14914;
chunk__14856 = G__14915;
count__14857 = G__14916;
i__14858 = G__14917;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__14855);
if(temp__5735__auto____$1){
var seq__14855__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14855__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__14855__$1);
var G__14918 = cljs.core.chunk_rest.call(null,seq__14855__$1);
var G__14919 = c__4556__auto__;
var G__14920 = cljs.core.count.call(null,c__4556__auto__);
var G__14921 = (0);
seq__14855 = G__14918;
chunk__14856 = G__14919;
count__14857 = G__14920;
i__14858 = G__14921;
continue;
} else {
var role = cljs.core.first.call(null,seq__14855__$1);
var temp__5735__auto___14922__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___14922__$2)){
var spec_14923 = temp__5735__auto___14922__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_14923));
} else {
}


var G__14924 = cljs.core.next.call(null,seq__14855__$1);
var G__14925 = null;
var G__14926 = (0);
var G__14927 = (0);
seq__14855 = G__14924;
chunk__14856 = G__14925;
count__14857 = G__14926;
i__14858 = G__14927;
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
var G__14928 = cljs.core.conj.call(null,via,t);
var G__14929 = cljs.core.ex_cause.call(null,t);
via = G__14928;
t = G__14929;
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
var map__14932 = datafied_throwable;
var map__14932__$1 = (((((!((map__14932 == null))))?(((((map__14932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14932):map__14932);
var via = cljs.core.get.call(null,map__14932__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__14932__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__14932__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__14933 = cljs.core.last.call(null,via);
var map__14933__$1 = (((((!((map__14933 == null))))?(((((map__14933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14933):map__14933);
var type = cljs.core.get.call(null,map__14933__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__14933__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__14933__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__14934 = data;
var map__14934__$1 = (((((!((map__14934 == null))))?(((((map__14934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14934):map__14934);
var problems = cljs.core.get.call(null,map__14934__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__14934__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__14934__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__14935 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__14935__$1 = (((((!((map__14935 == null))))?(((((map__14935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14935):map__14935);
var top_data = map__14935__$1;
var source = cljs.core.get.call(null,map__14935__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__14940 = phase;
var G__14940__$1 = (((G__14940 instanceof cljs.core.Keyword))?G__14940.fqn:null);
switch (G__14940__$1) {
case "read-source":
var map__14941 = data;
var map__14941__$1 = (((((!((map__14941 == null))))?(((((map__14941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14941):map__14941);
var line = cljs.core.get.call(null,map__14941__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__14941__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__14943 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__14943__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__14943,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__14943);
var G__14943__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__14943__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__14943__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__14943__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__14943__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__14944 = top_data;
var G__14944__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__14944,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__14944);
var G__14944__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__14944__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__14944__$1);
var G__14944__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__14944__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__14944__$2);
var G__14944__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__14944__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__14944__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__14944__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__14944__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__14945 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__14945,(0),null);
var method = cljs.core.nth.call(null,vec__14945,(1),null);
var file = cljs.core.nth.call(null,vec__14945,(2),null);
var line = cljs.core.nth.call(null,vec__14945,(3),null);
var G__14948 = top_data;
var G__14948__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__14948,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__14948);
var G__14948__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__14948__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__14948__$1);
var G__14948__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__14948__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__14948__$2);
var G__14948__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__14948__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__14948__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__14948__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__14948__$4;
}

break;
case "execution":
var vec__14949 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__14949,(0),null);
var method = cljs.core.nth.call(null,vec__14949,(1),null);
var file = cljs.core.nth.call(null,vec__14949,(2),null);
var line = cljs.core.nth.call(null,vec__14949,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__14931_SHARP_){
var or__4126__auto__ = (p1__14931_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__14931_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__14952 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__14952__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__14952,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__14952);
var G__14952__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__14952__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__14952__$1);
var G__14952__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__14952__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__14952__$2);
var G__14952__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__14952__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__14952__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__14952__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__14952__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14940__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__14956){
var map__14957 = p__14956;
var map__14957__$1 = (((((!((map__14957 == null))))?(((((map__14957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14957):map__14957);
var triage_data = map__14957__$1;
var phase = cljs.core.get.call(null,map__14957__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__14957__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__14957__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__14957__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__14957__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__14957__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__14957__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__14957__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__14959 = phase;
var G__14959__$1 = (((G__14959 instanceof cljs.core.Keyword))?G__14959.fqn:null);
switch (G__14959__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__14960_14969 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__14961_14970 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__14962_14971 = true;
var _STAR_print_fn_STAR__temp_val__14963_14972 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__14962_14971);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__14963_14972);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__14954_SHARP_){
return cljs.core.dissoc.call(null,p1__14954_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__14961_14970);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__14960_14969);
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
var _STAR_print_newline_STAR__orig_val__14964_14973 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__14965_14974 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__14966_14975 = true;
var _STAR_print_fn_STAR__temp_val__14967_14976 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__14966_14975);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__14967_14976);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__14955_SHARP_){
return cljs.core.dissoc.call(null,p1__14955_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__14965_14974);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__14964_14973);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14959__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
