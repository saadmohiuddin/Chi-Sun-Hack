(function(window, undefined) {
  var dictionary = {
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "4b4e2ddc-1edb-4280-8f9b-06b2790a360d": "modify Items",
    "c0d50ab5-383f-40d3-831a-9498067b86d4": "view Items",
    "0cc8f43d-47f4-498c-b3be-2df6c8716626": "new Items",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "732ff3e9-5a4e-4f2c-96fb-fff5d54632ef": "android",
    "ba4d6c7a-c7a4-4d3f-8bc7-7e72333970ce": "iPhone",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);