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
    
      
      
    
      var element = document.getElementById("9deb46f9-0f48-4cba-b8d2-c6e2c46277e4");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '9deb46f9-0f48-4cba-b8d2-c6e2c46277e4' but no matching script tag was found.")
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
                    
                  var docs_json = '{"ba092329-f8ab-4fab-acbf-e4506b8de8d6":{"defs":[],"roots":{"references":[{"attributes":{"above":[{"id":"17555"}],"below":[{"id":"17507"}],"center":[{"id":"17510"},{"id":"17514"}],"height":500,"left":[{"id":"17511"}],"output_backend":"webgl","renderers":[{"id":"17537"},{"id":"17542"},{"id":"17547"},{"id":"17552"},{"id":"17554"}],"title":{"id":"17558"},"toolbar":{"id":"17525"},"toolbar_location":null,"width":500,"x_range":{"id":"17499"},"x_scale":{"id":"17503"},"y_range":{"id":"17501"},"y_scale":{"id":"17505"}},"id":"17498","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17515","type":"ResetTool"},{"attributes":{},"id":"17572","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17535","type":"Circle"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17575"},"selection_policy":{"id":"17576"}},"id":"17549","type":"ColumnDataSource"},{"attributes":{},"id":"17503","type":"LinearScale"},{"attributes":{"overlay":{"id":"17523"}},"id":"17517","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17551","type":"Circle"},{"attributes":{},"id":"17518","type":"WheelZoomTool"},{"attributes":{},"id":"17569","type":"Selection"},{"attributes":{},"id":"17520","type":"UndoTool"},{"attributes":{},"id":"17571","type":"Selection"},{"attributes":{},"id":"17499","type":"DataRange1d"},{"attributes":{"source":{"id":"17534"}},"id":"17538","type":"CDSView"},{"attributes":{"overlay":{"id":"17524"}},"id":"17519","type":"LassoSelectTool"},{"attributes":{},"id":"17575","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17569"},"selection_policy":{"id":"17570"}},"id":"17534","type":"ColumnDataSource"},{"attributes":{"axis_label":"ESS","formatter":{"id":"17563"},"major_label_policy":{"id":"17562"},"ticker":{"id":"17512"}},"id":"17511","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17571"},"selection_policy":{"id":"17572"}},"id":"17539","type":"ColumnDataSource"},{"attributes":{"toolbars":[{"id":"17525"}],"tools":[{"id":"17515"},{"id":"17516"},{"id":"17517"},{"id":"17518"},{"id":"17519"},{"id":"17520"},{"id":"17521"},{"id":"17522"}]},"id":"17579","type":"ProxyToolbar"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17524","type":"PolyAnnotation"},{"attributes":{},"id":"17508","type":"BasicTicker"},{"attributes":{"data_source":{"id":"17544"},"glyph":{"id":"17545"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17546"},"view":{"id":"17548"}},"id":"17547","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17541","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17523","type":"BoxAnnotation"},{"attributes":{"active_multi":null,"tools":[{"id":"17515"},{"id":"17516"},{"id":"17517"},{"id":"17518"},{"id":"17519"},{"id":"17520"},{"id":"17521"},{"id":"17522"}]},"id":"17525","type":"Toolbar"},{"attributes":{},"id":"17574","type":"UnionRenderers"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17540","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"17546","type":"Line"},{"attributes":{"axis":{"id":"17507"},"ticker":null},"id":"17510","type":"Grid"},{"attributes":{},"id":"17565","type":"AllLabels"},{"attributes":{"callback":null},"id":"17522","type":"HoverTool"},{"attributes":{"source":{"id":"17544"}},"id":"17548","type":"CDSView"},{"attributes":{},"id":"17573","type":"Selection"},{"attributes":{"children":[{"id":"17580"},{"id":"17578"}]},"id":"17581","type":"Column"},{"attributes":{},"id":"17501","type":"DataRange1d"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"17545","type":"Line"},{"attributes":{"axis":{"id":"17511"},"dimension":1,"ticker":null},"id":"17514","type":"Grid"},{"attributes":{"click_policy":"hide","items":[{"id":"17556"},{"id":"17557"}],"location":"center_right","orientation":"horizontal"},"id":"17555","type":"Legend"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17550","type":"Circle"},{"attributes":{},"id":"17505","type":"LinearScale"},{"attributes":{},"id":"17563","type":"BasicTickFormatter"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17573"},"selection_policy":{"id":"17574"}},"id":"17544","type":"ColumnDataSource"},{"attributes":{},"id":"17562","type":"AllLabels"},{"attributes":{"source":{"id":"17549"}},"id":"17553","type":"CDSView"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"17566"},"major_label_policy":{"id":"17565"},"ticker":{"id":"17508"}},"id":"17507","type":"LinearAxis"},{"attributes":{"data_source":{"id":"17549"},"glyph":{"id":"17550"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17551"},"view":{"id":"17553"}},"id":"17552","type":"GlyphRenderer"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"17537"},{"id":"17542"}]},"id":"17556","type":"LegendItem"},{"attributes":{"data_source":{"id":"17534"},"glyph":{"id":"17535"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17536"},"view":{"id":"17538"}},"id":"17537","type":"GlyphRenderer"},{"attributes":{},"id":"17566","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"17539"}},"id":"17543","type":"CDSView"},{"attributes":{},"id":"17576","type":"UnionRenderers"},{"attributes":{"text":"b"},"id":"17558","type":"Title"},{"attributes":{},"id":"17521","type":"SaveTool"},{"attributes":{},"id":"17516","type":"PanTool"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"17552"},{"id":"17547"}]},"id":"17557","type":"LegendItem"},{"attributes":{},"id":"17570","type":"UnionRenderers"},{"attributes":{},"id":"17512","type":"BasicTicker"},{"attributes":{"toolbar":{"id":"17579"},"toolbar_location":"above"},"id":"17580","type":"ToolbarBox"},{"attributes":{"data_source":{"id":"17539"},"glyph":{"id":"17540"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17541"},"view":{"id":"17543"}},"id":"17542","type":"GlyphRenderer"},{"attributes":{"children":[[{"id":"17498"},0,0]]},"id":"17578","type":"GridBox"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17536","type":"Circle"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"17554","type":"Span"}],"root_ids":["17581"]},"title":"Bokeh Application","version":"2.3.1"}}';
                  var render_items = [{"docid":"ba092329-f8ab-4fab-acbf-e4506b8de8d6","root_ids":["17581"],"roots":{"17581":"9deb46f9-0f48-4cba-b8d2-c6e2c46277e4"}}];
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