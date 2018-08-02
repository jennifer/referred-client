'use strict';

require('dotenv').load();

const bodyParser = require('body-parser');
const cloudinary = require('cloudinary');
const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const nodeMetaInspector = require('node-metainspector');
const passport = require('passport');
const urlExists = require('url-exists');
const webshot = require('webshot');

const config = require('../config');
const router = express.Router();

const { Website } = require('./models');

const jwtAuth = passport.authenticate('jwt', { session: false });

// GET all websites
router.get('/:username', jwtAuth, (req, res) => {
  Website
    .find({username:req.params.username})
    .then(websites => {
      res.json(websites);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    });
});

// POST a new webiste
router.post('/', jwtAuth, (req, res) => {
  // Check for required fields
  const requiredFields = ['url'];
  for (let i = 0; i < requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`;
      console.error(message);
      return res.status(400).send(message);
    }
  };
  
  // Check that URL is valid
  urlExists(req.body.url, function(err, exists) {
    console.log(exists);
    let newWebsite;
    if (exists) {

      // Get URL title
      let client = new nodeMetaInspector(req.body.url, { timeout: 5000 });
      client.on('fetch', function() {
        req.body.title = client.title;
        console.log('DB title: ' + req.body.title);

        // Get screenshot, save to cloud, POST new website
        webshot(req.body.url, 'fullsize.png', function(err) {
          newWebsite = new Website(req.body);
          cloudinary.v2.uploader.upload('fullsize.png', {public_id: `${newWebsite._id}`},
            function(error, result){console.log(result)});

          newWebsite.save()
          .then(item => {
            res.status(201).json({
              code: 201,
              message: 'Adding website...',
              type: 'internal'
            });
          })
          .catch(err => {
            res.status(500).send('Unable to save to database')
          })
        });
        
      });

      client.on('error', function(err) {
        console.log(err);
        res.status(500).send('Unable to fetch URL title')
      });
      client.fetch();

      }
    else {
      return res.status(500).json({
        code: 500, 
        message: 'Invalid URL. Copy+paste URL for best results.', 
        type:'internal'
      })
    };
  });
});

// PUT edit existing tags 
router.put('/:id', jwtAuth, (req, res) => {
  if (!(req.params.id && req.body.id && req.params.id === req.body.id)) {
    res.status(400).json({
      error: 'Request path id and request body id values must match'
    });
  }

  const updated = {};
  const updateableFields = ['tags', 'notes'];
  updateableFields.forEach(field => {
    if (field in req.body) {
      updated[field] = req.body[field];
    }
  });

  Website
    .findByIdAndUpdate(req.params.id, { $set: updated }, { new: true })
    .then(updatedWebsite => res.status(204).end())
    .catch(err => res.status(500).json({ message: 'Something went wrong' }));
});


// DELETE a website
router.delete('/:id', jwtAuth, (req, res) => {
  Website
    .findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(204).json({ 
        message: 'Success'
      });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'Internal server error'
      });
    });
});

module.exports = { router };