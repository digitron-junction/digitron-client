export const NoProvider = (contextName: string) =>
    new Error(`Component depends on ${contextName}, but no provider available`);

export const NoAuthentication = new Error(
    'Component that depends on User Authentication, called without Authentication'
);
