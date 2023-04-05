const { Brand } = require('../models');

const brandData = [
  {
    brand_name: 'Rolex',
  },
  {
    brand_name: 'Cartier',
  },
  {
    brand_name: 'Omega',
  },
  {
    brand_name: 'Tag Heuer',
  },
  {
    brand_name: 'Breitling',
  },
];

const seedBrands = () => Brand.bulkCreate(brandData);

module.exports = seedBrands;
