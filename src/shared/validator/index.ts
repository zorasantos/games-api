import { Joi, Segments } from 'celebrate';

const createValidator = {
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    designer: Joi.string().required(),
    genre: Joi.string().required(),
    platform: Joi.string().required(),
    developer: Joi.string().required(),
    releaseData: Joi.string().required(),
    mode: Joi.string().required()
  })
};

export { createValidator };
