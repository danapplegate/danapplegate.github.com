(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{148:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return g});a(34);var i=a(7),r=a.n(i),n=a(0),s=a.n(n),o=a(152),l=a(170),d=a.n(l),c=a(159),u=a(156),f=a(157),A=a(153),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.location,a=this.props.data.site.siteMetadata,i=a.title,r=a.siteUrl,n=this.props.pageContext,l=n.previous,p=n.next;return s.a.createElement(u.a,{location:t,title:i},s.a.createElement(f.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),s.a.createElement("h1",null,e.frontmatter.title),s.a.createElement("p",{style:Object.assign({},Object(A.b)(-.2),{display:"block",marginBottom:Object(A.a)(1),marginTop:Object(A.a)(-1)})},e.frontmatter.date," · ",e.timeToRead," min read"),s.a.createElement("h4",null,e.frontmatter.subtitle),s.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),s.a.createElement("hr",{style:{marginBottom:Object(A.a)(1)}}),s.a.createElement(c.a,null),s.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},s.a.createElement("li",null,l&&s.a.createElement(o.a,{to:l.fields.slug,rel:"prev"},"← ",l.frontmatter.title)),s.a.createElement("li",null,p&&s.a.createElement(o.a,{to:p.fields.slug,rel:"next"},p.frontmatter.title," →"))),s.a.createElement(d.a,{identifier:e.id,title:e.title,url:""+r+t.pathname}))},t}(s.a.Component);t.default=p;var g="403315633"},152:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var i=a(0),r=a.n(i),n=a(4),s=a.n(n),o=a(33),l=a.n(o);a.d(t,"a",function(){return l.a});a(154);var d=r.a.createContext({}),c=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},153:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return d});var i=a(164),r=a.n(i),n=a(165),s=a.n(n),o=new r.a(s.a);var l=o.rhythm,d=o.scale},154:function(e,t,a){var i;e.exports=(i=a(155))&&i.default||i},155:function(e,t,a){"use strict";a.r(t);a(34);var i=a(0),r=a.n(i),n=a(4),s=a.n(n),o=a(55),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=d},156:function(e,t,a){"use strict";a(34);var i=a(7),r=a.n(i),n=a(0),s=a.n(n),o=a(152),l=a(153),d=(a(166),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,i=t.title,r=t.children;return e="/"===a.pathname?s.a.createElement("h1",{style:Object.assign({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5)})},s.a.createElement(o.a,{to:"/"},i)):s.a.createElement("h3",{style:{marginTop:0}},s.a.createElement(o.a,{to:"/"},i)),s.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},s.a.createElement("header",null,e),s.a.createElement("main",null,r),s.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",s.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},t}(s.a.Component));t.a=d},157:function(e,t,a){"use strict";var i=a(158),r=a(0),n=a.n(r),s=a(4),o=a.n(s),l=a(167),d=a.n(l);function c(e){var t=e.description,a=e.lang,r=e.meta,s=e.title,o=i.data.site,l=t||o.siteMetadata.description;return n.a.createElement(d.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:s},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:l}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},c.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},t.a=c},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Managing Reflections",description:"Homepage and blog of Dan Applegate, a software engineering manager in New York City",author:"Dan Applegate"}}}}},159:function(e,t,a){"use strict";a(160);var i=a(162),r=a(0),n=a.n(r),s=a(152),o=a(163),l=a.n(o),d=a(153);var c="2796725669";t.a=function(){return n.a.createElement(s.b,{query:c,render:function(e){var t=e.site.siteMetadata,a=t.author,i=t.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(d.a)(2.5)}},n.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,n.a.createElement("strong",null,a)," is a software engineering manager living in Brooklyn."," ",n.a.createElement("a",{href:"https://www.linkedin.com/in/"+i.linkedin+"/"},"Connect with him on LinkedIn")))},data:i})}},160:function(e,t,a){"use strict";a(161)("fixed",function(e){return function(){return e(this,"tt","","")}})},161:function(e,t,a){var i=a(11),r=a(18),n=a(19),s=/"/g,o=function(e,t,a,i){var r=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(i).replace(s,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),i(i.P+i.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},162:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMEAQX/xAAXAQEBAQEAAAAAAAAAAAAAAAACAwAB/9oADAMBAAIQAxAAAAHFfti4Npy83WGtBzf/xAAcEAABBAMBAAAAAAAAAAAAAAACAAEDERIhMiL/2gAIAQEAAQUCYGIpIhFYoectuG691Zw8f//EABcRAQEBAQAAAAAAAAAAAAAAAAARAkH/2gAIAQMBAT8BzIriP//EABcRAQADAAAAAAAAAAAAAAAAABABMUH/2gAIAQIBAT8BmzT/xAAcEAABBAMBAAAAAAAAAAAAAAABABARQQITMSH/2gAIAQEABj8CAPENfZaVjYlopAGvW//EABoQAAMBAQEBAAAAAAAAAAAAAAABETEhQVH/2gAIAQEAAT8heLPRcpgmPseN8ktCsFcwkGrXyWEZRYOtPj+n/9oADAMBAAIAAwAAABAXzz7/xAAYEQEAAwEAAAAAAAAAAAAAAAABABARMf/aAAgBAwEBPxDR7Q6gJ//EABcRAQEBAQAAAAAAAAAAAAAAABEBABD/2gAIAQIBAT8QQxxbXf/EABsQAQEBAQADAQAAAAAAAAAAAAERACExQWFx/9oACAEBAAE/EEVVX6+ZxMCJWjzFXN2oA1U8GXFSFB6Hf3usGeIxJT1vvQ1ZAZWPnXFQQBXCHN//2Q==",width:50,height:50,src:"/static/13fd4225c546f3359a08a43530babe44/9b664/profile-pic.jpg",srcSet:"/static/13fd4225c546f3359a08a43530babe44/9b664/profile-pic.jpg 1x,\n/static/13fd4225c546f3359a08a43530babe44/06a10/profile-pic.jpg 1.5x,\n/static/13fd4225c546f3359a08a43530babe44/f1b5a/profile-pic.jpg 2x"}}},site:{siteMetadata:{author:"Dan Applegate",social:{linkedin:"dan-applegate-75496b21"}}}}}},163:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var r,n=i(a(7)),s=i(a(35)),o=i(a(76)),l=i(a(74)),d=i(a(0)),c=i(a(4)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t},f=Object.create({}),A=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,g="undefined"!=typeof window,m=g&&window.IntersectionObserver,h=new WeakMap;var b=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),h.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),h.set(e,t)),function(){a.unobserve(e),h.delete(e)}},E=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+i+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+o+l+a+r+t+s+n+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:i,src:r},f,{onLoad:s,onError:c,ref:t,loading:u,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var v=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=g&&A(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!p&&m&&!t.critical&&!a.seenBefore;var i=t.critical||g&&(p||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:A(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=b(e,function(){var e=A(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,A=e.placeholderClassName,p=e.fluid,g=e.fixed,m=e.backgroundColor,h=e.durationFadeIn,b=e.Tag,v=e.itemProp,w=e.loading,S=!1===this.state.fadeIn||this.state.imgLoaded,B=!0===this.state.fadeIn&&!this.state.imgCached,j=(0,l.default)({opacity:S?1:0,transition:B?"opacity "+h+"ms":"none"},o),R="boolean"==typeof m?"lightgray":m,I={transitionDelay:h+"ms"},x=(0,l.default)({opacity:this.state.imgLoaded?0:1},B&&I,o,f),Q={title:t,alt:this.state.isVisible?"":a,style:x,className:A};if(p){var L=p;return d.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(L.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/L.aspectRatio+"%"}}),R&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},B&&I)}),L.base64&&d.default.createElement(y,(0,l.default)({src:L.base64},Q)),L.tracedSVG&&d.default.createElement(y,(0,l.default)({src:L.tracedSVG},Q)),this.state.isVisible&&d.default.createElement("picture",null,L.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:L.srcSetWebp,sizes:L.sizes}),d.default.createElement(y,{alt:a,title:t,sizes:L.sizes,src:L.src,crossOrigin:this.props.crossOrigin,srcSet:L.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:E((0,l.default)({alt:a,title:t,loading:w},L))}}))}if(g){var O=g,C=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:O.width,height:O.height},n);return"inherit"===n.display&&delete C.display,d.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:C,ref:this.handleRef,key:"fixed-"+JSON.stringify(O.srcSet)},R&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:R,width:O.width,opacity:this.state.imgLoaded?0:1,height:O.height},B&&I)}),O.base64&&d.default.createElement(y,(0,l.default)({src:O.base64},Q)),O.tracedSVG&&d.default.createElement(y,(0,l.default)({src:O.tracedSVG},Q)),this.state.isVisible&&d.default.createElement("picture",null,O.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:O.srcSetWebp,sizes:O.sizes}),d.default.createElement(y,{alt:a,title:t,width:O.width,height:O.height,sizes:O.sizes,src:O.src,crossOrigin:this.props.crossOrigin,srcSet:O.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:E((0,l.default)({alt:a,title:t,loading:w},O))}}))}return null},t}(d.default.Component);v.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var w=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),S=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});v.propTypes={resolutions:w,sizes:S,fixed:w,fluid:S,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"])};var B=v;t.default=B},170:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var r=i(a(74)),n=i(a(7)),s=i(a(0)),o=i(a(4));a(171);var l=function(e){function t(t){var a;return(a=e.call(this,t)||this).state=t,a.shortname="danapplegate",a}(0,n.default)(t,e);var a=t.prototype;return a.componentWillReceiveProps=function(e){this.setState(e)},a.componentWillMount=function(){if("undefined"!=typeof window&&window.document){var e=this;window.disqus_config=function(){this.page.identifier=e.state.identifier,this.page.title=e.state.title,this.page.url=e.state.url};var t=document.createElement("script");t.src="//"+this.shortname+".disqus.com/embed.js",t.async=!0,document.body.appendChild(t)}},a.render=function(){var e=this.props;return s.default.createElement("div",(0,r.default)({id:"disqus_thread"},e,{__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/index.js",lineNumber:36},__self:this}))},t}(s.default.Component);t.default=l,l.propTypes={identifier:o.default.string,title:o.default.string,url:o.default.string}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-667aaecd023eb0fb2f38.js.map