const User = require('../../../models/user')
const { itemNotFound } = require('../../../middleware/utils')

/**
 * Checks if verification id exists for user
 * @param {string} id - verification id
 */
const verificationExists = (id) => {
  return new Promise((resolve) => {
    User.findOne(
      {
        verification: id,
        verified: false
      },
      (err, user) => {
        itemNotFound(err, user, 'NOT_FOUND_OR_ALREADY_VERIFIED')
        resolve(user)
      }
    )
  })
}

module.exports = { verificationExists }
