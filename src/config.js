const config = {
    STRIPE_KEY: "pk_test_51F98krCG6kw3OeKx5PcljDSl7VkYB7muPSgw4Q623l6tvHz2R6yaBT73kJfMQVP7SieZhDJUhCOflts82zQLS9uh00etJ8nLNa",
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "eu-west-2",
        BUCKET: "pc-notes-app",
    },
    apiGateway: {
        REGION: "eu-west-2",
        URL: "https://jw98umgx0k.execute-api.eu-west-2.amazonaws.com/prod",
    },
    cognito: {
        REGION: "eu-west-2",
        USER_POOL_ID: "eu-west-2_WV6hgu3fd",
        APP_CLIENT_ID: "3ctsp04em2dajt3gt4vs2cbvii",
        IDENTITY_POOL_ID:"eu-west-2:30f169fb-96a2-4601-ba1b-e968a35e228b",
    },
};

export default config;
