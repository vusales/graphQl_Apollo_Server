import { products, reviews } from "./db.js" ; 

export const resolvers = {
    Query: {
        products: () => products , 
        reviews: () =>  reviews , 
        review: (_ , args ) =>{ 
            return reviews.find((item)=>item.id === args.id ) 
        },
        product: (_ , args ) => { 
            return  products.find((item)=>item.id === args.id ); 
        },
    }, 
    Product: {
        reviews : (parent) => {
            return reviews.filter((review) => review.productId === parent.id);
        }
    },
    Mutation: {
        addReview : (_ ,   { productId, data } ) => {

            const newReview = {
                id: String(reviews.length + 1), 
                productId: productId,
                ...data
            };
            reviews.push(newReview); 
            return newReview;
        }, 
        updateReview: (_, { id, data }) => {
            const reviewIndex = reviews.findIndex((item) => item.id === id);
            if (reviewIndex === -1) {
                throw new Error('Review not found');
            }
            reviews[reviewIndex] = { ...reviews[reviewIndex], ...data }; 
            return reviews[reviewIndex];
        }
    }
}