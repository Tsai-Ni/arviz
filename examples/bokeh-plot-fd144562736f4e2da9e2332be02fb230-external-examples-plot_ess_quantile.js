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
    
      
      
    
      var element = document.getElementById("cd5a5719-0c3a-4f74-892b-fcce474255d1");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'cd5a5719-0c3a-4f74-892b-fcce474255d1' but no matching script tag was found.")
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
                    
                  var docs_json = '{"029c62ca-2637-45a7-baa2-4144bc22907c":{"defs":[],"roots":{"references":[{"attributes":{"callback":null},"id":"17793","type":"HoverTool"},{"attributes":{},"id":"17787","type":"PanTool"},{"attributes":{"overlay":{"id":"17794"}},"id":"17788","type":"BoxZoomTool"},{"attributes":{},"id":"17816","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17806","type":"Circle"},{"attributes":{"axis":{"id":"17778"},"ticker":null},"id":"17781","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17807","type":"Circle"},{"attributes":{},"id":"17823","type":"UnionRenderers"},{"attributes":{},"id":"17770","type":"DataRange1d"},{"attributes":{"children":[[{"id":"17769"},0,0]]},"id":"17825","type":"GridBox"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17794","type":"BoxAnnotation"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"17819"},"major_label_policy":{"id":"17818"},"ticker":{"id":"17779"}},"id":"17778","type":"LinearAxis"},{"attributes":{"source":{"id":"17805"}},"id":"17809","type":"CDSView"},{"attributes":{"axis":{"id":"17782"},"dimension":1,"ticker":null},"id":"17785","type":"Grid"},{"attributes":{},"id":"17819","type":"BasicTickFormatter"},{"attributes":{},"id":"17774","type":"LinearScale"},{"attributes":{"overlay":{"id":"17795"}},"id":"17790","type":"LassoSelectTool"},{"attributes":{},"id":"17822","type":"Selection"},{"attributes":{},"id":"17772","type":"DataRange1d"},{"attributes":{},"id":"17786","type":"ResetTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17795","type":"PolyAnnotation"},{"attributes":{"toolbar":{"id":"17826"},"toolbar_location":"above"},"id":"17827","type":"ToolbarBox"},{"attributes":{},"id":"17818","type":"AllLabels"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"R2riOHxslUDJrxt4rb2XQC8UfR7VtJlAMRHUGWndmUBKO3TVSyObQNp1b/0mJp1ASsbCePPwnkB+Du/cq5qgQH8ihBoHoKBAjJ8qLZB5oECYlOwhLnyfQD8CvMP22p1A58Gm42rqnEALInuU09KdQICWYY7d25xA2A/0ZSlsnEBzLBEly1mdQE4F40OedZlAKS7heDC7m0BmB8tcKnmYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17822"},"selection_policy":{"id":"17823"}},"id":"17805","type":"ColumnDataSource"},{"attributes":{"axis_label":"ESS for quantiles","formatter":{"id":"17816"},"major_label_policy":{"id":"17815"},"ticker":{"id":"17783"}},"id":"17782","type":"LinearAxis"},{"attributes":{},"id":"17783","type":"BasicTicker"},{"attributes":{"toolbars":[{"id":"17796"}],"tools":[{"id":"17786"},{"id":"17787"},{"id":"17788"},{"id":"17789"},{"id":"17790"},{"id":"17791"},{"id":"17792"},{"id":"17793"}]},"id":"17826","type":"ProxyToolbar"},{"attributes":{"below":[{"id":"17778"}],"center":[{"id":"17781"},{"id":"17785"}],"height":500,"left":[{"id":"17782"}],"output_backend":"webgl","renderers":[{"id":"17808"},{"id":"17810"}],"title":{"id":"17811"},"toolbar":{"id":"17796"},"toolbar_location":null,"width":500,"x_range":{"id":"17770"},"x_scale":{"id":"17774"},"y_range":{"id":"17772"},"y_scale":{"id":"17776"}},"id":"17769","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17791","type":"UndoTool"},{"attributes":{"active_multi":null,"tools":[{"id":"17786"},{"id":"17787"},{"id":"17788"},{"id":"17789"},{"id":"17790"},{"id":"17791"},{"id":"17792"},{"id":"17793"}]},"id":"17796","type":"Toolbar"},{"attributes":{},"id":"17779","type":"BasicTicker"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"17810","type":"Span"},{"attributes":{"data_source":{"id":"17805"},"glyph":{"id":"17806"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17807"},"view":{"id":"17809"}},"id":"17808","type":"GlyphRenderer"},{"attributes":{"text":"sigma"},"id":"17811","type":"Title"},{"attributes":{},"id":"17789","type":"WheelZoomTool"},{"attributes":{"children":[{"id":"17827"},{"id":"17825"}]},"id":"17828","type":"Column"},{"attributes":{},"id":"17792","type":"SaveTool"},{"attributes":{},"id":"17815","type":"AllLabels"},{"attributes":{},"id":"17776","type":"LinearScale"}],"root_ids":["17828"]},"title":"Bokeh Application","version":"2.3.1"}}';
                  var render_items = [{"docid":"029c62ca-2637-45a7-baa2-4144bc22907c","root_ids":["17828"],"roots":{"17828":"cd5a5719-0c3a-4f74-892b-fcce474255d1"}}];
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