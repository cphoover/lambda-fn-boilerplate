import assert from 'assert';
import fn from './';

describe('fn', function suite() {
	it('will resolve with hello world', function test() {
		return fn()
			.then(res => assert(res === 'hello world!'));
	});
});
