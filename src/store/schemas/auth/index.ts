import Joi from '@hapi/joi';

export const signInSchema = Joi.object({
  emailAddress: Joi.string()
    .label('Email address')
    .required()
    .messages({
      'any.required': 'Please enter your email address.',
      'string.empty': 'Please enter your email address.'
    }),

  password: Joi.string()
    .label('Password')
    .required()
    .messages({
      'any.required': 'Please enter your password.',
      'string.empty': 'Please enter your password.'
    })
});

export const signUpSchema = Joi.object({
  emailAddress: Joi.string()
    .label('Email address')
    .required()
    .email({ tlds: { allow: false } })
    .messages({
      'any.required': 'Please enter an email address.',
      'string.empty': 'Please enter an email address.'
    }),

  name: Joi.string()
    .label('Name')
    .required()
    .max(40)
    .pattern(new RegExp('^[a-zA-Z-]{1,40}$'))
    .messages({
      'any.required': 'Please enter a name.',
      'string.empty': 'Please enter a name.',
      'string.max': 'Please enter a name up to 40 characters long.',
      'string.pattern.base': 'Please enter a name using letters and hypens (-).'
    }),

  password: Joi.string()
    .label('Password')
    .required()
    .min(6)
    .max(30)
    .pattern(new RegExp('^[^\\0]+$'))
    .messages({
      'any.required': 'Please enter a password.',
      'string.empty': 'Please enter a password.',
      'string.min': 'Please enter a password between 6-30 characters long.',
      'string.max': 'Please enter a password between 6-30 characters long.',
      'object.pattern.match': 'Please enter a valid password.'
    }),

  confirmPassword: Joi.string()
    .required()
    .valid(Joi.ref('password'))
    .messages({
      'any.required': 'Please confirm your password.',
      'string.empty': 'Please confirm your password.',
      'any.only': 'Passwords must match'
    })
}).with('password', 'confirmPassword');
