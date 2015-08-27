module.exports = function transform(node, compiler, template) {
    var bodyExpr = node.getAttribute('tag-body');
    var bodyExprOr = node.getAttribute('body-or');
    var bodyExprIor = node.getAttribute('body-ior');

    if (bodyExpr != null) {
        node.removeAttribute('tag-body');

        node.appendChild(compiler.createNode('tag-body', {
            body: bodyExpr || 'data.renderBody'
        }));
    }

    if (bodyExprIor != null) {
        node.removeAttribute('tag-body-or');

        node.appendChild(compiler.createNode('tag-body', {
            body: 'data.renderBody || ' + bodyExprIor
        }));
    }

    if (bodyExprOr != null) {
        node.removeAttribute('body-or');

        node.appendChild(compiler.createNode('tag-body', {
            body: bodyExprOr + ' || data.renderBody'
        }));
    }
};
