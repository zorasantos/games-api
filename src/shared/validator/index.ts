import { Joi, Segments } from 'celebrate';

import { customMessages } from '../../utils/errors';

const createValidator = {
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required().messages(customMessages('name')),
    designer: Joi.string().required().messages(customMessages('designer')),
    genre: Joi.string().required().messages(customMessages('genre')),
    platform: Joi.string().required().messages(customMessages('platform')),
    developer: Joi.string().required().messages(customMessages('developer')),
    releaseData: Joi.string().required().messages(customMessages('releaseData')),
    mode: Joi.string().required().messages(customMessages('mode'))
  })
};

export { createValidator };
