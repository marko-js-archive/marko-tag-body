module.exports = function transform(node, compiler, template) {
    var bodyExpression = node.getAttribute('tag-body');
    if (bodyExpression != null) {
        node.removeAttribute('tag-body');

        node.appendChild(compiler.createNode('tag-body', {
            body: bodyExpression || 'data.renderBody'
        }));
    }
};