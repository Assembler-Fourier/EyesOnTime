const sequelize = require('./config/connection');

const Brand = require('./models/brand');
const Category = require('./models/Category');
const Customer = require('./models/customer');

describe('Brand model', () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true });
  });

  it('should create a new brand', async () => {
    const brand = await Brand.create({
      brand_name: 'Nike'
    });

    expect(brand.id).toBe(1);
    expect(brand.brand_name).toBe('Nike');
  });

  it('should not create a brand with missing required fields', async () => {
    try {
      const brand = await Brand.create({});
    } catch (error) {
      expect(error).toBeTruthy();
      expect(error.errors[0].message).toBe('Brand.brand_name cannot be null');
    }
  });
});

describe('Category model', () => {
  test('should have the expected properties', () => {
    const category = Category.build({
      category_name: 'Test Category',
    });
    expect(category.category_name).toEqual('Test Category');
  });
});


beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe('Customer model', () => {
  // Connect to the database before running any tests
  beforeAll(async () => {
    await sequelize.sync();
  });

  // Clear the database after each test
  afterEach(async () => {
    await Customer.destroy({ where: {} });
  });

  // Define a test for creating a new customer
  describe('create', () => {
    it('should create a new customer', async () => {
      // Define the customer data
      const customerData = {
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@example.com',
        password: 'password123'
      };

      // Create a new customer in the database
      const customer = await Customer.create(customerData);

      // Check if the customer was created with the expected data
      expect(customer.id).toBeDefined();
      expect(customer.first_name).toBe(customerData.first_name);
      expect(customer.last_name).toBe(customerData.last_name);
      expect(customer.email).toBe(customerData.email);
      expect(customer.password).toBe(customerData.password);
    });
  });
});


test('Product belongs to a Category', async () => {
  const product = await Product.findOne();
  const category = await Category.findByPk(product.category_id);
  expect(product.Category).toBeDefined();
  expect(product.Category.name).toEqual(category.name);
});

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

describe('Brand model', () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true });
  });

  it('should create a new brand', async () => {
    const brand = await Brand.create({
      brand_name: 'Nike'
    });

    expect(brand.id).toBe(1);
    expect(brand.brand_name).toBe('Nike');
  });

  it('should not create a brand with missing required fields', async () => {
    try {
      const brand = await Brand.create({});
    } catch (error) {
      expect(error).toBeTruthy();
      expect(error.errors[0].message).toBe('Brand.brand_name cannot be null');
    }
  });
});

describe('Category model', () => {
  test('should have the expected properties', () => {
    const category = Category.build({
      category_name: 'Test Category',
    });
    expect(category.category_name).toEqual('Test Category');
  });
});


beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe('Customer model', () => {
  // Connect to the database before running any tests
  beforeAll(async () => {
    await sequelize.sync();
  });

  // Clear the database after each test
  afterEach(async () => {
    await Customer.destroy({ where: {} });
  });

  // Define a test for creating a new customer
  describe('create', () => {
    it('should create a new customer', async () => {
      // Define the customer data
      const customerData = {
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@example.com',
        password: 'password123'
      };

      // Create a new customer in the database
      const customer = await Customer.create(customerData);

      // Check if the customer was created with the expected data
      expect(customer.id).toBeDefined();
      expect(customer.first_name).toBe(customerData.first_name);
      expect(customer.last_name).toBe(customerData.last_name);
      expect(customer.email).toBe(customerData.email);
      expect(customer.password).toBe(customerData.password);
    });
  });
});


test('Product belongs to a Category', async () => {
  const product = await Product.findOne();
  const category = await Category.findByPk(product.category_id);
  expect(product.Category).toBeDefined();
  expect(product.Category.name).toEqual(category.name);
});
describe('Brand model', () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true });
  });

  it('should create a new brand', async () => {
    const brand = await Brand.create({
      brand_name: 'Nike'
    });

    expect(brand.id).toBe(1);
    expect(brand.brand_name).toBe('Nike');
  });

  it('should not create a brand with missing required fields', async () => {
    try {
      const brand = await Brand.create({});
    } catch (error) {
      expect(error).toBeTruthy();
      expect(error.errors[0].message).toBe('Brand.brand_name cannot be null');
    }
  });
});

