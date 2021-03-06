/*
 * A jquery bootstrap confirm box plugin
 * author : Vishnu.R.S
 * website : www.vishnurs.com
 * Blog    : blog.vishnurs.com 
 */

(function($){
    $.fn.bootconfirm=function(options){
	var defaults={formid:""};
	var settings=$.extend({},defaults,options);
	var attribute=this.attr("type");
	if(typeof attribute=='undefined'||attribute == false)
	    var attribute="href";
	if(attribute == "submit"){
	    var type=this.attr("type");
	    if(type="submit"){
		window.event.preventDefault();
		bootbox.confirm("Are you sure you want to perform this action ?",function(result){
		    if(result==true ){
			$("#"+settings["formid"]).submit();
		      
		    }
		  
		}) 
	}}
	else if(attribute=="href") {
	    window.event.preventDefault();
	    link=this.attr("href");
	    bootbox.confirm("Are you sure you want to perform this action ?",function(result){
		if(result==true ){
		    window.location=link;
		  
		}
	      
	    }
	      
	)}
	return this;
      
    };
  
})(jQuery)
