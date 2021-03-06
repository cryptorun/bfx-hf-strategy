'use strict'

const _isObject = require('lodash/isObject')
const getPosition = require('../data/get_position')

/**
 * Calls the provided async function if no position is open for the symbol
 *
 * @param {Object} state - strategy state
 * @param {string?} symbol - optional
 * @param {Method} func - async function to call if no position is open
 * @return {Promise} p
 */
module.exports = async (state = {}, symbol, func = async () => {}) => {
  const position = getPosition(state, symbol)

  if (!_isObject(position)) {
    return func()
  }
}
