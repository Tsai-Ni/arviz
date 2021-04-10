(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("10a8b8d8-6ab7-441c-b97d-89b8fcda6399");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '10a8b8d8-6ab7-441c-b97d-89b8fcda6399' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.1.min.js": "YF85VygJKMVnHE+lLv2AM93Vbstr0yo2TbIu5v8se5Rq3UQAUmcuh4aaJwNlpKwa", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.1.min.js": "KKuas3gevv3PvrlkyCMzffFeaMq5we/a2QsP5AUoS3mJ0jmaCL7jirFJN3GoE/lM", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.1.min.js": "MK/uFc3YT18pkvvXRl66tTHjP0/dxoSH2e/eiNMFIguKlun2+WVqaPTWmUy/zvh4"};
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.1.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"c760586a-adbf-4a80-bcd3-a9a6c388594a":{"defs":[],"roots":{"references":[{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"value":"cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"17274","type":"Scatter"},{"attributes":{},"id":"17258","type":"WheelZoomTool"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"17289"},"selection_policy":{"id":"17290"}},"id":"17275","type":"ColumnDataSource"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"17283"},"major_label_policy":{"id":"17282"},"ticker":{"id":"17252"}},"id":"17251","type":"LinearAxis"},{"attributes":{},"id":"17245","type":"LinearScale"},{"attributes":{"toolbar":{"id":"17293"},"toolbar_location":"above"},"id":"17294","type":"ToolbarBox"},{"attributes":{},"id":"17261","type":"SaveTool"},{"attributes":{"children":[[{"id":"17238"},0,0]]},"id":"17292","type":"GridBox"},{"attributes":{},"id":"17252","type":"BasicTicker"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17264","type":"PolyAnnotation"},{"attributes":{"axis":{"id":"17251"},"dimension":1,"ticker":null},"id":"17254","type":"Grid"},{"attributes":{},"id":"17283","type":"BasicTickFormatter"},{"attributes":{},"id":"17286","type":"BasicTickFormatter"},{"attributes":{},"id":"17248","type":"BasicTicker"},{"attributes":{"axis":{"id":"17247"},"ticker":null},"id":"17250","type":"Grid"},{"attributes":{"text":"Centered eight - Non centered eight"},"id":"17278","type":"Title"},{"attributes":{},"id":"17285","type":"AllLabels"},{"attributes":{"callback":null},"id":"17262","type":"HoverTool"},{"attributes":{"active_multi":null,"tools":[{"id":"17255"},{"id":"17256"},{"id":"17257"},{"id":"17258"},{"id":"17259"},{"id":"17260"},{"id":"17261"},{"id":"17262"}]},"id":"17265","type":"Toolbar"},{"attributes":{"children":[{"id":"17294"},{"id":"17292"}]},"id":"17295","type":"Column"},{"attributes":{},"id":"17256","type":"PanTool"},{"attributes":{},"id":"17260","type":"UndoTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17263","type":"BoxAnnotation"},{"attributes":{},"id":"17289","type":"Selection"},{"attributes":{"toolbars":[{"id":"17265"}],"tools":[{"id":"17255"},{"id":"17256"},{"id":"17257"},{"id":"17258"},{"id":"17259"},{"id":"17260"},{"id":"17261"},{"id":"17262"}]},"id":"17293","type":"ProxyToolbar"},{"attributes":{},"id":"17243","type":"LinearScale"},{"attributes":{"source":{"id":"17275"}},"id":"17277","type":"CDSView"},{"attributes":{"overlay":{"id":"17264"}},"id":"17259","type":"LassoSelectTool"},{"attributes":{},"id":"17239","type":"DataRange1d"},{"attributes":{"below":[{"id":"17247"}],"center":[{"id":"17250"},{"id":"17254"}],"height":288,"left":[{"id":"17251"}],"output_backend":"webgl","renderers":[{"id":"17276"}],"title":{"id":"17278"},"toolbar":{"id":"17265"},"toolbar_location":null,"width":432,"x_range":{"id":"17239"},"x_scale":{"id":"17243"},"y_range":{"id":"17241"},"y_scale":{"id":"17245"}},"id":"17238","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17282","type":"AllLabels"},{"attributes":{"overlay":{"id":"17263"}},"id":"17257","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"17286"},"major_label_policy":{"id":"17285"},"ticker":{"id":"17248"}},"id":"17247","type":"LinearAxis"},{"attributes":{"data_source":{"id":"17275"},"glyph":{"id":"17274"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"17277"}},"id":"17276","type":"GlyphRenderer"},{"attributes":{},"id":"17290","type":"UnionRenderers"},{"attributes":{},"id":"17241","type":"DataRange1d"},{"attributes":{},"id":"17255","type":"ResetTool"}],"root_ids":["17295"]},"title":"Bokeh Application","version":"2.3.1"}}';
                  var render_items = [{"docid":"c760586a-adbf-4a80-bcd3-a9a6c388594a","root_ids":["17295"],"roots":{"17295":"10a8b8d8-6ab7-441c-b97d-89b8fcda6399"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();