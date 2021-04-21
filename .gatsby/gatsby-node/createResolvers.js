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
    // Query: {
    //   tutorials: {
    //     type: ['Tutorial'],
    //     async resolve(source, args, context) {
    //       const pages = await context.nodeModel.runQuery({
    //         type: 'Mdx',
    //         query: {
    //           filter: {
    //             slug: {
    //               glob: 'tutorials/*',
    //             },
    //           },
    //           sort: {
    //             fields: ['slug'],
    //             order: ['ASC'],
    //           },
    //         },
    //         firstOnly: false,
    //       })
    //       console.log({ pages })

    //       return pages
    //     },
    //   },
    // },

    // Query: {
    //   tutorial: {
    //     type: ['Tutorial'],
    //     async resolve(source, args, context) {
    //       console.log({ args })

    //       const pages = await context.nodeModel.runQuery({
    //         type: 'Mdx',
    //         query: {
    //           filter: {
    //             slug: {
    //               eq: `tutorials/${args.slug}`,
    //             },
    //           },
    //           sort: {
    //             fields: ['slug'],
    //             order: ['ASC'],
    //           },
    //         },
    //         firstOnly: false,
    //       })

    //       return pages
    //     },
    //   },
    // },
    // Tutorial: {
    //   lessons: {
    //     type: ['Lesson'],
    //     resolve(source, args, context) {
    //       console.log('Tutorial.lessons', { source, args })
    //       return getChildPages(
    //         /**
    //          * @fixme Honestly, no idea why "source.slug" is not set
    //          * when querying for that field.
    //          */
    //         source.__gatsby_resolved.slug,
    //         context,
    //       )
    //     },
    //   },
    // },

    /* Old */
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
