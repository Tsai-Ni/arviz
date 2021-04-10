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
    
      
      
    
      var element = document.getElementById("6d9be5f4-c539-41a7-8ab8-9119dcb447db");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '6d9be5f4-c539-41a7-8ab8-9119dcb447db' but no matching script tag was found.")
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
                    
                  var docs_json = '{"216818a3-44d0-41cb-ad3b-a98e22ea79a5":{"defs":[],"roots":{"references":[{"attributes":{},"id":"40648","type":"PanTool"},{"attributes":{"source":{"id":"40734"}},"id":"40738","type":"CDSView"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40783"},"selection_policy":{"id":"40784"}},"id":"40734","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"40689","type":"BoxAnnotation"},{"attributes":{},"id":"40764","type":"Selection"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40735","type":"VBar"},{"attributes":{},"id":"40765","type":"UnionRenderers"},{"attributes":{},"id":"40757","type":"AllLabels"},{"attributes":{"data_source":{"id":"40734"},"glyph":{"id":"40735"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40736"},"view":{"id":"40738"}},"id":"40737","type":"GlyphRenderer"},{"attributes":{},"id":"40652","type":"UndoTool"},{"attributes":{},"id":"40758","type":"BasicTickFormatter"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40741","type":"VBar"},{"attributes":{"below":[{"id":"40673"}],"center":[{"id":"40676"},{"id":"40680"},{"id":"40733"},{"id":"40739"},{"id":"40745"},{"id":"40751"}],"height":331,"left":[{"id":"40677"}],"output_backend":"webgl","renderers":[{"id":"40731"},{"id":"40737"},{"id":"40743"},{"id":"40749"}],"title":{"id":"40754"},"toolbar":{"id":"40691"},"toolbar_location":null,"width":496,"x_range":{"id":"40631"},"x_scale":{"id":"40669"},"y_range":{"id":"40633"},"y_scale":{"id":"40671"}},"id":"40666","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"40653","type":"SaveTool"},{"attributes":{},"id":"40781","type":"Selection"},{"attributes":{},"id":"40782","type":"UnionRenderers"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40736","type":"VBar"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"40690","type":"PolyAnnotation"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40742","type":"VBar"},{"attributes":{"overlay":{"id":"40656"}},"id":"40651","type":"LassoSelectTool"},{"attributes":{},"id":"40760","type":"AllLabels"},{"attributes":{},"id":"40761","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"40792"},{"id":"40790"}]},"id":"40793","type":"Column"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"40655","type":"BoxAnnotation"},{"attributes":{},"id":"40774","type":"AllLabels"},{"attributes":{},"id":"40766","type":"Selection"},{"attributes":{},"id":"40775","type":"BasicTickFormatter"},{"attributes":{},"id":"40767","type":"UnionRenderers"},{"attributes":{"text":"tau"},"id":"40726","type":"Title"},{"attributes":{},"id":"40777","type":"AllLabels"},{"attributes":{},"id":"40783","type":"Selection"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"40761"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"40760"},"ticker":{"id":"40640"}},"id":"40639","type":"LinearAxis"},{"attributes":{},"id":"40778","type":"BasicTickFormatter"},{"attributes":{"ticks":[0,1,2,3]},"id":"40752","type":"FixedTicker"},{"attributes":{},"id":"40784","type":"UnionRenderers"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40781"},"selection_policy":{"id":"40782"}},"id":"40728","type":"ColumnDataSource"},{"attributes":{},"id":"40637","type":"LinearScale"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40764"},"selection_policy":{"id":"40765"}},"id":"40700","type":"ColumnDataSource"},{"attributes":{},"id":"40768","type":"Selection"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"40656","type":"PolyAnnotation"},{"attributes":{"data_source":{"id":"40700"},"glyph":{"id":"40701"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40702"},"view":{"id":"40704"}},"id":"40703","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40702","type":"VBar"},{"attributes":{},"id":"40769","type":"UnionRenderers"},{"attributes":{"source":{"id":"40700"}},"id":"40704","type":"CDSView"},{"attributes":{"below":[{"id":"40639"}],"center":[{"id":"40642"},{"id":"40646"},{"id":"40705"},{"id":"40711"},{"id":"40717"},{"id":"40723"}],"height":331,"left":[{"id":"40643"}],"output_backend":"webgl","renderers":[{"id":"40703"},{"id":"40709"},{"id":"40715"},{"id":"40721"}],"title":{"id":"40726"},"toolbar":{"id":"40657"},"toolbar_location":null,"width":496,"x_range":{"id":"40631"},"x_scale":{"id":"40635"},"y_range":{"id":"40633"},"y_scale":{"id":"40637"}},"id":"40630","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"40706"}},"id":"40710","type":"CDSView"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40708","type":"VBar"},{"attributes":{},"id":"40785","type":"Selection"},{"attributes":{"axis":{"id":"40643"},"dimension":1,"ticker":null},"id":"40646","type":"Grid"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40707","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40766"},"selection_policy":{"id":"40767"}},"id":"40706","type":"ColumnDataSource"},{"attributes":{},"id":"40786","type":"UnionRenderers"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"40711","type":"Span"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"40717","type":"Span"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"40751","type":"Span"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40713","type":"VBar"},{"attributes":{"data_source":{"id":"40706"},"glyph":{"id":"40707"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40708"},"view":{"id":"40710"}},"id":"40709","type":"GlyphRenderer"},{"attributes":{"children":[[{"id":"40630"},0,0],[{"id":"40666"},0,1]]},"id":"40790","type":"GridBox"},{"attributes":{"source":{"id":"40712"}},"id":"40716","type":"CDSView"},{"attributes":{},"id":"40770","type":"Selection"},{"attributes":{"axis":{"id":"40639"},"ticker":null},"id":"40642","type":"Grid"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40768"},"selection_policy":{"id":"40769"}},"id":"40712","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40714","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40785"},"selection_policy":{"id":"40786"}},"id":"40740","type":"ColumnDataSource"},{"attributes":{},"id":"40771","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"40728"},"glyph":{"id":"40729"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40730"},"view":{"id":"40732"}},"id":"40731","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40747","type":"VBar"},{"attributes":{},"id":"40647","type":"ResetTool"},{"attributes":{"axis_label":"Chain","formatter":{"id":"40775"},"major_label_policy":{"id":"40774"},"ticker":{"id":"40752"}},"id":"40677","type":"LinearAxis"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40719","type":"VBar"},{"attributes":{},"id":"40669","type":"LinearScale"},{"attributes":{"data_source":{"id":"40712"},"glyph":{"id":"40713"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40714"},"view":{"id":"40716"}},"id":"40715","type":"GlyphRenderer"},{"attributes":{},"id":"40640","type":"BasicTicker"},{"attributes":{},"id":"40671","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40730","type":"VBar"},{"attributes":{"source":{"id":"40740"}},"id":"40744","type":"CDSView"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"40705","type":"Span"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"40739","type":"Span"},{"attributes":{"source":{"id":"40718"}},"id":"40722","type":"CDSView"},{"attributes":{},"id":"40674","type":"BasicTicker"},{"attributes":{},"id":"40787","type":"Selection"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40770"},"selection_policy":{"id":"40771"}},"id":"40718","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"40673"},"ticker":null},"id":"40676","type":"Grid"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40720","type":"VBar"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"40778"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"40777"},"ticker":{"id":"40674"}},"id":"40673","type":"LinearAxis"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40748","type":"VBar"},{"attributes":{},"id":"40788","type":"UnionRenderers"},{"attributes":{"active_multi":null,"tools":[{"id":"40647"},{"id":"40648"},{"id":"40649"},{"id":"40650"},{"id":"40651"},{"id":"40652"},{"id":"40653"},{"id":"40654"}]},"id":"40657","type":"Toolbar"},{"attributes":{"callback":null},"id":"40688","type":"HoverTool"},{"attributes":{"data_source":{"id":"40718"},"glyph":{"id":"40719"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40720"},"view":{"id":"40722"}},"id":"40721","type":"GlyphRenderer"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"40723","type":"Span"},{"attributes":{"callback":null},"id":"40654","type":"HoverTool"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40787"},"selection_policy":{"id":"40788"}},"id":"40746","type":"ColumnDataSource"},{"attributes":{},"id":"40633","type":"DataRange1d"},{"attributes":{"data_source":{"id":"40740"},"glyph":{"id":"40741"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40742"},"view":{"id":"40744"}},"id":"40743","type":"GlyphRenderer"},{"attributes":{"ticks":[0,1,2,3]},"id":"40724","type":"FixedTicker"},{"attributes":{"source":{"id":"40746"}},"id":"40750","type":"CDSView"},{"attributes":{"axis":{"id":"40677"},"dimension":1,"ticker":null},"id":"40680","type":"Grid"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40729","type":"VBar"},{"attributes":{"text":"mu"},"id":"40754","type":"Title"},{"attributes":{},"id":"40635","type":"LinearScale"},{"attributes":{"data_source":{"id":"40746"},"glyph":{"id":"40747"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40748"},"view":{"id":"40750"}},"id":"40749","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"40655"}},"id":"40649","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40701","type":"VBar"},{"attributes":{"overlay":{"id":"40689"}},"id":"40683","type":"BoxZoomTool"},{"attributes":{"source":{"id":"40728"}},"id":"40732","type":"CDSView"},{"attributes":{},"id":"40682","type":"PanTool"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"40733","type":"Span"},{"attributes":{},"id":"40650","type":"WheelZoomTool"},{"attributes":{},"id":"40681","type":"ResetTool"},{"attributes":{"toolbars":[{"id":"40657"},{"id":"40691"}],"tools":[{"id":"40647"},{"id":"40648"},{"id":"40649"},{"id":"40650"},{"id":"40651"},{"id":"40652"},{"id":"40653"},{"id":"40654"},{"id":"40681"},{"id":"40682"},{"id":"40683"},{"id":"40684"},{"id":"40685"},{"id":"40686"},{"id":"40687"},{"id":"40688"}]},"id":"40791","type":"ProxyToolbar"},{"attributes":{},"id":"40687","type":"SaveTool"},{"attributes":{"axis_label":"Chain","formatter":{"id":"40758"},"major_label_policy":{"id":"40757"},"ticker":{"id":"40724"}},"id":"40643","type":"LinearAxis"},{"attributes":{},"id":"40684","type":"WheelZoomTool"},{"attributes":{},"id":"40631","type":"DataRange1d"},{"attributes":{"overlay":{"id":"40690"}},"id":"40685","type":"LassoSelectTool"},{"attributes":{"toolbar":{"id":"40791"},"toolbar_location":"above"},"id":"40792","type":"ToolbarBox"},{"attributes":{},"id":"40686","type":"UndoTool"},{"attributes":{"active_multi":null,"tools":[{"id":"40681"},{"id":"40682"},{"id":"40683"},{"id":"40684"},{"id":"40685"},{"id":"40686"},{"id":"40687"},{"id":"40688"}]},"id":"40691","type":"Toolbar"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"40745","type":"Span"}],"root_ids":["40793"]},"title":"Bokeh Application","version":"2.3.1"}}';
                  var render_items = [{"docid":"216818a3-44d0-41cb-ad3b-a98e22ea79a5","root_ids":["40793"],"roots":{"40793":"6d9be5f4-c539-41a7-8ab8-9119dcb447db"}}];
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