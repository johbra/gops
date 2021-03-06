// Compiled by ClojureScript 1.10.773 {}
goog.provide('re_com.input_time');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_com.validate');
goog.require('re_com.text');
goog.require('re_com.box');
goog.require('re_com.util');
re_com.input_time.time__GT_mins = (function re_com$input_time$time__GT_mins(time){
return cljs.core.rem.call(null,time,(100));
});
re_com.input_time.time__GT_hrs = (function re_com$input_time$time__GT_hrs(time){
return cljs.core.quot.call(null,time,(100));
});
/**
 * Parse the string 's' to a valid int. On parse failure, return 0
 */
re_com.input_time.to_int = (function re_com$input_time$to_int(s){
var val = parseInt(s);
if(cljs.core.truth_(isNaN(val))){
return (0);
} else {
return val;
}
});
/**
 * Return a time integer from a triple int vector of form  [H  _  M]
 */
re_com.input_time.triple__GT_time = (function re_com$input_time$triple__GT_time(p__20716){
var vec__20717 = p__20716;
var hr = cljs.core.nth.call(null,vec__20717,(0),null);
var _ = cljs.core.nth.call(null,vec__20717,(1),null);
var mi = cljs.core.nth.call(null,vec__20717,(2),null);
return ((hr * (100)) + mi);
});
re_com.input_time.triple_seeking_re = /^(\d{0,2})()()$|^(\d{0,1})(:{0,1})(\d{0,2})$|^(\d{0,2})(:{0,1})(\d{0,2})$/;
re_com.input_time.extract_triple_from_text = (function re_com$input_time$extract_triple_from_text(text){
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.nil_QMARK_),cljs.core.rest.call(null,cljs.core.re_matches.call(null,re_com.input_time.triple_seeking_re,text)));
});
/**
 * return as a time int, the contents of 'text'
 */
re_com.input_time.text__GT_time = (function re_com$input_time$text__GT_time(text){
return re_com.input_time.triple__GT_time.call(null,cljs.core.map.call(null,re_com.input_time.to_int,re_com.input_time.extract_triple_from_text.call(null,text)));
});
/**
 * return a string of format HH:MM for 'time'
 */
re_com.input_time.time__GT_text = (function re_com$input_time$time__GT_text(time){
var hrs = re_com.input_time.time__GT_hrs.call(null,time);
var mins = re_com.input_time.time__GT_mins.call(null,time);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.util.pad_zero_number.call(null,hrs,(2))),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.util.pad_zero_number.call(null,mins,(2)))].join('');
});
/**
 * Return true if text passes basic time validation.
 * Can't do to much validation because user input might not be finished.
 * Why?  On the way to entering 6:30, you must pass through the invalid state of '63'.
 * So we only really check against the triple-extracting regular expression
 */
