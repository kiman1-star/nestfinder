// src/properties.js
import villa1 from '../assets/villa1.jpg'
import villa2 from '../assets/villa2.jpg'
import villa3 from '../assets/villa3.jpg'
import apartment1 from '../assets/apartment1.jpg'
import apartment2 from '../assets/apartment2.jpg'
import condo1 from '../assets/condo1.jpg'
import condo2 from '../assets/condo2.jpg'


 export const properties = [
    {
        id: 1,
        title: "luxury villa",
        city : "Nairobi",
        price: "25,000,000",
        image: [villa1, villa2, villa3],
        bathrooms: 4,
        sqft: 3500,
        bedrooms: 5,
        description: "Spacious villa with a beautiful view of the city.",
        amenities: ["swimming pool", "WIFI", "Parking", "Gym"]
    },
    {
        id: 2,
        title: "Beach apartment",
        city : "Mombasa",
        price: "15,000,000",
        image: [apartment1, apartment2],
        bathrooms: 2,
        sqft: 1200,
        bedrooms: 3,
        description: "modern apartment with ocean view",
        amenities : ["WIFI", "Parking", "Gym"]
    },
    {
        id: 3,
        title: "Modern condo",
        city : "Kisumu",
        price: "10,000,000",
        image: [condo1, condo2],
        bathrooms: 3,
        sqft: 1800,
        bedrooms: 4,
        description: "elegant condo in the heart of the city",
        amenities: ["WIFI", "Parking", "Gym"]
    }
]

export default properties