'use strict'; 

exports.SERVER_URL = process.env.SERVER_URL || 'http://localhost:8080';
exports.API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api';
exports.DATABASE_URL = process.env.MONGODB_URI || 'mongodb://localhost/network';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/network-test';
exports.PORT = process.env.PORT || 8080;
exports.JWT_SECRET = process.env.JWT_SECRET;
exports.JWT_EXPIRY = process.env.JWT_EXPIRY;