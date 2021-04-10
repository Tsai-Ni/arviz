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
    
      
      
    
      var element = document.getElementById("610d0173-f4a2-4fd1-93f5-bf64d96a3826");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '610d0173-f4a2-4fd1-93f5-bf64d96a3826' but no matching script tag was found.")
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
                    
                  var docs_json = '{"54a415c3-07d6-4c9d-a765-1b6d4d7b48bb":{"defs":[],"roots":{"references":[{"attributes":{},"id":"17702","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"17695","type":"Span"},{"attributes":{},"id":"17708","type":"Selection"},{"attributes":{},"id":"17705","type":"BasicTickFormatter"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"17710"},"selection_policy":{"id":"17711"}},"id":"17692","type":"ColumnDataSource"},{"attributes":{},"id":"17701","type":"AllLabels"},{"attributes":{"source":{"id":"17692"}},"id":"17694","type":"CDSView"},{"attributes":{"children":[[{"id":"17650"},0,0]]},"id":"17713","type":"GridBox"},{"attributes":{"below":[{"id":"17659"}],"center":[{"id":"17662"},{"id":"17666"}],"height":500,"left":[{"id":"17663"}],"output_backend":"webgl","renderers":[{"id":"17689"},{"id":"17693"},{"id":"17695"},{"id":"17696"}],"title":{"id":"17697"},"toolbar":{"id":"17677"},"toolbar_location":null,"width":500,"x_range":{"id":"17651"},"x_scale":{"id":"17655"},"y_range":{"id":"17653"},"y_scale":{"id":"17657"}},"id":"17650","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"17686"}},"id":"17690","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"17667"},{"id":"17668"},{"id":"17669"},{"id":"17670"},{"id":"17671"},{"id":"17672"},{"id":"17673"},{"id":"17674"}]},"id":"17677","type":"Toolbar"},{"attributes":{},"id":"17672","type":"UndoTool"},{"attributes":{"overlay":{"id":"17676"}},"id":"17671","type":"LassoSelectTool"},{"attributes":{"text":"mu"},"id":"17697","type":"Title"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17676","type":"PolyAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17675","type":"BoxAnnotation"},{"attributes":{"toolbar":{"id":"17714"},"toolbar_location":"above"},"id":"17715","type":"ToolbarBox"},{"attributes":{},"id":"17711","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17687","type":"Circle"},{"attributes":{},"id":"17673","type":"SaveTool"},{"attributes":{"callback":null},"id":"17674","type":"HoverTool"},{"attributes":{},"id":"17655","type":"LinearScale"},{"attributes":{},"id":"17657","type":"LinearScale"},{"attributes":{"data_source":{"id":"17692"},"glyph":{"id":"17691"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"17694"}},"id":"17693","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17708"},"selection_policy":{"id":"17709"}},"id":"17686","type":"ColumnDataSource"},{"attributes":{},"id":"17660","type":"BasicTicker"},{"attributes":{},"id":"17670","type":"WheelZoomTool"},{"attributes":{"toolbars":[{"id":"17677"}],"tools":[{"id":"17667"},{"id":"17668"},{"id":"17669"},{"id":"17670"},{"id":"17671"},{"id":"17672"},{"id":"17673"},{"id":"17674"}]},"id":"17714","type":"ProxyToolbar"},{"attributes":{"axis_label":"ESS for small intervals","formatter":{"id":"17702"},"major_label_policy":{"id":"17701"},"ticker":{"id":"17664"}},"id":"17663","type":"LinearAxis"},{"attributes":{},"id":"17653","type":"DataRange1d"},{"attributes":{},"id":"17668","type":"PanTool"},{"attributes":{"data_source":{"id":"17686"},"glyph":{"id":"17687"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17688"},"view":{"id":"17690"}},"id":"17689","type":"GlyphRenderer"},{"attributes":{},"id":"17709","type":"UnionRenderers"},{"attributes":{},"id":"17664","type":"BasicTicker"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"17705"},"major_label_policy":{"id":"17704"},"ticker":{"id":"17660"}},"id":"17659","type":"LinearAxis"},{"attributes":{"overlay":{"id":"17675"}},"id":"17669","type":"BoxZoomTool"},{"attributes":{},"id":"17710","type":"Selection"},{"attributes":{"axis":{"id":"17659"},"ticker":null},"id":"17662","type":"Grid"},{"attributes":{},"id":"17667","type":"ResetTool"},{"attributes":{},"id":"17651","type":"DataRange1d"},{"attributes":{"children":[{"id":"17715"},{"id":"17713"}]},"id":"17716","type":"Column"},{"attributes":{"axis":{"id":"17663"},"dimension":1,"ticker":null},"id":"17666","type":"Grid"},{"attributes":{},"id":"17704","type":"AllLabels"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"17696","type":"Span"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17688","type":"Circle"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"17691","type":"Scatter"}],"root_ids":["17716"]},"title":"Bokeh Application","version":"2.3.1"}}';
                  var render_items = [{"docid":"54a415c3-07d6-4c9d-a765-1b6d4d7b48bb","root_ids":["17716"],"roots":{"17716":"610d0173-f4a2-4fd1-93f5-bf64d96a3826"}}];
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