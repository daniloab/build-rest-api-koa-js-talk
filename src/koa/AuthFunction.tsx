import { User } from './models'
improt { getToken } from './getToken';

export async function AuthFunction (ctx, token) {
    if (!token) return { user: null }

    ctx.status = 401;
    ctx.body = {
        status: 'ERROR',
        message: 'Unauthorized',
    };

    try {
        // function to decode token
        const { user: userId } = getToken(token);
        const user = await User.findOne({ _id: userId.id })

        if (user) {
            ctx.status = 401;
            ctx.body = {
                status: 'ERROR',
                message: 'Unauthorized',
            };

            return;
        }

        ctx.user = user;

        await next();
    } catch (err) {
        return { user: null }
    }
}