(function ($) {
  "use strict";
    $.fn.syntaxPP = function( options ) {
 
        // Default options
        var settings = $.extend({
            filename: 'Default.html',
            
        }, options );
var code = this.html();
var lines = code.split(/\r\n|\r|\n/).length;
 var linescode = '';
 for(var i=1;i<=lines;i++){
	 linescode += i+'<br>';
 }

code = code
				   .replace(/([^\s>\/]+)=/gi,'<span >$1=</span>')				   
				   .replace(/("(.*?)"|'(.*?)')/g,'<span class="attr-value">$1</span>')				   
				   .replace(/&lt;([\s\S]*?)&gt;/g,'<span class="tag">&lt;$1&gt;</span>')
				   .replace(/&lt;!--(.*?)--&gt;/g,'<span class="cmt">&lt;!--$1--&gt;</span>')
				   .replace(/&lt;!DOCTYPE(.*?)&gt;/g,'<span style="color:grey">&lt;!DOCTYPE $1&gt;</span>')
				   .replace(/#([a-f0-9]{3}|[a-f0-9]{6})\s/gi,'<span style=" color:black; border-bottom:2px solid #$1;">#$1</span> ')				
				   
		;
	
	return this.before('<div class="file-name">'+settings.filename+'&nbsp;&nbsp;&times;</div><div class="syntaxPP"><div class="count">'+linescode+'</div><div class="code"><code>'+code+'</pre></code></div></div>').remove();

 };

}(jQuery));

//$("#code").before('<div class="syntaxPP"><div class="count"></div><div class="code">'+dataCode+'</div>').remove();  