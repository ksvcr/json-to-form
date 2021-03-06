import Joi from 'joi';

export const validateJson = <T extends object>(json: T) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    submitText: Joi.string(),
    cancelText: Joi.string(),
    hideSubmit: Joi.boolean(),
    hideCancel: Joi.boolean(),
    fields: Joi.array().items(
      Joi.object({
        label: Joi.string().required(),
        name: Joi.string().required(),
        id: Joi.string().required(),
        type: Joi.string().valid('number', 'text', 'textarea', 'checkbox', 'date', 'radio').required(),
        value: [Joi.string(), Joi.number(), Joi.boolean()],
        options: Joi.array().items(
          Joi.object({
            label: Joi.string().required(),
            value: [Joi.string(), Joi.number(), Joi.boolean()]
          })
        )
      })
    )
  });

  return schema.validate(json);
};
