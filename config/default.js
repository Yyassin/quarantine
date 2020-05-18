module.exports = {
    app: {
        name: "MeetSport",
        baseUrl: `http://localhost`,
        port: 8000,
    },

    /*
        MongoDB Cluster Creds
        db-admin, msport@52!
    */

    database: {
        uri: `mongodb+srv://db-admin:msport@52!@db-msport-xtsyh.mongodb.net/test?retryWrites=true&w=majority`
    },

    google: {
        clientID: '522830682872-euc3cv97bce02lmq938d00gd28psuj5d.apps.googleusercontent.com',
        clientSecret: '9pVvJ5wZkMkw2tJULQXfeQW2'
    },

    mongodb: {
        dbURI: 'mongodb+srv://testUser:WDZ3E5UCql39dpfH@passtut-f5uxy.mongodb.net/test?retryWrites=true&w=majority'
    },

    session: {
        cookieKey: 'youwillneverguessthisha'
    }
}