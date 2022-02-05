import {assert} from 'chai';
import {escape} from '../util-escape.js';

describe('escape strings', function () {
    it('escape html in text', function () {
        const text = escape('replace <img src="test.jpg">');
        assert.equal(text, 'replace &#60;img src=&#34;test.jpg&#34;&#62;');
    });
    it('escape surrogate pair rocket emoji', function () {
        const text = escape('replace 🚀');
        assert.equal(text, 'replace &#55357;&#56960;');
    });
});
