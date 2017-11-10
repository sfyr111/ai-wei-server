import * as JWT from 'jsonwebtoken'
import { JWT_SECRET} from "../config/cipher"
import { getUserById } from "../models/mongo/users"

export default function (options?: any): object {
  return function (req, res, next) {
    (async () => {
      const auth = req.get('Authorization')
      if (!auth || auth.length < 2) {
        next(new Error('No auth1!'))
        return
      }
      let authList = auth.split(' ')
      const token = authList[1]

      const obj: any = JWT.verify(token, JWT_SECRET)
      if (!obj || !obj._id || !obj.expire) throw new Error('No auth2!')
      if (Date.now() - obj.expire > 0) throw new Error('Token expired!')

      if (options.loadJWTUser) req.user = obj
      if (options.loadUser) req.user = await getUserById(obj._id)
    })()
      .then(r => {
        next()
      })
      .catch(e => {
        res.statusCode = 401
        next(e)
      })
  }
}
