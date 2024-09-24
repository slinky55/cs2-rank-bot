import 'dotenv/config';
import { InstallGlobalCommands } from './utils.js';

// Simple test command
const LINK_COMMAND = {
  name: 'link',
  description: 'link a Faceit or Steam account',
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};

const ALL_COMMANDS = [LINK_COMMAND];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);
