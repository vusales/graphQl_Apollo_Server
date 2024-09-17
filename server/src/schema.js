// graphQl types / graphQl tipleri

// int , String , Float , Boolean , ID , Date 


export const typeDefs = `#graphql

    type Product {
        id: ID!,
        name: String,
        description: String,
        price: Float ,
        category: String ,
        stock: Int,
        image: String ,
        reviews: [Review],
    }


    type Review {
        id: ID!,
        productId: ID,
        rating: Int,
        comment: String,
        reviewer: String,
        date: String ,
    }


    type Query{
        products: [Product]  , 
        reviews: [Review] , 
        product(id:ID!) : Product , 
        review(id:ID!) : Review , 
    }


    type Mutation {
        addReview( productId:ID !, data: ReviewInput ) : Review , 
        updateReview( id:ID !, data: UpdateReviewInput): Review, 
    }

    input ReviewInput {
        rating: Int !,
        comment: String! ,
        reviewer: String !,
        date: String 
    }

    
    input UpdateReviewInput {
        rating: Int ,
        comment: String ,
        reviewer: String ,
        date: String 
    }

` ; 