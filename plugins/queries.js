//Endpoints - since we use GraphQL, there is only one endpoint
export const ROOT           =      'http://test-cms.diwanee.net';
export const GQL            =      `${ROOT}/graphql`;

//Object that contains all queries (strings)
export const Queries = {
    nav:          '/tag?query=%7B%0A%20%20navigation%3A%20tags(type%3A%20%22Navigation%22%2C%20first_level%3A%20true%2C%20sort_by%3A%20%22id%22%2C%20sort_order%3A%20%22asc%22)%20%7B%0A%20%20%20%20name%0A%20%20%20%20navigation_data%3A%20nodes%20%7B%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20additional_fields%20%7B%0A%20%20%20%20%20%20%20%20...%20on%20TypeNavigationItem%20%7B%0A%20%20%20%20%20%20%20%20%20%20url%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20children%20%7B%0A%20%20%20%20%20%20name%20%20%20%20%20%20%0A%20%20%20%20%20%20navigation_data%3A%20nodes%20%7B%0A%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20additional_fields%20%7B%0A%20%20%20%20%20%20%20%20%20%20...%20on%20TypeNavigationItem%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20url%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A',

    allTagsNames:
    '/tag?query=%7B%0A%20%20tags(type%3A%20"Category"%2C%20sort_by%3A%20"name"%2C%20sort_order%3A"asc")%20%7B%0A%09id%0A%09name%20%20%20%20%0A%20%20%7D%0A%7D%0A',

    allArticles:
    `/node?query=query%7B%0A%20%20nodes%20(node_type%3A%20"Article")%20%7B%0A%09id%0A%09title%0A%09additional_fields%20%7B%0A%20%20%09%20%20...%20on%20TypeArticle%20%7B%0A%20%20%20%20%09%20%20%20%20intro%0A%20%20%20%20%09%20%20%20%20%7D%0A%09%7D%0A%09tags%20%7B%0A%0A%20%20%09%20%20name%0A%09%7D%0A%09featured_image%3A%20elements(type%3A%20"featured_image")%20%7B%0A%20%20%20%20%20%20%09%20%20data%20%20%20%20%20%20%09%20%0A%09%7D%0A%20%20%7D%0A%7D%0A`,
};
