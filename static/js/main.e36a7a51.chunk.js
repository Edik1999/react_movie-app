(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{43:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var a=s(2),i=s.n(a),n=s(13),r=s.n(n),c=s(4),o=s.n(c),m=s(14),l=s(15),j=s(16),d=s(19),u=s(18),v=s(17),b=s.n(v),h=(s(43),s(0));var p=function(e){e.id;var t=e.year,s=e.title,a=e.summary,i=e.poster,n=e.rating,r=e.genres;return Object(h.jsxs)("div",{className:"movie",children:[Object(h.jsx)("img",{src:i,alt:s,title:s}),Object(h.jsxs)("div",{className:"movie__column",children:[Object(h.jsxs)("h3",{className:"movie__title",children:[s,"  (",n,")"]}),Object(h.jsx)("h5",{className:"movie__year",children:t}),Object(h.jsx)("ul",{className:"movie__genres",children:r.map((function(e,t){return Object(h.jsx)("li",{className:"movie__genre",children:e},t)}))}),Object(h.jsxs)("p",{className:"movie__summary",children:[a.slice(0,140),"..."]})]})]})},g=(s(45),function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(o.a.mark((function t(){var s,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(h.jsx)("section",{className:"container",children:t?Object(h.jsx)("div",{className:"loader",children:Object(h.jsx)("span",{className:"loader__text",children:Object(h.jsx)("img",{src:"829.gif",alt:"loading..."})})}):Object(h.jsx)("div",{className:"movies",children:s.map((function(e){return Object(h.jsx)(p,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,rating:e.rating,genres:e.genres},e.id)}))})})}}]),s}(i.a.Component));r.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.e36a7a51.chunk.js.map