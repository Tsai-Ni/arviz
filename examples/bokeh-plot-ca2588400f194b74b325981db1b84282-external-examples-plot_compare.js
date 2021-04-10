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
    
      
      
    
      var element = document.getElementById("1b2598c1-37de-45c7-9ea8-e71fa2fe3bbb");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '1b2598c1-37de-45c7-9ea8-e71fa2fe3bbb' but no matching script tag was found.")
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
                    
                  var docs_json = '{"5fa71904-9335-4ab4-bfb7-b0018ce46ce3":{"defs":[],"roots":{"references":[{"attributes":{"dimension":"height","line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"15007","type":"Span"},{"attributes":{"data_source":{"id":"15002"},"glyph":{"id":"15003"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15004"},"view":{"id":"15006"}},"id":"15005","type":"GlyphRenderer"},{"attributes":{},"id":"15022","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"14970","type":"PolyAnnotation"},{"attributes":{"source":{"id":"14997"}},"id":"15001","type":"CDSView"},{"attributes":{"children":[[{"id":"14944"},0,0]]},"id":"15028","type":"GridBox"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"14969","type":"BoxAnnotation"},{"attributes":{"data":{"xs":[[-32.052286212415325,-29.322294424364305],[-32.23721121836336,-29.38353713483674]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"15023"},"selection_policy":{"id":"15024"}},"id":"14997","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"14983","type":"Scatter"},{"attributes":{"toolbar":{"id":"15029"},"toolbar_location":"above"},"id":"15030","type":"ToolbarBox"},{"attributes":{},"id":"15010","type":"AllLabels"},{"attributes":{},"id":"15017","type":"Selection"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"14980","type":"FixedTicker"},{"attributes":{"source":{"id":"15002"}},"id":"15006","type":"CDSView"},{"attributes":{},"id":"15009","type":"Title"},{"attributes":{"formatter":{"id":"15011"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"major_label_policy":{"id":"15010"},"ticker":{"id":"14980"}},"id":"14957","type":"LinearAxis"},{"attributes":{"callback":null},"id":"14968","type":"HoverTool"},{"attributes":{"axis":{"id":"14957"},"dimension":1,"ticker":null},"id":"14960","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15004","type":"Circle"},{"attributes":{},"id":"14967","type":"SaveTool"},{"attributes":{"below":[{"id":"14953"}],"center":[{"id":"14956"},{"id":"14960"}],"height":500,"left":[{"id":"14957"}],"output_backend":"webgl","renderers":[{"id":"14985"},{"id":"14990"},{"id":"14995"},{"id":"15000"},{"id":"15005"},{"id":"15007"}],"title":{"id":"15009"},"toolbar":{"id":"14971"},"toolbar_location":null,"width":500,"x_range":{"id":"14945"},"x_scale":{"id":"14949"},"y_range":{"id":"14947"},"y_scale":{"id":"14951"}},"id":"14944","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"14970"}},"id":"14965","type":"LassoSelectTool"},{"attributes":{},"id":"15018","type":"UnionRenderers"},{"attributes":{},"id":"14962","type":"PanTool"},{"attributes":{},"id":"15026","type":"UnionRenderers"},{"attributes":{"axis":{"id":"14953"},"ticker":null},"id":"14956","type":"Grid"},{"attributes":{"end":0.5,"start":-1.5},"id":"14947","type":"DataRange1d"},{"attributes":{"toolbars":[{"id":"14971"}],"tools":[{"id":"14961"},{"id":"14962"},{"id":"14963"},{"id":"14964"},{"id":"14965"},{"id":"14966"},{"id":"14967"},{"id":"14968"}]},"id":"15029","type":"ProxyToolbar"},{"attributes":{"data_source":{"id":"14987"},"glyph":{"id":"14988"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14989"},"view":{"id":"14991"}},"id":"14990","type":"GlyphRenderer"},{"attributes":{},"id":"14949","type":"LinearScale"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"14999","type":"MultiLine"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"14988","type":"MultiLine"},{"attributes":{"data_source":{"id":"14997"},"glyph":{"id":"14998"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14999"},"view":{"id":"15001"}},"id":"15000","type":"GlyphRenderer"},{"attributes":{},"id":"14951","type":"LinearScale"},{"attributes":{},"id":"14945","type":"DataRange1d"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"14998","type":"MultiLine"},{"attributes":{},"id":"15021","type":"Selection"},{"attributes":{},"id":"14961","type":"ResetTool"},{"attributes":{"data":{"x":{"__ndarray__":"KAWarnTPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"15017"},"selection_policy":{"id":"15018"}},"id":"14982","type":"ColumnDataSource"},{"attributes":{},"id":"15014","type":"BasicTickFormatter"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"15025"},"selection_policy":{"id":"15026"}},"id":"15002","type":"ColumnDataSource"},{"attributes":{},"id":"15011","type":"BasicTickFormatter"},{"attributes":{},"id":"15024","type":"UnionRenderers"},{"attributes":{"active_multi":null,"tools":[{"id":"14961"},{"id":"14962"},{"id":"14963"},{"id":"14964"},{"id":"14965"},{"id":"14966"},{"id":"14967"},{"id":"14968"}]},"id":"14971","type":"Toolbar"},{"attributes":{"source":{"id":"14987"}},"id":"14991","type":"CDSView"},{"attributes":{},"id":"15025","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"14984","type":"Scatter"},{"attributes":{"overlay":{"id":"14969"}},"id":"14963","type":"BoxZoomTool"},{"attributes":{},"id":"15013","type":"AllLabels"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"14994","type":"Circle"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"14989","type":"MultiLine"},{"attributes":{"data_source":{"id":"14982"},"glyph":{"id":"14983"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14984"},"view":{"id":"14986"}},"id":"14985","type":"GlyphRenderer"},{"attributes":{"axis_label":"Log","formatter":{"id":"15014"},"major_label_policy":{"id":"15013"},"ticker":{"id":"14954"}},"id":"14953","type":"LinearAxis"},{"attributes":{"data_source":{"id":"14992"},"glyph":{"id":"14993"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14994"},"view":{"id":"14996"}},"id":"14995","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"eFcgQvKvPsAoBZqudM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"15021"},"selection_policy":{"id":"15022"}},"id":"14992","type":"ColumnDataSource"},{"attributes":{},"id":"14964","type":"WheelZoomTool"},{"attributes":{"children":[{"id":"15030"},{"id":"15028"}]},"id":"15031","type":"Column"},{"attributes":{"source":{"id":"14982"}},"id":"14986","type":"CDSView"},{"attributes":{},"id":"15019","type":"Selection"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"14993","type":"Circle"},{"attributes":{},"id":"15023","type":"Selection"},{"attributes":{},"id":"14954","type":"BasicTicker"},{"attributes":{"data":{"xs":[[-30.896420573800537,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"15019"},"selection_policy":{"id":"15020"}},"id":"14987","type":"ColumnDataSource"},{"attributes":{"source":{"id":"14992"}},"id":"14996","type":"CDSView"},{"attributes":{},"id":"14966","type":"UndoTool"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15003","type":"Circle"},{"attributes":{},"id":"15020","type":"UnionRenderers"}],"root_ids":["15031"]},"title":"Bokeh Application","version":"2.3.1"}}';
                  var render_items = [{"docid":"5fa71904-9335-4ab4-bfb7-b0018ce46ce3","root_ids":["15031"],"roots":{"15031":"1b2598c1-37de-45c7-9ea8-e71fa2fe3bbb"}}];
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