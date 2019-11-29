(this["webpackJsonpreact-context-music"]=this["webpackJsonpreact-context-music"]||[]).push([[0],{34:function(e,t,a){e.exports=a(66)},39:function(e,t,a){},58:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),l=a.n(c),s=(a(39),a(40),a(12)),i=a(6),o="d80087bebab83986c784cfa988076301",m="https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/",u=a(9),d=a(10),p=a(13),E=a(11),b=a(14),f=a(30),h=a(7),g=a.n(h);function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var k=r.a.createContext(null),v=function(e,t){switch(t.type){case"SEARCH_TRACKS":return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(a,!0).forEach((function(t){Object(f.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{track_list:t.payload,heading:"Search Results"});default:return e}},N=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={track_list:[],heading:"Top 10 tracks",dispatch:function(e){return a.setState((function(t){return v(t,e)}))}},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("".concat(m,"chart.tracks.get?page=$1&page_size=10&country=us&f_has_lyrics=1&apikey=").concat(o)).then((function(t){e.setState({track_list:t.data.message.body.track_list})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement(k.Provider,{value:this.state},this.props.children)}}]),t}(r.a.Component),O=k.Consumer,_=function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark mb-5"},r.a.createElement("span",{className:"navbar-brand mb-0 mx-auto"},"LyricFinder"))},j=function(){return r.a.createElement("div",{className:"search-loading"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},w=(a(58),j),S=function(e){var t=e.track;return r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"card mb-4 shadow-sm"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t.artist_name),r.a.createElement("p",{className:"card-text"},r.a.createElement("strong",null,r.a.createElement("i",{className:"fas fa-play"})," Track"),": ",t.track_name,r.a.createElement("br",null),r.a.createElement("strong",null,r.a.createElement("i",{className:"fas fa-compact-disc"})," Album"),": ",t.album_name),r.a.createElement(s.b,{to:"lyrics/track/".concat(t.track_id),className:"btn btn-dark btn-block"},r.a.createElement("i",{className:"fas fa-chevron-right"})," View Lyrics"))))},x=function(){return r.a.createElement(O,null,(function(e){var t=e.track_list,a=e.heading;return void 0===t||0===t.length?r.a.createElement(w,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"text-center mb-4"},a),r.a.createElement("div",{className:"row"},t.map((function(e){return r.a.createElement(S,{key:e.track.track_id,track:e.track})}))))}))},C=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={trackTitle:""},a.onChange=function(e){a.setState({trackTitle:e.target.value})},a.findTrack=function(e,t){t.preventDefault(),g.a.get("".concat(m,"track.search?q_artist=").concat(a.state.trackTitle,"&page_size=3&page=1&s_track_rating=desc&apikey=").concat(o)).then((function(t){e({type:"SEARCH_TRACKS",payload:t.data.message.body.track_list})})).catch((function(e){return console.log(e)}))},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(O,null,(function(t){var a=t.dispatch;return r.a.createElement("div",{className:"card card-body mb-4 p-4"},r.a.createElement("h1",{className:"display-6 text-center"},r.a.createElement("i",{className:"fas fa-music"})," Search For A Song"),r.a.createElement("p",{className:"load text-center"},"Get the lyrics for any song"),r.a.createElement("form",{onSubmit:function(t){return e.findTrack(a,t)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Song title...",name:"trackTitle",value:e.state.trackTitle,onChange:e.onChange})),r.a.createElement("button",{className:"btn btn-primary btn-lg btn-block mb-2"},"Get Track Lyrics")))}))}}]),t}(r.a.Component),T=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null),r.a.createElement(x,null))},D=a(33),A=a.n(D),P=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={track:{},lyrics:{}},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params;g.a.get("".concat(m,"track.lyrics.get?track_id=").concat(t.id,"&apikey=").concat(o)).then((function(a){return e.setState({lyrics:a.data.message.body.lyrics}),g.a.get("".concat(m,"track.get?track_id=").concat(t.id,"&apikey=").concat(o))})).then((function(t){e.setState({track:t.data.message.body.track})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.track,a=e.lyrics;return void 0===t||void 0===a||0===Object.keys(t).length||0===Object.keys(a).length?r.a.createElement(w,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(s.b,{to:"/",className:"btn btn-dark btn-sm mb-4"},"Go Back"),r.a.createElement("div",{className:"card"},r.a.createElement("h5",{className:"card-header"},t.track_name," by "," ",r.a.createElement("span",{className:"text-secondary"},t.artist_name)),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},a.lyrics_body))),r.a.createElement("ul",{className:"list-group mt-3"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Album ID"),": ",t.album_id),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Song Genre"),": "," ",t.primary_genres.music_genre_list[0].music_genre.music_genre_name),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Explicit Words"),": ",0===t.explicit?"No":"Yes"),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Release Date"),": "," ",r.a.createElement(A.a,{format:"MM/DD/YYYY"},t.updated_time))))}}]),t}(r.a.Component),F=function(){return r.a.createElement(N,null,r.a.createElement(s.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null),r.a.createElement("div",{className:"container"},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:T}),r.a.createElement(i.a,{path:"/lyrics/track/:id",component:P}))))))};l.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.962862df.chunk.js.map