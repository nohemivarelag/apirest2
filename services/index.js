import { reject } from '../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/async';

'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config')

function createToken (user) {
    const payload = {
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix(),
    }

    return jwt.encode(payload, config.SECRET_TOKEN)
}

function decodeToken (token) {
    const decode = new Promise((resolve, reject) => {
        try {
            const playload = jwt. decode(token, config.SECRET_TOKEN)

            if (payload.exp <= moment().unix()){
                reject({
                    status: 401,
                    message: 'El token ha expirado'
                })
            }

            resolve(payload.sub)

        } catch (err) {
            reject({
                status: 500,
                message: 'Invalid Token'
            })
        }
    })

    return decoded
}

module.exports = {
    createToken,
    decodeToken
}