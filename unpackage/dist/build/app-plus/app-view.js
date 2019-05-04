var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20190312_syb_scopedata*/window.__wcc_version__='v0.5vv_20190312_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
var cs
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'content'])
Z([[6],[[7],[3,'cityList']],[3,'length']])
Z([3,'select-result select-title'])
Z([a,[[2,'+'],[[2,'+'],[1,'当前选择的是：'],[[7],[3,'selectResult']]],[1,'']]])
Z([3,'select-result'])
Z([3,'__e'])
Z([3,'select-btn'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'addCity']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'mini'])
Z([3,'primary'])
Z([3,'添加城市'])
Z([3,'sub-select-title'])
Z([3,'添加的城市可以在当前城市页面快速切换'])
Z(z[2])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'bindChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'indicatorStyle']])
Z([[7],[3,'value']])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'cityList']])
Z(z[19])
Z(z[20])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z([[6],[[6],[[6],[[7],[3,'cityList']],[[6],[[7],[3,'value']],[1,0]]],[3,'districts']],[3,'length']])
Z(z[19])
Z(z[20])
Z([[6],[[6],[[7],[3,'cityList']],[[6],[[7],[3,'value']],[1,0]]],[3,'districts']])
Z(z[19])
Z(z[20])
Z([a,z[24][1]])
Z([[2,'&&'],[[6],[[6],[[6],[[7],[3,'cityList']],[[6],[[7],[3,'value']],[1,0]]],[3,'districts']],[3,'length']],[[6],[[6],[[6],[[6],[[6],[[7],[3,'cityList']],[[6],[[7],[3,'value']],[1,0]]],[3,'districts']],[[6],[[7],[3,'value']],[1,1]]],[3,'districts']],[3,'length']]])
Z(z[19])
Z(z[20])
Z([[6],[[6],[[6],[[6],[[7],[3,'cityList']],[[6],[[7],[3,'value']],[1,0]]],[3,'districts']],[[6],[[7],[3,'value']],[1,1]]],[3,'districts']])
Z(z[19])
Z(z[20])
Z([a,z[24][1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'content'])
Z([3,'nav-list'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'storage_cityList']])
Z(z[3])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'item']],[[2,'?:'],[[2,'==='],[[7],[3,'index']],[[7],[3,'current_index']]],[1,'on'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changeCity']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[2,'||'],[[6],[[7],[3,'item']],[3,'city']],[[6],[[7],[3,'item']],[3,'name']]]],[1,'']]])
Z([3,'info-title'])
Z([3,'今日天气详情：'])
Z([3,'list-info'])
Z(z[4])
Z([a,[[2,'+'],[[2,'+'],[1,'今日天气：'],[[6],[[7],[3,'weatherBaseInfo']],[3,'weather']]],[1,'']]])
Z(z[4])
Z([a,[[2,'+'],[[2,'+'],[1,'实时气温：'],[[6],[[7],[3,'weatherBaseInfo']],[3,'temperature']]],[1,'摄氏度']]])
Z(z[4])
Z([a,[[2,'+'],[[2,'+'],[1,'风向描述：'],[[6],[[7],[3,'weatherBaseInfo']],[3,'winddirection']]],[1,'']]])
Z(z[4])
Z([a,[[2,'+'],[[2,'+'],[1,'风力级别：'],[[6],[[7],[3,'weatherBaseInfo']],[3,'windpower']]],[1,'级']]])
Z(z[4])
Z([a,[[2,'+'],[[2,'+'],[1,'空气湿度：'],[[6],[[7],[3,'weatherBaseInfo']],[3,'humidity']]],[1,'']]])
Z(z[4])
Z([a,[[2,'+'],[[2,'+'],[1,'更新时间：'],[[6],[[7],[3,'weatherBaseInfo']],[3,'reporttime']]],[1,'']]])
Z(z[11])
Z([3,'近几日天气预报'])
Z([3,'info-sub-title'])
Z([3,'（天气现象、温度、风向、风力以白天/晚上格式显示）'])
Z([3,'：'])
Z([3,'list-all-info'])
Z([3,'scroll-box'])
Z([3,'true'])
Z([3,'scroll-item'])
Z([3,'item-text'])
Z([3,'日期'])
Z(z[35])
Z([3,'星期'])
Z(z[35])
Z([3,'天气现象'])
Z(z[35])
Z([3,'温度'])
Z(z[35])
Z([3,'风向'])
Z(z[35])
Z([3,'风力'])
Z(z[3])
Z(z[4])
Z([[6],[[7],[3,'weatherAllInfo']],[3,'casts']])
Z(z[3])
Z(z[34])
Z(z[35])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'$root']],[3,'g0']]],[1,'']]])
Z(z[35])
Z([a,[[2,'+'],[[2,'+'],[1,'周'],[[6],[[7],[3,'weekList']],[[6],[[7],[3,'item']],[3,'week']]]],[1,'']]])
Z(z[35])
Z([a,[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'item']],[3,'dayweather']]],[1,'/']],[[6],[[7],[3,'item']],[3,'nightweather']]],[1,'']]])
Z(z[35])
Z([a,[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'item']],[3,'daytemp']]],[1,'℃/']],[[6],[[7],[3,'item']],[3,'nighttemp']]],[1,'℃']]])
Z(z[35])
Z([a,[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'item']],[3,'daywind']]],[1,'/']],[[6],[[7],[3,'item']],[3,'nightwind']]],[1,'']]])
Z(z[35])
Z([a,[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'item']],[3,'daypower']]],[1,'级/']],[[6],[[7],[3,'item']],[3,'nightpower']]],[1,'级']]])
Z([3,'all-time'])
Z([a,[[2,'+'],[[2,'+'],[1,'更新时间：'],[[6],[[7],[3,'weatherAllInfo']],[3,'reporttime']]],[1,'']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'content'])
Z([3,'title'])
Z([3,'对城市的优先级进行排序，当前城市页面默认显示第一个城市的天气预报。'])
Z([3,'__e'])
Z([3,'form'])
Z([[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'formSubmit']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'storage_cityList']])
Z(z[7])
Z([3,'form-item'])
Z([3,'form-label'])
Z([3,'item-title'])
Z([a,[[2,'||'],[[6],[[7],[3,'item']],[3,'city']],[[6],[[7],[3,'item']],[3,'name']]]])
Z([3,'item-body move-btn-box'])
Z(z[4])
Z([3,'move-btn'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'toUpper']],[[4],[[5],[[5],[1,'$0']],[[7],[3,'index']]]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'storage_cityList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([3,'mini'])
Z([3,'primary'])
Z([3,'向上'])
Z(z[4])
Z(z[17])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'toDown']],[[4],[[5],[[5],[1,'$0']],[[7],[3,'index']]]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'storage_cityList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z(z[19])
Z(z[20])
Z([3,'向下'])
Z(z[11])
Z([3,'margin:20rpx 15rpx 0;border:0;'])
Z([3,'submit'])
Z(z[20])
Z([3,'保存设置'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./pages/cityList/cityList.wxml','./pages/index/index.wxml','./pages/setting/setting.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
cs.push("./pages/cityList/cityList.wxml:view:1:1")
var oB=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
cs.push("./pages/cityList/cityList.wxml:block:1:38")
cs.push("./pages/cityList/cityList.wxml:view:1:73")
var fE=_n('view')
_rz(z,fE,'class',3,e,s,gg)
var cF=_oz(z,4,e,s,gg)
_(fE,cF)
cs.pop()
_(xC,fE)
cs.pop()
}
cs.push("./pages/cityList/cityList.wxml:view:1:172")
var hG=_n('view')
_rz(z,hG,'class',5,e,s,gg)
cs.push("./pages/cityList/cityList.wxml:button:1:200")
var oH=_mz(z,'button',['bindtap',6,'class',1,'data-event-opts',2,'size',3,'type',4],[],e,s,gg)
var cI=_oz(z,11,e,s,gg)
_(oH,cI)
cs.pop()
_(hG,oH)
cs.push("./pages/cityList/cityList.wxml:text:1:346")
var oJ=_n('text')
_rz(z,oJ,'class',12,e,s,gg)
var lK=_oz(z,13,e,s,gg)
_(oJ,lK)
cs.pop()
_(hG,oJ)
cs.pop()
_(oB,hG)
var oD=_v()
_(oB,oD)
if(_oz(z,14,e,s,gg)){oD.wxVkey=1
cs.push("./pages/cityList/cityList.wxml:block:1:445")
cs.push("./pages/cityList/cityList.wxml:picker-view:1:480")
var aL=_mz(z,'picker-view',['bindchange',15,'data-event-opts',1,'indicatorStyle',2,'value',3],[],e,s,gg)
cs.push("./pages/cityList/cityList.wxml:picker-view-column:1:628")
var bO=_n('picker-view-column')
var oP=_v()
_(bO,oP)
cs.push("./pages/cityList/cityList.wxml:block:1:648")
var xQ=function(fS,oR,cT,gg){
cs.push("./pages/cityList/cityList.wxml:block:1:648")
cs.push("./pages/cityList/cityList.wxml:view:1:732")
var oV=_n('view')
_rz(z,oV,'class',23,fS,oR,gg)
var cW=_oz(z,24,fS,oR,gg)
_(oV,cW)
cs.pop()
_(cT,oV)
cs.pop()
return cT
}
oP.wxXCkey=2
_2z(z,21,xQ,e,s,gg,oP,'item','index','index')
cs.pop()
cs.pop()
_(aL,bO)
var tM=_v()
_(aL,tM)
if(_oz(z,25,e,s,gg)){tM.wxVkey=1
cs.push("./pages/cityList/cityList.wxml:block:1:800")
cs.push("./pages/cityList/cityList.wxml:picker-view-column:1:855")
var oX=_n('picker-view-column')
var lY=_v()
_(oX,lY)
cs.push("./pages/cityList/cityList.wxml:block:1:875")
var aZ=function(e2,t1,b3,gg){
cs.push("./pages/cityList/cityList.wxml:block:1:875")
cs.push("./pages/cityList/cityList.wxml:view:1:979")
var x5=_n('view')
_rz(z,x5,'class',30,e2,t1,gg)
var o6=_oz(z,31,e2,t1,gg)
_(x5,o6)
cs.pop()
_(b3,x5)
cs.pop()
return b3
}
lY.wxXCkey=2
_2z(z,28,aZ,e,s,gg,lY,'item','index','index')
cs.pop()
cs.pop()
_(tM,oX)
cs.pop()
}
var eN=_v()
_(aL,eN)
if(_oz(z,32,e,s,gg)){eN.wxVkey=1
cs.push("./pages/cityList/cityList.wxml:block:1:1055")
cs.push("./pages/cityList/cityList.wxml:picker-view-column:1:1167")
var f7=_n('picker-view-column')
var c8=_v()
_(f7,c8)
cs.push("./pages/cityList/cityList.wxml:block:1:1187")
var h9=function(cAB,o0,oBB,gg){
cs.push("./pages/cityList/cityList.wxml:block:1:1187")
cs.push("./pages/cityList/cityList.wxml:view:1:1311")
var aDB=_n('view')
_rz(z,aDB,'class',37,cAB,o0,gg)
var tEB=_oz(z,38,cAB,o0,gg)
_(aDB,tEB)
cs.pop()
_(oBB,aDB)
cs.pop()
return oBB
}
c8.wxXCkey=2
_2z(z,35,h9,e,s,gg,c8,'item','index','index')
cs.pop()
cs.pop()
_(eN,f7)
cs.pop()
}
tM.wxXCkey=1
eN.wxXCkey=1
cs.pop()
_(oD,aL)
cs.pop()
}
xC.wxXCkey=1
oD.wxXCkey=1
cs.pop()
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
cs.push("./pages/index/index.wxml:view:1:1")
var bGB=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/index/index.wxml:view:1:38")
var oHB=_n('view')
_rz(z,oHB,'class',2,e,s,gg)
var xIB=_v()
_(oHB,xIB)
cs.push("./pages/index/index.wxml:block:1:61")
var oJB=function(cLB,fKB,hMB,gg){
cs.push("./pages/index/index.wxml:block:1:61")
cs.push("./pages/index/index.wxml:view:1:153")
var cOB=_mz(z,'view',['bindtap',7,'class',1,'data-event-opts',2],[],cLB,fKB,gg)
var oPB=_oz(z,10,cLB,fKB,gg)
_(cOB,oPB)
cs.pop()
_(hMB,cOB)
cs.pop()
return hMB
}
xIB.wxXCkey=2
_2z(z,5,oJB,e,s,gg,xIB,'item','index','index')
cs.pop()
cs.pop()
_(bGB,oHB)
cs.push("./pages/index/index.wxml:view:1:337")
var lQB=_n('view')
_rz(z,lQB,'class',11,e,s,gg)
var aRB=_oz(z,12,e,s,gg)
_(lQB,aRB)
cs.pop()
_(bGB,lQB)
cs.push("./pages/index/index.wxml:view:1:390")
var tSB=_n('view')
_rz(z,tSB,'class',13,e,s,gg)
cs.push("./pages/index/index.wxml:view:1:414")
var eTB=_n('view')
_rz(z,eTB,'class',14,e,s,gg)
cs.push("./pages/index/index.wxml:view:1:433")
var bUB=_n('view')
var oVB=_oz(z,15,e,s,gg)
_(bUB,oVB)
cs.pop()
_(eTB,bUB)
cs.pop()
_(tSB,eTB)
cs.push("./pages/index/index.wxml:view:1:501")
var xWB=_n('view')
_rz(z,xWB,'class',16,e,s,gg)
cs.push("./pages/index/index.wxml:view:1:520")
var oXB=_n('view')
var fYB=_oz(z,17,e,s,gg)
_(oXB,fYB)
cs.pop()
_(xWB,oXB)
cs.pop()
_(tSB,xWB)
cs.push("./pages/index/index.wxml:view:1:601")
var cZB=_n('view')
_rz(z,cZB,'class',18,e,s,gg)
cs.push("./pages/index/index.wxml:view:1:620")
var h1B=_n('view')
var o2B=_oz(z,19,e,s,gg)
_(h1B,o2B)
cs.pop()
_(cZB,h1B)
cs.pop()
_(tSB,cZB)
cs.push("./pages/index/index.wxml:view:1:694")
var c3B=_n('view')
_rz(z,c3B,'class',20,e,s,gg)
cs.push("./pages/index/index.wxml:view:1:713")
var o4B=_n('view')
var l5B=_oz(z,21,e,s,gg)
_(o4B,l5B)
cs.pop()
_(c3B,o4B)
cs.pop()
_(tSB,c3B)
cs.push("./pages/index/index.wxml:view:1:786")
var a6B=_n('view')
_rz(z,a6B,'class',22,e,s,gg)
cs.push("./pages/index/index.wxml:view:1:805")
var t7B=_n('view')
var e8B=_oz(z,23,e,s,gg)
_(t7B,e8B)
cs.pop()
_(a6B,t7B)
cs.pop()
_(tSB,a6B)
cs.push("./pages/index/index.wxml:view:1:874")
var b9B=_n('view')
_rz(z,b9B,'class',24,e,s,gg)
cs.push("./pages/index/index.wxml:view:1:893")
var o0B=_n('view')
var xAC=_oz(z,25,e,s,gg)
_(o0B,xAC)
cs.pop()
_(b9B,o0B)
cs.pop()
_(tSB,b9B)
cs.pop()
_(bGB,tSB)
cs.push("./pages/index/index.wxml:view:1:971")
var oBC=_n('view')
_rz(z,oBC,'class',26,e,s,gg)
var fCC=_oz(z,27,e,s,gg)
_(oBC,fCC)
cs.push("./pages/index/index.wxml:text:1:1017")
var cDC=_n('text')
_rz(z,cDC,'class',28,e,s,gg)
var hEC=_oz(z,29,e,s,gg)
_(cDC,hEC)
cs.pop()
_(oBC,cDC)
var oFC=_oz(z,30,e,s,gg)
_(oBC,oFC)
cs.pop()
_(bGB,oBC)
cs.push("./pages/index/index.wxml:view:1:1136")
var cGC=_n('view')
_rz(z,cGC,'class',31,e,s,gg)
cs.push("./pages/index/index.wxml:scroll-view:1:1164")
var oHC=_mz(z,'scroll-view',['class',32,'scrollX',1],[],e,s,gg)
cs.push("./pages/index/index.wxml:view:1:1212")
var lIC=_n('view')
_rz(z,lIC,'class',34,e,s,gg)
cs.push("./pages/index/index.wxml:view:1:1238")
var aJC=_n('view')
_rz(z,aJC,'class',35,e,s,gg)
var tKC=_oz(z,36,e,s,gg)
_(aJC,tKC)
cs.pop()
_(lIC,aJC)
cs.push("./pages/index/index.wxml:view:1:1275")
var eLC=_n('view')
_rz(z,eLC,'class',37,e,s,gg)
var bMC=_oz(z,38,e,s,gg)
_(eLC,bMC)
cs.pop()
_(lIC,eLC)
cs.push("./pages/index/index.wxml:view:1:1312")
var oNC=_n('view')
_rz(z,oNC,'class',39,e,s,gg)
var xOC=_oz(z,40,e,s,gg)
_(oNC,xOC)
cs.pop()
_(lIC,oNC)
cs.push("./pages/index/index.wxml:view:1:1355")
var oPC=_n('view')
_rz(z,oPC,'class',41,e,s,gg)
var fQC=_oz(z,42,e,s,gg)
_(oPC,fQC)
cs.pop()
_(lIC,oPC)
cs.push("./pages/index/index.wxml:view:1:1392")
var cRC=_n('view')
_rz(z,cRC,'class',43,e,s,gg)
var hSC=_oz(z,44,e,s,gg)
_(cRC,hSC)
cs.pop()
_(lIC,cRC)
cs.push("./pages/index/index.wxml:view:1:1429")
var oTC=_n('view')
_rz(z,oTC,'class',45,e,s,gg)
var cUC=_oz(z,46,e,s,gg)
_(oTC,cUC)
cs.pop()
_(lIC,oTC)
cs.pop()
_(oHC,lIC)
var oVC=_v()
_(oHC,oVC)
cs.push("./pages/index/index.wxml:block:1:1473")
var lWC=function(tYC,aXC,eZC,gg){
cs.push("./pages/index/index.wxml:block:1:1473")
cs.push("./pages/index/index.wxml:view:1:1569")
var o2C=_n('view')
_rz(z,o2C,'class',51,tYC,aXC,gg)
cs.push("./pages/index/index.wxml:view:1:1595")
var x3C=_n('view')
_rz(z,x3C,'class',52,tYC,aXC,gg)
var o4C=_oz(z,53,tYC,aXC,gg)
_(x3C,o4C)
cs.pop()
_(o2C,x3C)
cs.push("./pages/index/index.wxml:view:1:1644")
var f5C=_n('view')
_rz(z,f5C,'class',54,tYC,aXC,gg)
var c6C=_oz(z,55,tYC,aXC,gg)
_(f5C,c6C)
cs.pop()
_(o2C,f5C)
cs.push("./pages/index/index.wxml:view:1:1707")
var h7C=_n('view')
_rz(z,h7C,'class',56,tYC,aXC,gg)
var o8C=_oz(z,57,tYC,aXC,gg)
_(h7C,o8C)
cs.pop()
_(o2C,h7C)
cs.push("./pages/index/index.wxml:view:1:1785")
var c9C=_n('view')
_rz(z,c9C,'class',58,tYC,aXC,gg)
var o0C=_oz(z,59,tYC,aXC,gg)
_(c9C,o0C)
cs.pop()
_(o2C,c9C)
cs.push("./pages/index/index.wxml:view:1:1863")
var lAD=_n('view')
_rz(z,lAD,'class',60,tYC,aXC,gg)
var aBD=_oz(z,61,tYC,aXC,gg)
_(lAD,aBD)
cs.pop()
_(o2C,lAD)
cs.push("./pages/index/index.wxml:view:1:1935")
var tCD=_n('view')
_rz(z,tCD,'class',62,tYC,aXC,gg)
var eDD=_oz(z,63,tYC,aXC,gg)
_(tCD,eDD)
cs.pop()
_(o2C,tCD)
cs.pop()
_(eZC,o2C)
cs.pop()
return eZC
}
oVC.wxXCkey=2
_2z(z,49,lWC,e,s,gg,oVC,'item','index','index')
cs.pop()
cs.pop()
_(cGC,oHC)
cs.pop()
_(bGB,cGC)
cs.push("./pages/index/index.wxml:view:1:2051")
var bED=_n('view')
_rz(z,bED,'class',64,e,s,gg)
var oFD=_oz(z,65,e,s,gg)
_(bED,oFD)
cs.pop()
_(bGB,bED)
cs.pop()
_(r,bGB)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
cs.push("./pages/setting/setting.wxml:view:1:1")
var oHD=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/setting/setting.wxml:view:1:38")
var fID=_n('view')
_rz(z,fID,'class',2,e,s,gg)
var cJD=_oz(z,3,e,s,gg)
_(fID,cJD)
cs.pop()
_(oHD,fID)
cs.push("./pages/setting/setting.wxml:form:1:164")
var hKD=_mz(z,'form',['bindsubmit',4,'class',1,'data-event-opts',2],[],e,s,gg)
var oLD=_v()
_(hKD,oLD)
cs.push("./pages/setting/setting.wxml:block:1:263")
var cMD=function(lOD,oND,aPD,gg){
cs.push("./pages/setting/setting.wxml:block:1:263")
cs.push("./pages/setting/setting.wxml:view:1:355")
var eRD=_n('view')
_rz(z,eRD,'class',11,lOD,oND,gg)
cs.push("./pages/setting/setting.wxml:label:1:379")
var bSD=_n('label')
_rz(z,bSD,'class',12,lOD,oND,gg)
cs.push("./pages/setting/setting.wxml:view:1:405")
var oTD=_n('view')
_rz(z,oTD,'class',13,lOD,oND,gg)
var xUD=_oz(z,14,lOD,oND,gg)
_(oTD,xUD)
cs.pop()
_(bSD,oTD)
cs.push("./pages/setting/setting.wxml:view:1:461")
var oVD=_n('view')
_rz(z,oVD,'class',15,lOD,oND,gg)
cs.push("./pages/setting/setting.wxml:button:1:498")
var fWD=_mz(z,'button',['bindtap',16,'class',1,'data-event-opts',2,'size',3,'type',4],[],lOD,oND,gg)
var cXD=_oz(z,21,lOD,oND,gg)
_(fWD,cXD)
cs.pop()
_(oVD,fWD)
cs.push("./pages/setting/setting.wxml:button:1:672")
var hYD=_mz(z,'button',['bindtap',22,'class',1,'data-event-opts',2,'size',3,'type',4],[],lOD,oND,gg)
var oZD=_oz(z,27,lOD,oND,gg)
_(hYD,oZD)
cs.pop()
_(oVD,hYD)
cs.pop()
_(bSD,oVD)
cs.pop()
_(eRD,bSD)
cs.pop()
_(aPD,eRD)
cs.pop()
return aPD
}
oLD.wxXCkey=2
_2z(z,9,cMD,e,s,gg,oLD,'item','index','index')
cs.pop()
cs.push("./pages/setting/setting.wxml:view:1:875")
var c1D=_mz(z,'view',['class',28,'style',1],[],e,s,gg)
cs.push("./pages/setting/setting.wxml:button:1:938")
var o2D=_mz(z,'button',['formType',30,'type',1],[],e,s,gg)
var l3D=_oz(z,32,e,s,gg)
_(o2D,l3D)
cs.pop()
_(c1D,o2D)
cs.pop()
_(hKD,c1D)
cs.pop()
_(oHD,hKD)
cs.pop()
_(r,oHD)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],[],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['pages/cityList/cityList.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"content { color: #333; font-size: ",[0,28],"; }\n.",[1],"select-result { padding: ",[0,15],"; color: #333; font-size: ",[0,28],"; }\n.",[1],"select-result.",[1],"select-title { font-weight: 700; padding: ",[0,20]," ",[0,15],"; white-space: nowrap; -o-text-overflow: ellipsis; text-overflow: ellipsis; overflow: hidden; }\n.",[1],"select-result .",[1],"sub-select-title { font-weight: 700; margin-left: ",[0,15],"; color: #999; font-size: ",[0,24],"; }\n.",[1],"select-result .",[1],"select-btn { vertical-align: middle; }\nwx-picker-view { width: 100%; height: ",[0,1000],"; margin-top: ",[0,20],"; color: #333; font-size: ",[0,28],"; }\n.",[1],"item { line-height: ",[0,100],"; text-align: center; }\n",],undefined,{path:"./pages/cityList/cityList.wxss"});    
__wxAppCode__['pages/cityList/cityList.wxml']=$gwx('./pages/cityList/cityList.wxml');

__wxAppCode__['pages/index/index.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"content { color: #333; font-size: ",[0,28],"; text-align: center; }\n.",[1],"nav-list { position: fixed; top: ",[0,195],"; right: 0; z-index: 100; width: ",[0,150],"; background-color: #fff; border: 1px solid #c8c7cc; border-right: 0; border-radius: ",[0,12]," 0 0 ",[0,12],"; }\n.",[1],"nav-list .",[1],"item { border-top: 1px solid #c8c7cc; padding: ",[0,20]," 0; text-align: center; cursor: pointer; }\n.",[1],"nav-list .",[1],"item:nth-child(1) { border-top: 0; }\n.",[1],"nav-list .",[1],"item.",[1],"on { color: #007aff; }\n.",[1],"info-title { margin: 0 ",[0,15],"; padding: ",[0,30]," 0; font-size: ",[0,32],"; font-weight: 700; text-align: left; border-bottom: 1px solid #c8c7cc; }\n.",[1],"info-sub-title { font-weight: 700; color: #999; font-size: ",[0,24],"; }\n.",[1],"list-info { padding: ",[0,15],"; }\n.",[1],"list-info .",[1],"item { padding: ",[0,20]," 0; border-bottom: 1px solid #c8c7cc; }\n.",[1],"list-all-info { margin: 0 ",[0,15],"; }\n.",[1],"scroll-box { white-space: nowrap; }\n.",[1],"scroll-box .",[1],"scroll-item { display: inline-block; width: ",[0,200],"; }\n.",[1],"scroll-box .",[1],"scroll-item .",[1],"item-text { padding: ",[0,20]," 0; border-left: 1px solid #c8c7cc; border-bottom: 1px solid #c8c7cc; }\n.",[1],"scroll-box .",[1],"scroll-item:nth-child(1) .",[1],"item-text { border-left: 0; }\n.",[1],"all-time { margin: 0 ",[0,15],"; padding: ",[0,20]," 0 ",[0,40],"; }\n",],undefined,{path:"./pages/index/index.wxss"});    
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/setting/setting.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"content { color: #333; font-size: ",[0,28],"; }\n.",[1],"title { padding: ",[0,25]," ",[0,15]," 0; }\n.",[1],"form { padding: ",[0,15],"; }\n.",[1],"form-item { margin: 0 ",[0,15],"; border-top: 1px solid #c8c7cc; }\n.",[1],"form-item:nth-child(1) { border-top: 0; }\n.",[1],"form-item, .",[1],"form-label { min-height: ",[0,100],"; }\n.",[1],"form-item .",[1],"item-title, .",[1],"form-label .",[1],"item-title { display: inline-block; vertical-align: top; width: 50%; line-height: ",[0,100],"; white-space: nowrap; -o-text-overflow: ellipsis; text-overflow: ellipsis; overflow: hidden; }\n.",[1],"form-item .",[1],"item-body, .",[1],"form-label .",[1],"item-body { display: inline-block; width: 50%; min-height: ",[0,100],"; }\n.",[1],"form-item .",[1],"move-btn-box, .",[1],"form-label .",[1],"move-btn-box { -webkit-box-sizing: border-box; box-sizing: border-box; padding: ",[0,20]," 0; }\n.",[1],"form-item .",[1],"move-btn, .",[1],"form-label .",[1],"move-btn { display: inline-block; margin-left: ",[0,15],"; }\n",],undefined,{path:"./pages/setting/setting.wxss"});    
__wxAppCode__['pages/setting/setting.wxml']=$gwx('./pages/setting/setting.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        plus.webview.postMessageToUniNView({
            type: 'UniWebviewReady-' + plus.webview.currentWebview().id
        }, '__uniapp__service');
})();
