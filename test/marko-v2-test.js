var chai = require('chai');
chai.config.includeStack = true;
var expect = require('chai').expect;

describe('marko-tag-body', function() {
    it('should work with a tag-body attribute that has a value', function() {
        var template = require('marko-v2').load(require.resolve('./fixtures/marko-v2/simple.marko'));
        var output = template.renderSync({
            message: 'Body from message'
        });
        expect(output).to.equal('<div><h1>Hello World</h1><p>Body from message</p></div>');

        output = template.renderSync({
            renderBody: function(out) {
                out.write('Body from renderBody()');
            }
        });
        expect(output).to.equal('<div><h1>Hello World</h1><p>Body from renderBody()</p></div>');
    });

    it('should work with a tag-body attribute that does not have a value', function() {
        var template = require('marko-v2').load(require.resolve('./fixtures/marko-v2/attr-no-value.marko'));

        var output = template.renderSync({
            renderBody: function(out) {
                out.write('Body from renderBody()');
            }
        });
        expect(output).to.equal('<div><h1>Hello World</h1><p>Body from renderBody()</p></div>');
    });
});