re_com.input_time.valid_text_QMARK_ = (function re_com$input_time$valid_text_QMARK_(text){
return cljs.core._EQ_.call(null,(3),cljs.core.count.call(null,re_com.input_time.extract_triple_from_text.call(null,text)));
});
re_com.input_time.valid_time_QMARK_ = (function re_com$input_time$valid_time_QMARK_(time){
if((time == null)){
return false;
} else {
if(((0) > time)){
return false;
} else {
if(((60) < re_com.input_time.time__GT_mins.call(null,time))){
return false;
} else {
return true;

}
}
}
});
re_com.input_time.validate_arg_times = (function re_com$input_time$validate_arg_times(model,minimum,maximum){
if(((typeof model === 'number') && (re_com.input_time.valid_time_QMARK_.call(null,model)))){
} else {
throw (new Error(["Assert failed: ",["[input-time] given an invalid :model - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)].join(''),"\n","(and (number? model) (valid-time? model))"].join('')));
}

if(((typeof minimum === 'number') && (re_com.input_time.valid_time_QMARK_.call(null,minimum)))){
} else {
throw (new Error(["Assert failed: ",["[input-time] given an invalid :minimum - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(minimum)].join(''),"\n","(and (number? minimum) (valid-time? minimum))"].join('')));
}

if(((typeof maximum === 'number') && (re_com.input_time.valid_time_QMARK_.call(null,maximum)))){
} else {
throw (new Error(["Assert failed: ",["[input-time] given an invalid :maximum - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(maximum)].join(''),"\n","(and (number? maximum) (valid-time? maximum))"].join('')));
}

if((minimum <= maximum)){
} else {
throw (new Error(["Assert failed: ",["[input-time] :minimum ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(minimum)," > :maximum  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(maximum)].join(''),"\n","(<= minimum maximum)"].join('')));
}

return true;
});
/**
 * Validate the time supplied.
 * Return either the time or, if it is invalid, return something valid
 */
re_com.input_time.force_valid_time = (function re_com$input_time$force_valid_time(time,min,max,previous){
if((time == null)){
return previous;
} else {
if((!(re_com.input_time.valid_time_QMARK_.call(null,time)))){
return previous;
} else {
if((time < min)){
return min;
} else {
if((max < time)){
return max;
} else {
return time;

}
}
}
}
});
/**
 * Called each time the <input> field gets a keypress, or paste operation.
 * Rests  the text-model only if the new text is valid
 */
re_com.input_time.on_new_keypress = (function re_com$input_time$on_new_keypress(event,text_model){
var current_text = event.target.value;
if(re_com.input_time.valid_text_QMARK_.call(null,current_text)){
return cljs.core.reset_BANG_.call(null,text_model,current_text);
} else {
return null;
}
});
/**
 * When Enter is pressed, force the component to lose focus
 */
re_com.input_time.lose_focus_if_enter = (function re_com$input_time$lose_focus_if_enter(ev){
if(cljs.core._EQ_.call(null,ev.keyCode,(13))){
ev.target.blur();

return true;
} else {
return null;
}
});
/**
 * Called when the field looses focus.
 * Re-validate what has been entered, comparing to mins and maxs.
 * Invoke the callback as necessary
 */
re_com.input_time.on_defocus = (function re_com$input_time$on_defocus(text_model,min,max,callback,previous_val){
var time = re_com.input_time.text__GT_time.call(null,cljs.core.deref.call(null,text_model));
var time__$1 = re_com.input_time.force_valid_time.call(null,time,min,max,previous_val);
cljs.core.reset_BANG_.call(null,text_model,re_com.input_time.time__GT_text.call(null,time__$1));

if(cljs.core.truth_((function (){var and__4115__auto__ = callback;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.call(null,time__$1,previous_val);
} else {
return and__4115__auto__;
}
})())){
return callback.call(null,time__$1);
} else {
return null;
}
});
re_com.input_time.input_time_args_desc = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"integer | string | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a time in integer form. e.g. '09:30am' is 930"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"integer -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"called when user entry completes and value is new. Passed new value as integer"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"minimum","minimum",-1621006059),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(0),new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"user can't enter a time less than this value"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"maximum","maximum",573880714),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(2359),new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"user can't enter a time more than this value"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, user input is disabled"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"show-icon?","show-icon?",-756836459),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, a clock icon will be displayed to the right of input field"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"hide-border?","hide-border?",1792698922),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, input filed is displayed without a border"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for width of the input box (excluding the icon if present)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the textbox, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS style. e.g. {:color \"red\" :width \"50px\"} (applies to the textbox, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to the textbox, not the wrapping div)"], null)], null)], null);
/**
 * I return the markup for an input box which will accept and validate times.
 * Parameters - refer input-time-args above
 */
re_com.input_time.input_time = (function re_com$input_time$input_time(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20727 = arguments.length;
var i__4737__auto___20728 = (0);
while(true){
if((i__4737__auto___20728 < len__4736__auto___20727)){
args__4742__auto__.push((arguments[i__4737__auto___20728]));

var G__20729 = (i__4737__auto___20728 + (1));
i__4737__auto___20728 = G__20729;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.input_time.input_time.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.input_time.input_time.cljs$core$IFn$_invoke$arity$variadic = (function (p__20721){
var map__20722 = p__20721;
var map__20722__$1 = (((((!((map__20722 == null))))?(((((map__20722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20722):map__20722);
var args = map__20722__$1;
var model = cljs.core.get.call(null,map__20722__$1,new cljs.core.Keyword(null,"model","model",331153215));
var minimum = cljs.core.get.call(null,map__20722__$1,new cljs.core.Keyword(null,"minimum","minimum",-1621006059),(0));
var maximum = cljs.core.get.call(null,map__20722__$1,new cljs.core.Keyword(null,"maximum","maximum",573880714),(2359));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.input_time.input_time_args_desc),args,"input-time"))){
} else {
throw (new Error("Assert failed: (validate-args-macro input-time-args-desc args \"input-time\")"));
}

if(re_com.input_time.validate_arg_times.call(null,re_com.util.deref_or_value.call(null,model),minimum,maximum)){
} else {
throw (new Error("Assert failed: (validate-arg-times (deref-or-value model) minimum maximum)"));
}

var deref_model = re_com.util.deref_or_value.call(null,model);
var text_model = reagent.core.atom.call(null,re_com.input_time.time__GT_text.call(null,deref_model));
var previous_model = reagent.core.atom.call(null,deref_model);
return (function() { 
var G__20730__delegate = function (p__20724){
var map__20725 = p__20724;
var map__20725__$1 = (((((!((map__20725 == null))))?(((((map__20725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20725):map__20725);
var args__$1 = map__20725__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__20725__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.call(null,map__20725__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var height = cljs.core.get.call(null,map__20725__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var model__$1 = cljs.core.get.call(null,map__20725__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.call(null,map__20725__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var hide_border_QMARK_ = cljs.core.get.call(null,map__20725__$1,new cljs.core.Keyword(null,"hide-border?","hide-border?",1792698922));
var maximum__$1 = cljs.core.get.call(null,map__20725__$1,new cljs.core.Keyword(null,"maximum","maximum",573880714),(2359));
var width = cljs.core.get.call(null,map__20725__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var style = cljs.core.get.call(null,map__20725__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.call(null,map__20725__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var show_icon_QMARK_ = cljs.core.get.call(null,map__20725__$1,new cljs.core.Keyword(null,"show-icon?","show-icon?",-756836459));
var minimum__$1 = cljs.core.get.call(null,map__20725__$1,new cljs.core.Keyword(null,"minimum","minimum",-1621006059),(0));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.input_time.input_time_args_desc),args__$1,"input-time"))){
} else {
throw (new Error("Assert failed: (validate-args-macro input-time-args-desc args \"input-time\")"));
}

if(re_com.input_time.validate_arg_times.call(null,re_com.util.deref_or_value.call(null,model__$1),minimum__$1,maximum__$1)){
} else {
throw (new Error("Assert failed: (validate-arg-times (deref-or-value model) minimum maximum)"));
}

var style__$1 = cljs.core.merge.call(null,(cljs.core.truth_(hide_border_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"none"], null):null),style);
var new_val = re_com.util.deref_or_value.call(null,model__$1);
var new_val__$1 = (((new_val < minimum__$1))?minimum__$1:new_val);
var new_val__$2 = (((new_val__$1 > maximum__$1))?maximum__$1:new_val__$1);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,previous_model),new_val__$2)){
cljs.core.reset_BANG_.call(null,text_model,re_com.input_time.time__GT_text.call(null,new_val__$2));

cljs.core.reset_BANG_.call(null,previous_model,new_val__$2);
} else {
}

return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-input-time",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),height], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),["time-entry ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null),style__$1),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,text_model),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),re_com.util.deref_or_value.call(null,disabled_QMARK_),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (event){
re_com.input_time.on_new_keypress.call(null,event,text_model);

return null;
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (event){
re_com.input_time.on_defocus.call(null,text_model,minimum__$1,maximum__$1,on_change,cljs.core.deref.call(null,previous_model));

return null;
}),new cljs.core.Keyword(null,"on-key-up","on-key-up",884441808),(function (event){
re_com.input_time.lose_focus_if_enter.call(null,event);

return null;
})], null),attr)], null),(cljs.core.truth_(show_icon_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.time-icon","div.time-icon",638768452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.zmdi.zmdi-hc-fw-rc.zmdi-time","i.zmdi.zmdi-hc-fw-rc.zmdi-time",-1040605177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"static",new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null)], null)], null)], null):null)], null)], null);
};
var G__20730 = function (var_args){
var p__20724 = null;
if (arguments.length > 0) {
var G__20731__i = 0, G__20731__a = new Array(arguments.length -  0);
while (G__20731__i < G__20731__a.length) {G__20731__a[G__20731__i] = arguments[G__20731__i + 0]; ++G__20731__i;}
  p__20724 = new cljs.core.IndexedSeq(G__20731__a,0,null);
} 
return G__20730__delegate.call(this,p__20724);};
G__20730.cljs$lang$maxFixedArity = 0;
G__20730.cljs$lang$applyTo = (function (arglist__20732){
var p__20724 = cljs.core.seq(arglist__20732);
return G__20730__delegate(p__20724);
});
G__20730.cljs$core$IFn$_invoke$arity$variadic = G__20730__delegate;
return G__20730;
})()
;
}));

(re_com.input_time.input_time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.input_time.input_time.cljs$lang$applyTo = (function (seq20720){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20720));
}));


//# sourceMappingURL=input_time.js.map
