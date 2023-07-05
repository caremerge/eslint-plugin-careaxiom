module.exports = {
    meta: {
      type: 'suggestion',
      docs: {
        description: 'Warns against calling `sequelize.dropTable` or `sequelize.destroy`.',
        category: 'Best Practices',
        recommended: true,
      },
      schema: [],
    },
    create: function (context) {
      return {
        MemberExpression(node) {
            const { property } = node;
            if (property.name === 'dropTable' || property.name === 'destroy') {
            context.report({
                node,
                message: 'Be Careful about calling `dropTable` or `destroy` methods.',
            });
            }
      }
      };
    },
  };
  