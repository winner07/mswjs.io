module.exports = function createSchemaCustomization({ actions, schema }) {
  actions.createTypes(`
    type Tutorial {
      lessonsCount: Int!
    }
  `)
}
