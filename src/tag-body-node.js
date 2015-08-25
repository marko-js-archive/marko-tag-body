var helperModulePath = require.resolve('./tag-body-helper');

function TagBodyNode(props) {
    TagBodyNode.$super.call(this);
    if (props) {
        this.setProperties(props);
    }
}
TagBodyNode.prototype = {
    doGenerateCode: function (template) {
        var compiler = template.compiler;

        var tagBodyHelperVar = template.addStaticVar('tagBody', 'require(' + JSON.stringify(compiler.getRequirePath(helperModulePath)) + ')');

        // console.log(module.id, this);
        template.statement(tagBodyHelperVar + '(out, ' + this.getProperty('body') + ');');
    }
};

module.exports = TagBodyNode;