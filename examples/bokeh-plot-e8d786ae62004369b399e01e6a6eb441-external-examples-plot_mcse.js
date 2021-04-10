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
    
      
      
    
      var element = document.getElementById("a301de20-e3f8-495f-b0cf-f81174ea116b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a301de20-e3f8-495f-b0cf-f81174ea116b' but no matching script tag was found.")
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
                    
                  var docs_json = '{"58aeb3d1-7903-4085-a0cc-fd9ce4ba3079":{"defs":[],"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35483","type":"Circle"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"35487","type":"Span"},{"attributes":{"children":[{"id":"35525"},{"id":"35523"}]},"id":"35526","type":"Column"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"35486","type":"Span"},{"attributes":{},"id":"35432","type":"DataRange1d"},{"attributes":{"data_source":{"id":"35481"},"glyph":{"id":"35482"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35483"},"view":{"id":"35485"}},"id":"35484","type":"GlyphRenderer"},{"attributes":{"active_multi":null,"tools":[{"id":"35448"},{"id":"35449"},{"id":"35450"},{"id":"35451"},{"id":"35452"},{"id":"35453"},{"id":"35454"},{"id":"35455"}]},"id":"35458","type":"Toolbar"},{"attributes":{"source":{"id":"35481"}},"id":"35485","type":"CDSView"},{"attributes":{"data_source":{"id":"35490"},"glyph":{"id":"35489"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"35492"}},"id":"35491","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35469","type":"Circle"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"35520"},"selection_policy":{"id":"35521"}},"id":"35490","type":"ColumnDataSource"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"35515"},"major_label_policy":{"id":"35514"},"ticker":{"id":"35441"}},"id":"35440","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35468","type":"Circle"},{"attributes":{"end":1,"start":-0.05},"id":"35434","type":"DataRange1d"},{"attributes":{"below":[{"id":"35404"}],"center":[{"id":"35407"},{"id":"35411"}],"height":500,"left":[{"id":"35408"}],"output_backend":"webgl","renderers":[{"id":"35470"},{"id":"35472"},{"id":"35473"},{"id":"35474"},{"id":"35477"}],"title":{"id":"35479"},"toolbar":{"id":"35422"},"toolbar_location":null,"width":500,"x_range":{"id":"35396"},"x_scale":{"id":"35400"},"y_range":{"id":"35398"},"y_scale":{"id":"35402"}},"id":"35395","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"35417","type":"UndoTool"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"35512"},"major_label_policy":{"id":"35511"},"ticker":{"id":"35445"}},"id":"35444","type":"LinearAxis"},{"attributes":{},"id":"35436","type":"LinearScale"},{"attributes":{"text":"mu"},"id":"35493","type":"Title"},{"attributes":{"toolbars":[{"id":"35422"},{"id":"35458"}],"tools":[{"id":"35412"},{"id":"35413"},{"id":"35414"},{"id":"35415"},{"id":"35416"},{"id":"35417"},{"id":"35418"},{"id":"35419"},{"id":"35448"},{"id":"35449"},{"id":"35450"},{"id":"35451"},{"id":"35452"},{"id":"35453"},{"id":"35454"},{"id":"35455"}]},"id":"35524","type":"ProxyToolbar"},{"attributes":{"end":1,"start":-0.05},"id":"35398","type":"DataRange1d"},{"attributes":{},"id":"35438","type":"LinearScale"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"35488","type":"Span"},{"attributes":{},"id":"35441","type":"BasicTicker"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"35489","type":"Scatter"},{"attributes":{"axis":{"id":"35440"},"ticker":null},"id":"35443","type":"Grid"},{"attributes":{"source":{"id":"35490"}},"id":"35492","type":"CDSView"},{"attributes":{"toolbar":{"id":"35524"},"toolbar_location":"above"},"id":"35525","type":"ToolbarBox"},{"attributes":{"axis":{"id":"35444"},"dimension":1,"ticker":null},"id":"35447","type":"Grid"},{"attributes":{"overlay":{"id":"35421"}},"id":"35416","type":"LassoSelectTool"},{"attributes":{},"id":"35445","type":"BasicTicker"},{"attributes":{},"id":"35504","type":"Selection"},{"attributes":{"overlay":{"id":"35456"}},"id":"35450","type":"BoxZoomTool"},{"attributes":{},"id":"35505","type":"UnionRenderers"},{"attributes":{},"id":"35449","type":"PanTool"},{"attributes":{},"id":"35448","type":"ResetTool"},{"attributes":{},"id":"35451","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"35457"}},"id":"35452","type":"LassoSelectTool"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"35498"},"major_label_policy":{"id":"35497"},"ticker":{"id":"35409"}},"id":"35408","type":"LinearAxis"},{"attributes":{},"id":"35453","type":"UndoTool"},{"attributes":{"axis":{"id":"35408"},"dimension":1,"ticker":null},"id":"35411","type":"Grid"},{"attributes":{},"id":"35405","type":"BasicTicker"},{"attributes":{},"id":"35497","type":"AllLabels"},{"attributes":{},"id":"35498","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"35420"}},"id":"35414","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"35456","type":"BoxAnnotation"},{"attributes":{},"id":"35506","type":"Selection"},{"attributes":{"axis":{"id":"35404"},"ticker":null},"id":"35407","type":"Grid"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"35518"},"selection_policy":{"id":"35519"}},"id":"35481","type":"ColumnDataSource"},{"attributes":{},"id":"35507","type":"UnionRenderers"},{"attributes":{},"id":"35413","type":"PanTool"},{"attributes":{},"id":"35412","type":"ResetTool"},{"attributes":{},"id":"35418","type":"SaveTool"},{"attributes":{},"id":"35415","type":"WheelZoomTool"},{"attributes":{},"id":"35409","type":"BasicTicker"},{"attributes":{"callback":null},"id":"35419","type":"HoverTool"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"35501"},"major_label_policy":{"id":"35500"},"ticker":{"id":"35405"}},"id":"35404","type":"LinearAxis"},{"attributes":{"active_multi":null,"tools":[{"id":"35412"},{"id":"35413"},{"id":"35414"},{"id":"35415"},{"id":"35416"},{"id":"35417"},{"id":"35418"},{"id":"35419"}]},"id":"35422","type":"Toolbar"},{"attributes":{},"id":"35500","type":"AllLabels"},{"attributes":{},"id":"35501","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"35457","type":"PolyAnnotation"},{"attributes":{},"id":"35518","type":"Selection"},{"attributes":{},"id":"35519","type":"UnionRenderers"},{"attributes":{"below":[{"id":"35440"}],"center":[{"id":"35443"},{"id":"35447"}],"height":500,"left":[{"id":"35444"}],"output_backend":"webgl","renderers":[{"id":"35484"},{"id":"35486"},{"id":"35487"},{"id":"35488"},{"id":"35491"}],"title":{"id":"35493"},"toolbar":{"id":"35458"},"toolbar_location":null,"width":500,"x_range":{"id":"35432"},"x_scale":{"id":"35436"},"y_range":{"id":"35434"},"y_scale":{"id":"35438"}},"id":"35431","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"35454","type":"SaveTool"},{"attributes":{"callback":null},"id":"35455","type":"HoverTool"},{"attributes":{"data_source":{"id":"35476"},"glyph":{"id":"35475"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"35478"}},"id":"35477","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"35420","type":"BoxAnnotation"},{"attributes":{},"id":"35511","type":"AllLabels"},{"attributes":{},"id":"35512","type":"BasicTickFormatter"},{"attributes":{"children":[[{"id":"35395"},0,0],[{"id":"35431"},0,1]]},"id":"35523","type":"GridBox"},{"attributes":{},"id":"35520","type":"Selection"},{"attributes":{},"id":"35396","type":"DataRange1d"},{"attributes":{},"id":"35521","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"35504"},"selection_policy":{"id":"35505"}},"id":"35467","type":"ColumnDataSource"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"35421","type":"PolyAnnotation"},{"attributes":{},"id":"35514","type":"AllLabels"},{"attributes":{},"id":"35400","type":"LinearScale"},{"attributes":{},"id":"35515","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"35472","type":"Span"},{"attributes":{"source":{"id":"35467"}},"id":"35471","type":"CDSView"},{"attributes":{"data_source":{"id":"35467"},"glyph":{"id":"35468"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35469"},"view":{"id":"35471"}},"id":"35470","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"35473","type":"Span"},{"attributes":{},"id":"35402","type":"LinearScale"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"35506"},"selection_policy":{"id":"35507"}},"id":"35476","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35482","type":"Circle"},{"attributes":{"text":"tau"},"id":"35479","type":"Title"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"35474","type":"Span"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"35475","type":"Scatter"},{"attributes":{"source":{"id":"35476"}},"id":"35478","type":"CDSView"}],"root_ids":["35526"]},"title":"Bokeh Application","version":"2.3.1"}}';
                  var render_items = [{"docid":"58aeb3d1-7903-4085-a0cc-fd9ce4ba3079","root_ids":["35526"],"roots":{"35526":"a301de20-e3f8-495f-b0cf-f81174ea116b"}}];
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