describe('Category model', () => {
  test('should have the expected properties', () => {
    const category = Category.build({
      category_name: 'Test Category',
    });
    expect(category.category_name).toEqual('Test Category');
  });
});


beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe('Customer model', () => {
  // Connect to the database before running any tests
  beforeAll(async () => {
    await sequelize.sync();
  });

  // Clear the database after each test
  afterEach(async () => {
    await Customer.destroy({ where: {} });
  });

  // Define a test for creating a new customer
  describe('create', () => {
    it('should create a new customer', async () => {
      // Define the customer data
      const customerData = {
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@example.com',
        password: 'password123'
      };

      // Create a new customer in the database
      const customer = await Customer.create(customerData);

      // Check if the customer was created with the expected data
      expect(customer.id).toBeDefined();
      expect(customer.first_name).toBe(customerData.first_name);
      expect(customer.last_name).toBe(customerData.last_name);
      expect(customer.email).toBe(customerData.email);
      expect(customer.password).toBe(customerData.password);
    });
  });
});


test('Product belongs to a Category', async () => {
  const product = await Product.findOne();
  const category = await Category.findByPk(product.category_id);
  expect(product.Category).toBeDefined();
  expect(product.Category.name).toEqual(category.name);
});
describe('Brand model', () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true });
  });

  it('should create a new brand', async () => {
    const brand = await Brand.create({
      brand_name: 'Nike'
    });

    expect(brand.id).toBe(1);
    expect(brand.brand_name).toBe('Nike');
  });

  it('should not create a brand with missing required fields', async () => {
    try {
      const brand = await Brand.create({});
    } catch (error) {
      expect(error).toBeTruthy();
      expect(error.errors[0].message).toBe('Brand.brand_name cannot be null');
    }
  });
});

describe('Category model', () => {
  test('should have the expected properties', () => {
    const category = Category.build({
      category_name: 'Test Category',
    });
    expect(category.category_name).toEqual('Test Category');
  });
});


beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe('Customer model', () => {
  // Connect to the database before running any tests
  beforeAll(async () => {
    await sequelize.sync();
  });

  // Clear the database after each test
  afterEach(async () => {
    await Customer.destroy({ where: {} });
  });

  // Define a test for creating a new customer
  describe('create', () => {
    it('should create a new customer', async () => {
      // Define the customer data
      const customerData = {
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@example.com',
        password: 'password123'
      };

      // Create a new customer in the database
      const customer = await Customer.create(customerData);

      // Check if the customer was created with the expected data
      expect(customer.id).toBeDefined();
      expect(customer.first_name).toBe(customerData.first_name);
      expect(customer.last_name).toBe(customerData.last_name);
      expect(customer.email).toBe(customerData.email);
      expect(customer.password).toBe(customerData.password);
    });
  });
});


test('Product belongs to a Category', async () => {
  const product = await Product.findOne();
  const category = await Category.findByPk(product.category_id);
  expect(product.Category).toBeDefined();
  expect(product.Category.name).toEqual(category.name);
});
describe('Brand model', () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true });
  });

  it('should create a new brand', async () => {
    const brand = await Brand.create({
      brand_name: 'Nike'
    });

    expect(brand.id).toBe(1);
    expect(brand.brand_name).toBe('Nike');
  });

  it('should not create a brand with missing required fields', async () => {
    try {
      const brand = await Brand.create({});
    } catch (error) {
      expect(error).toBeTruthy();
      expect(error.errors[0].message).toBe('Brand.brand_name cannot be null');
    }
  });
});

describe('Category model', () => {
  test('should have the expected properties', () => {
    const category = Category.build({
      category_name: 'Test Category',
    });
    expect(category.category_name).toEqual('Test Category');
  });
});


beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe('Customer model', () => {
  // Connect to the database before running any tests
  beforeAll(async () => {
    await sequelize.sync();
  });

  // Clear the database after each test
  afterEach(async () => {
    await Customer.destroy({ where: {} });
  });

  // Define a test for creating a new customer
  describe('create', () => {
    it('should create a new customer', async () => {
      // Define the customer data
      const customerData = {
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@example.com',
        password: 'password123'
      };

      // Create a new customer in the database
      const customer = await Customer.create(customerData);

      // Check if the customer was created with the expected data
      expect(customer.id).toBeDefined();
      expect(customer.first_name).toBe(customerData.first_name);
      expect(customer.last_name).toBe(customerData.last_name);
      expect(customer.email).toBe(customerData.email);
      expect(customer.password).toBe(customerData.password);
    });
  });
});


test('Product belongs to a Category', async () => {
  const product = await Product.findOne();
  const category = await Category.findByPk(product.category_id);
  expect(product.Category).toBeDefined();
  expect(product.Category.name).toEqual(category.name);
});
describe('Brand model', () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true });
  });

  it('should create a new brand', async () => {
    const brand = await Brand.create({
      brand_name: 'Nike'
    });

    expect(brand.id).toBe(1);
    expect(brand.brand_name).toBe('Nike');
  });

  it('should not create a brand with missing required fields', async () => {
    try {
      const brand = await Brand.create({});
    } catch (error) {
      expect(error).toBeTruthy();
      expect(error.errors[0].message).toBe('Brand.brand_name cannot be null');
    }
  });
});

describe('Category model', () => {
  test('should have the expected properties', () => {
    const category = Category.build({
      category_name: 'Test Category',
    });
    expect(category.category_name).toEqual('Test Category');
  });
});


beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe('Customer model', () => {
  // Connect to the database before running any tests
  beforeAll(async () => {
    await sequelize.sync();
  });

  // Clear the database after each test
  afterEach(async () => {
    await Customer.destroy({ where: {} });
  });

  // Define a test for creating a new customer
  describe('create', () => {
    it('should create a new customer', async () => {
      // Define the customer data
      const customerData = {
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@example.com',
        password: 'password123'
      };

      // Create a new customer in the database
      const customer = await Customer.create(customerData);

      // Check if the customer was created with the expected data
      expect(customer.id).toBeDefined();
      expect(customer.first_name).toBe(customerData.first_name);
      expect(customer.last_name).toBe(customerData.last_name);
      expect(customer.email).toBe(customerData.email);
      expect(customer.password).toBe(customerData.password);
    });
  });
});


test('Product belongs to a Category', async () => {
  const product = await Product.findOne();
  const category = await Category.findByPk(product.category_id);
  expect(product.Category).toBeDefined();
  expect(product.Category.name).toEqual(category.name);
});
describe('Brand model', () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true });
  });

  it('should create a new brand', async () => {
    const brand = await Brand.create({
      brand_name: 'Nike'
    });

    expect(brand.id).toBe(1);
    expect(brand.brand_name).toBe('Nike');
  });

  it('should not create a brand with missing required fields', async () => {
    try {
      const brand = await Brand.create({});
    } catch (error) {
      expect(error).toBeTruthy();
      expect(error.errors[0].message).toBe('Brand.brand_name cannot be null');
    }
  });
});

describe('Category model', () => {
  test('should have the expected properties', () => {
    const category = Category.build({
      category_name: 'Test Category',
    });
    expect(category.category_name).toEqual('Test Category');
  });
});


beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe('Customer model', () => {
  // Connect to the database before running any tests
  beforeAll(async () => {
    await sequelize.sync();
  });

  // Clear the database after each test
  afterEach(async () => {
    await Customer.destroy({ where: {} });
  });

  // Define a test for creating a new customer
  describe('create', () => {
    it('should create a new customer', async () => {
      // Define the customer data
      const customerData = {
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@example.com',
        password: 'password123'
      };

      // Create a new customer in the database
      const customer = await Customer.create(customerData);

      // Check if the customer was created with the expected data
      expect(customer.id).toBeDefined();
      expect(customer.first_name).toBe(customerData.first_name);
      expect(customer.last_name).toBe(customerData.last_name);
      expect(customer.email).toBe(customerData.email);
      expect(customer.password).toBe(customerData.password);
    });
  });
});


