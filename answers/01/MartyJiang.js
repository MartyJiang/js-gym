/**
 * A range implement by using ES6 generator
 * @param { Array or object }
 * @return { undefined }
 */
function* range(o) {
	if (!o || typeof o != "object") {
		throw new TypeError("Array or Object required.")
	}

	if (o instanceof Array) {
		for (let i = 0; i < o.length; i++) {
			yield [i, o[i]]
		}
		return
	}

	for (let k of Object.keys(o)) {
		yield [k, o[k]]
	}
}

exports.range = range