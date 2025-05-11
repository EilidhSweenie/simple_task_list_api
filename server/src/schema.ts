import "./types/Task.js"
import { builder } from './builder.js';

// Exports a GraphQL schema using the schema built in Pothos
export const schema = builder.toSchema();
