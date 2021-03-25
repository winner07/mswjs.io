function getChildPages(slug, context) {
  return context.nodeModel.runQuery({
    type: 'Mdx',
    query: {
      filter: {
        slug: {
          glob: `${slug}**/*`,
        },
      },
      sort: {
        fields: ['slug'],
        order: ['ASC'],
      },
    },
    firstOnly: false,
  })
}

module.exports = function createResolvers({ createResolvers }) {
  createResolvers({
    Mdx: {
      childPagesCount: {
        type: 'Int!',
        async resolve(source, args, context) {
          const pages = await getChildPages(
            source.__gatsby_resolved.slug,
            context,
          )
          return pages.length
        },
      },
      childPages: {
        type: ['Mdx'],
        resolve(source, args, context) {
          return getChildPages(
            /**
             * @fixme Honestly, no idea why "source.slug" is not set
             * when querying for that field.
             */
            source.__gatsby_resolved.slug,
            context,
          )
        },
      },
    },
  })
}
