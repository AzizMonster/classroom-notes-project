/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Lib dependencies
import Joi from 'joi';
import dotenv from 'dotenv';

// Constants
import { NodeEnvs } from '@constants/misc.constant';

/* -------------------------------------------------------------------------- */
/*                                   Config                                   */
/* -------------------------------------------------------------------------- */

dotenv.config();

/**
 * Env vars schema validation
 */
const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid(...Object.values(NodeEnvs))
    .required(),
  HOST: Joi.string().required(),
  PORT: Joi.number().integer().default(3000),
})
  .unknown()
  .required();

const { error } = envVarsSchema.validate(process.env);

if (error) throw new Error(`Env config validation error ${error.message}`);

/**
 * New env vars should be declared in : Schema + here.
 */
export default {
  NODE_ENV: process.env.NODE_ENV,
  HOST: process.env.HOST,
  PORT: process.env.PORT,
} as const;
