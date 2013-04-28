A jquery bootstrap confirm box plugin mainly designed for HTTP requests.

You can use this for forms including POST and GET requests and even for redirection using an anchor tag.
You need to have following files included before using this plugin.

Javascript
----------------------------------------------------------
jquery-1.8.3.min.js
bootstrap.js
bootbox.min.js
----------------------------------------------------------

CSS
---------------------------------------------------------
bootstrap.css 


How to use it?

---------------------------------------------------------
For forms

$("submit-button-id").bootconfirm({formid:"YOUR_FORM_ID" })

For anchors <a>.

$("element-id).bootconfirm()
---------------------------------------------------------

So, before every request is send to the server, you have to confirm the action. Will be handy if you are going to make a deadly DB operation.