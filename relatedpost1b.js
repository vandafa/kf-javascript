//<![CDATA[
function readpostlabels(e){for(var t,r,l,a=0;a<e.feed.entry.length&&(t=e.feed.entry[a],a!=e.feed.entry.length);a++){relatedTitles[relatedTitlesNum]=t.title.$t,l="","content"in t?l=t.content.$t:"summary"in t&&(l=t.summary.$t),relatedpSummary[relatedTitlesNum]=removetags(l,relatedmaxnum),r="media$thumbnail"in t?t.media$thumbnail.url:relatednoimage,relatedThumb[relatedTitlesNum]=r;for(var d=0;d<t.link.length;d++)if("alternate"==t.link[d].rel){relatedUrls[relatedTitlesNum]=t.link[d].href;break}relatedTitlesNum++}}function showrelated(){for(var e=new Array(0),t=new Array(0),r=new Array(0),l=new Array(0),a=0;a<relatedUrls.length;a++)contains(e,relatedUrls[a])||(e.length+=1,e[e.length-1]=relatedUrls[a],t.length+=1,t[t.length-1]=relatedTitles[a],r.length+=1,r[r.length-1]=relatedpSummary[a],l.length+=1,l[l.length-1]=relatedThumb[a]);relatedTitles=t,relatedUrls=e,relatedpSummary=r,relatedThumb=l;for(var a=0;a<relatedTitles.length;a++){var d=Math.floor((relatedTitles.length-1)*Math.random()),n=relatedTitles[a],s=relatedUrls[a],m=relatedpSummary[a],i=relatedThumb[a];relatedTitles[a]=relatedTitles[d],relatedUrls[a]=relatedUrls[d],relatedpSummary[a]=relatedpSummary[d],relatedThumb[a]=relatedThumb[d],relatedTitles[d]=n,relatedUrls[d]=s,relatedpSummary[d]=m,relatedThumb[d]=i}for(var u,h=0,o=Math.floor((relatedTitles.length-1)*Math.random()),g=o,f=document.URL;h<relatedPostsNum&&(relatedUrls[o]==f||(u="<div class='relatedsumposts'>",u+="<a href='"+relatedUrls[o]+"' title='"+relatedTitles[o]+"'><img src='"+relatedThumb[o]+"' /></a>",u+="<h6><a href='"+relatedUrls[o]+"' target='_self'>"+relatedTitles[o]+"</a></h6>",u+="<p>"+relatedpSummary[o]+" ... </p>",u+="</div>",document.write(u),h++,h!=relatedPostsNum))&&(o<relatedTitles.length-1?o++:o=0,o!=g););}function removetags(e,t){for(var r=e.split("<"),l=0;l<r.length;l++)-1!=r[l].indexOf(">")&&(r[l]=r[l].substring(r[l].indexOf(">")+1,r[l].length));return r=r.join(""),r=r.substring(0,t-1)}function contains(e,t){for(var r=0;r<e.length;r++)if(e[r]==t)return!0;return!1}
//]]>