test('Product belongs to a Category', async () => {
  const product = await Product.findOne();
  const category = await Category.findByPk(product.category_id);
  expect(product.Category).toBeDefined();
  expect(product.Category.name).toEqual(category.name);
});
describe('Brand model', () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true });
  });

  it('should create a new brand', async () => {
    const brand = await Brand.create({
      brand_name: 'Nike'
    });

    expect(brand.id).toBe(1);
    expect(brand.brand_name).toBe('Nike');
  });

  it('should not create a brand with missing required fields', async () => {
    try {
      const brand = await Brand.create({});
    } catch (error) {
      expect(error).toBeTruthy();
      expect(error.errors[0].message).toBe('Brand.brand_name cannot be null');
    }
  });
});

describe('Category model', () => {
  test('should have the expected properties', () => {
    const category = Category.build({
      category_name: 'Test Category',
    });
    expect(category.category_name).toEqual('Test Category');
  });
});


beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe('Customer model', () => {
  // Connect to the database before running any tests
  beforeAll(async () => {
    await sequelize.sync();
  });

  // Clear the database after each test
  afterEach(async () => {
    await Customer.destroy({ where: {} });
  });

  // Define a test for creating a new customer
  describe('create', () => {
    it('should create a new customer', async () => {
      // Define the customer data
      const customerData = {
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@example.com',
        password: 'password123'
      };

      // Create a new customer in the database
      const customer = await Customer.create(customerData);

      // Check if the customer was created with the expected data
      expect(customer.id).toBeDefined();
      expect(customer.first_name).toBe(customerData.first_name);
      expect(customer.last_name).toBe(customerData.last_name);
      expect(customer.email).toBe(customerData.email);
      expect(customer.password).toBe(customerData.password);
    });
  });
});


test('Product belongs to a Category', async () => {
  const product = await Product.findOne();
  const category = await Category.findByPk(product.category_id);
  expect(product.Category).toBeDefined();
  expect(product.Category.name).toEqual(category.name);
});
describe('Brand model', () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true });
  });

  it('should create a new brand', async () => {
    const brand = await Brand.create({
      brand_name: 'Nike'
    });

    expect(brand.id).toBe(1);
    expect(brand.brand_name).toBe('Nike');
  });

  it('should not create a brand with missing required fields', async () => {
    try {
      const brand = await Brand.create({});
    } catch (error) {
      expect(error).toBeTruthy();
      expect(error.errors[0].message).toBe('Brand.brand_name cannot be null');
    }
  });
});

describe('Category model', () => {
  test('should have the expected properties', () => {
    const category = Category.build({
      category_name: 'Test Category',
    });
    expect(category.category_name).toEqual('Test Category');
  });
});


beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe('Customer model', () => {
  // Connect to the database before running any tests
  beforeAll(async () => {
    await sequelize.sync();
  });

  // Clear the database after each test
  afterEach(async () => {
    await Customer.destroy({ where: {} });
  });

  // Define a test for creating a new customer
  describe('create', () => {
    it('should create a new customer', async () => {
      // Define the customer data
      const customerData = {
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@example.com',
        password: 'password123'
      };

      // Create a new customer in the database
      const customer = await Customer.create(customerData);

      // Check if the customer was created with the expected data
      expect(customer.id).toBeDefined();
      expect(customer.first_name).toBe(customerData.first_name);
      expect(customer.last_name).toBe(customerData.last_name);
      expect(customer.email).toBe(customerData.email);
      expect(customer.password).toBe(customerData.password);
    });
  });
});


test('Product belongs to a Category', async () => {
  const product = await Product.findOne();
  const category = await Category.findByPk(product.category_id);
  expect(product.Category).toBeDefined();
  expect(product.Category.name).toEqual(category.name);
});
describe('Brand model', () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true });
  });

  it('should create a new brand', async () => {
    const brand = await Brand.create({
      brand_name: 'Nike'
    });

    expect(brand.id).toBe(1);
    expect(brand.brand_name).toBe('Nike');
  });

  it('should not create a brand with missing required fields', async () => {
    try {
      const brand = await Brand.create({});
    } catch (error) {
      expect(error).toBeTruthy();
      expect(error.errors[0].message).toBe('Brand.brand_name cannot be null');
    }
  });
});

