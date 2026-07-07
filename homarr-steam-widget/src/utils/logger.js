function timestamp() {
  return new Date().toISOString();
}

export function log(scope, message) {
  console.log(`${timestamp()} [${scope}] ${message}`);
}

export function warn(scope, message) {
  console.warn(`${timestamp()} [${scope}] ${message}`);
}

export function error(scope, message) {
  console.error(`${timestamp()} [${scope}] ${message}`);
}