//small cache
//when you call it to add the key value, using cache.createCache(key, value)
//when you get the value from key, you can directly using cache[key]
(function(window, cache){
	var cache = {};
	cache.defaultLength = 100;
	cache.createCache = createCache();
	function createCache() {
		var keys = [];
		return function(key, value){
			if (keys.push(key) > this.defaultLength) {
				delete this[keys.shift()];
			}
			return (this[key] = value);
		}
	}
	window[cache] = cache;
})(window, "cache");

//another way to implement
(function(window, cache){
	window["cache"] = cache();
})(window, function(){
	var cache = {
		defaultLength: 100,
		createCache: function(){
			var keys = [];
			return function(key, value){
				if (keys.push(key) > this.defaultLength) {
					delete this[keys.shift()];
				}
				return (this[key] = value);
			}
		}		
	};
	return cache;
});
