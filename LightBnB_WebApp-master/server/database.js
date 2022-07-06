const properties = require('./json/properties.json');
const users = require('./json/users.json');
const { Pool } = require('pg');
/// Users

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'lightbnb'
});

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */

const getUserWithEmail = function(email) {
  let user;
  for (const userId in users) {
    user = users[userId];
    if (user.email.toLowerCase() === email.toLowerCase()) {
      break;
    } else {
      user = null;
    }
  }
  return Promise.resolve(user);
}
exports.getUserWithEmail = getUserWithEmail;

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function(id) {
  return Promise.resolve(users[id]);
}
exports.getUserWithId = getUserWithId;


/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser =  function(user) {
  const userId = Object.keys(users).length + 1;
  user.id = userId;
  users[userId] = user;
  return Promise.resolve(user);
}
exports.addUser = addUser;

/// Reservations

/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */
const getAllReservations = function(guest_id, limit = 10) {
  return getAllProperties(null, 2);
}
exports.getAllReservations = getAllReservations;

/// Properties

/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 */
const getAllProperties = function(options, limit = 10) {
  const limitedProperties = {};
  for (let i = 1; i <= limit; i++) {
    limitedProperties[i] = properties[i];
  }
  return Promise.resolve(limitedProperties);
}
exports.getAllProperties = getAllProperties;


/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function(property) {
  const QPs = [];
  const values = [];

  const propertyAttributes = [
    "owner_id",
    "title",
    "description",
    "thumbnail_photo_url",
    "cover_photo_url",
    "cost_per_night",
    "street",
    "city",
    "province",
    "post_code",
    "country",
    "parking_spaces",
    "number_of_bathrooms",
    "number_of_bedrooms"
  ];

  for (let atrribute of propertyAttributes) {
    if (property[atrribute]) {
      QPs.push(atrribute);
      values.push(`$${QPs.length}`);
    }
  }

  const QPsString = QPs.join();
  const valsString = values.join();

  const QVs = QPs.map((qParam) => property[qParam]);

  const qText = `
  INSERT INTO properties (${QPsString})
  VALUES (${valsString})
  RETURNING *;`;

  const query = {
    text: qText,
    values: QVs,
  };

  return pool
    .query(query)
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err);
    });
}


exports.addProperty = addProperty;