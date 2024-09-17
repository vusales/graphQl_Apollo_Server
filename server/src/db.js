
export const products= [
    {
        id: "1",
        name: "Wireless Headphones",
        description: "Noise-cancelling over-ear headphones with 30 hours of battery life.",
        price: 99.99,
        category: "Electronics",
        stock: 50,
        image: "headphones.jpg",
        reviews: ["1", "2"],  // Refers to reviews by ID
    },
    {
        id: "2",
        name: "Gaming Mouse",
        description: "Ergonomic design with customizable RGB lighting and 7 buttons.",
        price: 49.99,
        category: "Accessories",
        stock: 100,
        image: "gaming_mouse.jpg",
        reviews: ["3"],  // Refers to review by ID
    },
    {
        id: "3",
        name: "Smart Watch",
        description: "Fitness tracking, heart rate monitor, and notifications on your wrist.",
        price: 129.99,
        category: "Wearables",
        stock: 75,
        image: "smart_watch.jpg",
        reviews: [],  // No reviews yet
    },
]; 

export const reviews = [
    {
        id: "1",
        productId: "1",
        rating: 5,
        comment: "Amazing sound quality! Very comfortable to wear for long hours.",
        reviewer: "John Doe",
        date: "2024-09-01",
    },
    {
        id: "2",
        productId: "1",
        rating: 4,
        comment: "Great noise cancellation, but the battery could last longer.",
        reviewer: "Jane Smith",
        date: "2024-09-05",
    },
    {
        id: "3",
        productId: "2",
        rating: 4,
        comment: "Good for gaming, but could be more comfortable for larger hands.",
        reviewer: "Alex Johnson",
        date: "2024-09-07",
    },
]
  
  

  