/**
 * A plugin which enables rendering of math equations inside
 * of reveal.js slides. Essentially a thin wrapper for MathJax.
 *
 * @author Hakim El Hattab
 */
var RevealMath = window.RevealMath || (function(){

	var options = Reveal.getConfig().math || {};
	var mathjax = options.mathjax || 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/';
	var config = options.config || 'tex-chtml';
	var url = mathjax + config + ".js";

	function loadScript( url, callback ) {

		var head = document.querySelector( 'head' );
		var script = document.createElement( 'script' );
		script.type = 'text/javascript';
		script.src = url;

		// Wrapper for callback to make sure it only fires once
		var finish = function() {
			if( typeof callback === 'function' ) {
				callback.call();
				callback = null;
			}
		}

		script.onload = finish;

		// IE
		script.onreadystatechange = function() {
			if ( this.readyState === 'loaded' ) {
				finish();
			}
		}

		// Normal browsers
		head.appendChild( script );

	}

	return {
		init: function() {

			options.mathjax = options.config = null;

			loadScript( url, function() {

				window.MathJax = {
				  options: {
				    ignoreHtmlClass: 'tex2jax_ignore',
				    processHtmlClass: 'tex2jax_process'
				  },
				  tex: {
				    autoload: {
				      color: [],
				      colorV2: ['color']
				    },
				    packages: {'[+]': ['noerrors']}
				  },
				  loader: {
				    load: ['[tex]/noerrors']
				  },
				  startup: {
				      ready: () => {
				        MathJax.startup.defaultReady();
				        MathJax.startup.promise.then(() => {
					// Typeset followed by an immediate reveal.js layout since
					// the typesetting process could affect slide height
					Reveal.layout
				      });
				    }
				  }
				};
			} );

		}
	}

})();

Reveal.registerPlugin( 'math', RevealMath );
