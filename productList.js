import { RSC_MODULE_TYPES } from "next/dist/shared/lib/constants";

const productLists = [
    [
      { 
        id: '1',
        title: 'Featured',
        productList : [
            {
                id: 1,
                movieName: 'Silo',
                year :'2022',
                duration: '2h 30min',
                posterURL: '/product-list/featured/featured-1.jpg',
                price: "Rs.250"
            },
            {
                id: 2,
                movieName: 'Batman Begins',
                year :'2022',
                duration: '2h 12min',
                posterURL: '/product-list/featured/featured-2.jpg',
                price: "Rs.250"
            },
            {
                id: 3,
                movieName: 'The Killing Tree',
                year :'2021',
                duration: '2h',
                posterURL: '/product-list/featured/featured-3.jpg',
                price: "Rs.250"
            },
            {
                id: 4,
                movieName: 'Disenchanted',
                year :'2020',
                duration: '2h 39min',
                posterURL: '/product-list/featured/featured-4.jpg',
                price: "Rs.250"
            },
            {
                id: 5,
                movieName: 'Slumberland',
                year :'2022',
                duration: '2h 45min',
                posterURL: '/product-list/featured/featured-5.jpg',
                price: "Rs.250"
            },
           
        ]
        
      }
    ],
    [
        { 
          id: '2',
          title: 'New Release',
          productList : [
              {
                  id: 1,
                  movieName: 'Lamborghini: The Man Behind the Legend',
                  year :'2022',
                  duration: '2h 30min',
                  posterURL: '/product-list/new-release/new-release-1.jpg',
                  price: "Rs.250"
              },
              {
                  id: 2,
                  movieName: 'Emily the Criminal',
                  year :'2022',
                  duration: '2h 12min',
                  posterURL: '/product-list/new-release/new-release-2.jpg',
                  price: "Rs.250"
              },
              {
                  id: 3,
                  movieName: 'Amsterdam',
                  year :'2021',
                  duration: '2h',
                  posterURL: '/product-list/new-release/new-release-3.jpg',
                  price: "Rs.250"
              },
              {
                  id: 4,
                  movieName: 'She Will',
                  year :'2020',
                  duration: '2h 39min',
                  posterURL: '/product-list/new-release/new-release-4.jpg',
                  price: "Rs.250"
              },
              {
                  id: 5,
                  movieName: 'Falling for Christmas',
                  year :'2022',
                  duration: '2h 45min',
                  posterURL: '/product-list/new-release/new-release-5.jpg',
                  price: "Rs.250"
              },
             
          ]
          
        }
      ],
      [
        { 
          id: '3',
          title: 'Trending',
          productList : [
              {
                  id: 1,
                  movieName: 'Eat Your Catfish',
                  year :'2022',
                  duration: '2h 30min',
                  posterURL: '/product-list/trending/trending-1.jpg',
                  price: "Rs.250"
              },
              {
                  id: 2,
                  movieName: 'The Wedding Veil Unveiled',
                  year :'2022',
                  duration: '2h 12min',
                  posterURL: '/product-list/trending/trending-2.jpg',
                  price: "Rs.250"
              },
              {
                  id: 3,
                  movieName: 'The Hollywood Strangler Meets the Skid Row Slasher',
                  year :'2021',
                  duration: '2h',
                  posterURL: '/product-list/trending/trending-3.jpg',
                  price: "Rs.250"
              },
              {
                  id: 4,
                  movieName: 'Christmas Pen Pals',
                  year :'2020',
                  duration: '2h 39min',
                  posterURL: '/product-list/trending/trending-4.jpg',
                  price: "Rs.250"
              },
              {
                  id: 5,
                  movieName: 'Forsenses II: Timber Lounge',
                  year :'2022',
                  duration: '2h 45min',
                  posterURL: '/product-list/trending/trending-5.jpg',
                  price: "Rs.250"
              },
             
          ]
          
        }
      ],
      [
        { 
          id: '4',
          title: 'TV Series',
          productList : [
              {
                  id: 1,
                  movieName: 'Lamborghini: The Man Behind the Legend',
                  year :'2022',
                  duration: '2h 30min',
                  posterURL: '/product-list/tv-series/tv-series-1.jpg',
                  price: "Rs.250"
              },
              {
                  id: 2,
                  movieName: 'Emily the Criminal',
                  year :'2022',
                  duration: '2h 12min',
                  posterURL: '/product-list/tv-series/tv-series-2.jpg',
                  price: "Rs.250"
              },
              {
                  id: 3,
                  movieName: 'Amsterdam',
                  year :'2021',
                  duration: '2h',
                  posterURL: '/product-list/tv-series/tv-series-3.jpg',
                  price: "Rs.250"
              },
              {
                  id: 4,
                  movieName: 'She Will',
                  year :'2020',
                  duration: '2h 39min',
                  posterURL: '/product-list/tv-series/tv-series-4.jpg',
                  price: "Rs.250"
              },
              {
                  id: 5,
                  movieName: 'Falling for Christmas',
                  year :'2022',
                  duration: '2h 45min',
                  posterURL: '/product-list/tv-series/tv-series-5.jpg',
                  price: "Rs.250"
              },
             
          ]
          
        }
      ],
      [
        { 
          id: '5',
          title: 'Free',
          productList : [
              {
                  id: 1,
                  movieName: 'Lamborghini: The Man Behind the Legend',
                  year :'2022',
                  duration: '2h 30min',
                  posterURL: '/product-list/free/free-1.jpg',
                  price: "Rs.250"
              },
              {
                  id: 2,
                  movieName: 'Emily the Criminal',
                  year :'2022',
                  duration: '2h 12min',
                  posterURL: '/product-list/free/free-2.jpg',
                  price: "Rs.250"
              },
              {
                  id: 3,
                  movieName: 'Amsterdam',
                  year :'2021',
                  duration: '2h',
                  posterURL: '/product-list/free/free-3.jpg',
                  price: "Rs.250"
              },
              {
                  id: 4,
                  movieName: 'She Will',
                  year :'2020',
                  duration: '2h 39min',
                  posterURL: '/product-list/free/free-4.jpg',
                  price: "Rs.250"
              },
              {
                  id: 5,
                  movieName: 'Falling for Christmas',
                  year :'2022',
                  duration: '2h 45min',
                  posterURL: '/product-list/free/free-5.jpg',
                  price: "Rs.250"
              },
             
          ]
          
        }
      ],
      [
        { 
          id: '6',
          title: 'Cartoon',
          productList : [
              {
                  id: 1,
                  movieName: 'Lamborghini: The Man Behind the Legend',
                  year :'2022',
                  duration: '2h 30min',
                  posterURL: '/product-list/cartoon/cartoon-1.jpg',
                  price: "Rs.250"
              },
              {
                  id: 2,
                  movieName: 'Emily the Criminal',
                  year :'2022',
                  duration: '2h 12min',
                  posterURL: '/product-list/cartoon/cartoon-2.jpg',
                  price: "Rs.250"
              },
              {
                  id: 3,
                  movieName: 'Amsterdam',
                  year :'2021',
                  duration: '2h',
                  posterURL: '/product-list/cartoon/cartoon-3.jpg',
                  price: "Rs.250"
              },
              {
                  id: 4,
                  movieName: 'She Will',
                  year :'2020',
                  duraton: '2h 39min',
                  posterURL: '/product-list/cartoon/cartoon-4.jpg',
                  price: "Rs.250"
              },
              {
                  id: 5,
                  movieName: 'Falling for Christmas',
                  year :'2022',
                  duration: '2h 45min',
                  posterURL: '/product-list/cartoon/cartoon-5.jpg',
                  price: "Rs.250"
              },
             
          ]
          
        }
      ]
      
];

export default productLists;