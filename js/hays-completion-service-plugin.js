Dan's Tools
Javascript Beautifier
Development
Encode/Decoders
Formatters
Images
Internet
Minifiers
SEO
Related: Javascript MinifyJavascript ObfuscateCSS FormatterHTML FormatterPHP Formatter
     
 Log Javascript Errors to the Cloud
Track JS errors to help debug your site using live information from your users.

1
var isIE6 = /MSIE 6/i.test(navigator.userAgent);
2
(function(jQuery) {
3
    var delay;
4
    var html = {
5
        CONTAINER: 'dl',
6
        SUGGESTION: 'dd',
7
        LABEL: 'label'
8
    };
9
    var keys = {
10
        UP: 38,
11
        DOWN: 40,
12
        DEL: 46,
13
        BACKSPACE: 8,
14
        TAB: 9,
15
        RETURN: 13,
16
        ESC: 27,
17
        PAGEUP: 33,
18
        PAGEDOWN: 34
19
    };
20
    jQuery.fn.addHaysSuggestionService = function(settings, container) {
21
        var config = {
22
            'serviceUrl': '/twigkit/services/query-suggestion-service/',
23
            'serviceId': 'static-completions',
24
            'selectedClassName': 'selected'
25
        };
26
        if (settings) {
27
            jQuery.extend(config, settings);
28
        }
29
        this.each(function() {
30
            attach(this, container, config, false);
31
        });
32
        return this;
33
    };
34
​
35
    function attach(elem, container, config, escape) {
36
        var template = (escape === undefined) ? Tempo.prepare(container) : Tempo.prepare(container, {
37
            'escape': escape
38
        });
39
        container.css('top', jQuery(jQuery(elem)).offset().top + jQuery(elem).outerHeight() + 'px');
40
        container.css('left', jQuery(jQuery(elem)).offset().left + 'px');
41
        jQuery(elem).bind('keydown keyup', function(event) {
42
            var input = event.target;

Format Code




HTML <style>, <script> formatting: End script and style with newline?  Detect packers and obfuscators?  Keep array indentation?  Break lines on chained methods?  Space before conditional: "if(x)" / "if (x)"  Unescape printable chars encoded as \xNN or \uNNNN?  Use JSLint-happy formatting tweaks?
Javascript Beautifier
Enter your messy, minified, or obfuscated Javascript (JS) into the field above to have it cleaned up and made pretty. The editor above also contains helpful line numbers and syntax highlighting. There are many option to tailor the beautifier to your personal formatting tastes.

When do you use Javascript Beautifier
Often when writing Javascript (JS) your indentation, spacing, and other formatting can become a bit disorganized. It is also common for multiple developers to work on a single project who have different formatting techniques.  This tool is helpful for making the formatting of a file consistent. It is also common for Javascript (JS) to be minified or obfuscated. You can use this tool to make that code look pretty and readable so it is easier to edit.

Examples
The minified Javascript (JS) below:

function j(e)
{var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}
Becomes this beautified :

function j(e)
   {
      var t = e.length,
         n = x.type(e);
      return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
   }
© Dan's Tools | Contact | About | For more dev tools, check out danstools.com