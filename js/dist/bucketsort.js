'use strict';

(function () {

	'use strict';

	var definition = function definition(exports, undefined) {

		/* js/src/list */
		(function (exports) {

			/* js/src/list/gather.js */

			var gather = function gather(list, buckets, bi, bj) {

				for (; bi < bj; ++bi) {

					var bucket = buckets[bi];

					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;

					try {
						for (var _iterator = bucket[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							var x = _step.value;
							list.push(x);
						}
					} catch (err) {
						_didIteratorError = true;
						_iteratorError = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion && _iterator['return']) {
								_iterator['return']();
							}
						} finally {
							if (_didIteratorError) {
								throw _iteratorError;
							}
						}
					}
				}
			};

			exports.gather = gather;

			/* js/src/list/scatter.js */

			var scatter = function scatter(key, iterable, buckets) {
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {

					for (var _iterator2 = iterable[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var x = _step2.value;
						buckets[key(x)].push(x);
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2['return']) {
							_iterator2['return']();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}
			};

			exports.scatter = scatter;
		})(exports['list'] = {});
		/* js/src/nodes */
		(function (exports) {

			/* js/src/nodes/gather.js */

			var gather = function gather(head, buckets, bi, bj) {

				// output is head.next

				var last = head;

				for (; bi < bj; ++bi) {

					var bucket = buckets[bi];

					if (bucket.next === null) continue;

					last.next = bucket.next;

					last = bucket.last;
				}
			};

			exports.gather = gather;

			/* js/src/nodes/scatter.js */

			var scatter = function scatter(key, head, buckets) {

				// input is head.next

				// head.next should be deleted for garbage collection

				while (true) {

					head = head.next;

					if (head === null) break;

					buckets[key(head.value)].last.next = head;
				}
			};

			exports.scatter = scatter;
		})(exports['nodes'] = {});
		/* js/src/stack */
		(function (exports) {

			/* js/src/stack/gather.js */

			var gather = function gather(main, buckets, bi, bj) {

				while (--bj >= bi) {

					var bucket = buckets[bj];

					while (!bucket.empty()) main.push(bucket.pop());
				}
			};

			exports.gather = gather;

			/* js/src/stack/scatter.js */

			var scatter = function scatter(key, main, buckets) {

				while (!main.empty()) {

					var x = main.pop();

					buckets[key(x)].push(x);
				}
			};

			exports.scatter = scatter;
		})(exports['stack'] = {});
		return exports;
	};
	if (typeof exports === 'object') {
		definition(exports);
	} else if (typeof define === 'function' && define.amd) {
		define('aureooms-js-bucketsort', [], function () {
			return definition({});
		});
	} else if (typeof window === 'object' && typeof window.document === 'object') {
		definition(window['bucketsort'] = {});
	} else console.error('unable to detect type of module to define for aureooms-js-bucketsort');
})();