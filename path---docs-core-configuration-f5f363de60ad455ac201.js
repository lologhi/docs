webpackJsonp([0x660ac77b9cf5],{397:function(n,e){n.exports={pathContext:{path:"docs/core/configuration",current:{path:"docs/core/configuration",title:"The API Component - Configuration"},prev:{path:"docs/core/design",title:"General Design Considerations",rootPath:"The API Component",items:[]},next:{path:"docs/core/operations",title:"Operations",rootPath:"The API Component",items:[]},html:'<h1 id="configuration"><a href="#configuration" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Configuration</h1>\n<p>Here\'s the complete configuration of the Symfony bundle with including default values:</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token comment"># api/config/packages/api_platform.yaml</span>\n<span class="token key atrule">api_platform</span><span class="token punctuation">:</span>\n\n    <span class="token comment"># The title of the API.</span>\n    <span class="token key atrule">title</span><span class="token punctuation">:</span> <span class="token string">\'\'</span>\n\n    <span class="token comment"># The description of the API.</span>\n    <span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">\'\'</span>\n\n    <span class="token comment"># The version of the API.</span>\n    <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">\'0.0.0\'</span>\n\n    <span class="token comment"># Specify a name converter to use.</span>\n    <span class="token key atrule">name_converter</span><span class="token punctuation">:</span> <span class="token null important">~</span>\n\n    <span class="token comment"># Specify a path name generator to use.</span>\n    <span class="token key atrule">path_segment_name_generator</span><span class="token punctuation">:</span> <span class="token string">\'api_platform.path_segment_name_generator.underscore\'</span>\n\n    <span class="token key atrule">eager_loading</span><span class="token punctuation">:</span>\n        <span class="token comment"># To enable or disable eager loading.</span>\n        <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n\n        <span class="token comment"># Fetch only partial data according to serialization groups.</span>\n        <span class="token comment"># If enabled, Doctrine ORM entities will not work as expected if any of the other fields are used.</span>\n        <span class="token key atrule">fetch_partial</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n\n        <span class="token comment"># Max number of joined relations before EagerLoading throws a RuntimeException.</span>\n        <span class="token key atrule">max_joins</span><span class="token punctuation">:</span> <span class="token number">30</span>\n\n        <span class="token comment"># Force join on every relation.</span>\n        <span class="token comment"># If disabled, it will only join relations having the EAGER fetch mode.</span>\n        <span class="token key atrule">force_eager</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n\n    <span class="token comment"># Enable the FOSUserBundle integration.</span>\n    <span class="token key atrule">enable_fos_user</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n\n    <span class="token comment"># Enable the Nelmio Api doc integration.</span>\n    <span class="token key atrule">enable_nelmio_api_doc</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n\n    <span class="token comment"># Enable the Swagger documentation and export.</span>\n    <span class="token key atrule">enable_swagger</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n\n    <span class="token comment"># Enable Swagger ui.</span>\n    <span class="token key atrule">enable_swagger_ui</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n\n    <span class="token comment"># Enable the entrypoint.</span>\n    <span class="token key atrule">enable_entrypoint</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n\n    <span class="token comment"># Enable the docs.</span>\n    <span class="token key atrule">enable_docs</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n\n    <span class="token key atrule">oauth</span><span class="token punctuation">:</span>\n        <span class="token comment"># To enable or disable oauth.</span>\n        <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n\n        <span class="token comment"># The oauth client id.</span>\n        <span class="token key atrule">clientId</span><span class="token punctuation">:</span> <span class="token string">\'\'</span>\n\n        <span class="token comment"># The oauth client secret.</span>\n        <span class="token key atrule">clientSecret</span><span class="token punctuation">:</span> <span class="token string">\'\'</span>\n\n        <span class="token comment"># The oauth type.</span>\n        <span class="token key atrule">type</span><span class="token punctuation">:</span> <span class="token string">\'oauth2\'</span>\n\n        <span class="token comment"># The oauth flow grant type.</span>\n        <span class="token key atrule">flow</span><span class="token punctuation">:</span> <span class="token string">\'application\'</span>\n\n        <span class="token comment"># The oauth token url.</span>\n        <span class="token key atrule">tokenUrl</span><span class="token punctuation">:</span> <span class="token string">\'/oauth/v2/token\'</span>\n\n        <span class="token comment"># The oauth authentication url.</span>\n        <span class="token key atrule">authorizationUrl</span><span class="token punctuation">:</span> <span class="token string">\'/oauth/v2/auth\'</span>\n\n        <span class="token comment"># The oauth scopes.</span>\n        <span class="token key atrule">scopes</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n\n    <span class="token key atrule">graphql</span><span class="token punctuation">:</span>\n        <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n        <span class="token key atrule">graphiql</span><span class="token punctuation">:</span>\n            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n\n    <span class="token key atrule">swagger</span><span class="token punctuation">:</span>\n        <span class="token comment"># The swagger api keys.</span>\n        <span class="token key atrule">api_keys</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n\n    <span class="token key atrule">collection</span><span class="token punctuation">:</span>\n        <span class="token comment"># The default order of results.</span>\n        <span class="token key atrule">order</span><span class="token punctuation">:</span> <span class="token string">\'ASC\'</span>\n\n        <span class="token comment"># The name of the query parameter to order results.</span>\n        <span class="token key atrule">order_parameter_name</span><span class="token punctuation">:</span> <span class="token string">\'order\'</span>\n\n        <span class="token key atrule">pagination</span><span class="token punctuation">:</span>\n            <span class="token comment"># To enable or disable pagination for all resource collections by default.</span>\n            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n\n            <span class="token comment"># To allow the client to enable or disable the pagination.</span>\n            <span class="token key atrule">client_enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n\n            <span class="token comment"># To allow the client to set the number of items per page.</span>\n            <span class="token key atrule">client_items_per_page</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n\n            <span class="token comment"># The default number of items per page.</span>\n            <span class="token key atrule">items_per_page</span><span class="token punctuation">:</span> <span class="token number">30</span>\n\n            <span class="token comment"># The maximum number of items per page.</span>\n            <span class="token key atrule">maximum_items_per_page</span><span class="token punctuation">:</span> <span class="token null important">~</span>\n\n            <span class="token comment"># The default name of the parameter handling the page number.</span>\n            <span class="token key atrule">page_parameter_name</span><span class="token punctuation">:</span> <span class="token string">\'page\'</span>\n\n            <span class="token comment"># The name of the query parameter to enable or disable pagination.</span>\n            <span class="token key atrule">enabled_parameter_name</span><span class="token punctuation">:</span> <span class="token string">\'pagination\'</span>\n\n            <span class="token comment"># The name of the query parameter to set the number of items per page.</span>\n            <span class="token key atrule">items_per_page_parameter_name</span><span class="token punctuation">:</span> <span class="token string">\'itemsPerPage\'</span>\n\n            <span class="token comment"># To allow partial pagination for all resource collections.</span>\n            <span class="token comment"># This improves performances by skipping the `COUNT` query.</span>\n            <span class="token key atrule">partial</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n\n            <span class="token comment"># To allow the client to enable or disable the partial pagination.</span>\n            <span class="token key atrule">client_partial</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n\n            <span class="token comment"># The name of the query parameter to enable or disable the partial pagination.</span>\n            <span class="token key atrule">partial_parameter_name</span><span class="token punctuation">:</span> \'partial\' <span class="token comment"># Default value</span>\n\n    <span class="token key atrule">mapping</span><span class="token punctuation">:</span>\n        <span class="token comment"># The list of paths with files or directories where the bundle will look for additional resource files.</span>\n        <span class="token key atrule">paths</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n\n    <span class="token comment"># The list of your resources class directories. Defaults to the directories of the mapping paths but might differ.</span>\n    <span class="token key atrule">resource_class_directories</span><span class="token punctuation">:</span>\n        <span class="token punctuation">-</span> <span class="token string">\'%kernel.project_dir%/src/Entity\'</span>\n\n    <span class="token key atrule">http_cache</span><span class="token punctuation">:</span>\n        <span class="token comment"># Automatically generate etags for API responses.</span>\n        <span class="token key atrule">etag</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n\n        <span class="token comment"># Default value for the response max age.</span>\n        <span class="token key atrule">max_age</span><span class="token punctuation">:</span> <span class="token null important">~</span>\n\n        <span class="token comment"># Default value for the response shared (proxy) max age.</span>\n        <span class="token key atrule">shared_max_age</span><span class="token punctuation">:</span> <span class="token null important">~</span>\n\n        <span class="token comment"># Default values of the "Vary" HTTP header.</span>\n        <span class="token key atrule">vary</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'Accept\'</span><span class="token punctuation">]</span>\n\n        <span class="token comment"># To make all responses public by default.</span>\n        <span class="token key atrule">public</span><span class="token punctuation">:</span> <span class="token null important">~</span>\n\n        <span class="token key atrule">invalidation</span><span class="token punctuation">:</span>\n          <span class="token comment"># To enable the tags-based cache invalidation system.</span>\n          <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n\n          <span class="token comment"># URLs of the Varnish servers to purge using cache tags when a resource is updated.</span>\n          <span class="token key atrule">varnish_urls</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n\n          <span class="token comment"># To pass options to the client charged with the request.</span>\n          <span class="token key atrule">request_options</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n\n    <span class="token comment"># The list of exceptions mapped to their HTTP status code.</span>\n    <span class="token key atrule">exception_to_status</span><span class="token punctuation">:</span>\n        <span class="token comment"># With a status code.</span>\n        <span class="token key atrule">Symfony\\Component\\Serializer\\Exception\\ExceptionInterface</span><span class="token punctuation">:</span> <span class="token number">400</span>\n\n        <span class="token comment"># Or with a constant defined in the \'Symfony\\Component\\HttpFoundation\\Response\' class.</span>\n        <span class="token key atrule">ApiPlatform\\Core\\Exception\\InvalidArgumentException</span><span class="token punctuation">:</span> <span class="token tag">!php/const:Symfony\\Component\\HttpFoundation\\Response::HTTP_BAD_REQUEST</span>\n\n        <span class="token comment"># ...</span>\n\n    <span class="token comment"># The list of enabled formats. The first one will be the default.</span>\n    <span class="token key atrule">formats</span><span class="token punctuation">:</span>\n        <span class="token key atrule">jsonld</span><span class="token punctuation">:</span>\n            <span class="token key atrule">mime_types</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'application/ld+json\'</span><span class="token punctuation">]</span>\n\n        <span class="token key atrule">json</span><span class="token punctuation">:</span>\n            <span class="token key atrule">mime_types</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'application/json\'</span><span class="token punctuation">]</span>\n\n        <span class="token key atrule">html</span><span class="token punctuation">:</span>\n            <span class="token key atrule">mime_types</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'text/html\'</span><span class="token punctuation">]</span>\n\n        <span class="token comment"># ...</span>\n\n    <span class="token comment"># The list of enabled error formats. The first one will be the default.</span>\n    <span class="token key atrule">error_formats</span><span class="token punctuation">:</span>\n        <span class="token key atrule">jsonproblem</span><span class="token punctuation">:</span>\n            <span class="token key atrule">mime_types</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'application/problem+json\'</span><span class="token punctuation">]</span>\n\n        <span class="token key atrule">jsonld</span><span class="token punctuation">:</span>\n            <span class="token key atrule">mime_types</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'application/ld+json\'</span><span class="token punctuation">]</span>\n\n        <span class="token comment"># ...</span>\n</code></pre>\n      </div>',nav:[{title:"The Distribution: Create Powerful APIs with Ease",path:"distribution",items:[{id:"index",title:"Getting Started with API Platform: Hypermedia and GraphQL API, Admin and Progressive Web App",anchors:[{id:"installing-the-framework",title:"Installing the Framework",anchors:[{id:"using-the-official-distribution-recommended",title:"Using the Official Distribution (recommended)"},{id:"using-symfony-flex-and-composer-advanced-users",title:"Using Symfony Flex and Composer (advanced users)"}]},{id:"its-ready",title:"It's Ready!"},{id:"bringing-your-own-model",title:"Bringing your Own Model"},{id:"validating-data",title:"Validating Data"},{id:"adding-graphql-support",title:"Adding GraphQL Support"},{id:"the-admin",title:"The Admin"},{id:"a-reactredux-progressive-web-app",title:"A React/Redux Progressive Web App"},{id:"other-features",title:"Other Features"}]},{id:"testing",title:"Testing and Specifying the API",anchors:[{id:"running-unit-tests-with-phpunit",title:"Running Unit Tests with PHPUnit"}]}]},{title:"The API Component",path:"core",items:[{id:"index",title:"The API Platform Core Library",anchors:[{id:"features",title:"Features"},{id:"other-resources",title:"Other resources"}]},{id:"getting-started",title:"Getting started",anchors:[{id:"installing-api-platform-core",title:"Installing API Platform Core"},{id:"before-reading-this-documentation",title:"Before Reading this Documentation"},{id:"mapping-the-entities",title:"Mapping the Entities"}]},{id:"design",title:"General Design Considerations"},{id:"configuration",title:"Configuration"},{id:"operations",title:"Operations",anchors:[{id:"enabling-and-disabling-operations",title:"Enabling and Disabling Operations"},{id:"configuring-operations",title:"Configuring Operations",anchors:[{id:"prefixing-all-routes-of-all-operations",title:"Prefixing All Routes of All Operations"}]},{id:"subresources",title:"Subresources",anchors:[{id:"control-the-path-of-subresources",title:"Control the Path of Subresources"},{id:"control-the-depth-of-subresources",title:"Control the Depth of Subresources"}]},{id:"creating-custom-operations-and-controllers",title:"Creating Custom Operations and Controllers",anchors:[{id:"recommended-method",title:"Recommended Method"},{id:"alternative-method",title:"Alternative Method"}]}]},{id:"default-order",title:"Overriding Default Order"},{id:"filters",title:"Filters",anchors:[{id:"doctrine-orm-filters",title:"Doctrine ORM Filters",anchors:[{id:"basic-knowledge",title:"Basic Knowledge"},{id:"search-filter",title:"Search Filter"},{id:"date-filter",title:"Date Filter",anchors:[{id:"managing-null-values",title:"Managing null Values"}]},{id:"boolean-filter",title:"Boolean Filter"},{id:"numeric-filter",title:"Numeric Filter"},{id:"range-filter",title:"Range Filter"},{id:"exists-filter",title:"Exists Filter"},{id:"order-filter-sorting",title:"Order Filter (Sorting)",anchors:[{id:"comparing-with-null-values",title:"Comparing with Null Values"},{id:"using-a-custom-order-query-parameter-name",title:"Using a Custom Order Query Parameter Name"}]},{id:"filtering-on-nested-properties",title:"Filtering on Nested Properties"},{id:"enabling-a-filter-for-all-properties-of-a-resource",title:"Enabling a Filter for All Properties of a Resource"}]},{id:"serializer-filters",title:"Serializer Filters",anchors:[{id:"group-filter",title:"Group Filter"},{id:"property-filter",title:"Property filter"}]},{id:"creating-custom-filters",title:"Creating Custom Filters",anchors:[{id:"creating-custom-doctrine-orm-filters",title:"Creating Custom Doctrine ORM Filters"},{id:"using-doctrine-filters",title:"Using Doctrine Filters"},{id:"overriding-extraction-of-properties-from-the-request",title:"Overriding Extraction of Properties from the Request"}]},{id:"apifilter-annotation",title:"ApiFilter Annotation"}]},{id:"serialization",title:"The Serialization Process",anchors:[{id:"overall-process",title:"Overall Process"},{id:"available-serializers",title:"Available Serializers"},{id:"the-serialization-context-groups-and-relations",title:"The Serialization Context, Groups and Relations",anchors:[{id:"configuration",title:"Configuration"}]},{id:"using-serialization-groups",title:"Using Serialization Groups"},{id:"using-serialization-groups-per-operation",title:"Using Serialization Groups per Operation",anchors:[{id:"embedding-relations",title:"Embedding Relations"},{id:"denormalization",title:"Denormalization"}]},{id:"changing-the-serialization-context-dynamically",title:"Changing the Serialization Context Dynamically"},{id:"changing-the-serialization-context-on-a-peritem-basis",title:"Changing the Serialization Context on a Per-item Basis"},{id:"name-conversion",title:"Name Conversion"},{id:"decorating-a-serializer-and-adding-extra-data",title:"Decorating a Serializer and Adding Extra Data"},{id:"entity-identifier-case",title:"Entity Identifier Case"},{id:"embedding-the-jsonld-context",title:"Embedding the JSON-LD Context"}]},{id:"validation",title:"Validation",anchors:[{id:"validating-submitted-data",title:"Validating Submitted Data"},{id:"using-validation-groups",title:"Using Validation Groups"},{id:"using-validation-groups-on-operations",title:"Using Validation Groups on Operations"},{id:"dynamic-validation-groups",title:"Dynamic Validation Groups"},{id:"error-levels-and-payload-serialization",title:"Error Levels and Payload Serialization"}]},{id:"errors",title:"Errors Handling",anchors:[{id:"converting-php-exceptions-to-http-errors",title:"Converting PHP Exceptions to HTTP Errors"}]},{id:"pagination",title:"Pagination",anchors:[{id:"disabling-the-pagination",title:"Disabling the Pagination",anchors:[{id:"globally",title:"Globally"},{id:"for-a-specific-resource",title:"For a Specific Resource"},{id:"clientside",title:"Client-side",anchors:[{id:"globally-1",title:"Globally"},{id:"for-a-specific-resource-1",title:"For a specific resource"}]}]},{id:"changing-the-number-of-items-per-page",title:"Changing the Number of Items per Page",anchors:[{id:"globally-2",title:"Globally"},{id:"for-a-specific-resource-2",title:"For a Specific Resource"},{id:"clientside-1",title:"Client-side",anchors:[{id:"globally-3",title:"Globally"},{id:"for-a-specific-resource-3",title:"For a Specific Resource"}]}]},{id:"changing-maximum-items-per-page",title:"Changing Maximum items per page",anchors:[{id:"globally-4",title:"Globally"},{id:"for-a-specific-resource-4",title:"For a Specific Resource"},{id:"for-a-specific-resource-collection-operation",title:"For a Specific Resource Collection Operation"}]},{id:"partial-pagination",title:"Partial Pagination",anchors:[{id:"globally-5",title:"Globally"},{id:"for-a-specific-resource-5",title:"For a Specific Resource"},{id:"clientside-2",title:"Client-side",anchors:[{id:"globally-6",title:"Globally"},{id:"for-a-specific-resource-6",title:"For a Specific Resource"}]}]},{id:"avoiding-double-sql-requests-on-doctrine",title:"Avoiding double SQL requests on Doctrine"}]},{id:"events",title:"The Event System"},{id:"content-negotiation",title:"Content Negotiation",anchors:[{id:"enabling-several-formats",title:"Enabling Several Formats"},{id:"enabling-additional-formats-on-a-specific-resourceoperation",title:"Enabling Additional Formats On a Specific Resource/Operation"},{id:"registering-a-custom-serializer",title:"Registering a Custom Serializer"},{id:"writing-a-custom-normalizer",title:"Writing a Custom Normalizer"}]},{id:"external-vocabularies",title:"Using External Vocabularies"},{id:"extending-jsonld-context",title:"Extending JSON-LD context"},{id:"data-providers",title:"Data Providers",anchors:[{id:"custom-collection-data-provider",title:"Custom Collection Data Provider"},{id:"custom-item-data-provider",title:"Custom Item Data Provider"},{id:"injecting-the-serializer-in-an-itemdataprovider",title:"Injecting the Serializer in an ItemDataProvider"},{id:"injecting-extensions-pagination-filter-eagerloading-etc",title:"Injecting Extensions (Pagination, Filter, EagerLoading etc.)"}]},{id:"data-persisters",title:"Data Persisters",anchors:[{id:"creating-a-custom-data-persister",title:"Creating a Custom Data Persister"}]},{id:"identifiers",title:"Identifiers",anchors:[{id:"custom-identifier-normalizer",title:"Custom identifier normalizer"},{id:"supported-identifiers",title:"Supported identifiers"}]},{id:"extensions",title:"Extensions",anchors:[{id:"custom-extension",title:"Custom Extension"},{id:"example",title:"Example",anchors:[{id:"blocking-anonymous-users",title:"Blocking Anonymous Users"}]}]},{id:"security",title:"Security",anchors:[{id:"configuring-the-access-control-message",title:"Configuring the Access Control Message"}]},{id:"performance",title:"Performance",anchors:[{id:"enabling-the-builtin-http-cache-invalidation-system",title:"Enabling the Built-in HTTP Cache Invalidation System",anchors:[{id:"extending-cachetags-for-invalidation",title:"Extending Cache-Tags for invalidation"}]},{id:"enabling-the-metadata-cache",title:"Enabling the Metadata Cache"},{id:"using-ppm-phppm",title:"Using PPM (PHP-PM)"},{id:"doctrine-queries-and-indexes",title:"Doctrine Queries and Indexes",anchors:[{id:"search-filter-1",title:"Search Filter"},{id:"eager-loading",title:"Eager Loading",anchors:[{id:"max-joins",title:"Max Joins"},{id:"force-eager",title:"Force Eager"},{id:"override-at-resource-and-operation-level",title:"Override at Resource and Operation Level"},{id:"disable-eager-loading",title:"Disable Eager Loading"}]},{id:"partial-pagination-1",title:"Partial Pagination"}]}]},{id:"operation-path-naming",title:"Operation Path Naming",anchors:[{id:"configuration-1",title:"Configuration"},{id:"create-a-custom-operation-path-resolver",title:"Create a Custom Operation Path Resolver",anchors:[{id:"defining-the-operation-path-resolver",title:"Defining the Operation Path Resolver"},{id:"registering-the-service",title:"Registering the Service"},{id:"configure-it",title:"Configure It"}]}]},{id:"form-data",title:"Accept application/x-www-form-urlencoded Form Data",anchors:[{id:"create-your-deserializelistener-decorator",title:"Create your DeserializeListener Decorator"},{id:"creating-the-service-definition",title:"Creating the Service Definition"}]},{id:"fosuser-bundle",title:"FOSUserBundle Integration",anchors:[{id:"installing-the-bundle",title:"Installing the Bundle"},{id:"enabling-the-bridge",title:"Enabling the Bridge"},{id:"creating-a-user-entity-with-serialization-groups",title:"Creating a User Entity with Serialization Groups"}]},{id:"jwt",title:"JWT Authentication",anchors:[{id:"installing-lexikjwtauthenticationbundle",title:"Installing LexikJWTAuthenticationBundle"},{id:"documenting-the-authentication-mechanism-with-swaggeropen-api",title:"Documenting the Authentication Mechanism with Swagger/Open API",anchors:[{id:"configuring-api-platform",title:"Configuring API Platform"},{id:"adding-a-new-api-key",title:"Adding a New API Key"}]},{id:"testing-with-behat",title:"Testing with Behat"}]},{id:"nelmio-api-doc",title:"NelmioApiDocBundle Integration"},{id:"angularjs-integration",title:"AngularJS Integration",anchors:[{id:"restangular",title:"Restangular"},{id:"ngadmin",title:"ng-admin"}]},{id:"swagger",title:"Swagger / Open API Support",anchors:[{id:"overriding-the-swagger-documentation",title:"Overriding the Swagger Documentation"},{id:"using-the-swagger-context",title:"Using the Swagger Context"},{id:"changing-the-name-of-a-definition",title:"Changing the Name of a Definition"},{id:"changing-operations-in-the-swagger-documentation",title:"Changing Operations in the Swagger Documentation"},{id:"changing-the-swagger-ui-location",title:"Changing the Swagger UI Location",anchors:[{id:"disabling-swagger-ui",title:"Disabling Swagger UI"},{id:"manually-registering-the-swagger-ui-controller",title:"Manually Registering the Swagger UI Controller"}]},{id:"using-the-swagger-command",title:"Using the Swagger Command"},{id:"overriding-the-ui-template",title:"Overriding the UI Template",anchors:[{id:"enable-swagger-doc-for-api-gateway",title:"Enable Swagger doc for API Gateway"}]}]},{id:"graphql",title:"GraphQL Support",anchors:[{id:"overall-view",title:"Overall View"},{id:"enabling-graphql",title:"Enabling GraphQL"},{id:"graphiql",title:"GraphiQL"},{id:"filters",title:"Filters",anchors:[{id:"filtering-on-nested-properties-1",title:"Filtering on Nested Properties"}]},{id:"security-access_control",title:"Security (access_control)"},{id:"serialization-groups",title:"Serialization Groups"}]},{id:"dto",title:"Handling Data Transfer Objects (DTOs)",anchors:[{id:"how-to-use-a-dto-for-writing",title:"How to use a DTO for Writing"}]},{id:"file-upload",title:"Handling File Upload",anchors:[{id:"installing-vichuploaderbundle",title:"Installing VichUploaderBundle"},{id:"configuring-the-entity-receiving-the-uploaded-file",title:"Configuring the Entity Receiving the Uploaded File"},{id:"handling-file-upload",title:"Handling File Upload"},{id:"making-a-request-to-the-media_objects-endpoint",title:"Making a Request to the /media_objects Endpoint"},{id:"linking-a-mediaobject-resource-to-another-resource",title:"Linking a MediaObject Resource to Another Resource"}]}]},{title:"The Schema Generator Component",path:"schema-generator",items:[{id:"index",title:"The schema generator",anchors:[{id:"what-is-schemaorg",title:"What is Schema.org?"},{id:"why-use-schemaorg-data-to-generate-a-php-model",title:"Why use Schema.org data to generate a PHP model?",anchors:[{id:"dont-reinvent-the-wheel",title:"Don't Reinvent The Wheel"},{id:"improve-seo-and-user-experience",title:"Improve SEO and user experience"},{id:"be-ready-for-the-future",title:"Be ready for the future"}]},{id:"documentation",title:"Documentation"}]},{id:"getting-started",title:"Getting Started",anchors:[{id:"installation",title:"Installation"},{id:"model-scaffolding",title:"Model Scaffolding",anchors:[{id:"going-further",title:"Going Further"}]},{id:"cardinality-extraction",title:"Cardinality Extraction"}]},{id:"configuration",title:"Configuration",anchors:[{id:"customizing-php-namespaces",title:"Customizing PHP Namespaces"},{id:"forcing-a-field-range",title:"Forcing a Field Range"},{id:"forcing-a-field-cardinality",title:"Forcing a Field Cardinality"},{id:"forcing-a-relation-table-name",title:"Forcing a Relation Table Name"},{id:"forcing-or-disabling-a-class-parent",title:"Forcing (or Disabling) a Class Parent"
},{id:"forcing-a-class-to-be-abstract",title:"Forcing a Class to be Abstract"},{id:"forcing-a-nullable-property",title:"Forcing a Nullable Property"},{id:"forcing-a-unique-property",title:"Forcing a Unique Property"},{id:"making-a-property-read-only",title:"Making a Property Read Only"},{id:"making-a-property-write-only",title:"Making a Property Write Only"},{id:"forcing-a-property-to-be-in-a-serialization-group",title:"Forcing a Property to be in a Serialization Group"},{id:"forcing-an-embeddable-class-to-be-embedded",title:"Forcing an Embeddable Class to be Embedded"},{id:"author-phpdoc",title:"Author PHPDoc"},{id:"disabling-generators-and-creating-custom-ones",title:"Disabling Generators and Creating Custom Ones"},{id:"skipping-accessor-method-generation",title:"Skipping Accessor Method Generation"},{id:"disabling-the-id-generator",title:"Disabling the id Generator"},{id:"generating-uuids",title:"Generating UUIDs"},{id:"user-submitted-uuids",title:"User submitted UUIDs"},{id:"generating-custom-ids",title:"Generating Custom IDs"},{id:"disabling-usage-of-doctrine-collection",title:"Disabling Usage of Doctrine Collection"},{id:"changing-the-field-visibility",title:"Changing the Field Visibility"},{id:"generating-asserttype-annotations",title:"Generating @Assert\\Type Annotations"},{id:"forcing-doctrine-inheritance-mapping-annotation",title:"Forcing Doctrine Inheritance Mapping Annotation"},{id:"interfaces-and-doctrine-resolve-target-entity-listener",title:"Interfaces and Doctrine Resolve Target Entity Listener"},{id:"custom-schemas",title:"Custom Schemas"},{id:"checking-goodrelation-compatibility",title:"Checking GoodRelation Compatibility"},{id:"php-file-header",title:"PHP File Header"},{id:"full-configuration-reference",title:"Full Configuration Reference"}]}]},{title:"The Admin Component",path:"admin",items:[{id:"index",title:"The API Platform Admin",anchors:[{id:"features-1",title:"Features"}]},{id:"getting-started",title:"Getting Started",anchors:[{id:"installation-1",title:"Installation"},{id:"creating-the-admin",title:"Creating the Admin"},{id:"customizing-the-admin",title:"Customizing the Admin",anchors:[{id:"using-custom-components",title:"Using Custom Components"},{id:"managing-files-and-images",title:"Managing Files and Images"},{id:"using-a-custom-validation-function-or-inject-custom-props",title:"Using a Custom Validation Function or Inject Custom Props"}]}]},{id:"authentication-support",title:"Authentication Support"},{id:"handling-relations-to-collections",title:"Handling Relations to Collections",anchors:[{id:"customizing-a-property",title:"Customizing a Property"},{id:"using-an-autocomplete-input-for-relations",title:"Using an Autocomplete Input for Relations"}]}]},{title:"The Client Generator Component",path:"client-generator",items:[{id:"index",title:"The API Platform Client Generator",anchors:[{id:"features-2",title:"Features"}]},{id:"react",title:"React generator"},{id:"vuejs",title:"Vue.js generator"},{id:"troubleshooting",title:"Troubleshooting"}]},{title:"Deployment",path:"deployment",items:[{id:"index",title:"Deploying API Platform Applications"},{id:"kubernetes",title:"Deploying to a Kubernetes Cluster",anchors:[{id:"preparing-your-cluster-and-your-local-machine",title:"Preparing Your Cluster and Your Local Machine"},{id:"creating-and-publishing-the-docker-images",title:"Creating and Publishing the Docker Images"},{id:"deploying",title:"Deploying"},{id:"initializing-the-database",title:"Initializing the Database"},{id:"tiller-rbac-issue",title:"Tiller RBAC Issue"}]},{id:"heroku",title:"Deploying an API Platform App on Heroku"}]},{title:"Extra",path:"extra",items:[{id:"releases",title:"The Release Process"},{id:"philosophy",title:"API Platform's Philosophy"},{id:"troubleshooting",title:"Troubleshooting",anchors:[{id:"using-docker",title:"Using Docker",anchors:[{id:"with-docker-toolbox-on-windows",title:"With Docker Toolbox on Windows"},{id:"error-starting-userland-proxy",title:"Error starting userland proxy"}]},{id:"using-api-platform-and-jms-serializer-in-the-same-project",title:"Using API Platform and JMS Serializer in the same project"}]},{id:"contribution-guides",title:"Contribution guides"},{id:"conduct",title:"Contributor Code of Conduct"}]}]}}}});
//# sourceMappingURL=path---docs-core-configuration-f5f363de60ad455ac201.js.map