describe('Category model', () => {
  test('should have the expected properties', () => {
    const category = Category.build({
      category_name: 'Test Category',
    });
    expect(category.category_name).toEqual('Test Category');
  });
});


beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe('Customer model', () => {
  // Connect to the database before running any tests
  beforeAll(async () => {
    await sequelize.sync();
  });

  // Clear the database after each test
  afterEach(async () => {
    await Customer.destroy({ where: {} });
  });

  // Define a test for creating a new customer
  describe('create', () => {
    it('should create a new customer', async () => {
      // Define the customer data
      const customerData = {
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@example.com',
        password: 'password123'
      };

      // Create a new customer in the database
      const customer = await Customer.create(customerData);

      // Check if the customer was created with the expected data
      expect(customer.id).toBeDefined();
      expect(customer.first_name).toBe(customerData.first_name);
      expect(customer.last_name).toBe(customerData.last_name);
      expect(customer.email).toBe(customerData.email);
      expect(customer.password).toBe(customerData.password);
    });
  });
});


test('Product belongs to a Category', async () => {
  const product = await Product.findOne();
  const category = await Category.findByPk(product.category_id);
  expect(product.Category).toBeDefined();
  expect(product.Category.name).toEqual(category.name);
});
describe('Brand model', () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true });
  });

  it('should create a new brand', async () => {
    const brand = await Brand.create({
      brand_name: 'Nike'
    });

    expect(brand.id).toBe(1);
    expect(brand.brand_name).toBe('Nike');
  });

  it('should not create a brand with missing required fields', async () => {
    try {
      const brand = await Brand.create({});
    } catch (error) {
      expect(error).toBeTruthy();
      expect(error.errors[0].message).toBe('Brand.brand_name cannot be null');
    }
  });
});

describe('Category model', () => {
  test('should have the expected properties', () => {
    const category = Category.build({
      category_name: 'Test Category',
    });
    expect(category.category_name).toEqual('Test Category');
  });
});


beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe('Customer model', () => {
  // Connect to the database before running any tests
  beforeAll(async () => {
    await sequelize.sync();
  });

  // Clear the database after each test
  afterEach(async () => {
    await Customer.destroy({ where: {} });
  });

  // Define a test for creating a new customer
  describe('create', () => {
    it('should create a new customer', async () => {
      // Define the customer data
      const customerData = {
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@example.com',
        password: 'password123'
      };

      // Create a new customer in the database
      const customer = await Customer.create(customerData);

      // Check if the customer was created with the expected data
      expect(customer.id).toBeDefined();
      expect(customer.first_name).toBe(customerData.first_name);
      expect(customer.last_name).toBe(customerData.last_name);
      expect(customer.email).toBe(customerData.email);
      expect(customer.password).toBe(customerData.password);
    });
  });
});


test('Product belongs to a Category', async () => {
  const product = await Product.findOne();
  const category = await Category.findByPk(product.category_id);
  expect(product.Category).toBeDefined();
  expect(product.Category.name).toEqual(category.name);
});
describe('Brand model', () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true });
  });

  it('should create a new brand', async () => {
    const brand = await Brand.create({
      brand_name: 'Nike'
    });

    expect(brand.id).toBe(1);
    expect(brand.brand_name).toBe('Nike');
  });

  it('should not create a brand with missing required fields', async () => {
    try {
      const brand = await Brand.create({});
    } catch (error) {
      expect(error).toBeTruthy();
      expect(error.errors[0].message).toBe('Brand.brand_name cannot be null');
    }
  });
});

describe('Category model', () => {
  test('should have the expected properties', () => {
    const category = Category.build({
      category_name: 'Test Category',
    });
    expect(category.category_name).toEqual('Test Category');
  });
});


beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe('Customer model', () => {
  // Connect to the database before running any tests
  beforeAll(async () => {
    await sequelize.sync();
  });

  // Clear the database after each test
  afterEach(async () => {
    await Customer.destroy({ where: {} });
  });

  // Define a test for creating a new customer
  describe('create', () => {
    it('should create a new customer', async () => {
      // Define the customer data
      const customerData = {
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@example.com',
        password: 'password123'
      };

      // Create a new customer in the database
      const customer = await Customer.create(customerData);

      // Check if the customer was created with the expected data
      expect(customer.id).toBeDefined();
      expect(customer.first_name).toBe(customerData.first_name);
      expect(customer.last_name).toBe(customerData.last_name);
      expect(customer.email).toBe(customerData.email);
      expect(customer.password).toBe(customerData.password);
    });
  });
});


test('Product belongs to a Category', async () => {
  const product = await Product.findOne();
  const category = await Category.findByPk(product.category_id);
  expect(product.Category).toBeDefined();
  expect(product.Category.name).toEqual(category.name);
});
describe('Brand model', () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true });
  });

  it('should create a new brand', async () => {
    const brand = await Brand.create({
      brand_name: 'Nike'
    });

    expect(brand.id).toBe(1);
    expect(brand.brand_name).toBe('Nike');
  });

  it('should not create a brand with missing required fields', async () => {
    try {
      const brand = await Brand.create({});
    } catch (error) {
      expect(error).toBeTruthy();
      expect(error.errors[0].message).toBe('Brand.brand_name cannot be null');
    }
  });
});

describe('Category model', () => {
  test('should have the expected properties', () => {
    const category = Category.build({
      category_name: 'Test Category',
    });
    expect(category.category_name).toEqual('Test Category');
  });
});


beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe('Customer model', () => {
  // Connect to the database before running any tests
  beforeAll(async () => {
    await sequelize.sync();
  });

  // Clear the database after each test
  afterEach(async () => {
    await Customer.destroy({ where: {} });
  });

  // Define a test for creating a new customer
  describe('create', () => {
    it('should create a new customer', async () => {
      // Define the customer data
      const customerData = {
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@example.com',
        password: 'password123'
      };

      // Create a new customer in the database
      const customer = await Customer.create(customerData);

      // Check if the customer was created with the expected data
      expect(customer.id).toBeDefined();
      expect(customer.first_name).toBe(customerData.first_name);
      expect(customer.last_name).toBe(customerData.last_name);
      expect(customer.email).toBe(customerData.email);
      expect(customer.password).toBe(customerData.password);
    });
  });
});


test('Product belongs to a Category', async () => {
  const product = await Product.findOne();
  const category = await Category.findByPk(product.category_id);
  expect(product.Category).toBeDefined();
  expect(product.Category.name).toEqual(category.name);
});
describe('Brand model', () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true });
  });

  it('should create a new brand', async () => {
    const brand = await Brand.create({
      brand_name: 'Nike'
    });

    expect(brand.id).toBe(1);
    expect(brand.brand_name).toBe('Nike');
  });

  it('should not create a brand with missing required fields', async () => {
    try {
      const brand = await Brand.create({});
    } catch (error) {
      expect(error).toBeTruthy();
      expect(error.errors[0].message).toBe('Brand.brand_name cannot be null');
    }
  });
});

describe('Category model', () => {
  test('should have the expected properties', () => {
    const category = Category.build({
      category_name: 'Test Category',
    });
    expect(category.category_name).toEqual('Test Category');
  });
});


beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe('Customer model', () => {
  // Connect to the database before running any tests
  beforeAll(async () => {
    await sequelize.sync();
  });

  // Clear the database after each test
  afterEach(async () => {
    await Customer.destroy({ where: {} });
  });

  // Define a test for creating a new customer
  describe('create', () => {
    it('should create a new customer', async () => {
      // Define the customer data
      const customerData = {
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@example.com',
        password: 'password123'
      };

      // Create a new customer in the database
      const customer = await Customer.create(customerData);

      // Check if the customer was created with the expected data
      expect(customer.id).toBeDefined();
      expect(customer.first_name).toBe(customerData.first_name);
      expect(customer.last_name).toBe(customerData.last_name);
      expect(customer.email).toBe(customerData.email);
      expect(customer.password).toBe(customerData.password);
    });
  });
});


