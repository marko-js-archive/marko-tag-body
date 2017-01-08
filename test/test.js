var chai = require('chai');
chai.config.includeStack = true;
var expect = require('chai').expect;

describe('marko-tag-body', function() {
    it('should work with a tag-body attribute that has a value', function() {
        var template = require('marko').load(require.resolve('./fixtures/simple.marko'));
        var output = template.renderToString({
            message: 'Body from message'
        });
        expect(output).to.equal('<div><h1>Hello World</h1><p>Body from message</p></div>');

        output = template.renderToString({
            renderBody: function(out) {
                out.write('Body from renderBody()');
            }
        });
        expect(output).to.equal('<div><h1>Hello World</h1><p>Body from renderBody()</p></div>');
    });

    it('should work with a tag-body attribute that does not have a value', function() {
        var template = require('marko').load(require.resolve('./fixtures/attr-no-value.marko'));

        var output = template.renderToString({
            renderBody: function(out) {
                out.write('Body from renderBody()');
            }
        });
        expect(output).to.equal('<div><h1>Hello World</h1><p>Body from renderBody()</p></div>');
    });
});