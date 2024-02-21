import ac3star from './assets/AC3.jpg';
import ac5star from './assets/AC5.jpg';
import bedSingle from './assets/bedSingle.jpg';
import bedDouble from './assets/bedDouble.jpg';
import fridgeSingle from './assets/fridgeSingle.jpg';
import fridgeDouble from './assets/fridgeDouble.jpg';
import induction from './assets/induction.jpg';
import sofa from './assets/sofa.jpg';
import sofaBed from './assets/sofaCumBed.jpg';
import wardrobe from './assets/wardrobe.jpg';
import washingMachine from './assets/wm.jpg';


export const DUMMY_PRODUCTS = [
  {
  id: 'p1',
  image: bedSingle,
  title: 'Single Bed',
  price: 11,
  dp: 11 - (11 * 0.1),
  description:
  'Crafted for solo sleepers, this single bed offers a cozy haven for a restful nights sleep. Its compact size makes it perfect for smaller bedrooms or guest rooms, while still providing ample comfort and support'
  },
  {
    id: 'p2',
    image: bedDouble,
    title: 'Double Bed',
    price: 22,
    dp: 22 - (22 * 0.1),
    description:
    ' Spaciously designed to accommodate couples or individuals who enjoy extra room to stretch out. With its sturdy frame and comfortable mattress, this double bed ensures a peaceful and rejuvenating sleep experience night after night.'
    },
    {
      id: 'p3',
      image: sofa,
      title: 'Sofa',
      price: 150,
      dp: 150 - (150 * 0.1),
      description:
      'Sink into relaxation with this inviting sofa. Featuring plush cushions and a sturdy frame, it offers comfortable seating for lounging or entertaining guests. Its timeless design and versatile style complement any living space with effortless elegance.'
      },
      {
        id: 'p4',
        image: sofaBed,
        title: 'Sofa cum Bed',
        price: 175,
        dp: 175 - (175 * 0.1),
        description:
        'Maximize space and functionality with this versatile sofa cum bed. Transforming effortlessly from a comfortable seating option to a cozy bed, its perfect for accommodating overnight guests or creating a cozy lounging area in smaller living spaces.'
        },
        {
          id: 'p5',
          image: wardrobe,
          title: 'Wardrobe',
          price: 125,
          dp: 125 - (125 * 0.1),
          description:
          'Keep your clothing and accessories neatly organized with this stylish wardrobe. Featuring multiple shelves, drawers, and hanging space, it offers ample storage for all your wardrobe essentials while adding a touch of elegance to your bedroom decor.'
          },
          
  {
    id: 'p6',
    image: ac3star,
    title: 'Air Conditioner 3 star',
    price: 220,
    dp: 220 - (220 * 0.1),
    description:
      'Stay cool and comfortable during hot summer days with this energy-efficient 3-star AC. Designed to deliver reliable cooling performance while minimizing energy consumption, it offers a perfect balance of comfort and savings.',
  },
  {
    id: 'p7',
    image: ac5star,
    title: 'Air Conditioner 5 star',
    price: 300,
    dp: 300 - (300 * 0.1),
    description:
      'Enjoy superior cooling efficiency and energy savings with this 5-star AC. Utilizing advanced technology and smart features, it provides powerful cooling performance while consuming minimal electricity, making it an eco-friendly choice for your home.',
  },

  {
    id: 'p8',
    image: washingMachine,
    title: 'Washing Machine',
    price: 150,
    dp: 150 - (150 * 0.1),
    description:
      'Simplify your laundry routine with this high-performance washing machine. Offering various wash cycles and settings, it ensures thorough cleaning for different types of fabrics while saving time and water. Its durable construction and user-friendly controls make laundry day a breeze.',
  },
  {
    id: 'p9',
    image: fridgeSingle,
    title: 'Single Door Refrigerator',
    price: 250,
    dp: 250 - (250 * 0.1),
    description:
    'This single door refrigerator combines efficient cooling performance with convenient storage options. Ideal for smaller kitchens or living spaces, it offers ample room for storing essentials while keeping them fresh and organized.',
    },
    {
    id: 'p10',
    image: fridgeDouble,
    title: 'Double Door Refrigerator',
    price: 270,
    dp: 270 - (270 * 0.1),
    description:
    'Featuring a spacious interior and innovative design, this double door refrigerator provides separate compartments for fresh and frozen foods. With adjustable shelves and versatile storage options, it ensures easy access to your groceries while preserving their quality for longer periods.',
    },
    { 
    id: 'p11',
    image: induction,
    title: 'Induction',
    price: 80,
    dp: 80 - (80 * 0.1),
    description:
    'Experience fast and efficient cooking with this advanced induction. Using electromagnetic technology, it heats cookware directly for precise temperature control and even cooking results. Its sleek design and user-friendly interface make meal preparation a breeze.'
    }
];