test('Product belongs to a Category', async () => {
  const product = await Product.findOne();
  const category = await Category.findByPk(product.category_id);
  expect(product.Category).toBeDefined();
  expect(product.Category.name).toEqual(category.name);
});
describe('Brand model', () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true });
  });

  it('should create a new brand', async () => {
    const brand = await Brand.create({
      brand_name: 'Nike'
    });

    expect(brand.id).toBe(1);
    expect(brand.brand_name).toBe('Nike');
  });

  it('should not create a brand with missing required fields', async () => {
    try {
      const brand = await Brand.create({});
    } catch (error) {
      expect(error).toBeTruthy();
      expect(error.errors[0].message).toBe('Brand.brand_name cannot be null');
    }
  });
});

describe('Category model', () => {
  test('should have the expected properties', () => {
    const category = Category.build({
      category_name: 'Test Category',
    });
    expect(category.category_name).toEqual('Test Category');
  });
});


beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe('Customer model', () => {
  // Connect to the database before running any tests
  beforeAll(async () => {
    await sequelize.sync();
  });

  // Clear the database after each test
  afterEach(async () => {
    await Customer.destroy({ where: {} });
  });

  // Define a test for creating a new customer
  describe('create', () => {
    it('should create a new customer', async () => {
      // Define the customer data
      const customerData = {
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@example.com',
        password: 'password123'
      };

      // Create a new customer in the database
      const customer = await Customer.create(customerData);

      // Check if the customer was created with the expected data
      expect(customer.id).toBeDefined();
      expect(customer.first_name).toBe(customerData.first_name);
      expect(customer.last_name).toBe(customerData.last_name);
      expect(customer.email).toBe(customerData.email);
      expect(customer.password).toBe(customerData.password);
    });
  });
});


test('Product belongs to a Category', async () => {
  const product = await Product.findOne();
  const category = await Category.findByPk(product.category_id);
  expect(product.Category).toBeDefined();
  expect(product.Category.name).toEqual(category.name);
});
describe('Brand model', () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true });
  });

  it('should create a new brand', async () => {
    const brand = await Brand.create({
      brand_name: 'Nike'
    });

    expect(brand.id).toBe(1);
    expect(brand.brand_name).toBe('Nike');
  });

  it('should not create a brand with missing required fields', async () => {
    try {
      const brand = await Brand.create({});
    } catch (error) {
      expect(error).toBeTruthy();
      expect(error.errors[0].message).toBe('Brand.brand_name cannot be null');
    }
  });
});

describe('Category model', () => {
  test('should have the expected properties', () => {
    const category = Category.build({
      category_name: 'Test Category',
    });
    expect(category.category_name).toEqual('Test Category');
  });
});


beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe('Customer model', () => {
  // Connect to the database before running any tests
  beforeAll(async () => {
    await sequelize.sync();
  });

  // Clear the database after each test
  afterEach(async () => {
    await Customer.destroy({ where: {} });
  });

  // Define a test for creating a new customer
  describe('create', () => {
    it('should create a new customer', async () => {
      // Define the customer data
      const customerData = {
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@example.com',
        password: 'password123'
      };

      // Create a new customer in the database
      const customer = await Customer.create(customerData);

      // Check if the customer was created with the expected data
      expect(customer.id).toBeDefined();
      expect(customer.first_name).toBe(customerData.first_name);
      expect(customer.last_name).toBe(customerData.last_name);
      expect(customer.email).toBe(customerData.email);
      expect(customer.password).toBe(customerData.password);
    });
  });
});


test('Product belongs to a Category', async () => {
  const product = await Product.findOne();
  const category = await Category.findByPk(product.category_id);
  expect(product.Category).toBeDefined();
  expect(product.Category.name).toEqual(category.name);
});
