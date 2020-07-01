export const createUser = async (args: CreateUserArgs = {}): Promise<IUser> => {
    let { email, tenant, password, ...restArgs } = args;

    const n = (global.__COUNTERS__.user += 1);

    if (!email) {
        email = `user${n}@example.com`;
    }

    if (!tenant) {
        tenant = await getOrCreate(TenantModel, createTenant);
    }

    return new UserModel({
        name: args.name || `Normal user ${n}`,
        password: password || '123456',
        email,
        tenant,
        ...restArgs,
    }).save();
};