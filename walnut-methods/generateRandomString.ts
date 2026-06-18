import type { WalnutContext } from './walnut';

/** @walnut_method
 * name: Generate Random Alphanumeric String
 * description: Generate a random alphanumeric string of length ${length} and store in $[randomString]
 * actionType: custom_generate_random_string
 * context: shared
 * needsLocator: false
 * category: Data Processing
 */
export async function generateRandomString(ctx: WalnutContext) {
  // ctx.args[0] = length value (from ${length})
  // ctx.args[1] = "randomString" variable name (from $[randomString])
  const length = parseInt(ctx.args[0], 10);

  if (isNaN(length) || length <= 0) {
    throw new Error(`Invalid length: "${ctx.args[0]}". Must be a positive integer.`);
  }

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  ctx.log(`Generated random string of length ${length}: ${result}`);
  ctx.setVariable(ctx.args[1], result);
}
