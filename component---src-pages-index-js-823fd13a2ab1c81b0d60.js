(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{152:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return f});var r=a(7),i=a.n(r),n=a(0),o=a.n(n),s=a(154),l=a(161),d=a(158),c=a(159),u=a(155),A=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return o.a.createElement(d.a,{location:this.props.location,title:t},o.a.createElement(c.a,{title:"All posts"}),o.a.createElement(l.a,null),a.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return o.a.createElement("div",{key:t.fields.slug},o.a.createElement("h3",{style:{marginBottom:Object(u.a)(.25)}},o.a.createElement(s.a,{style:{boxShadow:"none"},to:t.fields.slug},a)),o.a.createElement("small",null,t.frontmatter.date),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}}))}))},t}(o.a.Component);t.default=A;var f="1623555389"},154:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var r=a(0),i=a.n(r),n=a(4),o=a.n(n),s=a(33),l=a.n(s);a.d(t,"a",function(){return l.a});a(156);var d=i.a.createContext({}),c=function(e){return i.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},155:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return d});var r=a(166),i=a.n(r),n=a(167),o=a.n(n);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var s=new i.a(o.a);var l=s.rhythm,d=s.scale},156:function(e,t,a){var r;e.exports=(r=a(157))&&r.default||r},157:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),i=a.n(r),n=a(4),o=a.n(n),s=a(55),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},158:function(e,t,a){"use strict";a(34);var r=a(7),i=a.n(r),n=a(0),o=a.n(n),s=a(154),l=a(155),d=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,r=t.title,i=t.children;return e="/"===a.pathname?o.a.createElement("h1",{style:Object.assign({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5),marginTop:0})},o.a.createElement(s.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},o.a.createElement(s.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},o.a.createElement("header",null,e),o.a.createElement("main",null,i),o.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},t}(o.a.Component);t.a=d},159:function(e,t,a){"use strict";var r=a(160),i=a(0),n=a.n(i),o=a(4),s=a.n(o),l=a(168),d=a.n(l);function c(e){var t=e.description,a=e.lang,i=e.meta,o=e.title,s=r.data.site,l=t||s.siteMetadata.description;return n.a.createElement(d.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:o},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:l}].concat(i)})}c.defaultProps={lang:"en",meta:[],description:""},c.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),title:s.a.string.isRequired},t.a=c},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Hello, I'm Dan",description:"Homepage and blog of Dan Applegate, a software engineering manager in New York City",author:"Dan Applegate"}}}}},161:function(e,t,a){"use strict";a(162);var r=a(164),i=a(0),n=a.n(i),o=a(154),s=a(165),l=a.n(s),d=a(155);var c="2796725669";t.a=function(){return n.a.createElement(o.b,{query:c,render:function(e){var t=e.site.siteMetadata,a=t.author,r=t.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(d.a)(2.5)}},n.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,n.a.createElement("strong",null,a)," is a software engineering manager living in Brooklyn."," ",n.a.createElement("a",{href:"https://www.linkedin.com/in/"+r.linkedin+"/"},"Connect with him on LinkedIn")))},data:r})}},162:function(e,t,a){"use strict";a(163)("fixed",function(e){return function(){return e(this,"tt","","")}})},163:function(e,t,a){var r=a(11),i=a(18),n=a(19),o=/"/g,s=function(e,t,a,r){var i=String(n(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},164:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEBf/EABcBAQEBAQAAAAAAAAAAAAAAAAIDAAH/2gAMAwEAAhADEAAAAcV1y4Npy5+oNLDm/8QAHBAAAgICAwAAAAAAAAAAAAAAAQIDERIhABMz/9oACAEBAAEFAggZpIgDjxTS5bK7odlW0Hn/AP/EABkRAAIDAQAAAAAAAAAAAAAAAAARARASQf/aAAgBAwEBPwGFkZyv/8QAFxEBAAMAAAAAAAAAAAAAAAAAEAExQf/aAAgBAgEBPwGbNP/EAB0QAAAGAwEAAAAAAAAAAAAAAAABAhARIRMxUUL/2gAIAQEABj8CKdBOPttITxoF+Spv/8QAHBABAAMAAgMAAAAAAAAAAAAAAQARIRAxQXGR/9oACAEBAAE/ITH3xcFdIdwlvVSr3b1eMsEYGQD0vT4gEZ5n/9oADAMBAAIAAwAAABDwAEP/xAAXEQEBAQEAAAAAAAAAAAAAAAABABAx/9oACAEDAQE/EGlg6i//xAAXEQEBAQEAAAAAAAAAAAAAAAAAEQEx/9oACAECAQE/EKhGm9f/xAAdEAEAAgICAwAAAAAAAAAAAAABABEhQVFhMYHR/9oACAEBAAE/EGXSy0PMsogJmke4WkoUAy/O4EaddAAUTHPMIwpHIkGCip7lHwcHSqXEGkF6J//Z",width:50,height:50,src:"/static/6429310170991188730ae45826753c50/9b664/profile-pic.jpg",srcSet:"/static/6429310170991188730ae45826753c50/9b664/profile-pic.jpg 1x,\n/static/6429310170991188730ae45826753c50/06a10/profile-pic.jpg 1.5x,\n/static/6429310170991188730ae45826753c50/f1b5a/profile-pic.jpg 2x"}}},site:{siteMetadata:{author:"Dan Applegate",social:{linkedin:"dan-applegate-75496b21"}}}}}},165:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),o=r(a(35)),s=r(a(75)),l=r(a(76)),d=r(a(0)),c=r(a(4)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t},A=Object.create({}),f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return A[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,g="undefined"!=typeof window,h=g&&window.IntersectionObserver,m=new WeakMap;var E=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(m.has(e.target)){var t=m.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),m.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),m.set(e,t)),function(){a.unobserve(e),m.delete(e)}},b=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+r+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+s+l+a+i+t+o+n+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,o=e.onLoad,c=e.onError,u=e.loading,A=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},A,{onLoad:o,onError:c,ref:t,loading:u,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var w=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=g&&f(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!p&&h&&!t.critical&&!a.seenBefore;var r=t.critical||g&&(p||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=E(e,function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,A[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,A=void 0===c?{}:c,f=e.placeholderClassName,p=e.fluid,g=e.fixed,h=e.backgroundColor,m=e.durationFadeIn,E=e.Tag,w=e.itemProp,S=e.loading,v=!1===this.state.fadeIn||this.state.imgLoaded,j=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,l.default)({opacity:v?1:0,transition:j?"opacity "+m+"ms":"none"},s),B="boolean"==typeof h?"lightgray":h,I={transitionDelay:m+"ms"},x=(0,l.default)({opacity:this.state.imgLoaded?0:1},j&&I,s,A),L={title:t,alt:this.state.isVisible?"":a,style:x,className:f};if(p){var O=p;return d.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(O.srcSet)},d.default.createElement(E,{style:{width:"100%",paddingBottom:100/O.aspectRatio+"%"}}),B&&d.default.createElement(E,{title:t,style:(0,l.default)({backgroundColor:B,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},j&&I)}),O.base64&&d.default.createElement(y,(0,l.default)({src:O.base64},L)),O.tracedSVG&&d.default.createElement(y,(0,l.default)({src:O.tracedSVG},L)),this.state.isVisible&&d.default.createElement("picture",null,O.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:O.srcSetWebp,sizes:O.sizes}),d.default.createElement(y,{alt:a,title:t,sizes:O.sizes,src:O.src,crossOrigin:this.props.crossOrigin,srcSet:O.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,l.default)({alt:a,title:t,loading:S},O))}}))}if(g){var C=g,M=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:C.width,height:C.height},n);return"inherit"===n.display&&delete M.display,d.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(C.srcSet)},B&&d.default.createElement(E,{title:t,style:(0,l.default)({backgroundColor:B,width:C.width,opacity:this.state.imgLoaded?0:1,height:C.height},j&&I)}),C.base64&&d.default.createElement(y,(0,l.default)({src:C.base64},L)),C.tracedSVG&&d.default.createElement(y,(0,l.default)({src:C.tracedSVG},L)),this.state.isVisible&&d.default.createElement("picture",null,C.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:C.srcSetWebp,sizes:C.sizes}),d.default.createElement(y,{alt:a,title:t,width:C.width,height:C.height,sizes:C.sizes,src:C.src,crossOrigin:this.props.crossOrigin,srcSet:C.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,l.default)({alt:a,title:t,loading:S},C))}}))}return null},t}(d.default.Component);w.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var S=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),v=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});w.propTypes={resolutions:S,sizes:v,fixed:S,fluid:v,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"])};var j=w;t.default=j}}]);
//# sourceMappingURL=component---src-pages-index-js-823fd13a2ab1c81b0d60.js.map