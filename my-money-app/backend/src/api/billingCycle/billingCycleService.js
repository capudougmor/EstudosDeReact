const BillingCycle = require('./blillingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidatiors: true })
BillingCycle.route('get', (req, res, next) => {

  BillingCycle.find({}, (err, docs) => {
    if (!err) {
      res.json(docs)

    } else {
      res.status(500).json({ errors: [error] })

    }
  })
})

module.exports = BillingCycle