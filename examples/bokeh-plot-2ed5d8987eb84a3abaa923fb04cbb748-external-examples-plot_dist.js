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
    
      
      
    
      var element = document.getElementById("33f866b1-459e-4b3f-b9ca-8ddf357f6ab5");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '33f866b1-459e-4b3f-b9ca-8ddf357f6ab5' but no matching script tag was found.")
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
                    
                  var docs_json = '{"04bab868-31b5-45ac-9f51-50d1fcb78472":{"defs":[],"roots":{"references":[{"attributes":{},"id":"17100","type":"LinearScale"},{"attributes":{},"id":"17162","type":"BasicTickFormatter"},{"attributes":{},"id":"17165","type":"BasicTickFormatter"},{"attributes":{},"id":"17067","type":"DataRange1d"},{"attributes":{},"id":"17132","type":"Title"},{"attributes":{"source":{"id":"17126"}},"id":"17130","type":"CDSView"},{"attributes":{},"id":"17113","type":"WheelZoomTool"},{"attributes":{},"id":"17137","type":"AllLabels"},{"attributes":{"formatter":{"id":"17165"},"major_label_policy":{"id":"17164"},"ticker":{"id":"17105"}},"id":"17104","type":"LinearAxis"},{"attributes":{"bottom":{"value":0},"fill_alpha":{"value":0.1},"fill_color":{"value":"#000000"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#000000"},"right":{"field":"right"},"top":{"field":"top"}},"id":"17128","type":"Quad"},{"attributes":{"bottom":{"value":0},"fill_color":{"value":"#000000"},"left":{"field":"left"},"line_alpha":{"value":0},"line_color":{"value":"#000000"},"right":{"field":"right"},"top":{"field":"top"}},"id":"17127","type":"Quad"},{"attributes":{"below":[{"id":"17104"}],"center":[{"id":"17107"},{"id":"17111"}],"height":500,"left":[{"id":"17108"}],"output_backend":"webgl","renderers":[{"id":"17147"}],"title":{"id":"17153"},"toolbar":{"id":"17119"},"width":500,"x_range":{"id":"17096"},"x_scale":{"id":"17100"},"y_range":{"id":"17098"},"y_scale":{"id":"17102"}},"id":"17095","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17115","type":"SaveTool"},{"attributes":{},"id":"17081","type":"PanTool"},{"attributes":{"active_multi":null,"tools":[{"id":"17081"},{"id":"17082"},{"id":"17083"},{"id":"17084"},{"id":"17085"},{"id":"17086"}]},"id":"17088","type":"Toolbar"},{"attributes":{"data_source":{"id":"17144"},"glyph":{"id":"17145"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17146"},"view":{"id":"17148"}},"id":"17147","type":"GlyphRenderer"},{"attributes":{},"id":"17161","type":"AllLabels"},{"attributes":{},"id":"17086","type":"HelpTool"},{"attributes":{"active_multi":null,"tools":[{"id":"17112"},{"id":"17113"},{"id":"17114"},{"id":"17115"},{"id":"17116"},{"id":"17117"}]},"id":"17119","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17118","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"17126"},"glyph":{"id":"17127"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17128"},"view":{"id":"17130"}},"id":"17129","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"17104"},"ticker":null},"id":"17107","type":"Grid"},{"attributes":{"overlay":{"id":"17087"}},"id":"17083","type":"BoxZoomTool"},{"attributes":{},"id":"17071","type":"LinearScale"},{"attributes":{},"id":"17135","type":"BasicTickFormatter"},{"attributes":{},"id":"17134","type":"AllLabels"},{"attributes":{},"id":"17116","type":"ResetTool"},{"attributes":{"overlay":{"id":"17118"}},"id":"17114","type":"BoxZoomTool"},{"attributes":{},"id":"17109","type":"BasicTicker"},{"attributes":{},"id":"17065","type":"DataRange1d"},{"attributes":{},"id":"17105","type":"BasicTicker"},{"attributes":{"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"17145","type":"Line"},{"attributes":{"formatter":{"id":"17135"},"major_label_policy":{"id":"17134"},"ticker":{"id":"17078"}},"id":"17077","type":"LinearAxis"},{"attributes":{"label":{"value":"Poisson"},"renderers":[{"id":"17129"}]},"id":"17143","type":"LegendItem"},{"attributes":{"axis":{"id":"17108"},"dimension":1,"ticker":null},"id":"17111","type":"Grid"},{"attributes":{},"id":"17153","type":"Title"},{"attributes":{"line_alpha":0.1,"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"17146","type":"Line"},{"attributes":{"axis":{"id":"17073"},"ticker":null},"id":"17076","type":"Grid"},{"attributes":{"children":[{"id":"17064"},{"id":"17095"}]},"id":"17149","type":"Row"},{"attributes":{},"id":"17098","type":"DataRange1d"},{"attributes":{},"id":"17140","type":"Selection"},{"attributes":{},"id":"17078","type":"BasicTicker"},{"attributes":{},"id":"17085","type":"ResetTool"},{"attributes":{},"id":"17171","type":"UnionRenderers"},{"attributes":{},"id":"17138","type":"BasicTickFormatter"},{"attributes":{"items":[{"id":"17143"}]},"id":"17142","type":"Legend"},{"attributes":{},"id":"17117","type":"HelpTool"},{"attributes":{"formatter":{"id":"17138"},"major_label_policy":{"id":"17137"},"ticker":{"id":"17074"}},"id":"17073","type":"LinearAxis"},{"attributes":{"axis":{"id":"17077"},"dimension":1,"ticker":null},"id":"17080","type":"Grid"},{"attributes":{"formatter":{"id":"17162"},"major_label_policy":{"id":"17161"},"ticker":{"id":"17109"}},"id":"17108","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[512]},"y":{"__ndarray__":"49HhfZa2jj+G3KBSsbGOPxjBytkMo44/jZFVmDGRjj9HFSRL9naOP8Wi0wlkTo4/07KCiWMdjj+MxXPzb+SNP8e4yYOVno0/d4gQ/DxYjT9MrsCdLQaNP2xA36Rtr4w/NddkeipajD/KDoFEOQeMP7udlhStq4s/bZ5pyk9Uiz8+H4dGPPaKP7XNF07Yl4o/khsnSNRGij+4ODYm/OaJP9Ca36z4j4k/SuegEbc2iT9hb6k2A/uIP2JOyOXfs4g/xf6lRY1yiD+h2IzIuDeIP7N99Q3/A4g/2KsW+rnkhz96sF6hOsmHPwqQWrMosYc/XZS5yMqohz+xlyrSpKSHP1uNelt0qoc/PTGBzzLHhz/kWIcLauOHP3vH2VIrCog/C3f55HU7iD+CzYPTOXeIP230xt9YvYg/upXdaKcNiT/V2AJ/vHSJP2aZiiqV54k/rJ2nCF9Zij8An2gzPduKP+GScluCZ4s/WuTuq2cEjD9wMkoAj5+MP8gXBaIVSo0/16ViDE3+jT/awcVp8LyOP3Jp6/PahY8/Jw4uh9AokD/b/T2ExJKQP3dXUxbgA5E/CLluHWJzkT8mm0FBPfCRP6Q7SjZda5I/5z/gay3qkj+2eP0/M3aTP59acdLgAJQ/X4LXQymQlD/+jOA0DiSVP4fq5YQgvJU/r25De5hblj/1EV45Y/mWP4+84zGqmJc/RpTFR2JDmD8KM+C6YfaYP65nBZPqqpk/4lO1CJZgmj8pZmd3Uh2bP8svjFbZ3ps/AFMp4jClnD9ztvrEhnmdP2MSakX/Rp4/9yUOufkenz/JhrUV1PifP1lot7AVb6A/hNn3xJzhoD/Nss2q7lShP0B5UIKYzaE/Ik5IaXtKoj9B8ULa5siiP0vcWc+qSKM/crALLYrMoz/pgg28lFGkP9L9EY8s2aQ/HX6es1JjpT+Zgr5+be6lP0Oqrg9ufaY/yysOgVcNpz/l2VqhF6GnP+Fj07hHN6g/5zb6YRPTqD+C669q9HSpPwdCdbBzFao/qlFqw0u6qj98kQzaVV2rP5TipFVuB6w//aSeIt6yrD+e91kImmKtP9gRYT4PEq4/R9jcDe7Drj9xZTg5vXmvP0rPNjvUGbA/SfReziN4sD/Afl+xyNewPzYcYXRXOrE/X8WPHT+fsT89nmSoogKyP4uRlsGJZrI/GoNFXZfLsj9ZmC9+ijKzPxFhC47bmbM/6IFH3qgDtD/2no6wI2y0P0E6Udfi2rQ/ZhtSPBxHtT8bnpxfNbS1P4edgvvvIrY/83vWuLGStj+FKwSHxAK3PzLz32oZcrc/QPTJq5rjtz9AhaBp4FW4P+NEvR3HyLg/+apVZK8+uT9BV5OswrS5PyYY83vpLro/nP4Hg6yluj/pr3UM+x27P2w7V3v4l7s/G1cOxGYRvD/27tUAyY+8PzOsLMvlC70/BJ3eFuiJvT+g3cU1RQi+P3dKNAO5h74/yUppE+kJvz9LY6nju4y/P5NHDLFFCcA/42esD25NwD+V+xVN85DAP9eK3MGw1cA/UDs9H1YbwT8RyNikt2LBP3kkkQD9q8E/qnQ/FXb0wT/nsuzflT3CP1ZhEruCiMI/q6p/3UDVwj+rt/ktWiLDPzFavubeb8M/Kjuj6Ui/wz8gXrlnvA/EPxOgaTU3YcQ/KWqP3Ru0xD9GDhwDxQfFP3tIaj1fXcU/mZpXTYC0xT/HiD1+MwvGP2k5SkHNYsY//GHDEjK9xj8V8qutWhbHP8QtM0lGcsc/O1IlMkrOxz9Yx9KObyvIP4tWu9Ueisg/9BbE/dHoyD/nBNaG+EbJP8lnoRY9pck/j8FvcGQEyj+QfFRLS2TKPx5nRj6rxco/lTX2/+Ilyz9Q85nWS4bLP8fbplAo58s/elq/Nf5HzD+pukvLYarMP9UuBiX1Cs0/cTzLrShszT8jCqNruMzNP0E6BoOoLc4/N77yJ6+Ozj+sA/BTaO/OPyaHi1oKT88/aaYRrZ2uzz/QcxBSNwbQP7DtmwsDNdA/z8WR6lJk0D81c5yjOZLQP+dioDpRwNA/U5hkk9bt0D/wehWAxBrRP7Munv0GSNE/zhkAz3500T/2WNWtlqDRP++aztO5y9E/ZLRjDvP20T9TZmLP4SHSP7KW9mXAS9I/BN1HYLh10j9bsBwjE5/SP0nzxjoLx9I/Ql4qVz7v0j+V6pmEhxfTP6IgFf1sP9M/YaizM5pl0z8di6s+p4zTP8gG38KtstM/GHI7CKHY0z+sjEk1df3TP1/O/PxHItQ/4Xj1M+hG1D9frkg9jGvUP9sFStutjtQ/PITEvbOx1D+o/KaoRtXUPzJzdGBV+NQ/iditeEMb1T+tjNqkgz3VPzys69M9X9U/0uPEWg2A1T8/TfmoHKDVP15RAvpCwNU//8Fjtx7g1T/CzpGnOADWP15xcx6YINY/MU6cfIg/1j92D/uCg17WP+jD/PfIfNY/mRORvKWa1j//in6QoLjWPzOM9cqg1tY/pXZ1V4/z1j8wo64YHxDXPxRJSDwYLNc/BplhN3xH1z9JNAf1uGHXPzbQCLCRfNc/6ruFGKmW1z9t4fW8HbHXP5vKiCR/ytc/0xLWcxnj1z/15LhgrPrXP08WVxe0Etg/UgnuPg8o2D/fQWLs1j3YP9tXLHWkUtg/hTPhEgln2D+xnqXJGnrYP2xDbfDtjNg/cnU0bw6f2D8Y50t4F7DYP5UV5p3WwNg/3HPZyVbQ2D9Ea8SFAN7YPx+WwNK06tg/41Dxcub22D9kvWZ+WwLZP9IM5CglDNk/W1GyqWcV2T8QB4BJxh7ZPwndvMUjJdk/91E6+skq2T/NPwXT0C/ZPyiSsT53M9k/YYkN/9422T8eb4q91TfZP5/VQ2gsONk/poIW3v422T8TWyjU6zPZP4VjSjrvMNk/Wh5Cp/sr2T/g3UNr+iXZPxS1PCIBHtk/BHBLvQwV2T/BQaiLOQzZPxhuxemiAdk/oYvlEwv22D+ke7Mp8+jYPyYMq/iD2tg/6Cso2uXK2D98fFlbtrrYP2bw36qkqdg/d+I7ESeX2D//egnocIPYP6Iz213Dbtg/Tc+MITRZ2D+RFADsa0LYP0+EjB7nKtg/8anoNssS2D8s88k3s/jXP5G2+f0Y39c/xVov9P7D1z8dY4NsI6jXP3MY8V25i9c/TSaJoEtu1z+ls1YZOFDXP+1Q8i36Mdc/0wHbqzoT1z9PN9dzF/PWP7KK0hWr0tY/ly/mYuuw1j96Z/c2Vo/WP3SGn/8pbdY/JSbeep1K1j9FBlxIVSfWP8AV6J2jAtY/xlveo/ve1T/9aYUa7LnVP+zvpNF8lNU/MgfvPOhu1T9hKneI9EfVP0vaDvm0INU/pCWlnsD41D+NvdmZBdHUPwBrk2HqqNQ/fRI2muR/1D+1V2VHdlXUPyChUR/6K9Q/MHefzmIB1D8lMbWQodbTPzy8F9RYq9M/GSDlljJ/0z8+5Pf+wVLTPwaX6wl+JdM//OuB9Rf40j9m+J58xsnSP3yA3/2+mtI/CNwo8SBs0j/ftrBF8jvSP//u9wayC9I/wZZYflbb0T95hBze5qrRP5WNQC3SeNE/8cOU6AZH0T/5mKLzFxXRP7OKqs4V4tA/y0B4Heqv0D8wOLRVzHzQP4v7danjSdA/jPaIJ0MW0D9RTbVKzMXPP3f6kAyEXc8/B6CInn/4zj/slazW55HOP2WsDk4DKs4/hgkH8dfCzT/TD1K5vVvNP4VEF6NG9sw/J2bIufOQzD/c8w8spC3MPy93kkSFyss/YKCCBxFnyz8T20gUpgXLPwwtoQTKo8o/UqWvacBCyj8mgk+Aw+TJP6S+I3FGh8k/HRJB0QgryT8Dfm2RudDIP7fByeGRdsg/9O6GosIcyD8iUar+hMXHP6u15Kamb8c/oufDB34bxz+wdxqBsMjGP85amV5PeMY/PIcg33Qoxj+KYOIePdrFPwtFZ3txi8U/FBT+HK0+xT8yNzgwwPPEP5JWMWa+qcQ/dRT9hYxfxD9yRoFWChjEP3duoJp10MM/i063Dc6Jwz8TfWmd9ULDP4HKxzb3/MI/Bl7Y4ZW2wj8gdz4uM3HCP8YeppehK8I/TEylnSflwT9nP6qOfp/BPwhtPaJzWsE/L6+EoIEVwT9bymPnJM7AP180KXZmiMA/eCbNVexCwD/yOQbuCve/PyjEliORZb8/+R9L10fXvj/sZeFYdEm+PxWnIateuL0/Ha8EnqIovT/ohTLv0JO8P0NdX0IRArw/VcypKSFuuz/FWnsMtdm6P5KJNK7IR7o/p2SJ95iyuT9rLbNhwR65P5kgA3TWirg/VGcbKbj3tz+sFf3cbWO3P7e/roNezrY/knl0yao7tj8b/y6QN6m1P/DWq5b8F7U/UMC/ozSKtD8EA7Jj/fyzPx1II+/xb7M/26RfrSDksj9lYpL31VuyP6S8pcWc1bE/nnBa/OZQsT/aGHS67M2wPzdP/wG9T7A/4IbYJn6prz+qrIqZ7rauP9B/IRzyyq0/v9fZjPrfrD+7PDfr3f2rP25cBkfhIqs/V5opnIpKqj8KKwuGEXipPx9DMhg1rqg/X7QW88nppz+U152vESinP+WeE2ROcKY/n7McTVK8pT+MFddWqg2lP8H/N0FFZKQ/fl/mw62+oz9MPqUNXh6jP/SB63E0g6I/fk717W3uoT+Qn3d70lihP5Np1zwOzqA/pcT0Cv1IoD9h6yps2oSfPzEfX81hiZ4/gQR92LiVnT9Qvxz5YqycP0hUEw+8wZs/kOz7Urfnmj91zAXhgA+aPxJB/DxIRJk/Ax3/bc12mD9begLTG7OXP5uhtmwC85Y/VRS8rGw5lj8PI9AZF4aVP0XF++jC2JQ/TiD7yjUxlD+slli8upSTP0BFtcbV/JI/Z+5MdjNskj+lnivPWdeRP9ktVfoyTZE/n9IP3UbHkD9yW2tGhUWQP8nAkKe6hI8/3ev03xSTjj+FXWwQMJ6NP5xG4OgKw4w/pCMsRXruiz8JbEQBgxWLP68j5Ia7RIo/Y6tqKNaHiT9W+a1WDtKIP8jYgYMFHYg/eUEzo4p0hz85whuUNseGP3aAS1wEM4Y/Wipw9NuZhT97vSCUBw2FP8VlX4ybgIQ/OKoe+tn6gz84Q5ZOHYGDP1uhrr9yB4M/brHYdZaZgj9LSiQLkCuCPxmruEOVw4E/lFV9nHNhgT+0o0bbeAqBP66XxfwkrYA/HmWmd3JbgD/FS7KqRRSAP1wDQLU9on8/Hwvux8Mjfz+Pb1If3qx+P4XVh/8VSn4/YwDJRpHjfT8Nj9mQCYR9P2vCWsYwIH0/eLea3UvEfD8M5u01pHx8P8BXetcpMXw/HjeL52v3ez/PI5KSM8R7PxqWydEgpHs/2JglHK99ez+aHJcpv1t7P/ShdFIuM3s/jN8QMnMbez8uAJqqpwd7PxKKggm07Ho/KplcUBriej9XZqcFANt6Pw==","dtype":"float64","order":"little","shape":[512]}},"selected":{"id":"17170"},"selection_policy":{"id":"17171"}},"id":"17144","type":"ColumnDataSource"},{"attributes":{},"id":"17102","type":"LinearScale"},{"attributes":{},"id":"17170","type":"Selection"},{"attributes":{},"id":"17082","type":"WheelZoomTool"},{"attributes":{},"id":"17141","type":"UnionRenderers"},{"attributes":{},"id":"17084","type":"SaveTool"},{"attributes":{"data":{"left":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"right":[1,2,3,4,5,6,7,8,9,10,11,12,13,14],"top":{"__ndarray__":"+n5qvHSTmD+kcD0K16OwPz81XrpJDMI/8tJNYhBYyT/dJAaBlUPLP4PAyqFFtsM/MQisHFpkuz9KDAIrhxapPxkEVg4tsp0//Knx0k1ikD/8qfHSTWJgPwAAAAAAAAAA/Knx0k1iUD/8qfHSTWJQPw==","dtype":"float64","order":"little","shape":[14]}},"selected":{"id":"17140"},"selection_policy":{"id":"17141"}},"id":"17126","type":"ColumnDataSource"},{"attributes":{},"id":"17112","type":"PanTool"},{"attributes":{"source":{"id":"17144"}},"id":"17148","type":"CDSView"},{"attributes":{},"id":"17069","type":"LinearScale"},{"attributes":{"below":[{"id":"17073"}],"center":[{"id":"17076"},{"id":"17080"},{"id":"17142"}],"height":500,"left":[{"id":"17077"}],"output_backend":"webgl","renderers":[{"id":"17129"}],"title":{"id":"17132"},"toolbar":{"id":"17088"},"width":500,"x_range":{"id":"17065"},"x_scale":{"id":"17069"},"y_range":{"id":"17067"},"y_scale":{"id":"17071"}},"id":"17064","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17096","type":"DataRange1d"},{"attributes":{},"id":"17164","type":"AllLabels"},{"attributes":{},"id":"17074","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17087","type":"BoxAnnotation"}],"root_ids":["17149"]},"title":"Bokeh Application","version":"2.3.1"}}';
                  var render_items = [{"docid":"04bab868-31b5-45ac-9f51-50d1fcb78472","root_ids":["17149"],"roots":{"17149":"33f866b1-459e-4b3f-b9ca-8ddf357f6ab5"}}];
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