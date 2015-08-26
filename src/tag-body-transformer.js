module.exports = function transform(node, compiler, template) {
    var bodyExpression = node.getAttribute('tag-body');
    var bodyExpressionOr = node.getAttribute('tag-body-or');

    if (bodyExpression != null) {
        node.removeAttribute('tag-body');

        node.appendChild(compiler.createNode('tag-body', {
            body: bodyExpression || 'data.renderBody'
        }));
    }

    if (bodyExpressionOr != null) {
        node.removeAttribute('tag-body-or');

        node.appendChild(compiler.createNode('tag-body', {
            body: bodyExpression + ' || data.renderBody'
        }));
    }
};
