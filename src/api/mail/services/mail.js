'use strict';

/**
 * mail service.
 */

module.exports = () => ({
  // /api/templates?filters[topics][$contains]=<placeholder>
  findOneTemplate: async (topic) => {
    const templates = await strapi.entityService.findMany(
      'api::template.template',
      {
        filters: {
          topics: {
            $contains: topic,
          },
        },
      }
    );

    return templates.shift();
  },
  // /api/subscriptions?filters[topics][$contains]=<placeholder>&fields=email&pagination[pageSize]=100
  findSubscriptions: async (topic) => {
    return strapi.entityService.findMany(
      'api::subscription.subscription',
      {
        fields: ['email'],
        filters: {
          topics: {
            $contains: topic,
          },
        },
        pagination: {
          pageSize: 100,
        },
      }
    );
  },
});