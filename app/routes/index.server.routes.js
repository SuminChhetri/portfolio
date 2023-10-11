//-Sumin Gharti Chhetri - 301313664 - 2023 oct 11 --
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', {
        title: 'HomePage',
        currentPage: 'home' 
    });
});

router.get('/about', (req, res, next) => {
    res.render('about', {
        title: 'About Sumin',
        currentPage: 'about'
    });
});

router.get('/projects', (req, res, next) => {
    res.render('projects', {
        title: 'Projects',
        currentPage: 'projects' 
    });
});

router.get('/services', (req, res, next) => {
    res.render('services', {
        title: 'Services',
        currentPage: 'services' 
    });
});

router.get('/contact', (req, res, next) => {
    res.render('contact', {
        title: 'Contact',
        currentPage: 'contact' 
    });
});

module.exports = router;