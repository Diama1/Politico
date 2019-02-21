import Result from '../models/result';
import moment from 'moment';

const Vote = {
/*
* @param {Object} req
* @param {Object} res
* @param {Object} office Object
*/

  async result(req, res) {
    try {
      const result = await Result.viewResult(req.params.id);
      return res.status(200).send({
        status : 200,
        data : result.rows
      });
    } catch (error) {
      return res.status(500).send({
        status: 500,
        message: 'Error While updating',
      });
    }
  },
}

export default Vote;