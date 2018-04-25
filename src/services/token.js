import lscache from 'lscache'

// enable warnings
if (process.env.NODE_ENV !== 'production') {
  lscache.enableWarnings(true)
}

const tokenKey = 'starterTKN'
let tokenService = {}

// Set token
tokenService.set = token => lscache.set(tokenKey, { token })

// Get token
tokenService.get = () => lscache.get(tokenKey)

// Delete token
tokenService.delete = () => lscache.flush()

export default tokenService
