const express = require.requireActual('express');

export default () => {
    return {
        use: jest.fn(() => {

        }),
        Router: jest.fn(() => {
            return {
                get: jest.fn((path, callback) => {

                })
            };
        }),
        listen: jest.fn((port) => {

        }),
        json: jest.fn(() => {
            
        })
    };
}